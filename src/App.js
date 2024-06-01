import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Coin';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=aud&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
    .then(res => {
      setCoins(res.data)
      console.log(res.data);
    }).catch(error => alert('error'))
  }, []);
 
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <div className='coin-app'>
      <h1>Crypto Price Tracker</h1>
      <br/>
      <div className='coin-search'>
        <h2 className='coin-text'>Search a Coin</h2>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Enter Coin'
          />
        </form>
      </div>

      <div className="coin-header">
          <div>Coin Name</div>
          <div>Coin Code</div>
          <div>Price</div>
          <div>Volume</div>
          <div>Price Change</div>
          <div>Market Cap</div>
        </div>

   
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;