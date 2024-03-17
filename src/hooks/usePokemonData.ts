import { useEffect, useState } from "react";
import axios from "axios";

// Define interface for Pokemon object
export interface Pokemon {
  id: number;
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

  console.log(searchValue); // Log the search value

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
        const description = await fetchPokemonDescription(
          detailsResponse.data.id
        );
        detailsResponse.data.description = description; // Assign description to Pokemon object
        allPokemon.push(detailsResponse.data);
      }

      nextUrl = response.data.next;
      setPokemonData(allPokemon);
    } catch (error) {
      console.error("Error fetching data:", error); // Log error if fetching data fails
    }
  };

  // Function to fetch details for a single Pokemon
  const getSinglePokemon = async (pokemonName: string): Promise<Pokemon> => {
    try {
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log(response); // Log the response from fetching single Pokemon
      const description = await fetchPokemonDescription(response.data.id);
      const updatedPokemon = { ...response.data, description }; // Update Pokemon with description
      setPokemonData([updatedPokemon]); // Update Pokemon data state with single Pokemon

      return updatedPokemon;
    } catch (error) {
      console.error(`Error fetching data for Pokémon ${pokemonName}:`, error); // Log error if fetching single Pokemon fails
      throw error;
    }
  };

  // Function to fetch the description for a Pokemon
  const fetchPokemonDescription = async (
    pokemonId: number
  ): Promise<string> => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
      );
      const flavorTextEntries = response.data.flavor_text_entries;
      // Find the English flavor text
      const englishFlavorTextEntry = flavorTextEntries.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (entry: any) => entry.language.name === "en"
      );
      // Extract the flavor text from the entry
      const description = englishFlavorTextEntry
        ? englishFlavorTextEntry.flavor_text
        : "";
      return description;
    } catch (error) {
      console.error(
        `Error fetching description for Pokémon ${pokemonId}:`,
        error
      ); // Log error if fetching description fails
      throw error;
    }
  };

  // Function to handle search value changes
  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    if (value.length > 0) {
      // If search value is not empty, fetch single Pokemon
      getSinglePokemon(value);
    } else {
      // If search value is empty, fetch initial data
      fetchData();
    }
  };

  console.log(pokemonData); // Log the Pokemon data

  // Fetch initial data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Return state and search function for external use
  return { pokemonData, setSearchValue, handleSearchValue };
}
