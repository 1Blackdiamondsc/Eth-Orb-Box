import React, { useState, useEffect, FunctionComponent } from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter, Switch, Route
} from "react-router-dom";
import { Grid, Box, } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import axios from "axios";
import posed, { PoseGroup } from 'react-pose';
//local contexts
import ThemeProvider from './themes/ThemeProvider';
import { AuthProvider } from './contexts/AuthContext';
//interfaces
import { SideBarProps } from './interfaces/SideBarProps';
//comp imports
import { Home } from "./Routes/Home";
import { Sec } from "./Routes/Security";
import { ITSupp } from './Routes/ITSupport/index';

import EthOrbApp from "./Routes/Orb/index";
import Header from "./components/Header/index";
import SideBar from './components/SideBar/index';
import About from './Routes/About';
import PrivateRoute from './PrivateRoute';
import Login from './Routes/LogIn';
import Signup from './Routes/SignUp';
import Dashboard from './Routes/Dashboard';
import UpdateAccount from './Routes/UpdateAccount';
import ForgotPassword from './Routes/ForgotPassword'
//div from react-pose that will wrap the route, fading on route switch.
const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 500 },
  exit: { opacity: 0 }
});

//makeStyles hook from mui. some typical optimisations for view.
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      margin: 0,
      padding: 0
    },
  }),
);

//root div in index
const rootNode = document.getElementById('root');


const App: FunctionComponent = () => {
  const [marketPrice, setPrice] = useState<number[]>([])
  const [account, setAccount] = useState<string[]>([])
  const [dappReady, setReady] = useState<boolean>(false)

  // Grab the breakpoints from theme to use as boolean for conditional render.
  const theme = useTheme();
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  //eth market fetch
  const ethReq = async (): Promise<any> => {
    try {
      console.log('before the request');
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
      const price = res.data.market_data.current_price.usd;
      const dailyHigh = res.data.market_data.high_24h.usd;
      const dailyLow = res.data.market_data.low_24h.usd;

      setPrice(marketPrice.concat(price))
      if (marketPrice.length === 9) {
        setPrice(marketPrice.splice(0, 8))
        console.log('spliced')
      }



      console.log('finished eth fetch');
      //Set state

    } catch (error) {
      console.log(error);
    }
  };
  /*
  
    temporarily not important. but does work.
    useEffect(() => {
      if (marketPrice.length === 0) {
        ethReq();
      }
      const ethInterval = setInterval(async () => await ethReq(), 5000);
      return () => clearInterval(ethInterval);
  
    }) 
    */
  /*
  Wrap the app with firebase Auth context.

  Using route from react-router, and passing location to the render prop.
  Then, pass the location to switch statement, in the RoutesContainer so that when a route is switched, the posed div can fade.
 
  I need to render empty grid container items to give some spacing.

  The SideBar component will be routing to the corresponding section using a string id. Section id's are passed as props into the components/pages.



  */
  const classes = useStyles();
  return (
    <AuthProvider>
      <Route
        render={({ location }) => (
          <div className={classes.root}>

            <Header isMobile={isMobile} />

            <PoseGroup>
              <RoutesContainer key={location.pathname}>
                <Switch location={location}>

                  <Route exact path="/" key="home">
                    <Home isMedium={isMedium} />
                  </Route>


                  <Route exact path="/Security" key="sec">
                    <Sec isMedium={isMedium} />
                  </Route>


                  <Route exact path="/IT-Support" key="it-supp">
                    <ITSupp isMedium={isMedium} />
                  </Route>

                  <Route exact path="/About" key="about">
                    <About />
                  </Route>

                  <Route path="/Orb" key="orb">
                    <EthOrbApp
                      dappReady={dappReady} setReady={setReady} account={account}
                      setAccount={setAccount} marketPrice={marketPrice}
                    />
                  </Route>
                  <PrivateRoute path="/Dashboard" component={Dashboard} />
                  <PrivateRoute path="/Update-Account" component={UpdateAccount} />
                  <Route path="/Login" component={Login} key="login" />
                  <Route path="/Signup" component={Signup} />
                  <Route path="/Forgot-Password" component={ForgotPassword} />
                </Switch>
              </RoutesContainer>
            </PoseGroup>
          </div>
        )
        }
      />
    </AuthProvider>
  )
}
//wrap with mui context.
ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  rootNode
);

