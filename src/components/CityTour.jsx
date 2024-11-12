import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import '../CityTour.css';

const CityTour = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cityInfo, setCityInfo] = useState(null);
  const [cityFact, setCityFact] = useState(''); // New state for city fact

  const handleCitySelection = async (cityName, countryName) => {
    setSelectedCity({ name: cityName, country: countryName });
    setIsModalOpen(true);
    await fetchCityInfo(cityName, countryName);
    await fetchCityFact(cityName);  // Fetch city fact
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities`,
        {
          params: { namePrefix: searchTerm, limit: 5 },
          headers: {
            'X-RapidAPI-Key': 'b96b25e0a7msha5bfc2369417048p19261djsn07e98c45dd93',
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
          },
        }
      );
      setCities(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cities:', error);
      setLoading(false);
    }
  };

  const fetchCityInfo = async (cityName, countryName) => {
    try {
      const searchQuery = `${cityName}, ${countryName}`;
      const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${searchQuery}`);
      setCityInfo(response.data);
    } catch (error) {
      console.error('Error fetching city info:', error);
      setCityInfo(null);
    }
  };

  const fetchCityFact = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.api-ninjas.com/v1/facts?city=${cityName}`,
        {
          headers: {
            'X-Api-Key': 'your-api-ninja-key',
          },
        }
      );
      setCityFact(response.data.fact); // Set the random fact
    } catch (error) {
      console.error('Error fetching city fact:', error);
      setCityFact("No interesting fact found."); // Default message
    }
  };

  return (
    <div className="city-tour">
      <h1>Discover Cities</h1>
      <p>Explore brief highlights and insights for cities around the world.</p>

      <input
        type="text"
        placeholder="Search for a city..."
        className="city-search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!searchTerm}>
        Search
      </button>

      {loading && <div className="loading-spinner">Loading...</div>}

      <div className="city-list">
        {cities.map((city) => (
          <button
            key={city.id}
            onClick={() => handleCitySelection(city.name, city.country)}
            className="city-button"
          >
            {city.name}, {city.country}
          </button>
        ))}
      </div>

      {selectedCity && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={`Explore ${selectedCity.name}`}
          content={cityInfo ? `${cityInfo.extract} 

          ${cityFact}` : "No additional information available."}
          imageUrl={cityInfo && cityInfo.thumbnail ? cityInfo.thumbnail.source : null}
        />
      )}
    </div>
  );
};

export default CityTour;
