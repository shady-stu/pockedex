import { State } from "../state.js";

export async function commandCatch(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokeAPI = state.pokeAPI;
  const pokemonName = args[0];

  if (!pokemonName) {
    console.log("Please provide a Pokemon name to catch.");
    return;
  }

  try {
    const pokemon = await pokeAPI.fetchPokemon(pokemonName);

    console.log(`Throwing a Pokeball at ${pokemon.name}...`);

    // Higher base experience = harder to catch
    const catchChance = 1 / (pokemon.base_experience + 1);

    const roll = Math.random();

    if (roll < catchChance * 100) {
      state.pokedex[pokemon.name] = pokemon;
      console.log(`${pokemon.name} was caught!`);
      console.log("you can now inspect it using the 'inspect' command.");
    } else {
      console.log(`${pokemon.name} escaped!`);
    }
  } catch (error) {
    console.error("Error catching Pokemon:", error);
  }
}