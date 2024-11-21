/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {

      },
      screens:{
        lg: '1100px',
      },
      width:{
        '100': '100%',
        '80' : '80%',
        '70' : '500px',
      },
      height:{
        '100' : '100%',
        '70' : '400px'
      },
      gap:{
        '2' : '2%'
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

