import { createContext } from "react";
import { Pokemon } from "../hooks/usePokemonData";

interface PokmensContextTypes {
  pokemonData: Array<Pokemon>;
  handleSearchValue: (searchValue: string) => void;
}
const intialValue: PokmensContextTypes = {
  pokemonData: [],
  handleSearchValue: () => {},
};

export const PokmensContext = createContext<PokmensContextTypes>(intialValue);
