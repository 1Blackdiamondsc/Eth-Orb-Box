const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const Web3 = require('web3');
const Contract = require('web3-eth-contract');

const corsOptions = {
  origin: 'https://test-cf-97bfc.web.app',
  optionsSuccessStatus: 200 ,
}


//define express app use the use property and pass in cors options. res.setHeader( "Access-Control-Allow-Origin" ,"https://test-cf-97bfc.web.app" )
const app = express();

/*
app.use(cors({
  origin: function(origin, callback){   
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }  return callback(null, true);
  }
}));
*/
app.get('/', (req, res) => {

  res.send([
    { one: "easy", two: "hard" },
  ]);
});

//
app.post('/', async (req, res) => {

  res.setHeader( "Access-Control-Allow-Origin" ,"*" )
   //grab the account address of the player (from front-end)
 
  const { account } = req.account
  console.log('account' + account);
  //changing to matic node
  const web3 = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/83029d3d4a454afa9e7d1a7fdd484c13');
  console.log(web3)
  const artifact = axios.get('https://firebasestorage.googleapis.com/v0/b/test-cf-97bfc.appspot.com/o/abis%2Fabi.json?alt=media&token=26bb0e2f-872c-4ee9-ac0f-525b9d84af39');
  const address = "0xE981aFEeA8E3dB77003C1D56e7c1D42e470Ea775";
  Contract.setProvider(web3);
  const contract = new Contract(artifact, address);

  const supplyReq = new Promise(async (resolve, reject) => {
    try {
      const supply = await contract.totalSupply().call()
      resolve(supply)
    } catch (error) {
      reject(error)
    }
  });
  
  const newSupply = await supplyReq + 1;
  console.log('newsupply' + newSupply)
  const itemtoMint = `https://test-cf-97bfc-default-rtdb.firebaseio.com/NFTs/NFT${newSupply}`
  console.log('item to mint' + itemtoMint)
  //contract address needed for instantiation 
  await contract.methods.awardItem(account, itemtoMint).send({ from: account }).on('receipt', function () {
    
  }).then(res.status(200).send([{ txResolved: "NFT awarded post", account: account }]))
    .catch(res.status(400).end)


})


exports.testAPI = functions.https.onRequest(app);

/*
    logic
  call totalSupply from contract.
  const newToken: number = totalSupply + 1.
  const newURI: string =  `https://test-cf-97bfc-default-rtdb.firebaseio.com/NFTs/NFT${newToken}`
  mint new token with uri and address from frontend
*/