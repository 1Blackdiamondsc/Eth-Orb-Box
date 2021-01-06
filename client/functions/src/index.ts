import * as functions from 'firebase-functions';
import {Request, Response} from 'express';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const testAPI = functions.https.onRequest((req: Request, res: Response): void | undefined => {
  res.setHeader('Access-Control-Allow-Origin', 'https://test-cf-97bfc.web.app')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  if (req.method === 'OPTIONS') {
    //const freshInstance = await Web3. ;
    res.status(200).end();
    return;
  }
  else if (req.method === 'GET') {
    res.send([
      { one: "easy", two: "hard" },
    ]);
  }
  else if (req.method === 'POST') {
    const { account, instance } = req.query;
    //const freshInstance = await Web3. ;
    res.status(200).send([{ statusMsg: "NFT awarded post", account, instance }]);
  }


});
