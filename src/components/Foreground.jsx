import React from 'react';
import hydrationImg from '../assets/BottleCollection.png';
import hydrationPlusImg from '../assets/PrimeSticks.png';
import './Foreground.css';

const Foreground = () => {

  const handleShop = () =>{
    window.open('https://drinkprime.com/collections/hydration-drinks-featured', '_blank');
  }
  const handleHydration = () =>{
    window.open('https://drinkprime.com/collections/hydration-sticks-featured', '_blank');
  }
  return (
    <div className="foreground-container">
      <div className="card">
        <img src={hydrationImg} alt="Hydration Bottles" className="card-image" />
        <button className="card-button" onClick={handleShop}>SHOP HYDRATION</button>
      </div>
      <div className="card">
        <img src={hydrationPlusImg} alt="Hydration Sticks" className="card-image" />
        <button className="card-button" onClick={handleHydration}>SHOP HYDRATION+</button>
      </div>
    </div>
  );
};

export default Foreground;
