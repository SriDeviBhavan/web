/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SDB Brand Colors - Updated
        'sdb-gold': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#FFD700', // Primary SDB Gold
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'leaf-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#4CAF50', // Leaf Green
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'filter-brown': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#3E2C23', // Filter Brown
          900: '#292524',
        },
        'cream-white': {
          50: '#FFF8E1', // Cream White
          100: '#fefce8',
          200: '#fef9c3',
          300: '#fef08a',
          400: '#fde047',
          500: '#facc15',
          600: '#eab308',
          700: '#ca8a04',
          800: '#854d0e',
          900: '#713f12',
        },
        'sambar-orange': {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316', // Sambar Orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        'golden': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        'restaurant-red': {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        'ivory': {
          50: '#fefefe',
          100: '#fdfcfb',
          200: '#faf8f5',
          300: '#f5f1eb',
          400: '#ede7df',
          500: '#e5dcd0',
          600: '#d4c7b7',
          700: '#b8a894',
          800: '#9a8b75',
          900: '#7f7260',
        }
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'display': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'texture': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23fef9c3\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.05)',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.8)',
        'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.8)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)',
        'xl': '0 8px 16px rgba(0, 0, 0, 0.8), 0 4px 8px rgba(0, 0, 0, 0.6)',
        '2xl': '0 12px 24px rgba(0, 0, 0, 0.8), 0 6px 12px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const utilities = Object.entries(textShadows).reduce((acc, [key, value]) => {
        acc[`.text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`] = {
          'text-shadow': value,
        };
        return acc;
      }, {});
      addUtilities(utilities);
    },
  ],
} 