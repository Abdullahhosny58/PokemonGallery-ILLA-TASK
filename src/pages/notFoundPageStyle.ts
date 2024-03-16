export const notFoundPageStyle = {
  container: {
    mt: { xs: 4, sm: 8 },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: "8px",
    padding: "24px",
  },
  heading: {
    fontSize: { xs: "4rem", sm: "5rem", md: "6rem" },
    color: "#9A0007",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
  subheading: {
    fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
    textAlign: "center",
    color: "#333",
  },
  text: {
    mb: 2,
    px: { xs: 2, sm: 0 },
    textAlign: "center",
    color: "#555",
  },
  button: {
    mt: 2,
    color: "white",
    backgroundColor: "#4CAF50",
    "&:hover": {
      backgroundColor: "#388E3C",
    },
    px: { xs: 3, sm: 5 },
    py: { xs: 1, sm: 1.5 },
  },
};
