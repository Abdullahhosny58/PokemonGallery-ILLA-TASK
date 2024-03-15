import Navbar from "./components/Navbar";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/ProductItems";
import PokemonDetails from "./components/PokemonDetails";
import { PokmensContext } from "./context/pokemonContext";
import usePokemonData from "./hooks/usePokemonData";

function App() {
  const { pokemonData } = usePokemonData();

  return (
    <PokmensContext.Provider value={{ pokemonData }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </PokmensContext.Provider>
  );
}

export default App;
