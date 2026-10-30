# Missing Piece: Nobody Has the Whole Answer

A real-time co-op study game for 2–8 players. Everyone joins from their own phone and gets **different fact cards for the same question**. Nobody can answer alone, so the team has to share what they know, vote in secret, and agree before time runs out.

**Play it:** https://missing-piece-game.padmini-m.workers.dev (no login, no install; you can also try it solo with two bot teammates)

![Missing Piece cover](docs/cover.png)

## How it plays

1. The host creates a room and shares a 4-letter code or invite link.
2. Each round, everyone sees the same question, but each phone shows a different set of fact cards.
3. Players share useful cards (one tap posts a card to the team chat) and talk it through.
4. Everyone votes in secret. Votes are revealed together; if they don't all match, the team compares cards and votes again.
5. The reveal shows the answer and who held each missing piece. After six rounds, the end screen shows the team's score as a row of puzzle pieces.

The design is based on the "jigsaw" method teachers use to get every student participating. Every question is written so that each needed card rules out at least one wrong answer, which means no single player can solve it alone.

## Features

- **Real-time multiplayer** over WebSockets, with the server as the single source of truth
- **Private cards:** the server only ever sends each player their own cards; answers stay hidden until the reveal
- **Secret voting** so players can't just copy the most confident person
- **One-tap card sharing** and a team chat with round dividers
- **Solo mode** with two bot teammates who share clues in chat
- **Custom packs:** paste your own facts and questions (or generate them from class notes with the built-in AI prompt), with clear validation errors
- **Three built-in packs:** How the Internet Works, The Human Body, Money Basics
- **Reliable on real phones:** automatic reconnect, a 60-second grace period that keeps your cards, a 10-minute seat hold, late joiners, and host hand-over if the host leaves
- **Shuffled answer choices** every round, a round timer, scoring with a time bonus, and Play Again

## Tech stack

- **Cloudflare Workers** for hosting and routing
- **Durable Objects** (one per room) with SQLite-backed storage for room state
- **WebSockets** for live updates
- **Vanilla JavaScript, HTML and CSS** on the front end, no framework
- **Node's built-in test runner** for the game-flow tests

The game rules live in `game.mjs`, separate from the networking in `worker.mjs`, so the logic can be tested on its own.

## Run it yourself

Requires Node.js 20 or newer.

```bash
npm install
npm test            # run the game-flow tests
npx wrangler dev    # local preview
npm run deploy      # publish to your own Cloudflare account
```

## How it was built

I built Missing Piece in four days with ChatGPT (Codex) for the **Handshake AI Skills Studio x OpenAI Multiplayer Game Challenge**. I wrote the requirements, reviewed and approved the plan, tested every milestone across phones and browsers, and directed each fix.

Playtesting with friends shaped the game. In the first game nobody shared cards and the team scored 2/6, so I added one-tap sharing and moved the chat right under the cards. When a friend took a phone call mid-game and was dropped, I made players reconnect automatically and rejoin at the next round. By the third playtest, the team was sharing cards, debating answers, and scoring 4/6.
