// src/App.jsx
import React from 'react';
import NavBar from './components/NavBar';
import CityTour from './components/CityTour';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CityTour />
      
      <Footer />
    </div>
  );
}

export default App;
