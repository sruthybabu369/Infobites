import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import '../CityTour.css';

const CityTour = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cityInfo, setCityInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [cityImages, setCityImages] = useState([]); // State to store images from Unsplash

  const handleSearch = async () => {
    setLoading(true);
    try {
      const searchQuery = searchTerm.trim();
      await fetchCityInfo(searchQuery);
      setIsModalOpen(true); // Open modal after fetching info
      setLoading(false);
    } catch (error) {
      console.error('Error fetching city details:', error);
      setLoading(false);
    }
  };

  // Fetch city details from Wikipedia
  const fetchCityInfo = async (cityName) => {
    try {
      const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${cityName}`);
      setCityInfo(response.data);
    } catch (error) {
      console.error('Error fetching city info:', error);
      setCityInfo(null);
    }
  };

  // Fetch images from Unsplash when "Images" button is clicked
  const fetchCityImages = async (cityName) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query: cityName, per_page: 5 },
        headers: {
          Authorization: `Client-ID oQ4-m9HqQZwhReN1G4eL-EtDpDcYlQtJCoH3PEhs7pY`,
        },
      });
      setCityImages(response.data.results);
    } catch (error) {
      console.error('Error fetching city images:', error);
      setCityImages([]);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCityImages([]); // Clear images when modal closes
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

      {/* Modal for city details */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={`Explore ${cityInfo?.title || 'City'}`}
          content={cityInfo ? cityInfo.extract : "No additional information available."}
          imageUrl={cityInfo?.thumbnail?.source || null}
          fetchImages={() => fetchCityImages(cityInfo?.title || searchTerm)}
          cityImages={cityImages}
        />
      )}
    </div>
  );
};

export default CityTour;
