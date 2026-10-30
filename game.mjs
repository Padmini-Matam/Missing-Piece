// Pure game rules and content: no Cloudflare or browser APIs in this module.
export const packs = {
  internet: {
    title: 'How the Internet Works',
    facts: [
      'The internet is a global network made from many connected networks.',
      'DNS looks up the IP address associated with a domain name.',
      'An IP address identifies a device or network interface for routing.',
      'Internet data is commonly split into small packets.',
      'Routers forward packets between networks toward their destination.',
      'HTTPS encrypts data exchanged between a browser and a website.',
      'A browser sends an HTTP request when it needs a page or resource.',
      'A web server sends a response, such as HTML, back to a browser.',
      'An internet service provider connects a user to the wider internet.',
      'A cache keeps a copy of data so it can be retrieved more quickly.'
    ],
    questions: [
      { text: 'A browser needs to reach a site by its name. Which steps turn that name into traffic moving toward the correct network address?', choices: ['DNS looks up the IP address for the site, then routers forward packets toward that destination.', 'A router looks up the domain for the site, then DNS forwards packets across the destination network.', 'DNS chooses a route through the networks, then routers convert the site name into an IP address.', 'The web server finds the IP address for the site, then the browser routes packets across the internet.'], answer: 0, needs: [2, 5] },
      { text: 'A browser requests a secure page and receives its contents. Which pair describes the protection and the reply?', choices: ['HTTPS encrypts the exchange, and the web server returns a response such as HTML.', 'DNS provides the HTTPS encryption, and the web server returns a response such as HTML.', 'HTTPS encrypts the exchange, and the browser returns a response such as HTML.', 'The web server encrypts the exchange, and HTTPS returns a response such as HTML.'], answer: 0, needs: [6, 8] },
      { text: 'A large file travels across several networks. Which combination explains how it is divided and moved?', choices: ['The file is split into packets, and routers forward those packets toward the destination.', 'The file is split into packets, and DNS forwards those packets toward the destination.', 'The file stays as one stream, and routers forward that stream toward the destination.', 'The file is split into packets, and DNS forwards those packets to the web server.'], answer: 0, needs: [4, 5] },
      { text: 'A person types a website name and their device needs a routable destination. Which facts work together?', choices: ['DNS finds an IP address, which identifies the device or interface used for routing.', 'A router finds an IP address, which identifies the device or interface used for routing.', 'DNS finds an IP address, which identifies cached content rather than the device.', 'DNS finds an IP address, which identifies the domain name rather than the device.'], answer: 0, needs: [2, 3] },
      { text: 'A visitor opens a page they loaded recently. Which pair can reduce waiting while keeping the site connection protected?', choices: ['A cache can reuse stored data, while HTTPS encrypts the browser and site exchange.', 'A cache can reuse stored data, while HTTP encrypts the browser and site exchange.', 'A cache stores the site name instead of a copy of data, while HTTPS encrypts the exchange.', 'A cache can reuse stored data, while HTTPS chooses the packet route for the exchange.'], answer: 0, needs: [10, 6] },
      { text: 'A request leaves a home network and the requested page comes back. Which roles connect the user and provide the response?', choices: ['The internet provider connects the user outward, and the web server sends the page response.', 'The internet provider connects the user outward, and the browser sends the page response.', 'The web server connects the user outward, and the internet provider sends the page response.', 'DNS connects the user outward, and the web server sends the page response.'], answer: 0, needs: [9, 8] }
    ]
  },
  body: {
    title: 'The Human Body',
    facts: [
      'Cells are the basic living units that make up the body.',
      'Blood transports oxygen and nutrients to tissues and carries some wastes away.',
      'The heart pumps blood through blood vessels around the body.',
      'In the lungs, oxygen enters the blood and carbon dioxide leaves it.',
      'When the diaphragm contracts and moves down, the chest cavity expands for inhalation.',
      'The small intestine absorbs most digested nutrients into the bloodstream.',
      'The stomach churns food and uses acid and enzymes to begin digestion, especially of proteins.',
      'The kidneys filter blood and remove wastes and excess water as urine.',
      'Nerve cells transmit signals using electrical and chemical changes.',
      'The brain processes sensory information and coordinates many responses.'
    ],
    questions: [
      { text: 'During inhalation, what movement helps bring oxygen into the blood?', choices: ['The diaphragm moves down as the chest expands, allowing air into lungs where oxygen enters blood.', 'The diaphragm moves up as the chest volume falls, drawing air into lungs where oxygen enters blood.', 'The diaphragm moves down as the chest expands, allowing air into lungs where oxygen remains in the air spaces.', 'The diaphragm moves down as the chest expands, allowing air into lungs where oxygen leaves the blood.'], answer: 0, needs: [4, 5] },
      { text: 'After nutrients are absorbed from a meal, how can they reach body tissues?', choices: ['The small intestine absorbs nutrients, and blood carries them through vessels to tissues.', 'The stomach absorbs most nutrients, and blood carries them through vessels to tissues.', 'The small intestine absorbs nutrients, and the heart carries them through vessels to tissues.', 'The large intestine absorbs most nutrients, and blood carries them through vessels to tissues.'], answer: 0, needs: [6, 2] },
      { text: 'What links the heart pumping action with oxygen delivery to the body?', choices: ['The heart moves blood through vessels, and blood carries oxygen from the lungs to tissues.', 'The lungs move blood through vessels, and blood carries oxygen from the heart to body tissues.', 'The heart moves blood through vessels, and blood carries nutrients but not oxygen from lungs to tissues.', 'The heart moves blood through vessels, and blood carries carbon dioxide from the lungs to tissues.'], answer: 0, needs: [3, 2, 4] },
      { text: 'Which route describes how a waste gas made by the body can leave it?', choices: ['Blood carries carbon dioxide to the lungs, where it leaves the blood and is exhaled.', 'Blood carries carbon dioxide to the lungs, but oxygen reaches tissues through airways rather than blood.', 'Blood carries carbon dioxide to the lungs, where oxygen leaves the blood and is exhaled.', 'Blood carries oxygen to the lungs, where carbon dioxide leaves the blood and is exhaled.'], answer: 0, needs: [2, 4] },
      { text: 'Someone hears their name called and turns toward the voice. Which system processes the sound and coordinates the response?', choices: ['Nerve cells send signals, and the brain processes the sound and coordinates a response.', 'Nerve cells send signals, and the spinal cord processes the sound and coordinates the response.', 'Nerve cells send signals, and the brain processes sound while the spinal cord coordinates the turn.', 'Blood cells carry sound signals, and the brain processes the sound and coordinates a response.'], answer: 0, needs: [9, 10] },
      { text: 'After digestion, how does the body both take in useful nutrients and remove dissolved wastes?', choices: ['The small intestine absorbs nutrients into blood, while kidneys filter wastes from blood into urine.', 'The stomach absorbs most nutrients into blood, while kidneys filter wastes from blood into urine.', 'The small intestine absorbs nutrients into blood, while the bladder filters wastes into urine.', 'The small intestine absorbs nutrients into blood, while kidneys return wastes to the bloodstream.'], answer: 0, needs: [6, 8] }
    ]
  },
  money: {
    title: 'Money Basics',
    facts: [
      'Income is money received, such as pay from work or money from selling something.',
      'A budget is a plan for how income will be used for spending and saving.',
      'Fixed expenses are recurring costs that usually stay similar, such as a monthly subscription.',
      'Variable expenses change in amount, such as spending on groceries or electricity.',
      'Interest is the cost of borrowing money or the return earned for saving or lending it.',
      'Compound interest means interest can be earned on earlier interest as well as the original amount.',
      'A credit card is a way to borrow for purchases; carrying a balance can incur interest.',
      'An emergency fund is accessible savings set aside for unexpected costs.',
      'Inflation is a general rise in prices that reduces what a unit of money can buy.',
      'Diversification spreads investments across assets to reduce reliance on any single one.'
    ],
    questions: [
      { text: 'Someone plans monthly spending and wants to account for both rent and a changing grocery bill. Which approach fits?', choices: ['Use a budget to plan spending, listing rent as fixed and groceries as a variable expense.', 'Use a budget to plan spending, listing rent as variable and groceries as a fixed expense.', 'Use a budget to plan spending, listing both rent and groceries as fixed monthly expenses.', 'Use income as the plan for spending, listing rent as fixed and groceries as a variable expense.'], answer: 0, needs: [2, 3, 4] },
      { text: 'A saver keeps money in an account that compounds interest. What can happen to the balance over time?', choices: ['Compound interest can earn returns on both original savings and earlier interest.', 'Compound interest is a borrowing fee, not a return a saver can earn.', 'Compound interest earns returns only on original savings, not on interest already added.', 'Interest can earn returns on original savings, while added interest earns no return.'], answer: 0, needs: [5, 6] },
      { text: 'A person uses a credit card and does not pay the full balance. Which cost may follow?', choices: ['The unpaid borrowed balance may accrue interest, which is the cost of borrowing.', 'A credit card balance is savings, so the issuer pays interest to the cardholder.', 'The unpaid borrowed balance avoids interest as long as a minimum payment is made.', 'The card issuer pays the borrower interest on an unpaid balance, as if it were savings.'], answer: 0, needs: [7, 5] },
      { text: 'Why might someone keep accessible savings while also planning a monthly budget?', choices: ['A budget plans regular income use, while an emergency fund is reserved for unexpected costs.', 'An emergency fund plans regular income use, while a budget is reserved for unexpected costs.', 'A budget is accessible savings for unexpected costs, while an emergency fund plans income use.', 'A budget plans regular expenses, while an emergency fund is borrowed credit for emergencies.'], answer: 0, needs: [2, 8] },
      { text: 'Someone receives a fixed amount of income while prices broadly rise. Which statement combines what income is with inflation’s effect?', choices: ['Income is money received, and inflation can make that amount buy fewer goods or services.', 'Income is money borrowed, and inflation can make that amount buy fewer goods or services.', 'Income is money received, and inflation can make that amount buy more goods or services.', 'Income is money received, and inflation raises one price while purchasing power stays unchanged.'], answer: 0, needs: [9, 1] },
      { text: 'An investor wants to spread risk and distinguish that strategy from earnings for saving or lending. Which pairing is correct?', choices: ['Diversification spreads investments among assets; interest is a return earned for saving or lending.', 'Interest spreads investments among assets; diversification is a return earned for saving or lending.', 'Diversification spreads investments among assets; inflation is a return earned for saving or lending.', 'Compound interest spreads money across assets; interest is a return earned for saving or lending.'], answer: 0, needs: [10, 5] }
    ]
  }
};

