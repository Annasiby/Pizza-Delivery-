
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="./images/logo.png" alt="App Logo" className="logo" />


      <a href="/">Home</a>
      <a href="/Login">Login</a>
      <a href="/Signup">Sign Up</a>
    </nav>
  );
}

export default Navbar;
