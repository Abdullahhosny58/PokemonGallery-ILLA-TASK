import { Container, useMediaQuery } from "@mui/material";
import "../index.css";

import "../App.css";
import NavbarWeb from "./NavbarWeb";
import NavBarMobile from "./NavBarMobile";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#EF5350" }}>
        <Container>
          {/* NavBarMobile */}
          {useMediaQuery("(min-width:1000px)") && <NavbarWeb />}

          {/* NavBarMobile */}
          {useMediaQuery("(max-width:1000px)") && <NavBarMobile />}
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
