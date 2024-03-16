import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { notFoundPageStyle } from "./notFoundPageStyle"; // Importing custom styles

const NotFoundPage = () => {
  return (
    // Container box with custom styles
    <Box sx={notFoundPageStyle.container}>
      {/* Heading with custom styles */}
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        sx={notFoundPageStyle.heading}
      >
        404
      </Typography>
      {/* Subheading with custom styles */}
      <Typography variant="h5" gutterBottom sx={notFoundPageStyle.subheading}>
        Oops! The page you're looking for isn't here.
      </Typography>
      {/* Text paragraph with custom styles */}
      <Typography sx={notFoundPageStyle.text}>
        You might have the wrong address, or the page may have moved.
      </Typography>
      {/* Button to navigate back to home page with custom styles */}
      <Button
        variant="contained"
        sx={notFoundPageStyle.button}
        component={Link}
        to="/"
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
