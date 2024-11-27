import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../assets/login.css";

const Auth = ({ setUser }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate hook

  const dummyData = [
    { email: 'user@example.com', password: 'password123', name: 'John Doe' },
    { email: 'admin@example.com', password: 'admin123', name: 'Admin' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Email and Password are required');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const user = dummyData.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      setUser(user.name); // Set the logged-in user's name
      setSuccessMessage(isSignup ? 'Sign up successful! Please log in.' : 'Login successful!');
      setFormData({
        name: '',
        email: '',
        password: '',
      });
      navigate('/'); // Redirect to the home page after successful login
    } else {
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setFormData({
      name: '',
      email: '',
      password: '',
    });
    setError('');
    setSuccessMessage('');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="auth-container">
      <h2>{isSignup ? 'Signup' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="password-toggle-btn"
            >
              {passwordVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <button type="submit" disabled={loading}>
          {loading ? (
            <span className="spinner">🔄</span>
          ) : (
            isSignup ? 'Sign Up' : 'Login'
          )}
        </button>
      </form>
      <p onClick={toggleMode} className="toggle-mode">
        {isSignup ? 'Already have an account? Login' : 'Don’t have an account? Signup'}
      </p>
    </div>
  );
};

export default Auth;
