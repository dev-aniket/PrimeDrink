import React from 'react'
import './PrimeIce.css';
import Primeice from '../assets/PrimeICE.webp'
import card from '../assets/PrimeIceSugarVitamin.webp'



const PrimeIce = () => {
  return (
     <section id='primeice' className="hydration-section">
       <h1 className="hydration-title2">PRIME ICE</h1>
         <div className="foreground-container">
              <div className="card">
                <img src={Primeice} alt="Hydration Bottles" className="card-image" />
              </div>
              <div className="card">
                <img src={card} alt="Hydration Sticks" className="card-image" />
                <button className="card-button">SHOP HYDRATION+</button>
              </div>
            </div>
      </section>
  )
}

export default PrimeIce