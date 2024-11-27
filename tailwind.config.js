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
        '17' : '23rem'
      },
      height:{
        '100' : '100%',
        '70' : '18rem'
      },
      gap:{
        '2' : '2%',
        '15' : '20%',
      },
      fontFamily: {
        playfair: ["Playfair Display"],
        poppins: ['Poppins'],
      },
      fontSize:{
        '5' : '2rem',
        '10' : '2.2rem'
      },
      margin:{
        '105' : '3%',
      }
    },
  },
  plugins: [],
}

