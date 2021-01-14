import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import { Grid, Box, Button, Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import posed, { PoseGroup } from 'react-pose';
//local contexts
import ThemeProvider from './themes/ThemeProvider';
//comp imports
import { Home } from "./components/Routes/Home/section1/index";
import { Home2 } from "./components/Routes/Home/section2/index";
import Serv from "./components/Routes/Serv/index";
import About from "./components/Routes/About/index";
import EthOrbApp from "./components/Routes/Orb/index";
import Header from "./components/Header/index";
import SideBar from "./components/SideBar/index";
import OrbClass from './components/Routes/Orb/OrbClass';

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});
//makeStyles hook from mui

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      overflow: 'hidden',
      margin: 0,
      padding: 0
    },
  }),
);
const rootNode = document.getElementById('root');


function App() {
  const [coinPrice, setCoinPrice] = useState(0)
  const [coinHigh, setHigh] = useState(0);
  const [coinLow, setLow] = useState(0);

  // Grab the breakpoints from theme to use as boolean for conditional render.
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const ethReq = async (): Promise<any> => {
    try {
      console.log('before the request');
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
      const price = res.data.market_data.current_price.usd;
      const dailyHigh = res.data.market_data.high_24h.usd;
      const dailyLow = res.data.market_data.low_24h.usd;

      setCoinPrice(price);
      setHigh(dailyHigh);
      setLow(dailyLow);


      console.log('finished eth fetch');
      //Set state

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!coinPrice) {
      ethReq();
    }
    const ethInterval = setInterval(async () => await ethReq(), 5300);
    return () => clearInterval(ethInterval);
  }, []);


  /*
  Using route from react-router, and passing location to the render prop.
  Then, pass the location to switch statement, in the RoutesContainer so that when a route is switched, the posed div can fade.

  Also, I need to render another grid container item to give some distinct spacing.
  */
  const classes = useStyles();
  return (
    <Route
      render={({ location }) => (
        <div className={classes.root}>

          <Header isMobile={isMobile} />

          <Grid container alignItems="flex-start" justify="space-around" direction="row" spacing={0} wrap="nowrap">

            <Grid container item xs={1} md={1} lg={1} spacing={1}>
              <Grid item >
                <Box position="fixed" p={0} m={0} >
                  <SideBar isMobile={isMedium} />
                </Box>
              </Grid>
            </Grid>

            <Grid container item xs={1} md={1}  spacing={0}>
              <Grid item >
              
              </Grid>
            </Grid>

            <Grid container item xs={9} md={10} lg={10} spacing={2}>
              <Grid item >
                <PoseGroup>
                  <RoutesContainer key={location.pathname}>
                    <Switch location={location}>
                      <Route exact path="/" key="home" >
                        <Home id="section1" />
                        <Home2 id="section2" />
                      </Route>
                      <Route path="/Services" key="serv"  >
                        <Home id="section1" />
                        <Home2 id="section2" />
                      </Route>
                      <Route path="/About" key="about"  >
                        <Home id="section1" />
                        <Home2 id="section2" />
                      </Route>
                      <Route path="/Orb" key="orb">
                       <OrbClass />
                      </Route>
                    </Switch>
                  </RoutesContainer>
                </PoseGroup>
              </Grid>
            </Grid>
            
            <Grid container item xs={1} md={1} lg={1} spacing={0}>
              <Grid item >
              
              </Grid>
            </Grid>

          </Grid>
        </div  >
      )}
    />
  )
};
// <EthOrbApp ethPrice={coinPrice} ethLow={coinLow} ethHigh={coinHigh} />
ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  rootNode
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
