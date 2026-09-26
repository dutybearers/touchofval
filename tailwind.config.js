/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        tov: {
          50: '#fdf8f5',
          100: '#faeee8',
          200: '#f4d8cb',
          300: '#ebb89e',
          400: '#df8e6a',
          500: '#d06b43',
          600: '#bd5430',
          700: '#9c4228',
          800: '#803729',
          900: '#6b3026',
          950: '#3a1812',
        },
        gold: {
          50: '#fdfaee',
          100: '#faf2d3',
          200: '#f4e3a8',
          300: '#edcd71',
          400: '#e7b347',
          500: '#d99a2b',
          600: '#bd7a20',
          700: '#985b1e',
          800: '#7d481f',
          900: '#6a3d1d',
          950: '#3c200c',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
