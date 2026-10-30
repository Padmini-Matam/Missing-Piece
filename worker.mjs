import { applyAction, applyDemoBotVotes, completeVoteIfReady, connectedPlayerCount, createRoom, expireDisconnectedPlayers, expireRound, getPlayer, joinRoom, makeId, makeRoomCode, resumeVote, restorePlayer, snapshot, updateRoundPause, RECONNECT_GRACE_MS, SEAT_RETENTION_MS } from './game.mjs';

function bytes(length) { const value = new Uint8Array(length); crypto.getRandomValues(value); return value; }
const idFactory = () => makeId(bytes);
function json(value, status = 200) { return Response.json(value, { status, headers: { 'cache-control': 'no-store' } }); }
async function bodyJson(request) { try { return await request.json(); } catch { return {}; } }

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/api/rooms' && request.method === 'POST') {
      const body = await bodyJson(request);
      for (let attempt = 0; attempt < 5; attempt++) {
        const code = makeRoomCode(bytes);
        const stub = env.ROOMS.get(env.ROOMS.idFromName(code));
        const response = await stub.fetch('https://room.internal/create', { method: 'POST', body: JSON.stringify({ code, name: body.name, packId: body.packId, demo: !!body.demo }) });
        if (response.status !== 409) return response;
      }
      return json({ error: 'Could not reserve a room. Try again.' }, 503);
    }
    if (url.pathname === '/api/join' && request.method === 'POST') {
      const body = await bodyJson(request);
      const code = String(body.code || '').trim().toUpperCase();
      if (!/^[A-Z0-9]{4}$/.test(code)) return json({ error: 'Enter a valid four-character room code.' }, 400);
      return env.ROOMS.get(env.ROOMS.idFromName(code)).fetch('https://room.internal/join', { method: 'POST', body: JSON.stringify({ ...body, code }) });
    }
    const match = url.pathname.match(/^\/api\/rooms\/([A-Z0-9]{4})\/(state|events|action|exists)$/);
    if (match) return env.ROOMS.get(env.ROOMS.idFromName(match[1])).fetch(request);
    return env.ASSETS.fetch(request);
  }
};

export class Room {
  constructor(state, env) {
    this.state = state;
    this.env = env;
    this.room = null;
    this.ready = state.blockConcurrencyWhile(async () => {
      this.room = await state.storage.get('room') || null;
      if (this.room) {
        if (this.room.packId === undefined) this.room.packId = 'internet';
        const legacyRoom = this.room.roundIndex === undefined;
        if (legacyRoom) this.room.roundIndex = 0;
        if (this.room.duration === undefined) this.room.duration = 120;
        if (this.room.roundEndsAt === undefined) this.room.roundEndsAt = null;
        this.room.picks ||= {}; this.room.score ||= 0; this.room.correctCount ||= 0; this.room.chat ||= []; this.room.sharedFacts ||= {}; this.room.chatSeq ||= 0; this.room.departedSeats ||= {};
        for (const message of this.room.chat) { if (!Number.isInteger(message.seq)) message.seq = ++this.room.chatSeq; else this.room.chatSeq = Math.max(this.room.chatSeq, message.seq); }
        this.room.players.forEach(player => { if (player.activeFromRound === undefined) player.activeFromRound = 0; if (player.disconnectedAt === undefined && !player.isBot) player.disconnectedAt = Date.now(); player.away ||= false; });
        this.room.results ||= []; this.room.pieceCounts ||= {};
        if (!this.room.expiresAt) this.room.expiresAt = Date.now() + 2 * 60 * 60 * 1000;
        if (legacyRoom && this.room.phase !== 'lobby') {
          this.room.phase = 'lobby'; this.room.roundEndsAt = null; this.room.picks = {};
          this.room.players.forEach(player => { player.cards = []; });
        }
        await state.storage.put('room', this.room);
        await this.scheduleAlarm();
      }
    });
  }

