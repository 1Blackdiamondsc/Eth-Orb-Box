'use strict';
const Web3 = require('web3');
const Contract = require('web3-eth-contract');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cookieParser = require('cookie-parser')();
const cors = require('cors');
const app = express();

//options for cors midddleware
const options = {
  allowedHeaders: [
    'Authorization',
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'https://test-cf-97bfc.web.app',
  preflightContinue: false,
};

// set headers for app.
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'https://test-cf-97bfc.web.app');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


// Express middleware that validates Firebase ID Tokens passed in the Authorization HTTP header.
// The Firebase ID token needs to be passed as a Bearer token in the Authorization HTTP header like this:
// `Authorization: Bearer <Firebase ID Token>`.
// when decoded successfully, the ID Token content will be added as `req.user`.
const validateFirebaseIdToken = async (req, res, next) => {
  console.log('Check if request is authorized with Firebase ID token');

  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
    !(req.cookies && req.cookies.__session)) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>',
      'or by passing a "__session" cookie.');
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    console.log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if (req.cookies) {
    console.log('Found "__session" cookie');
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await admin.auth().verifyIdToken(idToken);
    console.log('ID Token correctly decoded', decodedIdToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (error) {
    console.error('Error while verifying Firebase ID token:', error);
    res.status(403).send('Unauthorized');
    return;
  }
};




app.use(cors(options))
app.use(cookieParser);
app.use(validateFirebaseIdToken);

app.get('/hello', (req, res) => {
  // @ts-ignore
  res.send(`Hello ${req.user.email}`);
});



app.post('/score-handler',  async (req, res) => {
  const { account, price } = req.body;
  console.log('account' + account);


  //contract instantiation

  res.status(200).send({ txResolved: "NFT awarded post", account: account, price: price })



});




exports.testAPI = functions.https.onRequest(app);

/*


   //grab the account address of the player (from front-end)
   const  { account, price }  = req.body;
   console.log('account' + account);
   console.log('price' + price);
   //changing to matic node
  const web3 = new Web3.providers.HttpProvider('https://ropsten.infura.io/v3/83029d3d4a454afa9e7d1a7fdd484c13');
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








    logic
  call totalSupply from contract.
  const newToken: number = totalSupply + 1.
  const newURI: string =  `https://test-cf-97bfc-default-rtdb.firebaseio.com/NFTs/NFT${newToken}`
  mint new token with uri and address from frontend
*/