import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';
import FloatingMascot from "./FloatingMascot"; // ✅ Import FloatingMascot
import '../InfoBites.css'; // Renamed CSS file to match project

const InfoBites = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [infoData, setInfoData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [relatedImages, setRelatedImages] = useState([]); // State to store images from Unsplash

  const handleSearch = async () => {
    setLoading(true);
    try {
      const searchQuery = searchTerm.trim();
      await fetchInfo(searchQuery);
      setIsModalOpen(true); // Open modal after fetching info
      setLoading(false);
    } catch (error) {
      console.error('Error fetching information:', error);
      setLoading(false);
    }
  };

  // Fetch brief information from Wikipedia API
  const fetchInfo = async (query) => {
    try {
      const response = await axios.get(`https://en.wikipedia.org/api/rest_v1/page/summary/${query}`);
      setInfoData(response.data);
    } catch (error) {
      console.error('Error fetching information:', error);
      setInfoData(null);
    }
  };

  // Fetch related images from Unsplash
  const fetchImages = async (query) => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: { query, per_page: 5 },
        headers: {
          Authorization: `Client-ID oQ4-m9HqQZwhReN1G4eL-EtDpDcYlQtJCoH3PEhs7pY`,
        },
      });
      setRelatedImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
      setRelatedImages([]);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setRelatedImages([]); // Clear images when modal closes
  };

  return (
    <div className="info-bites">
      <FloatingMascot /> {/* ✅ Added FloatingMascot animation */}
      
      <h1>InfoBites</h1>
      <p>Get quick insights and images on any topic!</p>

      <input
        type="text"
        placeholder="Search for a topic..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!searchTerm}>
        Search
      </button>

      {loading && <div className="loading-spinner">Loading...</div>}

      {/* Modal for displaying information */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          title={infoData?.title || 'No Title'}
          content={infoData ? infoData.extract : "No information available."}
          imageUrl={infoData?.thumbnail?.source || null}
          fetchImages={() => fetchImages(infoData?.title || searchTerm)}
          topicImages={relatedImages || []}
        />
      )}
    </div>
  );
};

export default InfoBites;
