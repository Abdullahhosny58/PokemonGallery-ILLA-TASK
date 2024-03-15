import { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "../types/interfaces";

const useFetchPokemonDetails = (
  pokemonId?: string
): [Pokemon | null, boolean] => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    if (!pokemonId) return; // Check for pokemonId
    try {
      setLoading(true);
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setPokemon(response.data);
    } catch (error) {
      console.error("Error fetching Pokemon details:", error);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  return [pokemon, loading];
};

export default useFetchPokemonDetails;
