// src/components/Footer.jsx
import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 City Explorer. All rights reserved.</p>
      <p>
        Follow us on <a href="https://twitter.com">Twitter</a> |{' '}
        <a href="https://facebook.com">Facebook</a>
      </p>
    </footer>
  );
};

export default Footer;
