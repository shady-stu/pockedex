import { Cache } from "../pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private cache = new Cache(5 * 60 * 1000);

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const url = pageURL || `${PokeAPI.baseURL}/location-area`;

    const cached = this.cache.get<ShallowLocations>(url);
    if (cached) {
      return cached;
    }

    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    this.cache.add(url, data);

    return data;
  }

  async fetchLocation(locationName: string): Promise<Location> {
    const url = `${PokeAPI.baseURL}/location/${locationName}`;

    const cached = this.cache.get<Location>(url);
    if (cached) {
      return cached;
    }

    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();

    this.cache.add(url, data);

    return data;
  }
  
  async fetchLocationArea(locationAreaName: string): Promise<LocationArea> {
    
  const url = `${PokeAPI.baseURL}/location-area/${locationAreaName}`;
  const cached = this.cache.get<LocationArea>(url);
  if (cached) {
    return cached;
  }
  const response = await fetch(url, {
    method: "GET",
  });

  const data = await response.json(); 
  this.cache.add(url, data);
  return data;
}
  async fetchPokemon(PokemonName: string): Promise<Pokemon> {
    const url=`${PokeAPI.baseURL}/pokemon/${PokemonName}`;
    const cached = this.cache.get<Pokemon>(url);
    if (cached) {
      return cached;
    }
    const response = await fetch(url, {
      method: "GET",
    });

    const data = await response.json();
    this.cache.add(url, data);
    return data;
}
}

export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: {
    name: string;
    url: string;
  }[];
};

export type Location = {
  id: number;
  name: string;
  region: {
    name: string;
    url: string;
  };
  names: {
    name: string;
  }[];
  game_indices: {
    game_index: number;
    generation: {
      name: string;
      url: string;
    };
  }[];
  areas: {
    name: string;
    url: string;
  }[];
};

export type LocationArea = {
  id: number;
  name: string;
 pokemon_encounters: {
    pokemon: {
      name: string;
    }}[];
}
export type Pokemon = {
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    type: {
      name: string;
    };
  }[];
};