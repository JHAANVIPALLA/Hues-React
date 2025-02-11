import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LandingPage from './LandingPage';
import Navbar from './Navbar';
import MainPage from './MainPage';
import Login from './Login';
import Register from './Register';
import Cart from './Cart';
import Favorites from './Favorites';
import './App.css';

const App = () => {
  const location = useLocation();
  
  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

  return (
    <div className={isLandingPage ? '' : 'background-image'}>
      {/* Render Navbar only if the current route is not the landing page */}
      {location.pathname !== "/" && <Navbar />}
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

const Root = () => (
  <Router>
    <App />
  </Router>
);

export default Root;
