import type { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 0);
}

export function startREPL(state: State): void {
  state.rl.setPrompt("Pokedex > ");
  state.rl.prompt();

  state.rl.on("line", async (line) => {
    const words = cleanInput(line);

    if (words.length === 0) {
      state.rl.prompt();
      return;
    }

    const commandName = words[0];

    const command = state.commands[commandName];

    if (!command) {
      console.log("Unknown command");
      state.rl.prompt();
      return;
    }

    const args = words.slice(1);

    try {
      await command.callback(state, ...args);
    } catch (error) {
      console.error(error);
    }

    state.rl.prompt();
  });
}