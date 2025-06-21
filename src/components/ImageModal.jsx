import './ImageModal.css';

const ImageModal = ({ image, title, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className="image-modal-backdrop" 
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="image-modal-content">
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <img src={image} alt={title} className="modal-image" />
        <p className="modal-title">{title}</p>
      </div>
    </div>
  );
};

export default ImageModal; 