import React from 'react';
import PropTypes from 'prop-types';


//using React.memo to compare previous state to next state to avoid unnecessary re-renders.
function EthMarkup({ coinPrice, coinHigh, coinLow }) {
    return (
        <>
            <h3>Market Data as per Coin Gecko. My question is, does your uncle own the market?</h3>
            <h3>Ethereum is currently ${coinPrice}</h3>
            <h3>With a 24hr high of ${coinHigh}, and a 24hr low of ${coinLow}</h3>
        </>
    )
}

export default React.memo(EthMarkup);


EthMarkup.propTypes = {
    coinPrice: PropTypes.number,
    coinHigh: PropTypes.number,
    coinLow: PropTypes.number
};