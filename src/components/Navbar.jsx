import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/Prime-Logo_200x.avif'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
     setMenuOpen(false);
    };

  return (
    <nav className= {`nav ${scrolled ? 'scrolled' : ''}`}>
         <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
        </div>

        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <HashLink smooth to="/#drinks" onClick={() => setIsMenuOpen(false)}>DRINKS</HashLink> <hr />
                <HashLink smooth to="/#hydration" onClick={() => setIsMenuOpen(false)}>HYDRATION</HashLink> <hr />
                <HashLink smooth to="/#primeice" onClick={() => setIsMenuOpen(false)}>STICKS</HashLink> <hr />
                <HashLink smooth to="/#primeice" onClick={() => setIsMenuOpen(false)}>PRIME ICE</HashLink> <hr />
        </div>

        <div className="nav-left">
            <HashLink smooth to="/#drinks">DRINKS</HashLink>
            <HashLink smooth to="/#hydration">HYDRATION</HashLink>
            <HashLink smoothto="/#primeice">STICKS</HashLink>
            <HashLink smooth to="/#primeice">PRIME ICE</HashLink>
        </div>

        <div className="nav-center">
            <HashLink to="/" className="logo">
               <img src={logo} alt="Logo" className="logo-img" />
            </HashLink>
        </div>

        <div className="nav-right">
            <i className="ri-search-line search-icon"></i>
            <button className="nav-button">BUY PRIME</button>
        </div>
    </nav>
  )
}

export default Navbar