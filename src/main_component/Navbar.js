import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../image/logo.jpg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({ service: false, platforms: false, rules: false });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubmenu = (submenu) => {
    setSubmenuOpen((prev) => ({ ...prev, [submenu]: !prev[submenu] }));
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><Link to="home">HOME</Link></li>

          <li className="submenu-container" onMouseEnter={() => toggleSubmenu('service')} onMouseLeave={() => toggleSubmenu('service')}>
            <Link to="service">Service</Link >
            {submenuOpen.service && (
              <ul className="submenu">
                <li><Link to="reddyAnnalogin">Reddy Anna Login</Link></li>
                <li><Link to="cricket">Cricket Betting</Link></li>
                <li><Link to="football">Football Betting</Link></li>
                <li><Link to="horseRace">Horse Race Betting</Link></li>
                <li><Link to="tennis">Tennis Betting</Link></li>
                <li><Link to="indianCard">Indian Card Games</Link></li>
                <li><Link to="casino">Casino</Link></li>

              </ul>
            )}
          </li>

          <li className="submenu-container" onMouseEnter={() => toggleSubmenu('platforms')} onMouseLeave={() => toggleSubmenu('platforms')}>
            <a href="#">Platforms</a>
            {submenuOpen.platforms && (
              <ul className="submenu">
                <li><Link to="android">Android</Link></li>
                <li><Link to="ios">iOS</Link></li>
                <li><Link to="web">Web</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="about">About Us</Link></li>
          <li><Link to="sport">Sports ID</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><a href="#">Blog</a></li>

          <li className="submenu-container" onMouseEnter={() => toggleSubmenu('rules')} onMouseLeave={() => toggleSubmenu('rules')}>
            <a href="#">Rules</a>
            {submenuOpen.rules && (
              <ul className="submenu">
                <li><Link to="policy">Privacy Policy</Link></li>
                <li><Link to="termsAndcondition">Terms and Conditions</Link></li>
                <li><Link to="disclaimer">Disclaimer</Link></li>
              </ul>
            )}
          </li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
