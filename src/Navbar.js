import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles/Navbar.css';
import huesLogo from './assets/huesLogo.png';
import CartLogo from './assets/CartLogo.png';
import HeartImg from './assets/HeartLogo.png';
import HeartHover from './assets/HeartHover.png';
import CartHover from './assets/CartHover.png';

const Navbar = () => {
  const currentLocation = useLocation(); // Rename 'location' to 'currentLocation'

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={huesLogo} alt="Hues Logo" className="navbar-logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li className={`home ${currentLocation.pathname === "/main" ? "active" : ""}`}>
          <Link to="/main">Home</Link>
        </li>
        <li className={`login ${currentLocation.pathname === "/login" ? "active" : ""}`}>
          <Link to="/login">Login</Link>
        </li>
        <li className={`favorites ${currentLocation.pathname === "/favorites" ? "active" : ""}`}>
        <Link to="/favorites">
            <img 
              src={currentLocation.pathname === "/favorites" ? HeartHover : HeartImg} 
              alt="Favorites" 
              className="navbar-fav" 
            />
          </Link>
        </li>
        <li className={`cart ${currentLocation.pathname === "/cart" ? "active" : ""}`}>
        <Link to="/cart">
            <img 
              src={currentLocation.pathname === "/cart" ? CartHover : CartLogo} 
              alt="Cart" 
              className="navbar-cart"
              style={{marginBottom: "-16px"}}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar
