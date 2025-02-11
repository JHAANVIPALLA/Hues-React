import React, { useEffect, useState } from 'react';
import './styles/ImageSlider.css';
import huesBg from "./assets/huesBg.jpg";
import huesBg1 from "./assets/huesBg1.png";
import huesBg2 from "./assets/huesBg2.jpg";

const images = [huesBg1, huesBg, huesBg2];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Slide every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="slider-container">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
