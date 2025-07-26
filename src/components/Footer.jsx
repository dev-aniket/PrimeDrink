import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-links">
          <HashLink smooth to="/#product">DRINKS</HashLink>
          <HashLink smooth to="/#hydration">HYDRATION</HashLink>
          <HashLink smooth to="/#primeice">STICKS</HashLink>
          <HashLink smooth to="/#primeice">PRIME ICE</HashLink>
        </div>
        <div className="footer-note">
          <p>Coded by Aniket Mallick</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
