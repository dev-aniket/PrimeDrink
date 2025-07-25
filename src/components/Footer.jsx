import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/products">DRINKS</Link>
          <Link to="/hydration">HYDRATION</Link>
          <Link to="/primeice">STICKS</Link>
          <Link to="/primeice">PRIME ICE</Link>
        </div>
        <div className="footer-note">
          <p>Coded by Aniket Mallick</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
