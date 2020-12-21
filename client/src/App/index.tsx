import React, { useState, useContext } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { Box } from '@material-ui/core';
//comp imports
import Home from "../components/Pages/Home";
import Serv from "../components/Pages/Services";
import About from "../components/Pages/About";
import EthOrbApp from "../components/Pages/EthOrbApp";
import { NoMatch } from "./NoMatch.jsx";
import Header from "../components/Header";


export default function App() {

  return (
    <div>
      <Box bgcolor='background.default' >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Services">
            <Serv />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Orb">
            <EthOrbApp />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
      </Box>
    </div>
  )
}



/*  //makeStyles hook from mui, passing in the theme provided from top level.
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: lightMode ? theme.palette.backGrounds.bgLight : theme.palette.backGrounds.bgDark,
      padding: '0px',
      margin: '0px'
    },
  }));

  */