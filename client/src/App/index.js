import React from 'react';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//comp imports
import Home from "../components/Home";
import ServicesMkup from "../components/Services";
import About from "../components/About";
import EthOrbApp from "../components/EthOrbApp";
import { NoMatch } from "./NoMatch";
import NavigationBar from "../components/NavigationBar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.bgColors.new2,
    padding: '0px',
    margin: '0px'
  },
}));

export default function App() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <NavigationBar />
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
          <Route path="/Eth-Orb">
            <EthOrbApp />
          </Route>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  )
}