  async fetch(request) {
    await this.ready;
    const url = new URL(request.url);
    try {
      if (this.room?.expiresAt <= Date.now()) { this.room = null; await this.state.storage.delete('room'); }
      else if (this.room && await this.pruneDisconnected()) { await this.syncRoundPause(); await this.scheduleAlarm(); await this.changed(); }
      if (url.pathname === '/create' && request.method === 'POST') {
        if (this.room) return json({ error: 'Room code collision.' }, 409);
        const payload = await bodyJson(request);
        const created = createRoom(payload.code, payload.name, idFactory, payload.packId, !!payload.demo);
        this.room = created.room;
        this.room.expiresAt = Date.now() + 2 * 60 * 60 * 1000;
        await this.save();
        await this.scheduleAlarm();
        return json({ code: this.room.code, token: created.token }, 201);
      }
      if (url.pathname === '/join' && request.method === 'POST') {
        const payload = await bodyJson(request);
        if (!this.room || this.room.code !== String(payload.code || '').toUpperCase()) return json({ error: 'Room not found. Check the code and try again.' }, 404);
        const token = joinRoom(this.room, payload.name, idFactory);
        await this.scheduleAlarm();
        await this.changed();
        return json({ code: this.room.code, token }, 201);
      }
      if (!this.room) return json({ error: 'Room expired or not found.' }, 404);
      const expired = await this.expireIfNeeded();
      if (url.pathname.endsWith('/exists') && request.method === 'GET') return json({ exists: true });

      if (url.pathname.endsWith('/events') && request.headers.get('Upgrade') === 'websocket') {
        const token = url.searchParams.get('token') || '';
        if (!getPlayer(this.room, token)) { const departed = this.room.departedSeats?.[token]; return json({ error: departed ? 'This seat is no longer available.' : 'Player seat not found.', ...(departed ? { seatExpired: true, name: departed.name } : {}) }, 404); }
        const pair = new WebSocketPair();
        const client = pair[0], socket = pair[1];
        this.state.acceptWebSocket(socket);
        socket.serializeAttachment({ token });
        const player = getPlayer(this.room, token); restorePlayer(this.room, token);
        await this.syncRoundPause(); await this.scheduleAlarm();
        const initial = snapshot(this.room, token, this.connectedPlayerIds()); player.welcomeBack = false;
        socket.send(JSON.stringify(initial));
        await this.changed();
        return new Response(null, { status: 101, webSocket: client });
      }
      if (url.pathname.endsWith('/state') && request.method === 'GET') {
        const token = url.searchParams.get('token') || '';
        try { return json(snapshot(this.room, token, this.connectedPlayerIds())); } catch (error) { const departed = this.room.departedSeats?.[token]; return json({ error: departed ? 'This seat is no longer available.' : error.message, ...(departed ? { seatExpired: true, name: departed.name } : {}) }, 404); }
      }
      if (url.pathname.endsWith('/action') && request.method === 'POST') {
        const payload = await bodyJson(request);
        const player = getPlayer(this.room, String(payload.token || ''));
        if (!player) return json({ error: 'Player seat not found.' }, 404);
        const connected = this.connectedPlayerIds(); connected.add(player.id); player.disconnectedAt = null;
        await this.syncRoundPause(connected);
        if (expired && payload.action === 'pick') return json({ ok: true, state: snapshot(this.room, payload.token, connected) });
        applyAction(this.room, player, payload, Date.now(), Math.random, connected);
        await this.syncRoundPause(connected);
        if (payload.action === 'pick' && this.room.demo && this.room.phase === 'round' && !player.isBot) this.room.demoVoteAt = Date.now() + 800;
        await this.scheduleAlarm();
        await this.changed();
        return json({ ok: true, state: snapshot(this.room, payload.token, connected) });
      }
      return json({ error: 'Not found' }, 404);
    } catch (error) {
      return json({ error: error.message || 'Something went wrong.' }, error.status || 400);
    }
  }

  connectedPlayerIds(excludeSocket = null) {
    const ids = new Set();
    for (const socket of this.state.getWebSockets()) {
      if (socket === excludeSocket) continue;
      try { const player = getPlayer(this.room, socket.deserializeAttachment()?.token); if (player) ids.add(player.id); } catch {}
    }
    return ids;
  }
  async pruneDisconnected() {
    return expireDisconnectedPlayers(this.room, Date.now(), this.connectedPlayerIds(), Math.random);
  }
  async syncRoundPause(connectedIds = this.connectedPlayerIds()) { updateRoundPause(this.room, connectedIds); }
  async handleSocketClose(socket) {
    if (!this.room) return;
    let token = ''; try { token = socket.deserializeAttachment()?.token || ''; } catch {}
    const player = getPlayer(this.room, token), connected = this.connectedPlayerIds(socket);
    if (player && !connected.has(player.id) && !player.isBot) player.disconnectedAt = Date.now();
    await this.syncRoundPause(connected);
    completeVoteIfReady(this.room, connected);
    await this.scheduleAlarm(); await this.changed();
  }
  async save() { await this.state.storage.put('room', this.room); }
  async scheduleAlarm() {
    if (!this.room) return;
    const deadlines = [this.room.expiresAt, ...this.room.players.filter(p => !p.isBot && p.disconnectedAt).map(p => p.disconnectedAt + (p.away ? SEAT_RETENTION_MS : RECONNECT_GRACE_MS))];
    if (this.room.phase === 'round' && !this.room.paused) deadlines.push(this.room.roundEndsAt, this.room.voteRevealUntil || Infinity, this.room.demoVoteAt || Infinity);
    await this.state.storage.setAlarm(Math.min(...deadlines));
  }
  async expireIfNeeded() {
    if (expireRound(this.room, Date.now())) { await this.scheduleAlarm(); await this.changed(); return true; }
    return false;
  }
  async changed() {
    await this.save();
    for (const socket of this.state.getWebSockets()) {
      try { const attachment = socket.deserializeAttachment(); socket.send(JSON.stringify(snapshot(this.room, attachment.token, this.connectedPlayerIds()))); }
      catch { try { socket.close(1011, 'Room update failed'); } catch {} }
    }
  }
  async webSocketMessage() {}
  async webSocketClose(socket) { await this.handleSocketClose(socket); }
  async webSocketError(socket) { await this.handleSocketClose(socket); }
  async alarm() {
    if (!this.room) return;
    if (this.room.expiresAt <= Date.now()) { this.room = null; await this.state.storage.delete('room'); return; }
    let changed = await this.pruneDisconnected();
    await this.syncRoundPause();
    if (expireRound(this.room, Date.now())) { this.room.demoVoteAt = null; changed = true; }
    else if (resumeVote(this.room, Date.now())) changed = true;
    else if (this.room.phase === 'round' && this.room.demoVoteAt && this.room.demoVoteAt <= Date.now()) { this.room.demoVoteAt = null; applyDemoBotVotes(this.room, Date.now(), this.connectedPlayerIds()); changed = true; }
    if (changed) await this.changed();
    await this.scheduleAlarm();
  }
}
