import { Box, Container, InputBase, Stack, Typography } from "@mui/material";
import Logo from "../../public/image/pokeapi_256.3fa72200.png";
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
const NavBarMobile = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        py: "15px",
      }}
    >
      {/* left side */}
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box>
          {" "}
          <img width={70} src={Logo} alt="Logo" />
        </Box>
        <Typography
          sx={{
            px: "30px",
            py: "10px",
            fontSize: "10px",
            color: "#fff",
          }}
          variant="body2"
        >
          Pokemon Gallery
        </Typography>
      </Stack>

      {/* right side */}
      <Search sx={{ width: "100px" }}>
        <SearchIconWrapper>
          <SearchIcon sx={{ color: "#fff", width: "20px" }} />
        </SearchIconWrapper>
        <StyledInputBase
          sx={{ color: "#fff", fontSize: "10px" }}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Container>
  );
};

export default NavBarMobile;
