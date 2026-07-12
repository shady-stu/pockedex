import { startREPL } from "./repl.js";
import { initState } from "./state.js";

const state =  await initState();

startREPL(state);