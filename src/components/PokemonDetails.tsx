import React, { FC, useState } from "react"; // Import React and useState from react
import { useParams } from "react-router-dom"; // Import useParams hook from react-router-dom
import {
  Button,
  CardMedia,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material"; // Import necessary components from Material-UI
import Skeleton from "@mui/material/Skeleton"; // Import Skeleton component from Material-UI
import { motion } from "framer-motion"; // Import motion from framer-motion

import { ButtonData } from "../types/interfaces"; // Import ButtonData interface from interfaces file
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import pokemonDetailsStyle from "./style/pokemonDetailsStyle"; // Import styles for PokemonDetails component
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails"; // Import custom hook for fetching Pokemon details

const PokemonDetails: FC = () => {
  const [displayType, setDisplayType] = useState("stats"); // State for displaying different types of Pokemon details
  const [movesLimit, setMovesLimit] = useState(10); // State for limiting the number of displayed moves
  const { pokemonId } = useParams<{ pokemonId: string }>(); // Get the Pokemon ID from URL params
  const [pokemon, loading] = useFetchPokemonDetails(pokemonId); // Fetch Pokemon details using custom hook

  // If data is being loaded
  if (loading) {
    return (
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={277} height={277} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Display skeleton loading animation */}
          <Skeleton animation="wave" width="80%" height={40} />
          <Skeleton animation="wave" width="40%" height={20} />
          <Skeleton animation="wave" width="80%" height={40} />
          <Skeleton animation="wave" width="80%" height={40} />
          <Skeleton animation="wave" width="80%" height={40} />
        </Grid>
      </Grid>
    );
  }

  // If there is no data
  if (!pokemon) return <div>No Pokemon found</div>;

  // Function to handle button click and switch display type
  const handleButtonClick = (type: string) => {
    setDisplayType(type);
  };

  // Function to handle "Show More" button click and increase moves limit
  const handleShowMoreMoves = () => {
    setMovesLimit(movesLimit + 10);
  };

  // Array of buttons with their labels and types
  const buttons: ButtonData[] = [
    { label: "Stats", type: "stats" },
    { label: "Moves", type: "moves" },
    { label: "Abilities", type: "abilities" },
  ];

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={6}>
        <Button
          sx={pokemonDetailsStyle.backButton}
          variant="text"
          component={Link}
          to="/"
        >
          Back
        </Button>

        {/* Display Pokemon image */}
        <CardMedia
          sx={pokemonDetailsStyle.cardMedia}
          image={pokemon.sprites.front_default}
          title={pokemon.name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Display Pokemon name and types */}
        <Typography variant="h2">{pokemon.name}</Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {pokemon.types.map((type, index) => (
            <ListItem key={index}>{type.type.name}</ListItem>
          ))}
        </List>

        {/* Display buttons for different types of details */}
        <Grid container spacing={2}>
          {buttons.map((button, index) => (
            <Grid item key={index}>
              <Button
                variant="contained"
                onClick={() => handleButtonClick(button.type)}
                sx={pokemonDetailsStyle.button}
              >
                {button.label}
              </Button>
            </Grid>
          ))}
        </Grid>

        {/* Display Pokemon details based on selected type */}
        {displayType === "stats" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Display Pokemon stats */}
            <List>
              {pokemon.stats.map((stat, index) => (
                <ListItem key={index}>
                  <Typography variant="body1">
                    {stat.stat.name}: {stat.base_stat}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}

        {/* Display Pokemon moves */}
        {displayType === "moves" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <List>
              {pokemon.moves.slice(0, movesLimit).map((move, index) => (
                <ListItem key={index}>
                  <Typography variant="body1">{move.move.name}</Typography>
                </ListItem>
              ))}
            </List>

            {/* Display "Show More" button if there are more moves */}
            {movesLimit < pokemon.moves.length && (
              <Button
                sx={pokemonDetailsStyle.backButton}
                onClick={handleShowMoreMoves}
              >
                Show More
              </Button>
            )}
          </motion.div>
        )}

        {/* Display Pokemon abilities */}
        {displayType === "abilities" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <List>
              {pokemon.abilities.map((ability, index) => (
                <ListItem key={index}>
                  <Typography variant="body1">
                    {ability.ability.name}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </motion.div>
        )}
      </Grid>
    </Grid>
  );
};

export default PokemonDetails; // Export PokemonDetails component
