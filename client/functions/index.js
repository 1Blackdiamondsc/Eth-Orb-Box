const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const Web3 = require('web3');
const Contract = require('web3-eth-contract');


//define express app use the use property and pass in cors options.
const app = express();


app.get('/', (req, res) => {
  res.setHeader( "Access-Control-Allow-Origin" ,"https://test-cf-97bfc.web.app" )
  res.send([
    { one: "easy", two: "hard" },
  ]);
});


app.post('/', async (req, res) => {
  //grab the account address of the player (from front-end).
  res.setHeader( "Access-Control-Allow-Origin" ,"https://test-cf-97bfc.web.app" )
  const { account } = req.query;

  const web3 = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/83029d3d4a454afa9e7d1a7fdd484c13'); 
  const artifact = await axios.get('https://firebasestorage.googleapis.com/v0/b/test-cf-97bfc.appspot.com/o/abis%2Fabi.json?alt=media&token=26bb0e2f-872c-4ee9-ac0f-525b9d84af39');
  
  const address = "0xE981aFEeA8E3dB77003C1D56e7c1D42e470Ea775";
  Contract.setProvider(web3);
  const contract = new Contract(artifact, address);
  //contract address needed for instantiation 
  const tx = await contract.methods.awardItem(account, "gs://test-cf-97bfc.appspot.com/Json Items/firstItem.json").send({ from: account }).on('receipt', function(){
    //res.end etc
  })

  const txPromise = (new Promise(tx))
  .then(res.status(200).send([{ txResolved: "NFT awarded post", account: req.query }]))
  .catch(res.status(400).end)


})


exports.testAPI = functions.https.onRequest(app);
