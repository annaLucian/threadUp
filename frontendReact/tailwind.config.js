/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    colors: {
      customWhite: '#f0ffff',
      customStone: '#688B8A',
      customSage: '#a0b084',
      customButtermilk: '#faefd4',
      customLeather: '#a57c65',
      customDenim: '#113743',
      customBlack:  '#000000',
      customCobalt: '#3a5199',
      customCoolgray: '#d5d6d2',
      customBlueblack: '#2f2e33',
    },
    screens: {
      '2x1': {'max': '1535px'},
      'xl': {'max': '1279px'},
      'lg': {'min': '1000px'},
      'md': {'min': '760px'},
      'sm': {'max': '450px'},
    },
  },
  plugins: [],
};
