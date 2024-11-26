/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainbg': '#0C0B09', 
        'secondbg' : '#151412',
        'golden' : '#d4a373'
      },
      screens:{
        lg: '1100px',
        mid: '992px',
      },
      width:{
        '100': '100%',
        '80' : '80%',
        '70' : '500px',
        '17' : '21rem'
      },
      height:{
        '100' : '100%',
        '70' : '400px'
      },
      gap:{
        '2' : '2%',
        '15' : '20%',
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}

