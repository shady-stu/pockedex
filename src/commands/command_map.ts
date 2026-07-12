import { State } from "../state.js";

export async function commandMap(state: State): Promise<void> {
 const pokeAPI= state.pokeAPI;
console.log("MAP COMMAND STARTED");
   try{
    const locations = await pokeAPI.fetchLocations(state.nextLocationsURL||undefined);
        for (const location of locations.results) {
          console.log(`- ${location.name}`);
        }
        state.nextLocationsURL = locations.next;
        state.previousLocationsURL = locations.previous;
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
   }
  
