import { useEffect, useState } from "react";
import axios from "axios";

// Define interface for Pokemon object
export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  description: string;
}

// Custom hook to fetch Pokemon data
export default function usePokemonData() {
  // State to store fetched Pokemon data
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  // State to store search value
  const [searchValue, setSearchValue] = useState("");

  console.log(searchValue);

  // Function to fetch initial Pokemon data
  const fetchData = async () => {
    try {
      const allPokemon: Pokemon[] = [];
      let nextUrl = "https://pokeapi.co/api/v2/pokemon";

      // Fetch all pages of data
      const response = await axios.get<{
        results: { name: string; url: string }[];
        next: string;
      }>(nextUrl);
      const pokemons = response.data.results;

      // Fetch details for each pokemon
      for (const pokemon of pokemons) {
        const detailsResponse = await axios.get<Pokemon>(pokemon.url);
        allPokemon.push(detailsResponse.data);
      }

      nextUrl = response.data.next;
      setPokemonData(allPokemon);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Function to fetch details for a single Pokemon
  const getSinglePokemon = async (pokemonName: string): Promise<Pokemon> => {
    try {
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log(response);
      setPokemonData([response.data]);

      return response.data;
    } catch (error) {
      console.error(`Error fetching data for Pokémon ${pokemonName}:`, error);
      throw error;
    }
  };

  // Debounce function to delay API calls for search4
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const debounce = (callback: (...args: any[]) => void, wait: number) => {
    let timeoutId: number | undefined = undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        callback(...args);
      }, wait);
    };
  };

  // Debounce the single Pokemon fetch function
  const handleDebouce = debounce(getSinglePokemon, 1000);

  // Function to handle search value changes
  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    if (value.length > 0) {
      // If search value is not empty, debounce the fetch
      handleDebouce(value);
    } else {
      // If search value is empty, fetch initial data
      fetchData();
    }
  };

  console.log(pokemonData);

  // Fetch initial data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Return state and search function for external use
  return { pokemonData, setSearchValue, handleSearchValue };
}
