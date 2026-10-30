export const puzzlePiecePath = 'M18 18H36V14C36 4 64 4 64 14V18H82V36H86C96 36 96 64 86 64H82V82H64V74C64 64 36 64 36 74V82H18V64H26C36 64 36 36 26 36H18Z';

export function roomTokenKey(code) {
  return 'mp:' + String(code).toUpperCase();
}

export function contributorHeadline(reveal) {
  const names = [...new Set((reveal || []).map(fact => String(fact.who || '').trim()).filter(Boolean))];
  const youIndex = names.findIndex(name => name.toLowerCase() === 'you');
  if (youIndex >= 0 && names.length > 1) names.push(names.splice(youIndex, 1)[0]);
  if (names.length === 0) return 'Your team found the pieces.';
  if (names.length === 1 && names[0].toLowerCase() === 'you') return 'You had the pieces';
  if (names.length === 1) return names[0] + ' had the pieces';
  if (names.length === 2) return names[0] + ' and ' + names[1] + ' had the pieces';
  return names.slice(0, -1).join(', ') + ', and ' + names[names.length - 1] + ' had the pieces';
}

export function chatEntries(messages = []) {
  const roundsWithMessages = new Set(messages.filter(message => message.type !== 'round-divider' && Number.isInteger(message.roundNumber)).map(message => message.roundNumber));
  return messages.filter(message => message.type !== 'round-divider' || roundsWithMessages.has(message.roundNumber));
}

export function validateSnapshot(s) {
  if (!s || !['lobby', 'round', 'reveal', 'end'].includes(s.phase)) throw new Error('Unknown room phase');
  for (const key of ['code', 'packTitle', 'packId', 'me']) if (typeof s[key] !== 'string') throw new Error('Missing ' + key);
  if (typeof s.isHost !== 'boolean' || typeof s.demo !== 'boolean' || typeof s.welcomeBack !== 'boolean' || !Number.isInteger(s.roundNumber) || !Number.isInteger(s.totalRounds) || s.totalRounds < 3 || s.totalRounds > 8 || !Number.isInteger(s.duration) || !Number.isFinite(s.serverNow) || !Number.isFinite(s.score) || !Number.isInteger(s.correctCount) || !Number.isInteger(s.count) || !Number.isInteger(s.votedCount) || !Number.isInteger(s.connectedCount) || s.connectedCount < 0 || s.votedCount < 0 || (!s.voteReveal && s.votedCount > s.connectedCount) || !Array.isArray(s.chat) || !Array.isArray(s.players) || s.players.length !== s.count || !Array.isArray(s.cards) || !Array.isArray(s.sharedCardIds) || s.sharedCardIds.some(id => !Number.isInteger(id) || id < 1) || !Array.isArray(s.counts) || s.counts.length !== 4 || s.counts.some(value => !Number.isInteger(value) || value < 0) || !Array.isArray(s.roundOutcomes) || s.roundOutcomes.length > s.totalRounds || s.roundOutcomes.some(value => typeof value !== 'boolean') || !(s.customPackText === null || typeof s.customPackText === 'string')) throw new Error('Room state is incomplete');
  if (!s.players.some(player => player.id === s.me) || s.players.some(player => typeof player.id !== 'string' || typeof player.name !== 'string' || typeof player.host !== 'boolean' || typeof player.isBot !== 'boolean' || typeof player.reconnecting !== 'boolean' || typeof player.away !== 'boolean' || !(player.reconnectingUntil === null || Number.isFinite(player.reconnectingUntil)) || typeof player.pending !== 'boolean' || !(player.pick === null || [0, 1, 2, 3].includes(player.pick)))) throw new Error('Player state is incomplete');
  if (s.voteReveal !== null && (!Array.isArray(s.voteReveal) || s.voteReveal.some(v => typeof v.id !== 'string' || typeof v.name !== 'string' || ![0, 1, 2, 3].includes(v.pick)))) throw new Error('Vote reveal is incomplete');
  if (s.phase === 'round' && !s.voteReveal && s.players.some(player => player.pick !== null)) throw new Error('Active votes must stay hidden');
  if (s.cards.some(fact => !Number.isInteger(fact.id) || typeof fact.text !== 'string')) throw new Error('Fact cards are incomplete');
  if (s.phase === 'lobby') { if (s.question !== null) throw new Error('Lobby question state is invalid'); }
  else if (!s.question || typeof s.question.text !== 'string' || !Array.isArray(s.question.choices) || s.question.choices.length !== 4 || ((s.phase === 'reveal' || s.phase === 'end') && ![0, 1, 2, 3].includes(s.question.answer))) throw new Error('Question state is incomplete');
  if (s.phase === 'round' && (Object.hasOwn(s.question, 'answer') || Object.hasOwn(s.question, 'needs'))) throw new Error('Round answer must remain hidden');
  if (typeof s.paused !== 'boolean' || typeof s.meActive !== 'boolean') throw new Error('Player status is incomplete');
  if (s.phase === 'round' && ((!s.paused && !Number.isFinite(s.roundEndsAt)) || (s.paused && s.roundEndsAt !== null) || !s.question)) throw new Error('Timer state is incomplete');
  if (s.phase === 'reveal' && (!Array.isArray(s.reveal) || s.reveal.some(fact => !Number.isInteger(fact.id) || typeof fact.text !== 'string' || typeof fact.who !== 'string' || !(fact.whoId === null || typeof fact.whoId === 'string')))) throw new Error('Reveal state is incomplete');
  return true;
}
