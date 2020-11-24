import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/index";
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

const rootNode = document.getElementById('root');

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#45BAED",
      side: "#379fcc",
      tertiary: "#3ab9f0",
      bglight: "#E6EFEC",
      bgDark: "#274268"
    },
    secondary: {
      main: "#5e3a87"
    },
    text: {
      dark: "#017FA2",
      light: "#1495CC"
    },
    textBg:{
      main: "#c1c8c9"
    },
    darkBlue: {
      main: "#0B4F6C"
    },
  },
  typography: {
    fontFamily: "bahnschrift semilight",
    fontSize: 21,
    fontWeightLight: 300,
    fontWeightSemiLight: 350,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    headers: {
      fontFamily: "bahnschrift semibold",
      fontSize: 28,
      lineHeight: 30,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    spacing: {
      spaced: {
        paddingTop: 100
      },
    }
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <CssBaseline/>
  </ThemeProvider>
  ,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
