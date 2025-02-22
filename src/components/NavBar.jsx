import React from 'react';
import '../NavBar.css';
import { FaInfoCircle } from 'react-icons/fa';  // Importing an info icon

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <FaInfoCircle className="info-icon" />
        <h1 className="logo-text">InfoBites</h1>
      </div>
    </nav>
  );
};

export default NavBar;
