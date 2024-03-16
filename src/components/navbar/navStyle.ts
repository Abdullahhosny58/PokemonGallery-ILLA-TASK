import NavStyle from "../../types/interfaces";

export const navStyle: NavStyle = {
  flexGrow: {
    flexGrow: 1,
  },
  appBar: {
    bgcolor: "#EF5350",
  },
  container: {
    display: "flex",
    justifyContent: {
      xs: "space-around",
      md: "space-between",
      lg: "space-between",
    },
    flexDirection: "row",
    py: "15px",
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
  },
  logo: {
    width: 90,
  },
  typography: {
    color: "#fff",
    px: { xs: "15px", md: "20px", lg: "30px" },
    py: { xs: "5px", md: "7px", lg: "10px" },
    fontSize: { xs: "10px", md: "12px", lg: "15px" },
    display: { xs: "none", md: "block", lg: "block" },
  },
  search: {
    position: "relative",
    borderRadius: "borderRadius",
    backgroundColor: "alpha(common.white, 0.15)",
    "&:hover": {
      backgroundColor: "alpha(common.white, 0.25)",
    },
    marginLeft: 0,
    // width: "100%",
    width: { xs: "100px", md: "150px", lg: "200px" },

    ["@media (min-width:600px)"]: {
      marginLeft: "spacing(1)",
      width: "auto",
    },
  },
  SearchIcon: { color: "#fff", width: { xs: "15px", md: "20px", lg: "30px" } },
  searchIconWrapper: {
    padding: "spacing(0, 2)",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  styledInputBase: {
    color: "inherit",
    width: "100%",

    "& .MuiInputBase-input": {
      padding: "spacing(1, 1, 1, 0)",
      paddingLeft: "calc(1em + spacing(4))",
      transition: "transitions.create(width)",
      ["@media (min-width:600px)"]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  },
};
