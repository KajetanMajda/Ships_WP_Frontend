# Ships WP — Frontend

Frontend for a real-time multiplayer Battleships game, built with Next.js and TypeScript. Communicates with a local Go backend which proxies requests to the PJATK game server.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Features

- Drag & drop ship placement on a 10×10 board
- Random ship placement
- Play vs WP Bot or challenge a real player from the lobby
- Live game board — polls game state, board data, and shot results every second
- Hit / miss / sunk tracking with visual feedback
- Timer with color-coded urgency (green → yellow → red)
- Surrender button to abandon a game mid-match
- Statistics page with global player rankings

## Project Structure

```
app/
  page.tsx              # Root redirect
  home/page.tsx         # Ship placement & lobby
  fight/page.tsx        # Active game view
  statistic/page.tsx    # Player stats/rankings
components/
  gameBoardAndDeployingShips/   # Board setup + lobby UI
  fight/                        # Live game logic & boards
  gameBoardEmpty/               # Empty board component
  LoadingSpinner/               # Loading indicator
```

## Getting Started

Make sure the Go backend is running on port `8080` before starting the frontend.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Play

1. Go to **Home** — enter your nick and description
2. Place all ships on the board (drag & drop) or click **Losuj ustawienie** for a random layout
3. Choose an opponent:
   - **Bot** — play against WP_Bot immediately
   - **Oczekuj na wyzwanie** — wait in the lobby for another player
   - Click a player's name from the lobby list to challenge them directly
4. The game board updates in real time — click a cell on the enemy board to fire
5. After the game ends you are redirected back to the lobby automatically
