# 🧬 Pokedex CLI

A command-line Pokedex application built with **TypeScript** and **Node.js**.

This project allows users to explore the Pokémon world, discover available Pokémon in different areas, catch Pokémon, and manage their own personal Pokédex.

The project focuses on building a clean CLI architecture while practicing important backend concepts such as:

- API integration
- Data caching
- Type-safe development with TypeScript
- Command-based architecture
- State management
- Error handling
- Data modeling


## 📌 Features

### 🌎 Explore Locations

Browse available Pokémon locations using the PokeAPI.

Example:

```bash
Pokedex > map

Explore a specific area:

Pokedex > explore pastoria-city-area

Output:

Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
🎯 Catch Pokémon

Attempt to catch Pokémon and add them to your personal Pokédex.

Example:

Pokedex > catch pikachu

Output:

Throwing a Pokeball at pikachu...
pikachu was caught!

The catching system uses:

Pokémon base experience
Random probability calculation
Difficulty-based catching logic
🔎 Inspect Pokémon

View detailed information about Pokémon you have already caught.

Example:

Pokedex > inspect pikachu

Output:

Name: pikachu
Height: 4
Weight: 60

Stats:
  -hp: 35
  -attack: 55
  -defense: 40

Types:
  - electric
📖 View Your Pokédex

Keep track of all Pokémon you have successfully caught.

Example:

Pokedex > pokedex
🏗️ Architecture

The project follows a simple command-based architecture.

src
│
├── main.ts
│
├── repl.ts
│
├── state.ts
│
├── commands/
│   ├── map.ts
│   ├── explore.ts
│   ├── catch.ts
│   ├── inspect.ts
│   └── pokedex.ts
│
├── pokeapi.ts
│
└── pokecache.ts
Command Flow
User Input

    ↓

REPL Parser

    ↓

Command Registry

    ↓

Command Handler

    ↓

PokeAPI Service

    ↓

Cache Layer

    ↓

External API
⚡ Caching System

To improve performance, API responses are cached in memory.

Instead of requesting the same endpoint repeatedly:

First Request

CLI
 |
Fetch API
 |
Store Response
 |
Cache


Second Request

CLI
 |
Cache Hit
 |
Return Data Immediately

The cache includes:

Generic Type Support
Automatic expiration
Background cleanup loop

Example:

explore pastoria-city-area

(first request)
↓
Network request


explore pastoria-city-area

(second request)
↓
Cache response

The second request is significantly faster.

🛠️ Technologies
Languages
TypeScript
Runtime
Node.js
APIs
PokeAPI
Tools
npm
Git
Vitest
🚀 Installation

Clone the repository:

git clone <repository-url>

Navigate to project:

cd pokedex-cli

Install dependencies:

npm install
▶️ Running the Application

Start the CLI:

npm run dev

You should see:

Pokedex >
🧪 Testing

Run tests:

npm test
💡 Engineering Concepts Practiced

This project demonstrates practical experience with:

TypeScript
Interfaces and Types
Generics
Type-safe APIs
Utility types
Backend Concepts
API consumption
Response modeling
Caching strategies
Error handling
Separation of concerns
Software Design
Command pattern
Single responsibility principle
Layered architecture
Performance

Implemented:

In-memory cache
Cache expiration
Reduced unnecessary API requests
📚 Lessons Learned

While building this project, I learned how to:

Design a CLI application structure
Work with external REST APIs
Build reusable services
Handle asynchronous operations
Improve application performance using caching
Model complex JSON responses using TypeScript
🔮 Future Improvements

Possible improvements:

Persistent database storage
User accounts
Advanced Pokémon search
Battle system
Better CLI UI
Unit test coverage improvements
👨‍💻 Author

Shady Sawalha

Computer Science Student
Interested in Backend Development and Software Engineering