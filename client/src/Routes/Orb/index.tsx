import React, { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import Web3 from 'web3';
import axios from 'axios'
import {
  Button, 
  Paper,
  Container

} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EthMarkup from "./EthMarkup.jsx";

type OrbProps = {
  marketPrice: number[],
  dappReady: boolean,
  account: string[] ,
  setAccount: React.Dispatch<SetStateAction<string[]>>,
  setReady: React.Dispatch<SetStateAction<boolean>>

  //goingDown: Promise<an
}
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

  

//storageValue: 0, web3: null, accounts: null, contract: null

const EthOrbApp: FunctionComponent<OrbProps> = ({ dappReady, account, setAccount, setReady, marketPrice }) => {
  const [res, setRes] = useState()
  const postTest = async (account: string) => {
    await axios({
      method: 'post',
      url: 'https://us-central1-test-cf-97bfc.cloudfunctions.net/testAPI',
      data: {
        account: account
      }
    }).then(function (response) {
      console.log(response);

    })
      .catch(function (error) {
        console.log(error);
      });
  };

  const mMask =  async () => {
    // @ts-ignore
    const web3 = new Web3(window.ethereum);
    // @ts-ignore
    if (window.ethereum) {
      // @ts-ignore
      try {
        // @ts-ignore
        window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts)
        setReady(true)
      } catch (error) {
        console.log(error)
        setReady(false)
      }

      /*
      finally { 
        //axios post to capture whoever logs in on this site
        axios({
          method: 'post',
          url: '/user/12345',
          data: account
        });
        
      }
      */
    }
    //@ts-ignore


  }

  useEffect(() => {
    return () => {
      //clean the state on unMount.
       // @ts-ignore
      setAccount(account.splice(0, account.length))
      setReady(false)
      // @ts-ignore
    };
  }, []);

  
  return (
    <div>
      <Container> 
        <BuildIcon/>
        <BuildIcon/>
        <BuildIcon/>
        <BuildIcon/>
        <BuildIcon/>
        <BuildIcon/>
        <Button variant="text" onClick={mMask}>connect metamask</Button>
        <Button variant="text" onClick={() => postTest(account[0])}>test mint</Button>
      </Container>
    </div>
  );
};
export default React.memo(EthOrbApp)




/*
  {dappReady ? (
        <div>
          <EthMarkup  marketPrice={marketPrice} />
          <Button variant="contained"> eth is mooning</Button >
          <Button variant="contained" >eth is dropping</Button>
          <Paper color="primary">{account[0]}</Paper>
        </div>
      ) : (
          <>
            <EthMarkup  marketPrice={marketPrice} />
            <Button variant='outlined' color='primary' onClick={mMask}> Connect To MetaMask</Button>
            <Paper color="primary">{account[0]}</Paper>
          </>
        )

      }
*/