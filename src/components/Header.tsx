import React, { useState } from 'react';

interface HeaderProps {
  onOrderClick?: () => void;
  currentPage?: string;
  onBackToHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick, currentPage = 'home', onBackToHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-cream-white-50 shadow-soft sticky top-0 z-50 border-b border-sdb-gold-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="./logo.png" 
              alt="Sri Devi Bhavan" 
              className="h-12 w-auto md:h-16"
            />
            <div className="ml-4 hidden sm:block">
              <h1 className="text-xl md:text-2xl font-display font-bold text-filter-brown-800 tracking-wide">Sri Devi Bhavan</h1>
              <p className="text-xs md:text-sm text-filter-brown-600">Pure Veg • Since 1953 • Devanahalli</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          {currentPage === 'home' && (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-filter-brown-700 hover:text-leaf-green-600 font-semibold transition-colors duration-200 text-lg tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-6">
            {currentPage === 'home' ? (
              <button
                onClick={onOrderClick}
                className="bg-sdb-gold-400 hover:bg-sdb-gold-500 text-filter-brown-800 px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-medium hover:shadow-strong transform hover:-translate-y-1"
              >
                🍽️ Order Online
              </button>
            ) : (
              <button
                onClick={onBackToHome}
                className="bg-filter-brown-700 hover:bg-filter-brown-800 text-cream-white-50 px-8 py-3 rounded-xl font-semibold transition-all duration-200 shadow-medium hover:shadow-strong transform hover:-translate-y-1"
              >
                ← Back to Home
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-lg hover:bg-sdb-gold-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6 text-filter-brown-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-sdb-gold-200 py-6 bg-cream-white-50">
            <nav className="flex flex-col space-y-6">
              {currentPage === 'home' ? (
                <>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-filter-brown-700 hover:text-leaf-green-600 font-semibold transition-colors duration-200 text-lg tracking-wide"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <button 
                    className="bg-sdb-gold-400 hover:bg-sdb-gold-500 text-filter-brown-800 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-medium w-full mt-6"
                    onClick={() => {
                      setIsMenuOpen(false);
                      onOrderClick?.();
                    }}
                  >
                    🍽️ Order Online
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onBackToHome?.();
                  }}
                  className="bg-filter-brown-700 hover:bg-filter-brown-800 text-cream-white-50 px-6 py-3 rounded-xl font-semibold transition-all duration-200 shadow-medium w-full"
                >
                  ← Back to Home
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 