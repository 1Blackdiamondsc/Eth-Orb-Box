import functions = require('firebase-functions');
import express = require('express');
import cors = require('cors');

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
  const { account, instance } = req.query;
    //const freshInstance = await Web3. ;
    res.status(201).send([{ statusMsg: "NFT awarded post", account, instance }]);
})


export const testAPI = functions.https.onRequest(app);
