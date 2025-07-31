import React from 'react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '🌿',
      title: 'Authentic Recipes Since 1953',
      description: 'Traditional recipes passed down through generations'
    },
    {
      id: 2,
      icon: '🧂',
      title: 'In-house ground masalas',
      description: 'Freshly ground spices for authentic taste'
    },
    {
      id: 3,
      icon: '🔥',
      title: 'No reuse of oil',
      description: 'Fresh oil for every preparation'
    },
    {
      id: 4,
      icon: '👨‍👩‍👧‍👦',
      title: 'Family-owned, homely vibes',
      description: 'Warm hospitality and personal touch'
    },
    {
      id: 5,
      icon: '💰',
      title: 'Affordable & honest pricing',
      description: 'Quality food at reasonable prices'
    },
    {
      id: 6,
      icon: '🛕',
      title: 'Near KIA, NH-44 & tech parks',
      description: 'Conveniently located for travelers and professionals'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-golden-50 to-ivory-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
            Why People Love SDB
          </h2>
          <div className="w-24 h-1 bg-golden-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our commitment to quality, tradition, and customer satisfaction sets us apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-bold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-display font-bold text-gray-800 mb-4">
                Our Promise to You
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every dish at Sri Devi Bhavan is prepared with love, care, and the finest ingredients. 
                We maintain the highest standards of hygiene and quality to ensure you get nothing but 
                the best vegetarian food experience.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">100% Pure Vegetarian</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Fresh Ingredients</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-golden-100 rounded-full mb-4">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 mb-2">70+ Years of Excellence</h4>
              <p className="text-sm text-gray-600">Trusted by generations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 