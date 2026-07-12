import type { CLICommand,} from "../state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { mapBack } from "./command_mapb.js";
import { explore } from "./command_explore.js";
import{commandCatch} from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
export async function getCommands(): Promise<Record<string, CLICommand>> {

  return {
    
    help: {
      name: "help",
      description: "Displays a help message",
       callback: async state =>  await commandHelp(state),
    },

    exit: {
      name: "exit",
      description: "Exit the Pokedex",
       callback: async state => await commandExit(state),
    },
    map: {
      name: "map",
      description: "Displays the map of the current location",
       callback: async state => await commandMap(state),
    },
    mapb: {
      name: "mapb",
      description: "Displays the map of the previous location",
       callback: async state => await mapBack(state),
    },
    explore:{
      name: "explore",
      description: "Explore the current location",
       callback: async (state,...args) => await explore(state,...args as string[]),
    },
    catch:{
      name:"catch",
      description:"Catch a pokemon",
       callback: async (state,...args) => await commandCatch(state,...args as string[]),
    },
    inspect:{
      name:"inspect",
      description:"Inspect a pokemon",
       callback: async (state,...args) => await commandInspect(state,...args as string[]),
    },
    pokedex:{
      name:"pokedex",
      description:"View your Pokedex",
       callback: async (state,...args) => await commandPokedex(state),
    }
    
  };
}