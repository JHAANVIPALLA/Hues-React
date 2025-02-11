import React, { useState } from 'react';
import './styles/Register.css';
import ImageSlider from './ImageSlider';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset errors when user starts typing
    setErrors({ ...errors, [name]: '' });
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = { password: '', confirmPassword: '' };

    if (!validatePassword(formData.password)) {
      newErrors.password =
        'Password must be at least 8 characters, including one special character and one number.';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      console.log('User registered:', formData);
      // Call API or further registration logic here
    }
  };

  return (
    <div className="register-container">
      <div className="slider-section1">
        <ImageSlider />
      </div>
      <div className="form-section1">
        <form onSubmit={handleSubmit}>
          <label style={{marginBottom: '-3px'}}>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label style={{marginBottom: '-3px'}}>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label style={{marginBottom: '-3px'}}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error-message">{errors.password}</p>}

          <label style={{marginBottom: '-3px'}}>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}

          <button type="submit" className="register-btn">Sign Up</button>
        </form>

        <div className="divider1">or</div>

        <p className="signup-link">
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
