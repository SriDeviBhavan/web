import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-ivory-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-800 mb-4">
                Our Story
              </h2>
              <div className="w-24 h-1 bg-golden-500 mx-auto lg:mx-0 mb-8"></div>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Founded in 1953 in Devanahalli, <strong className="text-restaurant-red-600">Sri Devi Bhavan</strong> is a family-run vegetarian hotel rooted in tradition.
              </p>
              
              <p>
                We serve nostalgic South Indian flavors, banana leaf meals, North Indian delights, and Indo-Chinese treats — all without artificial colors or reused oil.
              </p>
              
              <p>
                Our chefs grind the masalas by hand, make in-house powders, and uphold a 'no compromise' policy. Loved by students, techies, elders, and travelers alike.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-600">70+</div>
                <div className="text-sm text-gray-600">Years of Tradition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-restaurant-red-600">100%</div>
                <div className="text-sm text-gray-600">Pure Vegetarian</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-golden-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/holige meal.jpg"
                alt="Traditional South Indian Meal"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-golden-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-restaurant-red-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 