import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  shape: {
    borderRadius: 4,
  },
  extras: {
    test: {
      height: 50,
    },
    special: {
      color: "orange",
    },
  },
});

export default theme;
