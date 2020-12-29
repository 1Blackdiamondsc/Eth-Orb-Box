import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import { Box, Button } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";
import posed, { PoseGroup } from 'react-pose';
//local contexts
import ThemeProvider from './themes/ThemeProvider';
//comp imports
import Home from "./components/Routes/Home/Home";
import Serv from "./components/Routes/Serv/Services";
import About from "./components/Routes/About/About";
import EthOrbApp from "./components/Routes/Orb/EthOrbApp";
import Header from "./components/Header/Header";

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300 },
  exit: { opacity: 0 }
});

const rootNode = document.getElementById('root');

function App() {
  const [coinPrice, setCoinPrice] = useState(0)

  const [coinHigh, setHigh] = useState(0);
  const [coinLow, setLow] = useState(0);
  //use scroll method from react-scroll for user to scroll up.
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

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
          <Header />
          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={Home} key="home" />
                <Route path="/Services" component={Serv} key="serv" />
                <Route path="/About" component={About} key="about" />
                <Route path="/Orb" key="orb">
                  <EthOrbApp ethPrice={coinPrice} ethLow={coinLow} ethHigh={coinHigh} />
                </Route>
              </Switch>
            </RoutesContainer>
          </PoseGroup>
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
