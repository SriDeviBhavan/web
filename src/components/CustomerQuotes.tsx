import React, { useState, useEffect } from 'react';

const CustomerQuotes: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      id: 1,
      text: "Their idli-sambar combo is magic. It tastes like childhood memories.",
      author: "Priya Sharma",
      location: "Bangalore",
      rating: 5
    },
    {
      id: 2,
      text: "The sambar itself is a wonder – ground in-house, warm, soulful.",
      author: "Rajesh Kumar",
      location: "Devanahalli",
      rating: 5
    },
    {
      id: 3,
      text: "Best vegetarian food I've had in years. Authentic taste and reasonable prices.",
      author: "Meera Patel",
      location: "Mumbai",
      rating: 5
    },
    {
      id: 4,
      text: "A must-visit place for anyone traveling to Bangalore. Pure vegetarian heaven!",
      author: "Arun Singh",
      location: "Delhi",
      rating: 5
    },
    {
      id: 5,
      text: "The filter coffee here is exactly how my grandmother used to make it.",
      author: "Lakshmi Devi",
      location: "Chennai",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <span key={i} className="text-golden-500">★</span>
    ));
  };

  return (
    <section className="section-padding bg-gradient-to-br from-restaurant-red-50 to-golden-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        {/* Quotes Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Display */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center">
              <div className="mb-6">
                <span className="text-6xl text-golden-300">"</span>
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-serif italic">
                {quotes[currentQuote].text}
              </blockquote>
              
              <div className="flex items-center justify-center space-x-1 mb-4">
                {renderStars(quotes[currentQuote].rating)}
              </div>
              
              <div className="text-center">
                <cite className="text-lg font-semibold text-gray-800 not-italic">
                  {quotes[currentQuote].author}
                </cite>
                <p className="text-gray-600 text-sm">{quotes[currentQuote].location}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote 
                      ? 'bg-golden-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentQuote((prev) => (prev + 1) % quotes.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-600 mb-2">4.8★</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-restaurant-red-600 mb-2">1000+</div>
            <div className="text-sm text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-golden-600 mb-2">70+</div>
            <div className="text-sm text-gray-600">Years of Service</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-restaurant-red-600 mb-2">100%</div>
            <div className="text-sm text-gray-600">Pure Vegetarian</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerQuotes; 