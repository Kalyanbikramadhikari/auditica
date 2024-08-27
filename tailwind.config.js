/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          background: '#272727',
          text: '#FAFAFA'
        },
        secondary: {
          main: '#EE4950',
          text: '#959D99' 
        },
        tertiary:{
          // text:"#959D99"
        }
      },
      fontFamily: {
        inter: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
