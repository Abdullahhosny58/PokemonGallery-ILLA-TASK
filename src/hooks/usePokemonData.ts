import { useEffect, useState } from "react";
import axios from "axios";

export interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface PokemonData {
  name: string;
}

export default function usePokemonData() {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [singlePokemon, setsinglePokemon] = useState();
  console.log(searchValue);

  const handleSearchValue = (value: string) => {
    setSearchValue(value);
    getSinglePokemon(value);
  };

  const getSinglePokemon = async (
    pokemonName: string
  ): Promise<PokemonData> => {
    // fatch singe by name
    try {
      const response = await axios.get<PokemonData>(
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
  console.log(pokemonData);

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
  useEffect(() => {
    fetchData();
  }, []);

  return { pokemonData, setSearchValue, handleSearchValue };
}
