import React from 'react';
import "./Coin.css";

const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">{price != null ? `$${price}` : 'N/A'}</p>
          <p className="coin-volume">{volume != null ? `$${volume.toLocaleString()}` : 'N/A'}</p>
          <p className={`coin-percent ${priceChange < 0 ? 'red' : 'green'}`}>
            {priceChange != null ? `${priceChange.toFixed(2)}%` : 'N/A'}
          </p>
          <p className="coin-marketcap">{marketcap != null ? `$${marketcap.toLocaleString()}` : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
