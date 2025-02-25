import React, { useState, useEffect } from 'react';
import '../NavBar.css';

const NavBar = () => {
  const tagline = "Take your bite of information";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 150; // Speed of typing in milliseconds
    const resetDelay = 5000; // Time before restart

    if (index < tagline.length) {
      const timeout = setTimeout(() => {
        setText(tagline.slice(0, index + 1));
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText('');
        setIndex(0);
      }, resetDelay);
    }
  }, [index]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1 className="logo-text">
          <span className="stylized">I</span>nfo
          <span className="stylized">B</span>ites
        </h1>
      </div>
      <div className="tagline-container">
        <p className="tagline">{text}<span className="cursor">|</span></p>
      </div>
    </nav>
  );
};

export default NavBar;
