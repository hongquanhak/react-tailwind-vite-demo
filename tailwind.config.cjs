/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellowOne: '#C8B65E',
        grayOne: '#F7F9FA'
      },
      maxWidth: {
        1080: '1080px',
      },
      fontFamily: {
        notoSan: ['"Noto Sans JP"', 'san-serif'],
        inter: ['"Inter"', 'sans-serif'],
      },
      screens: {
        'md': {'max': '768px'},
      }
    }
  },
  plugins: []
};
