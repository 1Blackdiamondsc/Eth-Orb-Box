import React, { useState } from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//comp imports
import Home from "../components/Pages/Home.jsx";
import ServicesMkup from "../components/Pages/Services.jsx";
import About from "../components/Pages/About.jsx";
import EthOrbApp from "../components/Pages/EthOrbApp.jsx";
import { NoMatch } from "./NoMatch.jsx";
import Header from "../components/Header.jsx";


export default function App() {

  //dark/light data as a boolean
  const [lightMode, setLightMode] = useState(false);

  //makeStyles hook from mui, passing in the theme provided from top level.
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: lightMode ? theme.palette.backGrounds.bgLight : theme.palette.backGrounds.bgDark,
      padding: '0px',
      margin: '0px'
    },
  }));

  //Put styles hook into variable for jsx. Pass lightmode as boolean for theme toggle and setLightMode to change it
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header setLightMode={setLightMode} checked={lightMode} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Services">
            <ServicesMkup />
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
    </div>
  )
}
