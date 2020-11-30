module.exports = {
  purge: ['./pages/*.js', './component/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        'Poppins':["Poppins","sans-serif"]
      },
      colors: {
        customBlue:'#0070f3'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
