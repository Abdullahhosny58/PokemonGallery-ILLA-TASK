import { FC, useContext, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
  Skeleton,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { stackStyle } from "./style";
import { PokmensContext } from "../context/pokemonContext";

const PokemonList: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage = 6;

  const navigate = useNavigate();

  // const { pokemonData } = usePokemonData();

  const { pokemonData } = useContext(PokmensContext);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const filteredPokemon = pokemonData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // const visiblePokemon = filteredPokemon.slice(startIndex, endIndex);
  // console.log("pokemonData", pokemonData);

  return (
    <>
      <Stack sx={stackStyle}></Stack>
      {/* Conditionally render the loading skeleton or Pokémon list */}
      {pokemonData.length > 0 ? (
        // Data has been loaded, render Pokémon list
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {pokemonData.map((pokemon) => (
            <Card
              sx={{
                cursor: "pointer",
                maxWidth: 333,
                mt: 6,
                ":hover .MuiCardMedia-root ": {
                  rotate: "1deg",
                  scale: "1.1",
                  transition: "0.35s",
                },
              }}
              onClick={() => {
                navigate(`/pokemon/${pokemon.name}`);
              }}
            >
              <CardMedia
                sx={{ height: 277 }}
                image={pokemon.sprites.front_default}
                title={pokemon.name}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ textDecoration: "none" }}
                >
                  {pokemon.name}
                </Typography>
                <Typography sx={{ textDecoration: "none" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        // Data is still loading, render loading skeleton
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {[...Array(itemsPerPage)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              sx={{
                width: 333,
                height: 277,
                marginTop: 6,
              }}
            />
          ))}
        </Stack>
      )}
      {/* Pagination buttons */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "20px",
          justifyItems: "center",
          // px: "500px",
          // px: { xs: 100, lg: "50px" },
        }}
      >
        <Button
          disabled={currentPage === 0}
          onClick={handleClickPrevious}
          variant="contained"
          sx={{
            mt: 2,
            ml: 2,
            display: "flex",
            bgcolor: "#c93734",
            ":hover": {
              bgcolor: "#db3d3a",
            },
          }}
        >
          Previous
        </Button>
        <Button
          disabled={endIndex >= filteredPokemon.length}
          onClick={handleClickNext}
          variant="contained"
          sx={{
            mt: 2,
            ml: 2,

            bgcolor: "#c93734",
            ":hover": {
              bgcolor: "#db3d3a",
            },
          }}
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default PokemonList;
