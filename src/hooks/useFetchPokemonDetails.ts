import { useState, useEffect } from "react"; // Import necessary modules from React
import axios from "axios"; // Import axios for making HTTP requests
import { Pokemon } from "../types/interfaces"; // Import Pokemon interface

const useFetchPokemonDetails = (
  pokemonId?: string // Accepts an optional Pokemon ID as input
): [Pokemon | null, boolean] => {
  // State variables
  const [pokemon, setPokemon] = useState<Pokemon | null>(null); // State for storing fetched Pokemon details
  const [loading, setLoading] = useState<boolean>(true); // State for loading status

  // Function to fetch Pokemon details
  const fetchData = async () => {
    if (!pokemonId) return; // Check if pokemonId exists
    try {
      setLoading(true); // Set loading state to true
      // Make GET request to the PokeAPI endpoint to fetch Pokemon details
      const response = await axios.get<Pokemon>(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      setPokemon(response.data); // Set fetched Pokemon data to state
    } catch (error) {
      console.error("Error fetching Pokemon details:", error); // Log error if fetching fails
      setPokemon(null); // Set Pokemon data to null
    } finally {
      setLoading(false); // Set loading state to false regardless of success or failure
    }
  };

  // Fetch Pokemon details when pokemonId changes
  useEffect(() => {
    fetchData();
  }, [pokemonId]);

  return [pokemon, loading]; // Return fetched Pokemon data and loading status
};

export default useFetchPokemonDetails; // Export the custom hook
