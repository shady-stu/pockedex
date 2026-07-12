import {State} from "../state.js";
export async function commandInspect(state: State, ...args: string[]): Promise<void> {
  const pokeAPI = state.pokeAPI;
  const pokemonName = args[0];

  if (!pokemonName) {
    console.log("Please provide a Pokemon name to inspect.");
    return;
  }
 try{
   if(state.pokedex[pokemonName]){
     const pokemon = state.pokedex[pokemonName];
     console.log(`Inspecting ${pokemon.name}...`);
    console.log(`Name: ${pokemon.name}`);
  console.log(`Height: ${pokemon.height}`);
  console.log(`Weight: ${pokemon.weight}`);

  console.log("Stats:");
  for (const stat of pokemon.stats) {
    console.log(`  -${stat.stat.name}: ${stat.base_stat}`);
  }

  console.log("Types:");
  for (const type of pokemon.types) {
    console.log(`  - ${type.type.name}`);
  }
     return;
   }    else{console.log(`${pokemonName} is not in your pokedex. Please catch it first.`); return;}

  } catch (error) {
    console.error("Error inspecting Pokemon:", error);
  }
 }