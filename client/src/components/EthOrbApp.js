import React, { Component } from "react";
import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "./getWeb3";
import CoinMarkup from "./CoinMarkup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
//import OrbAppClass from "./components/CoinAppClass";

class EthOrbApp extends Component {
  state = {
    //dapp state
    storageValue: 0, web3: null, accounts: null, contract: null, defaultAddress: null,
    //game state
    choiceGreen: false, choiceRed: false,
    //ethdata state
    coinPrice: 0, coinHigh: 0, coinLow: 0
  };

  //async functions. runExample from the t-r box.
  runExample = async () => {
    const { accounts, contract } = this.state;

    // Stores a given value, 5 by default.
    await contract.methods.set(20).send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const response = await contract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };
  //market data request
  coinRequest = async () => {
    try {
      console.log('before the request');
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
      const price = res.data.market_data.current_price.usd;
      const dailyHigh = res.data.market_data.high_24h.usd;
      const dailyLow = res.data.market_data.low_24h.usd;
      //Set state
      this.setState({ coinPrice: price, coinLow: dailyLow, coinHigh: dailyHigh });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const defAcc = web3.eth.defaultAccount;

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = SimpleStorageContract.networks[networkId];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance, defaultAddress: defAcc });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }

    //eth market data fetch
    if (!this.state.coinPrice) {
      await this.coinRequest();
    }
    this.interval = setInterval(async () => {
      await this.coinRequest();
    }, 5000);

  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  gameGreen = async () => {
    const { contract, accounts } = this.state;
    this.setState({ gameGreen: true });
    toast(' Wow so easy!');
    await contract.methods
      .awardItem(
        "0xDfF4b6584CA77358A4017946bfE5Aec09522Af27",
        "https://api.jsonbin.io/b/5fb02a8a3abee46e2438d0d7/1"
      )
      .send({from: this.state.defaultAddress});
  };

  render() {

    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <CoinMarkup coinPrice={this.state.coinPrice} coinHigh={this.state.coinHigh} coinLow={this.state.coinLow} />
        <button onClick={() => this.gameGreen()}>test button</button>
        <ToastContainer />
      </div>
    );
  }
};
/*   <CoinAppClass contract={this.state.contract} web3={this.state.web3} accounts={this.state.accounts} 
        coinPrice={this.state.coinPrice} coinHigh={this.state.coinHigh} coinLow={this.state.coinLow}/>
}*/
export default EthOrbApp;
