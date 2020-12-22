import React, { Component } from "react";
import SimpleStorageContract from "../../contracts/SimpleStorage.json";
import getWeb3 from "../../api/getWeb3";
import EthMarkup from "../EthMarkup.jsx";
import axios from "axios";
import {
  Button, easing,
} from '@material-ui/core';

type MyState = {
  //dapp state
  web3: null, accounts: [], defaultAddress: string,
  //ethdata state
  coinPrice: number, coinHigh: number, coinLow: number
};

//considering to change to react.function component
class EthOrbApp extends Component {
  state: MyState = {
    //dapp state
    web3: null, accounts: [], defaultAddress: "",
    //ethdata state
    coinPrice: 0, coinHigh: 0, coinLow: 0
  };

  //market data request
  ethReq = async (): Promise<any> => {
    try {
      console.log('before the request');
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
      const price = res.data.market_data.current_price.usd;
      const dailyHigh = res.data.market_data.high_24h.usd;
      const dailyLow = res.data.market_data.low_24h.usd;
      console.log(' finished eth fetch');
      //Set state
      this.setState({ coinPrice: price, coinLow: dailyLow, coinHigh: dailyHigh });
    } catch (error) {
      console.log(error);
    }
  };

  //truffle-react-box boilerplate web3 method.
  //When EthOrb mounts lets async call getWeb3() awaiting a result or rejection. Expected result is metamask connection or truffle dev.
  //Start an interval on mount, calling ethReq every 5 secs.
  componentDidMount = async () => {

    //eth market data fetch
    if (!this.state.coinPrice) {
      await this.ethReq();
    }

    setInterval(async () => this.ethReq, 5300);
/*
    //promise for web3. Commented out for 
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();
      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();
      //define a default account with a built-in web3.eth method
      const defAcc = web3.eth.defaultAccount;
      // Set web3, accounts, and contract to the state.
      this.setState({ web3, accounts, defaultAddress: defAcc });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }
  */
};
  //testing posts & gets with axios
  postTest = async () => {
    console.log("before req POST");
    const jsonParams = JSON.stringify({
      account: 'Alive and Well', instance: 'MIA'
    });
    await axios.post('https://cloud-api-test.yournewempire.vercel.app', jsonParams, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log("Time of Resolution POST");
  };

  getTest = async () => {
    console.log("before req GET");
    await axios.get('https://cloud-api-test.yournewempire.vercel.app/')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log("Time of Resolution GET");
  };

  render() {
    return (
      <div>
        <EthMarkup coinPrice={this.state.coinPrice} coinHigh={this.state.coinHigh} coinLow={this.state.coinLow} />
        <Button variant="contained" onClick={() => this.postTest()}>test button POST</Button>
        <Button variant="contained" onClick={() => this.getTest()}>test button GET</Button>
      </div>
    );
  }
};

export default EthOrbApp;

