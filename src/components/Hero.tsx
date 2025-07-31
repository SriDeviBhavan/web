import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const heroImages = [
    './images/aloo paratha.jpg',
    './images/bbb.jpg',
    './images/coffee.jpg',
    './images/holige meal.jpg'
  ];

  const rotatingTexts = [
    "Idlis so soft, they don't need an intro.",
    "Chow Chow Bath with a side of emotion.",
    "Filter coffee that knows your name.",
    "Masala dosa that hugs your soul.",
    "Ghee rice that tastes like home.",
    "Pongal that warms your heart."
  ];

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Text rotation effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2500); // Change phrase every 2.5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[currentImageIndex]}
          alt="Sri Devi Bhavan Food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Background Texture */}
      <div className="absolute inset-0 bg-texture opacity-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 lg:p-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight tracking-wide drop-shadow-2xl text-shadow-lg">
              Sri Devi Bhavan
              <span className="block text-2xl md:text-3xl lg:text-4xl font-serif font-normal mt-4 text-sdb-gold-400 drop-shadow-2xl text-shadow-lg">
                A Legacy of Pure Vegetarian Taste
              </span>
            </h1>
            
            {/* Rotating Text */}
            <div className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed min-h-[2.5rem] flex items-center justify-center">
              <span className="text-sdb-gold-300 font-medium transition-opacity duration-500 opacity-100 drop-shadow-2xl text-shadow-lg">
                {rotatingTexts[textIndex]}
              </span>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-2xl text-shadow-lg">
              Serving families, travelers & food lovers since 1953
            </p>
            
            <button className="bg-sdb-gold-400 hover:bg-sdb-gold-500 text-filter-brown-800 text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-medium hover:shadow-strong transform hover:-translate-y-1">
              Explore Our Menu
            </button>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-sdb-gold-400 scale-125 shadow-medium' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 hover:scale-110'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-sdb-gold-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero; 