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
- Cache API responses with expiration and background cleanup

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
npm test
```

## Engineering Concepts

- Type-safe modeling of external JSON responses
- Async API calls and error handling
- Command pattern and separation of concerns
- Generic cache design with automatic expiration
- Reduced network traffic through cache hits
- Unit testing with Vitest

## Future Improvements

- Persistent storage for caught Pokémon
- Richer terminal formatting and search
- Battle mechanics
- Broader test coverage

## Author

**Shady Sawalha** — Computer Science student interested in backend development and software engineering.