// Author-authored contract: each listed required fact has at least one distractor it independently rules out.
// Choice indexes here refer to each pack's authored (pre-shuffle) order.
export const factEliminations = {
  internet: [
    { 2: [1, 2, 3], 5: [1, 2, 3] },
    { 6: [1, 3], 8: [2, 3] },
    { 4: [2], 5: [1, 3] },
    { 2: [1], 3: [1, 2, 3] },
    { 10: [2], 6: [1, 3] },
    { 9: [2, 3], 8: [1, 2] }
  ],
  body: [
    { 4: [2, 3], 5: [1] },
    { 6: [3], 2: [2] },
    { 3: [1], 2: [3], 4: [2] },
    { 2: [1], 4: [2, 3] },
    { 9: [3], 10: [1, 2] },
    { 6: [1], 8: [2, 3] }
  ],
  money: [
    { 2: [3], 3: [1], 4: [1, 2] },
    { 5: [1], 6: [2, 3] },
    { 7: [1, 2], 5: [1, 2, 3] },
    { 2: [1, 2], 8: [1, 2, 3] },
    { 9: [2, 3], 1: [1] },
    { 10: [1, 3], 5: [2] }
  ]
};
export const packIds = Object.keys(packs);
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
export const RECONNECT_GRACE_MS = 60_000;
export const SEAT_RETENTION_MS = 10 * 60_000;
export function makeRoomCode(randomBytes) { return Array.from(randomBytes(4), byte => alphabet[byte % alphabet.length]).join(''); }
export function makeId(randomBytes) { return Array.from(randomBytes(16), byte => byte.toString(16).padStart(2, '0')).join(''); }
function uniqueName(raw, players) { const base = String(raw || '').trim().slice(0, 22); if (!base) throw new Error('Please enter a display name.'); let name = base, suffix = 2; while (players.some(p => p.name.toLowerCase() === name.toLowerCase())) name = base + ' ' + suffix++; return name; }
function shuffle(items, random) { const result = [...items]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }
function appendChat(room, message) {
  room.chat ||= []; room.chatSeq = (room.chatSeq || 0) + 1;
  room.chat.push({ ...message, seq: room.chatSeq });
  if (room.chat.length > 50) room.chat.splice(0, room.chat.length - 50);
}
export function currentPack(room) { return room.packId === 'custom' && room.customPack ? room.customPack : packs[room.packId] || packs.internet; }
export function currentQuestion(room) { return currentPack(room).questions[room.roundIndex] || currentPack(room).questions[0]; }
export function dealCards(room, random = Math.random) {
  const pack = currentPack(room), question = currentQuestion(room);
  const activePlayers = room.players.filter(p => !p.away && (p.activeFromRound ?? 0) <= room.roundIndex);
  if (!activePlayers.length) return;
  const players = shuffle(activePlayers, random); players.forEach(p => { p.cards = []; });
  for (const p of room.players) if ((p.activeFromRound ?? 0) > room.roundIndex) p.cards = [];
  const required = shuffle(question.needs, random);
  required.forEach((id, i) => players[i % players.length].cards.push(id));
  for (const id of shuffle(pack.facts.map((_, i) => i + 1).filter(id => !required.includes(id)), random)) {
    const min = Math.min(...players.map(p => p.cards.length));
    const least = players.filter(p => p.cards.length === min);
    least[Math.floor(random() * least.length)].cards.push(id);
  }
  players.forEach(p => p.cards.sort((a, b) => a - b));
}
export function createRoom(code, name, idFactory, packId = 'internet', demo = false) {
  if (!packs[packId]) packId = 'internet';
  const p = { id: idFactory(), token: idFactory(), name: uniqueName(name, []), cards: [], activeFromRound: 0, disconnectedAt: null };
  const players = demo ? [p, { id: idFactory(), token: idFactory(), name: 'Milo (Bot)', isBot: true, cards: [] }, { id: idFactory(), token: idFactory(), name: 'Nia (Bot)', isBot: true, cards: [] }] : [p];
  return { room: { code, packId, demo, customPack: null, hostId: p.id, players, phase: 'lobby', roundIndex: 0, duration: 120, roundEndsAt: null, roundQuestion: null, picks: {}, score: 0, correctCount: 0, results: [], pieceCounts: {}, chat: [], chatSeq: 0, sharedFacts: {}, departedSeats: {} }, token: p.token };
}
export function joinRoom(room, name, idFactory, now = Date.now()) {
  if (room.players.length >= 8) throw new Error('This room is full (8 players).');
  if (room.demo || !['lobby', 'round', 'reveal', 'end'].includes(room.phase)) throw new Error('This game has started.');
  const activeFromRound = ['round', 'reveal'].includes(room.phase) ? room.roundIndex + 1 : 0;
  const p = { id: idFactory(), token: idFactory(), name: uniqueName(name, room.players), cards: [], activeFromRound, disconnectedAt: now, away: false, welcomeBack: false };
  room.players.push(p);
  if (!room.hostId) room.hostId = p.id;
  return p.token;
}
export function getPlayer(room, token) { return room.players.find(p => p.token === token); }
function resetGame(room) {
  room.phase = 'lobby'; room.roundIndex = 0; room.roundEndsAt = null; room.roundQuestion = null; room.picks = {}; room.paused = false; room.pausedRemainingMs = null; room.players.forEach(p => { p.activeFromRound = 0; });
  room.score = 0; room.correctCount = 0; room.results = []; room.pieceCounts = {}; room.fastestMs = null; room.roundResult = null; room.demoClueFacts = {}; room.sharedFacts = {};
}
function activeQuestion(room) { return room.roundQuestion || currentQuestion(room); }
function shuffledQuestion(question, random) {
  const choices = question.choices.map((text, originalIndex) => ({ text, originalIndex }));
  for (let i = choices.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [choices[i], choices[j]] = [choices[j], choices[i]];
  }
  return { ...question, choices: choices.map(choice => choice.text), choiceOrder: choices.map(choice => choice.originalIndex),
    answer: choices.findIndex(choice => choice.originalIndex === question.answer) };
}
function beginRound(room, now, random) {
  room.players.forEach(p => { if ((p.activeFromRound ?? 0) <= room.roundIndex) p.activeFromRound = room.roundIndex; });
  dealCards(room, random);
  room.roundQuestion = shuffledQuestion(currentQuestion(room), random);
  room.phase = 'round'; room.picks = {}; room.voteReveal = null; room.voteRevealUntil = null; room.finalVoteUnanimous = null; room.demoVoteAt = null;
  room.roundEndsAt = now + room.duration * 1000;
  appendChat(room, { type: 'round-divider', roundNumber: room.roundIndex + 1, createdAt: now });
  room.demoClueFacts ||= {}; room.demoClueFacts[room.roundIndex] = [];
  room.sharedFacts ||= {}; room.sharedFacts[room.roundIndex] = {};
}
function resolveRound(room, timedOut, now) {
  const q = activeQuestion(room), values = Object.values(room.picks);
  const unanimous = room.finalVoteUnanimous ?? (values.length === room.players.length && values.every(v => v === values[0]));
  const correct = !timedOut && unanimous && values[0] === q.answer;
  const remainingMs = Math.max(0, room.roundEndsAt - now);
  const elapsedMs = Math.max(0, room.duration * 1000 - remainingMs);
  const bonus = correct ? Math.floor(remainingMs / 1000) * 10 : 0;
  const points = correct ? 1000 + bonus : 0;
  if (correct) {
    room.score += points; room.correctCount++;
    const prev = Number.isFinite(room.fastestMs) ? room.fastestMs : Infinity;
    room.fastestMs = Math.min(prev, elapsedMs);
  }
  const holders = q.needs.map(id => ({ id, who: room.players.find(p => p.cards.includes(id))?.id || null }));
  for (const holder of holders) if (holder.who) room.pieceCounts[holder.who] = (room.pieceCounts[holder.who] || 0) + 1;
  room.results.push({ questionIndex: room.roundIndex, correct, timedOut, points, bonus, elapsedMs, holders });
  room.roundResult = { correct, timedOut, points, bonus };
  room.phase = 'reveal';
}
export function expireRound(room, now = Date.now()) {
  if (room.phase === 'round' && !room.paused && room.roundEndsAt <= now) { room.voteReveal = null; room.demoVoteAt = null; resolveRound(room, true, now); return true; }
  return false;
}
function connectedPlayers(room, connectedIds) {
  const active = room.players.filter(p => (p.activeFromRound ?? 0) <= room.roundIndex);
  const liveHumans = active.filter(p => !p.isBot && (!connectedIds || connectedIds.has(p.id)));
  return active.filter(p => p.isBot ? liveHumans.length > 0 : (!connectedIds || connectedIds.has(p.id)));
}
function finishVote(room, voters, now) {
  const votes = voters.map(p => ({ id: p.id, name: p.name, pick: room.picks[p.id] }));
  room.picks = Object.fromEntries(votes.map(v => [v.id, v.pick]));
  room.voteReveal = votes;
  room.finalVoteUnanimous = votes.every(v => v.pick === votes[0]?.pick);
  if (room.finalVoteUnanimous) resolveRound(room, false, now);
  else { room.picks = {}; room.voteRevealUntil = now + 2200; }
}
export function completeVoteIfReady(room, connectedIds, now = Date.now()) {
  if (!room || room.phase !== 'round' || room.paused || (room.voteRevealUntil && room.voteRevealUntil > now)) return false;
  const voters = connectedPlayers(room, connectedIds);
  if (voters.length < 2 || !voters.every(p => Object.hasOwn(room.picks, p.id))) return false;
  finishVote(room, voters, now);
  return true;
}
export function applyDemoBotVotes(room, now = Date.now(), connectedIds = null) {
  if (!room.demo || room.phase !== 'round' || !Object.keys(room.picks).some(id => room.players.find(p => p.id === id && !p.isBot))) return;
  const connected = connectedIds || new Set(room.players.map(p => p.id));
  for (const bot of room.players.filter(p => p.isBot)) {
    if (room.phase !== 'round' || room.voteRevealUntil) break;
    applyAction(room, bot, { action: 'pick', choice: room.roundQuestion.answer }, now, Math.random, connected);
  }
}
export function resumeVote(room, now = Date.now()) {
  if (room.phase !== 'round' || !room.voteRevealUntil || room.voteRevealUntil > now) return false;
  if (room.demo && room.voteReveal?.length) {
    const wrong = room.voteReveal.find(v => v.pick !== room.roundQuestion.answer);
    const original = room.roundQuestion.choiceOrder?.[wrong?.pick];
    const rules = factEliminations[room.packId]?.[room.roundIndex] || {};
    const used = new Set(room.demoClueFacts?.[room.roundIndex] || []);
    for (const bot of room.players.filter(p => p.isBot)) {
      const id = bot.cards.find(factId => !used.has(factId) && (rules[factId] || []).includes(original));
      if (id) {
        room.demoClueFacts ||= {}; room.demoClueFacts[room.roundIndex] ||= []; room.demoClueFacts[room.roundIndex].push(id);
        appendChat(room, { id: bot.id, name: bot.name, roundNumber: room.roundIndex + 1, text: 'My card says: ' + currentPack(room).facts[id - 1] + ' That rules out ' + String.fromCharCode(65 + wrong.pick) + '.' });
        break;
      }
    }
  }
  room.voteReveal = null; room.voteRevealUntil = null;
  return true;
}
export function applyAction(room, player, body, now = Date.now(), random = Math.random, connectedIds = null) {
  if (body.action === 'start') {
    if (player.id !== room.hostId) throw Object.assign(new Error('Only the host can start.'), { status: 403 });
    if (room.phase !== 'lobby') return;
    if (room.players.length < 2) throw Object.assign(new Error('At least 2 players needed.'), { status: 409 });
    const duration = Number(body.duration ?? room.duration);
    if (![60, 90, 120].includes(duration)) throw Object.assign(new Error('Choose a 60, 90, or 120 second timer.'), { status: 400 });
    room.duration = duration;
    if (body.packId === 'custom') { const pack = parseCustomPack(body.customPackText); room.customPack = pack; room.customPackText = body.customPackText; room.packId = 'custom'; }
    else if (body.packId && packs[body.packId]) { room.packId = body.packId; room.customPack = null; room.customPackText = ''; }
    beginRound(room, now, random);
  } else if (body.action === 'pick') {
    if (room.phase !== 'round' || room.paused) throw Object.assign(new Error(room.paused ? 'The round is paused while players reconnect.' : 'Round is not accepting answers.'), { status: 409 });
    if ((player.activeFromRound ?? 0) > room.roundIndex) throw Object.assign(new Error('Your cards arrive next round.'), { status: 409 });
    if (room.voteRevealUntil && room.voteRevealUntil > now) throw Object.assign(new Error('Review the vote, then choose again.'), { status: 409 });
    if (room.voteRevealUntil && room.voteRevealUntil <= now) { room.voteReveal = null; room.voteRevealUntil = null; }
    if (![0, 1, 2, 3].includes(body.choice)) throw Object.assign(new Error('Choose an answer.'), { status: 400 });
    room.picks[player.id] = body.choice;
    completeVoteIfReady(room, connectedIds, now);
  } else if (body.action === 'chat') {
    const text = String(body.text || '').trim().slice(0, 240);
    if (!text) throw Object.assign(new Error('Write a message first.'), { status: 400 });
    appendChat(room, { id: player.id, name: player.name, roundNumber: room.phase === 'round' ? room.roundIndex + 1 : null, text, createdAt: now });
  } else if (body.action === 'share') {
    if (room.phase !== 'round' || room.paused || (player.activeFromRound ?? 0) > room.roundIndex) throw Object.assign(new Error('Cards can only be shared during an active round.'), { status: 409 });
    const factId = Number(body.factId);
    if (!player.cards.includes(factId)) throw Object.assign(new Error('That is not one of your cards this round.'), { status: 400 });
    room.sharedFacts ||= {}; room.sharedFacts[room.roundIndex] ||= {};
    const shared = room.sharedFacts[room.roundIndex][player.id] ||= [];
    if (shared.includes(factId)) throw Object.assign(new Error('You already shared this card this round.'), { status: 409 });
    shared.push(factId);
    appendChat(room, { id: player.id, name: player.name, type: 'shared-card', roundNumber: room.roundIndex + 1, text: currentPack(room).facts[factId - 1], createdAt: now });
  } else if (body.action === 'remove-player') {
    if (player.id !== room.hostId) throw Object.assign(new Error('Only the host can remove a player.'), { status: 403 });
    if (body.playerId === player.id) throw Object.assign(new Error('The host cannot remove their own seat.'), { status: 400 });
    removePlayer(room, body.playerId, connectedIds, random, now);
  } else if (body.action === 'resume-vote') {
    resumeVote(room, now);
  } else if (body.action === 'next') {
    if (player.id !== room.hostId) throw Object.assign(new Error('Only the host can continue.'), { status: 403 });
    if (room.phase !== 'reveal') throw Object.assign(new Error('Round reveal is not ready.'), { status: 409 });
    if (room.roundIndex >= currentPack(room).questions.length - 1) room.phase = 'end';
    else { room.roundIndex++; beginRound(room, now, random); }
  } else if (body.action === 'play-again') {
    if (player.id !== room.hostId) throw Object.assign(new Error('Only the host can restart.'), { status: 403 });
    if (room.phase !== 'end') throw Object.assign(new Error('The game is not over.'), { status: 409 });
    resetGame(room); beginRound(room, now, random);
  } else if (body.action === 'new-pack') {
    if (player.id !== room.hostId) throw Object.assign(new Error('Only the host can select a new pack.'), { status: 403 });
    if (room.phase !== 'end') throw Object.assign(new Error('The game is not over.'), { status: 409 });
    resetGame(room);
  } else throw Object.assign(new Error('Unknown action.'), { status: 400 });
}
export function connectedPlayerCount(room, connectedIds) { return connectedPlayers(room, connectedIds).length; }
export function updateRoundPause(room, connectedIds, now = Date.now()) {
  if (!room || room.phase !== 'round') return false;
  const count = connectedPlayerCount(room, connectedIds);
  if (count < 2 && !room.paused) {
    room.paused = true; room.pausedRemainingMs = Math.max(0, (room.roundEndsAt || now) - now);
    room.pausedVoteRevealMs = room.voteRevealUntil ? Math.max(0, room.voteRevealUntil - now) : null;
    room.pausedDemoVoteMs = room.demoVoteAt ? Math.max(0, room.demoVoteAt - now) : null;
    room.roundEndsAt = null; room.voteRevealUntil = null; room.demoVoteAt = null; return true;
  }
  if (count >= 2 && room.paused) {
    room.paused = false; room.roundEndsAt = now + (room.pausedRemainingMs ?? room.duration * 1000);
    room.voteRevealUntil = room.pausedVoteRevealMs == null ? null : now + room.pausedVoteRevealMs;
    room.demoVoteAt = room.pausedDemoVoteMs == null ? null : now + room.pausedDemoVoteMs;
    room.pausedRemainingMs = room.pausedVoteRevealMs = room.pausedDemoVoteMs = null; return true;
  }
  return false;
}
export function removePlayer(room, playerId, connectedIds = null, random = Math.random, now = Date.now()) {
  const index = room.players.findIndex(p => p.id === playerId && !p.isBot);
  if (index < 0) return false;
  const [removed] = room.players.splice(index, 1);
  room.departedSeats ||= {}; room.departedSeats[removed.token] = { name: removed.name, removedAt: now, reason: 'removed' };
  delete room.picks[removed.id];
  if (room.hostId === removed.id) room.hostId = room.players.find(p => !p.isBot && (!connectedIds || connectedIds.has(p.id)))?.id || null;
  if (room.phase === 'round') dealCards(room, random);
  completeVoteIfReady(room, connectedIds, now);
  return true;
}
export function expireDisconnectedPlayers(room, now = Date.now(), connectedIds = new Set(), random = Math.random) {
  let changed = false;
  for (const player of [...room.players]) {
    if (player.isBot || connectedIds.has(player.id) || !player.disconnectedAt) continue;
    const elapsed = now - player.disconnectedAt;
    if (elapsed >= SEAT_RETENTION_MS) {
      const index = room.players.findIndex(p => p.id === player.id);
      if (index >= 0) {
        room.players.splice(index, 1); room.departedSeats ||= {};
        room.departedSeats[player.token] = { name: player.name, removedAt: now, reason: 'expired' };
        delete room.picks[player.id];
        if (room.hostId === player.id) room.hostId = room.players.find(p => !p.isBot && connectedIds.has(p.id))?.id || null;
        if (room.phase === 'round') dealCards(room, random);
        completeVoteIfReady(room, connectedIds, now);
        changed = true;
      }
    } else if (elapsed >= RECONNECT_GRACE_MS && !player.away) {
      player.away = true;
      player.activeFromRound = room.phase === 'lobby' ? room.roundIndex : room.roundIndex + 1;
      player.cards = [];
      delete room.picks[player.id];
      if (room.hostId === player.id) room.hostId = room.players.find(p => p.id !== player.id && !p.isBot && connectedIds.has(p.id))?.id || room.hostId;
      if (room.phase === 'round') dealCards(room, random);
      completeVoteIfReady(room, connectedIds, now);
      changed = true;
    }
  }
  return changed;
}
export function restorePlayer(room, token) {
  const player = getPlayer(room, token);
  if (!player) return null;
  const welcomeBack = !!player.away;
  if (welcomeBack) {
    player.activeFromRound = room.phase === 'lobby' ? room.roundIndex : room.roundIndex + 1;
    player.cards = [];
    delete room.picks[player.id];
    const host = room.players.find(p => p.id === room.hostId);
    if (host?.away && host.id !== player.id) room.hostId = player.id;
  }
  player.disconnectedAt = null; player.away = false; player.welcomeBack = welcomeBack;
  return { player, welcomeBack };
}
function mvpFor(room) {
  const counts = {};
  for (const result of (room.results || []).filter(r => r.correct)) {
    for (const id of new Set(result.holders.map(h => h.who).filter(Boolean))) counts[id] = (counts[id] || 0) + 1;
  }
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (!entries.length) return null;
  const player = room.players.find(p => p.id === entries[0][0]);
  return player ? { id: player.id, name: player.name, count: entries[0][1] } : null;
}
export function snapshot(room, token, connectedIds = null) {
  const me = getPlayer(room, token); if (!me) throw new Error('Player seat not found.');
  const pack = currentPack(room), question = activeQuestion(room);
  const results = room.results || [];
  const fastest = Number.isFinite(room.fastestMs) ? { elapsedMs: room.fastestMs, round: results.findIndex(r => r.correct && r.elapsedMs === room.fastestMs) + 1 } : null;
  return {
    code: room.code, phase: room.phase, packTitle: pack.title, packId: room.packId,
    me: me.id, isHost: me.id === room.hostId, count: room.players.length,
    players: room.players.map(p => ({ id: p.id, name: p.name, host: p.id === room.hostId, isBot: !!p.isBot, reconnecting: !!p.disconnectedAt && !p.away, away: !!p.away, reconnectingUntil: p.disconnectedAt ? p.disconnectedAt + (p.away ? SEAT_RETENTION_MS : RECONNECT_GRACE_MS) : null, pending: (p.activeFromRound ?? 0) > room.roundIndex, pick: room.voteReveal ? (room.voteReveal.find(v => v.id === p.id)?.pick ?? null) : null })),
    welcomeBack: !!me.welcomeBack,
    cards: (me.activeFromRound ?? 0) > room.roundIndex ? [] : me.cards.map(id => ({ id, text: pack.facts[id - 1] })),
    sharedCardIds: room.sharedFacts?.[room.roundIndex]?.[me.id] || [],
    meActive: (me.activeFromRound ?? 0) <= room.roundIndex, paused: !!room.paused,
    question: room.phase === 'lobby' ? null : (room.phase === 'reveal' || room.phase === 'end' ? question : { text: question.text, choices: question.choices }),
    counts: [0, 1, 2, 3].map(i => room.voteReveal ? room.voteReveal.filter(v => v.pick === i).length : 0),
    votedCount: room.voteReveal ? room.voteReveal.length : connectedPlayers(room, connectedIds).filter(p => Object.hasOwn(room.picks, p.id)).length,
    connectedCount: connectedIds ? connectedPlayers(room, connectedIds).length : room.players.length, voteReveal: room.voteReveal || null, voteRevealUntil: room.voteRevealUntil || null, demo: !!room.demo, chat: (room.chat || []).slice(-50),
    reveal: room.phase === 'reveal' ? question.needs.map(id => { const holder = room.players.find(p => p.cards.includes(id)); const name = holder?.isBot ? holder.name.replace(/\s*\(Bot\)$/i, '') : holder?.name; return { id, text: pack.facts[id - 1], who: room.demo && holder?.id === me.id ? 'you' : name || 'No one', whoId: holder?.id || null }; }) : null,
    roundIndex: room.roundIndex, roundNumber: room.roundIndex + 1, totalRounds: pack.questions.length, serverNow: Date.now(),
    duration: room.duration, roundEndsAt: room.paused ? null : room.roundEndsAt, score: room.score,
    correctCount: room.correctCount, roundResult: room.roundResult || null, fastestRound: fastest,
    mvp: mvpFor(room), roundOutcomes: results.map(result => !!result.correct), customPackText: me.id === room.hostId && room.phase === 'lobby' ? (room.customPackText || '') : null
  };
}
export function validatePack(pack, packId = 'custom') {
  if (!pack || typeof pack.title !== 'string' || !Array.isArray(pack.facts) || !Array.isArray(pack.questions)) throw new Error('Pack must include a title, facts, and questions.');
  if (!pack.title.trim()) throw new Error('Add a title after TOPIC:.');
  if (pack.facts.length < 6 || pack.facts.length > 12) throw new Error('A custom pack needs 6 to 12 facts.');
  if (pack.questions.length < 3 || pack.questions.length > 8) throw new Error('A custom pack needs 3 to 8 questions.');
  if (pack.facts.some(fact => typeof fact !== 'string' || !fact.trim())) throw new Error('Every fact needs text.');
  for (const [index, q] of pack.questions.entries()) {
    const qn = index + 1;
    if (typeof q.text !== 'string' || !q.text.trim()) throw new Error('Question ' + qn + ' needs question text.');
    if (q.choices?.length !== 4 || q.choices.some(choice => typeof choice !== 'string' || !choice.trim()) || ![0, 1, 2, 3].includes(q.answer)) throw new Error('Question ' + qn + ' needs four non-empty choices (A-D) and one answer from A to D.');
    const lengths = q.choices.map(choice => choice.length);
    if (Math.max(...lengths) - Math.min(...lengths) > 40) throw new Error('Question ' + qn + ' choices should be similar in length. Shorten or expand one choice.');
    if (!Array.isArray(q.needs) || q.needs.length < 2 || q.needs.length > 3) throw new Error('Question ' + qn + ' needs 2 or 3 fact numbers.');
    for (const id of q.needs) {
      if (!Number.isInteger(id) || id < 1) throw new Error('Question ' + qn + ' has an invalid fact number in NEEDS.');
      if (id > pack.facts.length) throw new Error('Question ' + qn + ' needs fact ' + id + ', but there are only ' + pack.facts.length + ' facts.');
    }
    if (new Set(q.needs).size !== q.needs.length) throw new Error('Question ' + qn + ' lists the same needed fact more than once.');
  }
  return { id: packId, title: pack.title, facts: pack.facts, questions: pack.questions };
}

