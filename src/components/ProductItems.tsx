import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
  InputBase,
} from "@mui/material";

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const itemsPerPage = 6;

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
  const visiblePokemon = filteredPokemon.slice(startIndex, endIndex);

  return (
    <Router>
      {" "}
      <>
        <Stack sx={{ py: "10px", display: "flex", alignItems: "center" }}>
          <Search
            sx={{
              borderRadius: 2,
              backgroundColor: "#fff",
              border: "1px solid #EF5350",
              display: "inline-flex",
              alignItems: "center",
              padding: "2px 4px",
              transition: "border-color 0.3s, background-color 0.3s",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                borderColor: "#e53935",
              },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "#000" }} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={{ color: "#000", marginLeft: 1, flex: 1 }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Search>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          {visiblePokemon.map((pokemon, index) => (
            <Link to={`/pokemon/${pokemon.name}`} key={index}>
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
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            py: "20px",
            justifyItems: "center",
            px: "500px",
          }}
        >
          <Button
            disabled={currentPage === 0}
            onClick={handleClickPrevious}
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
    </Router>
  );
};

export default PokemonList;
