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
import {
  cardStyle,
  cardMediaStyle,
  typographyStyle,
  buttonStyle,
} from "./style/ProductItemsStyle";
import { PokmensContext } from "../context/pokemonContext";

const PokemonList: FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const navigate = useNavigate();
  const { pokemonData } = useContext(PokmensContext);

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePokemon = pokemonData.slice(startIndex, endIndex);

  return (
    <>
      <Stack>
        {pokemonData.length > 0 ? (
          <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
            {visiblePokemon.map((pokemon) => (
              <Card
                key={pokemon.name}
                sx={{ ...cardStyle }}
                onClick={() => {
                  navigate(`/pokemon/${pokemon.name}`);
                }}
              >
                <CardMedia
                  sx={{ ...cardMediaStyle }}
                  image={pokemon.sprites.front_default}
                  title={pokemon.name}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ ...typographyStyle }}
                  >
                    {pokemon.name}
                  </Typography>
                  <Typography sx={{ ...typographyStyle }}>
                    {pokemon.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        ) : (
          <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
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

        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            py: "20px",
            justifyItems: "center",
          }}
        >
          <Button
            disabled={currentPage === 0}
            onClick={handleClickPrevious}
            variant="contained"
            sx={{ ...buttonStyle }}
          >
            Previous
          </Button>
          <Button
            disabled={endIndex >= pokemonData.length}
            onClick={handleClickNext}
            variant="contained"
            sx={{ ...buttonStyle }}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default PokemonList;
