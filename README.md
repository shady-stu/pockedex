# Pokédex CLI

An interactive command-line Pokédex built with **TypeScript** and **Node.js**. Explore locations, discover Pokémon, catch them, and inspect your collection—all from a terminal REPL backed by the public PokéAPI.

## Why This Project Matters

This project applies backend fundamentals in a small, focused product: external API integration, asynchronous workflows, typed data models, command routing, in-memory caching, and automated testing.

## Features

- Browse PokéAPI location areas with forward and backward pagination
- Explore an area and list the Pokémon found there
- Catch Pokémon using probability influenced by base experience
- Inspect caught Pokémon, including stats and types
- Store the current collection during the CLI session
- Cache API responses in memory with a five-minute background cleanup interval

## Architecture

```text
User input
  → REPL parser
  → Command registry
  → Command handler
  → PokéAPI client
  → Expiring cache
```

The command-based structure separates terminal input, application state, API access, and caching so each part remains easy to understand and test.

## Tech Stack

| Area | Technology |
| --- | --- |
| Language | TypeScript |
| Runtime | Node.js |
| API | PokéAPI |
| Testing | Vitest |
| Tooling | npm, Git |

## Requirements

- Node.js `20.11.0` (the version recorded in `.nvmrc`)
- npm
- An internet connection for PokéAPI requests

## Getting Started

```bash
git clone https://github.com/shady-stu/pockedex.git
cd pockedex
npm install
npm run dev
```

You should then see the interactive prompt:

```text
Pokedex >
```

## Commands

| Command | Purpose |
| --- | --- |
| `help` | Show available commands |
| `map` | Display the next page of locations |
| `mapb` | Display the previous page |
| `explore <area>` | List Pokémon in a location |
| `catch <name>` | Attempt to catch a Pokémon |
| `inspect <name>` | Show details for a caught Pokémon |
| `pokedex` | List the current collection |
| `exit` | Close the application |

Example session:

```text
Pokedex > explore pastoria-city-area
Pokedex > catch pikachu
Pokedex > inspect pikachu
```

## Development

```bash
npm run build
npm start
```

## Testing

The current Vitest suite contains two focused unit tests:

- REPL input normalization and whitespace handling
- Basic cache insertion and retrieval

```bash
npm test
```

Broader command, expiry, pagination, and API-failure coverage remains a future improvement.

## Engineering Concepts

- Type-safe modeling of external JSON responses
- Async API calls with command-level error handling
- Command pattern and separation of concerns
- Reusable in-memory cache with periodic cleanup
- Reduced network traffic through cache hits
- Unit testing with Vitest

## Future Improvements

- Persistent storage for caught Pokémon
- Richer terminal formatting and search
- Battle mechanics

## Author

**Shady Sawalha** — Computer Science student interested in backend development and software engineering.

