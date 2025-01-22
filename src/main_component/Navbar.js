import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../image/logo.jpg';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
      <img src={logo} alt="logo" />
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="home">HOME</Link></li>
        <li><Link to="service">Service</Link></li>
        <li><a href="#">Platforms</a></li>
        <li><Link to="about">About Us</Link></li>
        <li><Link to="sport">Sports ID</Link> </li>
        <li><Link to="contact">Contact</Link> </li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Rules</a></li>


      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;