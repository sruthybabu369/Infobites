// src/components/NavBar.jsx
import React from 'react';
import '../NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>City Explorer</h1>
      </div>
      <div className="navbar-links">
        <a href="#tour">City Tour</a>
        <a href="#about">About</a>
        
      </div>
    </nav>
  );
};

export default NavBar;
