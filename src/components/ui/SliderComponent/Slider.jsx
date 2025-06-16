import React, { useState, useEffect, useRef } from 'react';
import './slider.css'

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
      }, 5000);
    }
  };

  // Stop autoscrolling
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Set up autoscrolling on mount and clean up on unmount
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [totalSlides]);

  // Handle mouse enter to stop autoscrolling
  const handleMouseEnter = () => {
    stopAutoSlide();
  };

  // Handle mouse leave to restart autoscrolling from zero
  const handleMouseLeave = () => {
    stopAutoSlide(); // Clear any existing interval
    startAutoSlide(); // Start a new interval to reset timer
  };

  // Function to go to a specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <div
      className="slider"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide fade">
            {/* <div className="numbertext">{index + 1} / {totalSlides}</div> */}
            <a href="#">
              <img src={slide.image} alt={`Poster ${index + 1}`} height="200" />
            </a>
            {/* <div className="slide_caption">{slide.caption}</div> */}
          </div>
        ))}
      </div>
      <div className="slider_navigation">
        <div className="prev" onClick={prevSlide}>❮</div>
        <div className="next" onClick={nextSlide}>❯</div>
      </div>
      <div className="pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`page_dot ${index === currentSlide ? 'active_dot' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;