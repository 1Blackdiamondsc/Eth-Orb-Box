import React, { Component } from 'react'
import SimpleStorageContract from "../../../contracts/SimpleStorage.json";
import getWeb3 from "../../../api/getWeb3";
import EthMarkup from "./EthMarkup.jsx";
import axios from "axios";
import {
  Button, easing, Box
} from '@material-ui/core';

type State = {
  web3: null, accounts: null, contract: null
}
type OrbProps = {
  ethPrice: number,
  ethHigh: number,
  ethLow: number,
}

// this class component will potentially replace the index in this Orb folder.

export default class OrbClass extends Component<
{}
, State> {


  state = { web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      const jsonParams = JSON.stringify({
        account: accounts[0], instance: 'MIA'
      });

      await axios.post('https://us-central1-test-cf-97bfc.cloudfunctions.net/testAPI', jsonParams, {
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


      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };


  postTest = async () => {
    const { accounts } = this.state;
    const jsonParams = JSON.stringify({
      // @ts-ignore
      account: accounts[0]
    });
    await axios.post('https://us-central1-test-cf-97bfc.cloudfunctions.net/testAPI', jsonParams, {
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
  
  };

/*
  runExample = async () => {
    const { accounts, contract } = this.state;
    // @ts-ignore
    console.log('yss')
    // @ts-ignore
    await contract.methods.awardItem("0x05a4983EF33096de34649bd1b4e2526bE8C43108", "gs://test-cf-97bfc.appspot.com/Json Items/firstItem.json")
      .send({ from: "0x2ff172d94f3371700dc2f799996cb7e7eb8152c5" });
    console.log('ysss')
    // @ts-ignore

  };
*/
  render() {
    return (
      <div>
        <Box p={6}>
        <Button variant="contained" onClick={() => this.postTest()}>test button POST</Button>
        </Box>
      </div>
    )
  }
}
