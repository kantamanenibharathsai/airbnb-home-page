import React, { FC, useState } from 'react';
import './Styles.css';


const items = [
  'https://via.placeholder.com/600x300?text=Slide+1',
  'https://via.placeholder.com/600x300?text=Slide+2',
  'https://via.placeholder.com/600x300?text=Slide+3',
  'https://via.placeholder.com/600x300?text=Slide+4',
  'https://via.placeholder.com/600x300?text=Slide+5',
  'https://via.placeholder.com/600x300?text=Slide+6',
  'https://via.placeholder.com/600x300?text=Slide+7',
];

const Carousel: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bulletsToShow = 5;

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
  };

  const getVisibleBullets = () => {
    if (items.length <= bulletsToShow) {
      return items.map((_, index) => index);
    } else {
      if (currentIndex < bulletsToShow - 1) return Array.from({ length: bulletsToShow }, (_, index) => index);
      else if (currentIndex > items.length - bulletsToShow) return Array.from({ length: bulletsToShow }, (_, index) => items.length - bulletsToShow + index);
      else return Array.from({ length: bulletsToShow }, (_, index) => currentIndex - Math.floor(bulletsToShow / 2) + index);

    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${item})` }}
          ></div>
        ))}
      </div>
      {currentIndex > 0 && (
        <button className="carousel-button left" onClick={handlePrevClick}>
          &#10094;
        </button>
      )}
      {currentIndex < items.length - 1 && (
        <button className="carousel-button right" onClick={handleNextClick}>
          &#10095;
        </button>
      )}
      <div className="pagination-container">
        {getVisibleBullets().map((bulletIndex, idx) => (
          <div
            key={bulletIndex}
            className={`pagination-bullet ${bulletIndex === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(bulletIndex)}
            style={{
              width: bulletIndex === currentIndex ? '15px' : `${10 - Math.abs(idx - 2)}px`,
              height: bulletIndex === currentIndex ? '15px' : `${10 - Math.abs(idx - 2)}px`,
              opacity: bulletIndex === currentIndex ? 1 : 0.5,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
