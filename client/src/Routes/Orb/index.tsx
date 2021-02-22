import React, { FunctionComponent, useState, useEffect, SetStateAction } from 'react';
import Web3 from 'web3';
import { useAuth } from "../../contexts/AuthContext"
import {
  Button,
  Paper,
  Container,
  Typography
} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EthMarkup from "./EthMarkup.jsx";
import { Typog } from '../../components/Dumb/TypographyComps/';

type OrbProps = {
  marketPrice: number[],
  dappReady: boolean,
  account: string[],
  setAccount: React.Dispatch<SetStateAction<string[]>>,
  setReady: React.Dispatch<SetStateAction<boolean>>

  //goingDown: Promise<an
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      root: {
        height: "100vh",
      }
    },
  }),
);



//storageValue: 0, web3: null, accounts: null, contract: null

const EthOrbApp: FunctionComponent<OrbProps> = ({ dappReady, account, setAccount, setReady, marketPrice }) => {

  const { testPost } = useAuth()

 
  const postTest = async () => {
    try {
      await testPost()
     
  } catch {
      console.log('error in app')
  }

  };



  const mMask = async () => {
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
        console.log(accounts)
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



  const classes = useStyles()
  return (
    <div>
      <Container>
        <BuildIcon />
        <BuildIcon />
        <BuildIcon />
        <BuildIcon />
        <BuildIcon />
        <BuildIcon />
        <Typog align='center' variant='h1' text={account[0]} color='primary' />
        <Button variant="text" onClick={mMask}>connect metamask</Button>
        <Button variant="text" onClick={postTest}>test mint</Button>
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