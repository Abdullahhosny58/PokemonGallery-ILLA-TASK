import { useEffect, useState } from "react";
import axios from "axios";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allPokemon: Pokemon[] = [];
        let nextUrl = "https://pokeapi.co/api/v2/pokemon";

        // Fetch all pages of data
        while (nextUrl) {
          const response = await axios.get<{
            results: { name: string; url: string }[];
            next: string;
          }>(nextUrl);
          const pokemons = response.data.results;

          // Fetch details for each pokemon
          const pokemonDetailsPromises = pokemons.map(async (pokemon) => {
            const detailsResponse = await axios.get<Pokemon>(pokemon.url);
            return detailsResponse.data;
          });

          const pokemonDetails = await Promise.all(pokemonDetailsPromises);
          allPokemon = [...allPokemon, ...pokemonDetails];
          nextUrl = response.data.next;
        }

        setPokemonData(allPokemon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return pokemonData;
};

export default usePokemonData;
