import React, { useState } from 'react';
import '../Modal.css'

const Modal = ({ isOpen, onClose, title, content, imageUrl, fetchImages, cityImages }) => {
  const [enlargedImage, setEnlargedImage] = useState(null);

  if (!isOpen) return null;

  const openEnlargedImage = (image) => {
    setEnlargedImage(image);
  };

  const closeEnlargedImage = () => {
    setEnlargedImage(null);
  };

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
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => openEnlargedImage(image)}
              className="gallery-image"
            />
          ))}
        </div>
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div className="enlarged-image-overlay">
          <div className="enlarged-image-content">
            <button onClick={closeEnlargedImage} className="enlarged-image-close-button">&times;</button>
            <img src={enlargedImage.urls.regular} alt={enlargedImage.alt_description} className="enlarged-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
