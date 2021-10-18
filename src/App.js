import "./App.css";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  extras: {
    colors: {
      black: "#000",
    },
    special: {
      color: "orange",
    },
  },
});

const MyStyledComponent = styled("div")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.extras.special.color,
  border: `1px solid ${theme.extras.colors.black}`,
}));

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">Header</header>
      </div>
      <MyStyledComponent>Styled component</MyStyledComponent>
    </ThemeProvider>
  );
};

export default App;
