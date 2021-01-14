import functions = require('firebase-functions');
import express = require('express');
import cors = require('cors');
import Web3 = require('web3');
import Contract = require('web3-eth-contract');

//define express app and use the use property passing in cors reference
const app = express();
app.use(cors())


app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://test-cf-97bfc.web.app')
  res.send([
    { one: "easy", two: "hard" },
  ]);
});

app.post('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://test-cf-97bfc.web.app')
  const { account } = req.query;
  // @ts-ignore
  const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/83029d3d4a454afa9e7d1a7fdd484c13'));

  const abi = fetch('gs://test-cf-97bfc.appspot.com/abis/abi.json').then(response => response.json())
  const address = "0xE981aFEeA8E3dB77003C1D56e7c1D42e470Ea775";
  // @ts-ignore
  Contract.setProvider(web3);

  // @ts-ignore
  const contract = new Contract(abi.json, address);

  contract.methods.awardItem(account, "gs://test-cf-97bfc.appspot.com/Json Items/firstItem.json").send({ from: account })
    .on('receipt', function () {
      res.status(201).send([{ txResolved: "NFT awarded post", account }]);
    });

})


export const testAPI = functions.https.onRequest(app);
