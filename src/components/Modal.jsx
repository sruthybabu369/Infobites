import React from 'react';

const Modal = ({ isOpen, onClose, title, content, imageUrl, fetchImages, cityImages }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close-button">&times;</button>
        <h2>{title}</h2>
        {imageUrl && <img src={imageUrl} alt={`${title} thumbnail`} className="city-thumbnail" />}
        <p>{content}</p>

        {/* Images Button */}
        <button onClick={fetchImages} className="images-button">Images</button>

        {/* Display City Images */}
        <div className="image-gallery">
          {cityImages.map((image) => (
            <img key={image.id} src={image.urls.small} alt={image.alt_description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
