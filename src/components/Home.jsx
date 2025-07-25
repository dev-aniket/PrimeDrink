import React from 'react'
import "./Home.css"
import backgroundImg from '../assets/CoverImage.webp'

const Home = () => {
  return (
     <div id = '/home' className="home">
        <img src={backgroundImg} alt="Collector Background" className="home-bg-image" />
      <div className="home-content">
        <button className="home-button">COLLECT NOW</button>
        <p className="home-paragraph">
          NO PURCHASE NECESSARY: Open to legal residents of US, Canada, Mexico, UK, Australia, France. 16+ code must be redeemed by August 1. Code available while supplies last.
        </p>
      </div>
    </div>
  )
}

export default Home