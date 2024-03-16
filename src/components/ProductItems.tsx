import { FC, useContext, useState } from "react"; // Import necessary modules from React
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Button,
  Skeleton,
} from "@mui/material"; // Import necessary components from Material-UI

import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom
import {
  cardStyle,
  cardMediaStyle,
  typographyStyle,
  buttonStyle,
} from "./style/ProductItemsStyle"; // Import styles for the component
import { PokmensContext } from "../context/pokemonContext"; // Import Pokemon context

const PokemonList: FC = () => {
  // State variables
  const [currentPage, setCurrentPage] = useState(0); // State for current page number
  const itemsPerPage = 6; // Number of items per page

  // Hooks
  const navigate = useNavigate(); // Navigate function from react-router-dom
  const { pokemonData } = useContext(PokmensContext); // Get Pokemon data from context

  // Function to handle next page click
  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page click
  const handleClickPrevious = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Calculate start and end index for pagination
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get visible Pokemon based on pagination
  const visiblePokemon = pokemonData.slice(startIndex, endIndex);

  return (
    <>
      {/* Render Pokemon cards or skeleton loading */}
      {pokemonData.length > 0 ? (
        <Stack direction="row" flexWrap="wrap" justifyContent="space-between">
          {visiblePokemon.map((pokemon) => (
            <Card
              key={pokemon.name}
              sx={{ ...cardStyle }} // Apply card style
              onClick={() => {
                navigate(`/pokemon/${pokemon.name}`); // Navigate to Pokemon details page
              }}
            >
              <CardMedia
                sx={{ ...cardMediaStyle }} // Apply card media style
                image={pokemon.sprites.front_default} // Set image URL
                title={pokemon.name} // Set image title
              />
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ ...typographyStyle }} // Apply typography style
                >
                  {pokemon.name} {/* Render Pokemon name */}
                </Typography>
                <Typography sx={{ ...typographyStyle }}>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      ) : (
        // Render skeleton loading when data is not available
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

      {/* Pagination buttons */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          py: "20px",
          justifyItems: "center",
        }}
      >
        {/* Previous button */}
        <Button
          disabled={currentPage === 0} // Disable button if on the first page
          onClick={handleClickPrevious} // Handle click event
          variant="contained"
          sx={{ ...buttonStyle }} // Apply button style
        >
          Previous
        </Button>
        {/* Next button */}
        <Button
          disabled={endIndex >= pokemonData.length} // Disable button if on the last page
          onClick={handleClickNext} // Handle click event
          variant="contained"
          sx={{ ...buttonStyle }} // Apply button style
        >
          Next
        </Button>
      </Stack>
    </>
  );
};

export default PokemonList; // Export PokemonList component
