import { ChangeEvent, useContext } from "react";
import { styled, alpha, CSSObject } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "../../index.css"; // Importing global styles
import Logo from "../../../public/image/pokeapi_256.3fa72200.png"; // Importing logo image
import { CSSProperties } from "react"; // Importing necessary dependencies

import { Box, Container, InputBase, Stack, Typography } from "@mui/material"; // Importing MUI components
import { navStyle } from "./navStyle"; // Importing styles for the navbar

import AppBar from "@mui/material/AppBar"; // Importing AppBar component
import { PokmensContext } from "../../context/pokemonContext"; // Importing Pokemon context

// Styling the search bar container
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

// Styling for the search icon wrapper
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

// Styling for the input base
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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

// Navbar component
const Navbar = () => {
  // Accessing search value from Pokemon context
  const { handleSearchValue } = useContext(PokmensContext);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase(); // Convert input value to lowercase
    handleSearchValue(inputValue); // Update search value in context
  };

  return (
    <Box sx={navStyle.flexGrow}>
      <AppBar position="static" sx={navStyle.appBar}>
        <Container sx={navStyle.container}>
          {/* Left side of the navbar */}
          <Stack sx={navStyle.leftSide}>
            <Box>
              <img
                style={navStyle.logo as CSSProperties}
                src={Logo}
                alt="Logo"
              />
            </Box>
            <Typography sx={navStyle.typography} variant="body2">
              Pokemon Gallery
            </Typography>
          </Stack>
          {/* Right side of the navbar */}
          <Search
            onChange={handleInputChange}
            sx={navStyle.search as CSSObject}
          >
            <SearchIconWrapper sx={navStyle.searchIconWrapper as CSSObject}>
              <SearchIcon sx={navStyle.SearchIcon} />
            </SearchIconWrapper>
            <StyledInputBase
              sx={navStyle.styledInputBase as CSSObject}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
