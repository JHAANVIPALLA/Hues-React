import React from 'react';
import './styles/LandingPage.css'; // We'll create this CSS file next
import huesImage from './assets/huesImage.png';  // React handles this automatically


const LandingPage = () => {

  return (
    <div className="landing-container">
      <div className="welcome-message">
        Welcome to
      </div>
      <div className="logo">
        <img src={huesImage} alt="hues Logo" />
      </div>
      <button className="continue-btn" onClick={() => window.location.href='/main'}>
        Shop now
      </button>
    </div>
  );
}

export default LandingPage;
