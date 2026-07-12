import { State } from "../state.js";

export async function explore(
  state: State,
  ...args: string[]
): Promise<void> {
  const pokeAPI = state.pokeAPI;
  const locationName = args[0];

  if (!locationName) {
    console.log("Please provide a location name to explore.");
    return;
  }

  try {
    const locationDetails = await pokeAPI.fetchLocationArea(locationName);

    console.log(`Exploring ${locationName}...`);
    console.log("Found Pokemon:");

    for (const encounter of locationDetails.pokemon_encounters) {
      console.log(` - ${encounter.pokemon.name}`);
    }
  } catch (error) {
    console.error("Error fetching location details:", error);
  }
}