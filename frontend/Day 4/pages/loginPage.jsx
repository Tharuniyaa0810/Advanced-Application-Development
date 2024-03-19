import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/css/loginPage.css'; // Import your custom CSS file

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Simulate successful login (you can replace this with actual authentication logic)
    // For demonstration, directly compare the email to 'admin@gmail.com'
    if (email === 'admin@gmail.com') {
      navigate("/admin"); // Navigate to the admin page
    } else {
      navigate("/"); // Navigate to the home page
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form">
        <p className="welcome-back">Happy to have you back!</p>
        <h2 className="login-heading">Login</h2>
        <form className="login-form-fields" onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email" 
            className="login-input" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="login-input" 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">Submit</button>
        </form>
        <div className="login-links">
          <p className="forgot-password">Forgot Password?</p>
          <p className="signup-link">New to our Platform? <span className="signup-text"><Link to="/signup">Register here</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
