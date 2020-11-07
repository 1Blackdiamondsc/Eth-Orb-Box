import React from 'react';
import PropTypes from 'prop-types';
export default function CoinMarkup(props) {
    return (
        <>
            <h3>Market Data as per Coin Gecko. My question is, does your uncle own the market?</h3>
            <h3>Ethereum is currently ${props.coinPrice}</h3>
            <h3>With a 24hr high of ${props.coinHigh}, and a 24hr low of ${props.coinLow}</h3>
        </>
    )
}
CoinMarkup.propTypes = {
    coinPrice: PropTypes.number,
    coinHigh: PropTypes.number,
    coinLow: PropTypes.number
};