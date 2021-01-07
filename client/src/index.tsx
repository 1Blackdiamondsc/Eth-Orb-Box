import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import { Typography, Grid, Box, Button, } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
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

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});

const rootNode = document.getElementById('root');

function App() {
  const [coinPrice, setCoinPrice] = useState(0)
  const [coinHigh, setHigh] = useState(0);
  const [coinLow, setLow] = useState(0);
  // Grab the breakpoints from theme to use as boolean for conditional render.
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const ethReq = async (): Promise<any> => {
    try {
      console.log('before the request');
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
      const price = res.data.market_data.current_price.usd;
      const dailyHigh = res.data.market_data.high_24h.usd;
      const dailyLow = res.data.market_data.low_24h.usd;

      setCoinPrice(price)
      setHigh(dailyHigh)
      setLow(dailyLow)


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


  return (
    <Route
      render={({ location }) => (
        <Box bgcolor="background.default" >
          <Header isMobile={isMedium}/>

          <Grid container direction="row">
            <Grid container item spacing={1} justify="flex-start" alignItems="flex-start" direction="column" xs={2} md={2} lg={1}>
              <Grid item>
                <Box position="fixed">
                  <SideBar isMobile={isMedium} />
                </Box>
              </Grid>
            </Grid>


            <Grid container item spacing={1} alignItems="flex-start"  direction="column" xs={9} md={10} lg={11}>
              <Grid item>
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
                        <EthOrbApp ethPrice={coinPrice} ethLow={coinLow} ethHigh={coinHigh} />
                      </Route>
                    </Switch>
                  </RoutesContainer>
                </PoseGroup>
              </Grid>
            </Grid>

          </Grid>

          <Box justifyContent="flex-end" display="block">
            <Button
              variant="text"
              color="primary"
              endIcon={<ArrowUpwardIcon />}
              onClick={() => scroll.scrollToTop()}
              size="small"
            > Scroll Top
            </Button>
          </Box>
        </Box>

      )}
    />
  )
};

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
