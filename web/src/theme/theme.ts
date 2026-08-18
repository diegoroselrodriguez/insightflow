import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F172A",
    },
    secondary: {
      main: "#2563EB",
    },
    background: {
      default: "#F5F7FA",
      paper: "#FFFFFF",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
});

export default theme;