import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import { Line } from 'react-chartjs-2'
//using React.memo to compare previous state to next state to avoid unnecessary re-renders.
//I will most likely be writing some more grid components in the "Dumb" folder for production.

function EthMarkup({ marketPrice }) {
    const data = {
        labels: ['35 secs ago', '30 secs ago', '25 secs ago','20 secs ago', '15 secs ago', '10 secs ago', '5 secs ago', 'now'],
        datasets: [
            {
                label: 'Eth Market Price (CoinGecko, USD)',
                data: marketPrice
            }
        ]

    }
    const options = {
        title: {
            display: true,
            text: 'Ethereum Price in USD'
        }
    }


    return (
        <>
        <Line data={data} />
            <Grid
                container spacing={4} direction="row" alignItems="flex-start"
                justify="space-around" direction="row" spacing={0} wrap="nowrap"
            >

                <Grid container item direction="column" xs={4}>
                    <Grid item>
                        <Typography color='primary'>
                            Market Data as per Coin Gecko.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography color='primary'>
                            My question is, does your uncle own the market?
                        </Typography>
                    </Grid>

                </Grid>
         

            </Grid>


        </>
    )
}

export default React.memo(EthMarkup);


EthMarkup.propTypes = {
    coinPrice: PropTypes.number,
    coinHigh: PropTypes.number,
    coinLow: PropTypes.number,
    marketPrice: PropTypes.arrayOf(PropTypes.number),
};