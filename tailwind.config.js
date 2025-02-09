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
        lg1: '1170px',
        me1: '440px',
        'max-me1':{'max': '440px'},
        mid1: '510px',
        mid: '992px',
        low: '350px',
        customer: '379px'
      },
      width:{
        '100': '100%',
        '80' : '80%',
        '70' : '500px',
        '71' : '600px',
        '50' : '50%',
        '17' : '23rem',
        '16' : '20rem'
      },
      height:{
        '100' : '100%',
        '70' : '18rem',
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
        '5' : '1.5rem',
        '10' : '2.2rem'
      },
      margin:{
        '105' : '3%',
        '106' : '35%',
        '110' : '35rem',
        '120' : '21.5rem'
      }
    },
  },
  plugins: [],
}

