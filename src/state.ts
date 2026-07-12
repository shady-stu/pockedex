import { createInterface, type Interface } from "node:readline";
import { getCommands } from "./commands/commands.js";
import{ PokeAPI, Pokemon } from "./api/Pokeapi.js";
export type CLICommand = {
  name: string;
  description: string;
   callback: (state: State,...args: string[]) => Promise<void>;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  pokeAPI: PokeAPI;
  nextLocationsURL:string | null;
  previousLocationsURL:string | null;
  args?: string[];
  pokedex: Record<string, Pokemon>;
};

export async function initState(): Promise<State> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const commands = await getCommands();
  const pokeAPI = new PokeAPI();
 
  return {
    rl,
    commands,
    pokeAPI,
    nextLocationsURL: null,
    previousLocationsURL: null,
    args: process.argv.slice(2),
    pokedex: {},
  };
}