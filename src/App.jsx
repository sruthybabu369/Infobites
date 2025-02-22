// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import InfoBites from './components/InfoBites';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <InfoBites />
      
      <Footer />
    </div>
  );
}

export default App;
