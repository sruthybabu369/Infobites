import React from 'react';
import '../Modal.css';

const Modal = ({ isOpen, onClose, title, content, imageUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>

        {/* Display city image if available, with limited height */}
        {imageUrl && <img src={imageUrl} alt="City" className="city-image" />}

        {/* Scrollable content section */}
        <div className="modal-body">
          <p>{content}</p>
        </div>

        {/* Close button */}
        <button onClick={onClose} className="modal-close-btn">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
