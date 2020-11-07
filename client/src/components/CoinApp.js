import React, {useState, useEffect} from "react";
import CoinMarkup from "./CoinMarkup";
import axios from 'axios';

function CoinApp() {
    //hooks for coin fetch data
    const [coinPrice, setCoinPrice] = useState(0);
    const [coinHigh, setCoinHigh] = useState(0);
    const [coinLow, setCoinLow] = useState(0);

    //Coin fetch. needs optimisation
    async function coinRequest() {
        try {
            console.log('before the request');
            const res = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum?market_data=true');
            const price = res.data.market_data.current_price.usd;
            const dailyHigh = res.data.market_data.high_24h.usd;
            const dailyLow = res.data.market_data.low_24h.usd;
            //Set state
            setCoinPrice(price);
            setCoinHigh(dailyHigh);
            setCoinLow(dailyLow);
        } catch (error) {
            console.log(error);
        }
    }


    //useEffect
    useEffect(function () {
        setInterval(async () => {
          coinRequest();
        }, 7000);
    });
    


    /*
      ternary operator for coinData
    */
    return (
        <div>
            {coinPrice ? (
                <div>
                    <CoinMarkup coinPrice={coinPrice} coinHigh={coinHigh} coinLow={coinLow} />
                </div>
            ) : (
                    <div>
                        Loading
                    </div>
                )
            }
        </div>
    );
}

export default CoinData;

