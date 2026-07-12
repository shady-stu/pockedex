import { State } from "../state.js";
export async function mapBack(state:State): Promise<void> {
 const pokeAPI= state.pokeAPI;
   if (!state.previousLocationsURL) {
      console.log("you're on the first page");
      return;
    }
   try{
    const locations = await pokeAPI.fetchLocations(state.previousLocationsURL);
        for (const location of locations.results) {
          console.log(`- ${location.name}`);
        }
        state.nextLocationsURL = locations.next;
        state.previousLocationsURL = locations.previous;
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
}
