import React from 'react';

const Specials: React.FC = () => {
  const specials = [
    {
      id: 1,
      name: 'Aloo Paratha',
      description: 'Stuffed North Indian delight with homemade curd',
      image: './images/aloo paratha.jpg',
      price: '₹120'
    },
    {
      id: 2,
      name: 'Bisibele Bath',
      description: 'Spicy, soul-hugging Karnataka classic',
      image: './images/bbb.jpg',
      price: '₹120'
    },
    {
      id: 3,
      name: 'Filter Coffee',
      description: 'Strong, hot, served in dabra tumbler',
      image: './images/coffee.jpg',
      price: '₹20'
    },
    {
      id: 4,
      name: 'Holige Meal',
      description: 'Festive sweet on banana leaf',
      image: './images/holige meal.jpg',
      price: '₹200'
    }
  ];

  return (
    <section id="menu" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Bestsellers at SDB
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes that have been delighting customers for generations
          </p>
        </div>

        {/* Specials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specials.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-restaurant-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Order Button */}
                <a
                  href="https://www.zomato.com/bangalore/sridevi-bhavan-hotel-devanahalli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 w-full bg-golden-500 hover:bg-golden-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Order Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Menu Button */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specials; 