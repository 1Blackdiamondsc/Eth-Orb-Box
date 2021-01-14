import React, { FunctionComponent, useEffect, useState } from "react";
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

  console.log("Time of Resolution POST");
};

const getTest = async () => {
  console.log("before req GET");
  await axios.get('https://us-central1-test-cf-97bfc.cloudfunctions.net/testAPI')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  console.log("Time of Resolution GET");
};

//storageValue: 0, web3: null, accounts: null, contract: null

const EthOrbApp: FunctionComponent<OrbProps> = ({ ethPrice, ethHigh, ethLow }) => {

  const [account, setAccount] = useState("")
  // @ts-ignore
  const [contract, setContract] = useState()
  const [web3, setWeb3] = useState(null)





  useEffect(() => {
    const fetchWeb3 = async () => {
      const web3 = await getWeb3();
      // @ts-ignore
      const deployedNetwork = SimpleStorageContract.networks["5777"];
      const instance = new web3.eth.Contract(
        SimpleStorageContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      console.log("web 3 working?")
      const accounts = web3.eth.getAccounts()
      setAccount(accounts[3]);
      setWeb3(web3);
      setContract(instance);
      
    }
    fetchWeb3();
    console.log("account")
  }, [account])

  const runExample = async () => {
    // @ts-ignore
    
    console.log('yss')
    // @ts-ignore
    await contract.methods.awardItem("0x05a4983EF33096de34649bd1b4e2526bE8C43108" , "gs://test-cf-97bfc.appspot.com/Json Items/firstItem.json")
    .send({ from: "0x2ff172d94f3371700dc2f799996cb7e7eb8152c5" });
    console.log('ysss')
    // @ts-ignore
    
  };

  return (
    <div>
      <EthMarkup coinPrice={ethPrice} coinHigh={ethHigh} coinLow={ethLow} />
      <Button variant="contained" onClick={() => postTest()}>test button POST</Button>
      <Button variant="contained" onClick={() => getTest()}>test button GET</Button>
      <Button variant="contained" onClick={() => runExample()}>eth test</Button>
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



