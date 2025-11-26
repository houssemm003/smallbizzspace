/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          start: '#f4973c',
          end: '#d7623c',
          accent: '#f08a00',
        },
      },
      fontFamily: {
        heading: ['"DM Sans"', 'Inter', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(67, 33, 2, 0.25)',
      },
    },
  },
  plugins: [],
};

