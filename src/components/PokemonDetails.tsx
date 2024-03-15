import React, { FC, useState } from "react";
import "../";

import { useParams } from "react-router-dom";
import {
  Button,
  CardMedia,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { motion } from "framer-motion";

import { ButtonData } from "../types/interfaces";
import { Link } from "react-router-dom";
import pokemonDetailsStyle from "./pokemonDetailsStyle";
import useFetchPokemonDetails from "../hooks/useFetchPokemonDetails";

const PokemonDetails: FC = () => {
  const [displayType, setDisplayType] = useState("stats");
  const [movesLimit, setMovesLimit] = useState(10);
  const { pokemonId } = useParams<{ pokemonId: string }>();
  const [pokemon, loading] = useFetchPokemonDetails(pokemonId);

  // If data is being loaded
  if (loading) {
    return (
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={277} height={277} />
        </Grid>
        <Grid item xs={12} sm={6}>
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

  const handleButtonClick = (type: string) => {
    setDisplayType(type);
  };

  const handleShowMoreMoves = () => {
    setMovesLimit(movesLimit + 10);
  };

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

        <CardMedia
          sx={pokemonDetailsStyle.cardMedia}
          image={pokemon.sprites.front_default}
          title={pokemon.name}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h2">{pokemon.name}</Typography>
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {pokemon.types.map((type, index) => (
            <ListItem key={index}>{type.type.name}</ListItem>
          ))}
        </List>
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
        {displayType === "stats" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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

export default PokemonDetails;
