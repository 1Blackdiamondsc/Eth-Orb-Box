import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import App from "./App/index.jsx";


const rootNode = document.getElementById('root');

//Material UI theme to be passed down app. palette will be organised in next commit, typog etc. will be soon after.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#45BAED",
      side: "#379fcc",
      dark: "#274268",
      tertiary: "#3ab9f0",
      bgLight: "#E6EFEC",
      bgDark: "#274268"
    },
    backGrounds: {
      bgLight: "#E9E9ED",
      bgDark: "#274268"
    },
    secondary: {
      main: "#274268"
    },
    text: {
      dark: "#017FA2",
      light: "#1495CC"
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
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  ,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
