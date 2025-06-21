import { useState } from 'react';
import './MemoryCard.css';
import ImageModal from './ImageModal';

const MemoryCard = ({ memory }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleImageClick = (e) => {
    e.stopPropagation(); // Prevent card flip when clicking image
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className={`memory-card ${isFlipped ? 'flipped' : ''} ${memory.isSpecial ? 'special-card' : ''}`}
        onClick={handleClick}
        style={{ backgroundColor: memory.color }}
      >
        <div className="card-inner">
          <div className="card-front">
            <div className="emoji">{memory.emoji}</div>
            <h3 className="title">{memory.title}</h3>
            <p className="date">{memory.date}</p>
          </div>
          <div className="card-back">
            <div className="back-content">
              {memory.isSpecial ? (
                <>
                  <div className="back-emoji">{memory.emoji}</div>
                  <div className="special-note">
                    <pre>{memory.note}</pre>
                  </div>
                </>
              ) : (
                <>
                  <div className="back-emoji">{memory.emoji}</div>
                  {memory.image && (
                    <div className="back-image">
                      <img 
                        src={memory.image} 
                        alt={memory.title} 
                        onClick={handleImageClick}
                        className="clickable-image"
                      />
                    </div>
                  )}
                  <p className="back-fact">{memory.fact}</p>
                  <p className="back-hint">Click to flip back!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {memory.image && !memory.isSpecial && (
        <ImageModal
          image={memory.image}
          title={memory.title}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default MemoryCard; 