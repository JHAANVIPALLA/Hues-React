import React from "react";
import './styles/Login.css';
import ImageSlider from './ImageSlider';
// import GoogleLogo from "./assets/GoogleLogo.png"; // Replace with actual Google logo

const Login = () => {
  return (
    <div className="login-container">
      <div className="slider-section">
        <ImageSlider />
      </div>
      <div className="form-section">
        <h2>Welcome to HuesbyTaara</h2>
        <form>
          <label style={{marginBottom: '0px'}}>Email or Username</label>
          <input type="text" placeholder="Enter your email" required />

          <label style={{marginBottom: '0px'}}>Password</label>
          <input type="password" placeholder="Enter your password" required />

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <div className="divider">or</div>

        {/* <button className="google-signin">
          <img src={GoogleLogo} alt="Google Logo" className="google-logo" />
          Sign in with Google
        </button> */}

        <p className="signin-link">
          New to HuesbyTaara? <a href="/register">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
