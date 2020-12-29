import React, { FunctionComponent } from "react";
import SimpleStorageContract from "../../../contracts/SimpleStorage.json";
import getWeb3 from "../../../api/getWeb3";
import EthMarkup from "./EthMarkup.jsx";
import axios from "axios";
import {
  Button, easing,
} from '@material-ui/core';


type OrbProps = {
  ethPrice: number,
  ethHigh: number,
  ethLow: number,
}

//testing posts & gets with axios
const postTest = async () => {
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

const getTest = async () => {
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


const EthOrbApp: FunctionComponent<OrbProps> = ({ ethPrice, ethHigh, ethLow }) => {
  return (
    <div>
      <EthMarkup coinPrice={ethPrice} coinHigh={ethHigh} coinLow={ethLow} />
      <Button variant="contained" onClick={() => postTest()}>test button POST</Button>
      <Button variant="contained" onClick={() => getTest()}>test button GET</Button>
    </div>
  );
};
export default React.memo(EthOrbApp)
  //truffle-react-box boilerplate web3 method.
  //When EthOrb mounts lets async call getWeb3() awaiting a result or rejection. Expected result is metamask connection or truffle dev.
  //Start an interval on mount, calling ethReq every 5 secs.

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



