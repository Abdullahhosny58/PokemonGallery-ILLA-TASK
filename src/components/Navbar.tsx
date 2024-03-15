import "../index.css";
import { styled, alpha, CSSObject } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import usePokemonData from "../hooks/usePokemonData";
import "../App.css";
import Logo from "../../public/image/pokeapi_256.3fa72200.png";
import { CSSProperties } from "react";

import { Box, Container, InputBase, Stack, Typography } from "@mui/material";
import { navStyle } from "./navStyle";

import AppBar from "@mui/material/AppBar";

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

const Navbar = () => {
  const { handleSearchValue } = usePokemonData();

  return (
    <Box sx={navStyle.flexGrow}>
      <AppBar position="static" sx={navStyle.appBar}>
        <Container sx={navStyle.container}>
          {/* left side */}
          <Stack sx={navStyle.leftSide}>
            <Box>
              {" "}
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
          {/* right side */}
          <Search
            onChange={(e) => {
              handleSearchValue((e.target as any).value);
            }}
            sx={navStyle.search as CSSObject}
          >
            <SearchIconWrapper sx={navStyle.searchIconWrapper as CSSObject}>
              <SearchIcon
                sx={{
                  color: "#fff",
                  width: { xs: "15px", md: "20px", lg: "30px" },
                }}
              />
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
