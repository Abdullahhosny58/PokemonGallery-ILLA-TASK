import { createContext } from "react";
import { Pokemon } from "../hooks/usePokemonData";

interface PokmensContextTypes {
  pokemonData: Array<Pokemon>;
}
const intialValue: PokmensContextTypes = { pokemonData: [] };

export const PokmensContext = createContext<PokmensContextTypes>(intialValue);
