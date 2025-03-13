import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"; // Ensure this file exists

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Left Pane - Image */}
        <div className="login-image">
          <img src="images/login_img.jpg" alt="Login" />
        </div>

        {/* Right Pane - Form */}
        <div className="login-form">
          <h2 className="login-title">Login</h2>
          
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="login-button">Login</button>

            {/* Signup Redirect */}
            <p className="signup-text">
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