export function parseCustomPack(source) {
  if (typeof source !== 'string' || !source.trim()) throw new Error('Paste your custom pack in the format shown below.');
  if (source.length > 30_000) throw new Error('This pack is too long. Please keep it under 30,000 characters.');
  const lines = source.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const topic = lines.find(line => /^TOPIC\s*:/i.test(line));
  if (!topic) throw new Error('Add a TOPIC: title line at the top of your pack.');
  const title = topic.replace(/^TOPIC\s*:/i, '').trim();
  if (!title) throw new Error('Add a title after TOPIC:.');
  const facts = [];
  const questions = [];
  for (const line of lines) {
    const fact = line.match(/^FACT\s+(\d+)\s*:\s*(.+)$/i);
    if (fact) {
      const number = Number(fact[1]);
      if (number !== facts.length + 1) throw new Error('Facts must be numbered in order. Expected FACT ' + (facts.length + 1) + '.');
      facts.push(fact[2].trim());
      continue;
    }
    if (/^Q\s*:/i.test(line)) {
      const parts = line.split('|').map(part => part.trim());
      if (parts.length !== 7) throw new Error('Question ' + (questions.length + 1) + ' must include the question, choices A-D, ANSWER, and NEEDS separated by |.');
      const text = parts[0].replace(/^Q\s*:/i, '').trim();
      const choices = [];
      for (let i = 0; i < 4; i++) {
        const choice = parts[i + 1].match(new RegExp('^' + 'ABCD'[i] + '\\)\\s*(.+)$', 'i'));
        if (!choice) throw new Error('Question ' + (questions.length + 1) + ' needs choice ' + 'ABCD'[i] + ') text.');
        choices.push(choice[1].trim());
      }
      const answer = parts[5].match(/^ANSWER\s*:\s*([A-D])\s*$/i);
      if (!answer) throw new Error('Question ' + (questions.length + 1) + ' needs ANSWER: A, B, C, or D.');
      const needed = parts[6].match(/^NEEDS\s*:\s*(\d+(?:\s*,\s*\d+)*)\s*$/i);
      if (!needed) throw new Error('Question ' + (questions.length + 1) + ' needs a NEEDS: list such as 2,5.');
      questions.push({ text, choices, answer: 'ABCD'.indexOf(answer[1].toUpperCase()), needs: needed[1].split(',').map(value => Number(value.trim())) });
    }
  }
  if (facts.length < 6 || facts.length > 12) throw new Error('A custom pack needs 6 to 12 facts; this pack has ' + facts.length + '.');
  if (questions.length < 3 || questions.length > 8) throw new Error('A custom pack needs 3 to 8 questions; this pack has ' + questions.length + '.');
  return validatePack({ title, facts, questions });
}





