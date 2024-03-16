import { createContext } from "react";
import { Pokemon } from "../hooks/usePokemonData";

// Define the types for the context
interface PokmensContextTypes {
  pokemonData: Array<Pokemon>; // Array of Pokemon objects
  handleSearchValue: (searchValue: string) => void; // Function to handle search value changes
}

// Initial value for the context
const intialValue: PokmensContextTypes = {
  pokemonData: [], // Initial empty array for pokemon data
  handleSearchValue: () => {}, // Placeholder function for handling search value changes
};

// Create the context with initial value
export const PokmensContext = createContext<PokmensContextTypes>(intialValue);
