import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: '/images/aloo paratha.jpg', alt: 'Aloo Paratha', category: 'North Indian' },
    { src: '/images/bbb.jpg', alt: 'Bisibele Bath', category: 'South Indian' },
    { src: '/images/coffee.jpg', alt: 'Filter Coffee', category: 'Beverages' },
    { src: '/images/holige meal.jpg', alt: 'Holige Meal', category: 'Traditional' },
    { src: '/images/masala dosa.jpg', alt: 'Masala Dosa', category: 'South Indian' },
    { src: '/images/idli vada.jpg', alt: 'Idli Vada', category: 'South Indian' },
    { src: '/images/paneer butter masala.jpg', alt: 'Paneer Butter Masala', category: 'North Indian' },
    { src: '/images/kesari bath.jpg', alt: 'Kesari Bath', category: 'Desserts' },
    { src: '/images/khara bath.jpg', alt: 'Khara Bath', category: 'South Indian' },
    { src: '/images/pongal.jpg', alt: 'Pongal', category: 'South Indian' },
    { src: '/images/carrot halwa.jpg', alt: 'Carrot Halwa', category: 'Desserts' },
    { src: '/images/curd vada.jpg', alt: 'Curd Vada', category: 'South Indian' },
    { src: '/images/plain dosa.jpg', alt: 'Plain Dosa', category: 'South Indian' },
    { src: '/images/butter masala dosa.jpg', alt: 'Butter Masala Dosa', category: 'South Indian' },
    { src: '/images/cheese masala dosa .jpg', alt: 'Cheese Masala Dosa', category: 'South Indian' },
    { src: '/images/ghee rice.jpg', alt: 'Ghee Rice', category: 'Rice Dishes' },
    { src: '/images/fried rice.jpg', alt: 'Fried Rice', category: 'Indo-Chinese' },
    { src: '/images/paneer rice .jpg', alt: 'Paneer Rice', category: 'Rice Dishes' },
    { src: '/images/noodles.jpg', alt: 'Noodles', category: 'Indo-Chinese' },
    { src: '/images/crispy paneer.jpg', alt: 'Crispy Paneer', category: 'North Indian' },
    { src: '/images/mangalore bajji.jpg', alt: 'Mangalore Bajji', category: 'Snacks' },
    { src: '/images/ghee thate idli.jpg', alt: 'Ghee Thate Idli', category: 'South Indian' },
    { src: '/images/ghee pudi thatte .jpg', alt: 'Ghee Pudi Thatte', category: 'South Indian' },
    { src: '/images/button idli .jpg', alt: 'Button Idli', category: 'South Indian' },
    { src: '/images/khali dosa .jpg', alt: 'Khali Dosa', category: 'South Indian' },
    { src: '/images/neer dosa.jpg', alt: 'Neer Dosa', category: 'South Indian' },
    { src: '/images/ghe onion dossa.jpg', alt: 'Ghee Onion Dosa', category: 'South Indian' },
    { src: '/images/paneer masala dosa .jpg', alt: 'Paneer Masala Dosa', category: 'South Indian' },
    { src: '/images/chow chow bath.jpg', alt: 'Chow Chow Bath', category: 'South Indian' },
    { src: '/images/dal khichdi.jpg', alt: 'Dal Khichdi', category: 'North Indian' },
    { src: '/images/mbuns.jpg', alt: 'Mangalore Buns', category: 'South Indian' },
    { src: '/images/onion.jpg', alt: 'Onion Dosa', category: 'South Indian' },
    { src: '/images/3idli.jpg', alt: 'Idli Set', category: 'South Indian' },
    { src: '/images/idli2.jpg', alt: 'Idli', category: 'South Indian' },
    { src: '/images/1vada.jpg', alt: 'Vada', category: 'South Indian' },
    { src: '/images/khali dosaa2.jpg', alt: 'Plain Dosa', category: 'South Indian' },
    { src: '/images/coffee1.jpg', alt: 'Coffee', category: 'Beverages' },
    { src: '/images/chocolate milkshake .jpg', alt: 'Chocolate Milkshake', category: 'Beverages' },
    { src: '/images/dry fruit milkshake .jpg', alt: 'Dry Fruit Milkshake', category: 'Beverages' },
    { src: '/images/oreo milkshake.jpg', alt: 'Oreo Milkshake', category: 'Beverages' },
    { src: '/images/grape juice.jpg', alt: 'Grape Juice', category: 'Beverages' },
    { src: '/images/papaya juice.jpg', alt: 'Papaya Juice', category: 'Beverages' },
    { src: '/images/pineapple juice.jpg', alt: 'Pineapple Juice', category: 'Beverages' },
    { src: '/images/lime juice.jpg', alt: 'Lime Juice', category: 'Beverages' },
    { src: '/images/mint lime juice.jpg', alt: 'Mint Lime Juice', category: 'Beverages' },
    { src: '/images/moosambi.jpg', alt: 'Moosambi Juice', category: 'Beverages' },
    { src: '/images/nannari.jpg', alt: 'Nannari Juice', category: 'Beverages' },
    { src: '/images/kesari falooda.png', alt: 'Kesari Falooda', category: 'Desserts' },
    { src: '/images/blackcurrant.png', alt: 'Blackcurrant Ice Cream', category: 'Desserts' },
    { src: '/images/green pista.png', alt: 'Green Pista Ice Cream', category: 'Desserts' },
    { src: '/images/butterscotch.png', alt: 'Butterscotch Ice Cream', category: 'Desserts' },
    { src: '/images/mango.png', alt: 'Mango Ice Cream', category: 'Desserts' }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Our Food Gallery
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual feast of our authentic vegetarian dishes
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-32 md:h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-sm font-semibold mb-1">{image.alt}</h3>
                  <p className="text-xs text-golden-300">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Selected food"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-golden-400 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 