import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
//import CoinApp from "./components/CoinApp";
import "./App.css";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class OrbAppClass extends Component {
  state = {
    //dapp state
    contract: this.props.contract,
    web3: this.props.web3,
    accounts: this.props.accounts,
    //eth state
    coinPrice: this.props.coinPrice,
    coinHigh: this.props.coinHigh,
    coinLow: this.props.coinLow,
    //game state
    oldCoinPrice: 0,
    gameReady: false,
    gameGreen: false,
    gameRed: false,
  };

  gameGreen(){
    this.setState({ gameGreen: true});
    toast("Wow so easy !");
  }

  componentDidMount = async () => {
    this.interval0 = setInterval(() => {
      if (this.props.coinPrice === 0) {
        this.setState({ gameReady: true })
      } else if (this.props.accounts === null) {
        this.setState({ gameReady: false });
      }
    }, 1000);


    this.interval1 = setInterval(() => {
      if (this.state.gameReady  === false) {
        return false;
      } else if (this.state.gameRed === true) {
        this.setState({oldCoinPrice: this.state.coinPrice})
      }
    }, 1000);

  }


  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

    return (
      <div className="App">
        <div>The stored value is: {this.state.storageValue}</div>
        <div>
          <button onClick={() => this.gameGreen()}></button>
          <button onClick={() => this.gameRed()}></button>
        </div>
        <ToastContainer />
      </div>
      
    );
  }
};
//
export default OrbAppClass;
