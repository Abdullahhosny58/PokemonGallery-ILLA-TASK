import Navbar from "./components/navbar/Navbar";
import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonList from "./components/ProductItems";
import PokemonDetails from "./components/PokemonDetails";
import { PokmensContext } from "./context/pokemonContext";
import usePokemonData from "./hooks/usePokemonData";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { pokemonData, handleSearchValue } = usePokemonData();

  return (
    <PokmensContext.Provider value={{ pokemonData, handleSearchValue }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/pokemon/:pokemonId" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </PokmensContext.Provider>
  );
}

export default App;
