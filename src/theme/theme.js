import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#241063",
    },
    secondary: {
      main: "#ff5c1d",
    },
    secondaryText: {
      main: "#999999",
    },
  },
  typography: {
    fontFamily: ["Circular Std", "sans-serif"].join(","),
  },
});

export default theme;
