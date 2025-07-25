import React from 'react';
import hydrationImg from '../assets/BottleCollection.png';
import hydrationPlusImg from '../assets/PrimeSticks.png';
import './Foreground.css';

const Foreground = () => {
  return (
    <div className="foreground-container">
      <div className="card">
        <img src={hydrationImg} alt="Hydration Bottles" className="card-image" />
        <button className="card-button">SHOP HYDRATION</button>
      </div>
      <div className="card">
        <img src={hydrationPlusImg} alt="Hydration Sticks" className="card-image" />
        <button className="card-button">SHOP HYDRATION+</button>
      </div>
    </div>
  );
};

export default Foreground;
