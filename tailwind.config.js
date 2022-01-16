module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'header': ['Montserrat', 'Arial', 'sans-serif'],
      'match-info': 'Arial'
      
    },
    extend: {
      
      colors: {
        'blue': '#0048A4',
        'dark-blue': '#00132C',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'body-image': "url('/body-image.jpeg')",
        'customGradient': "linear-gradient(to bottom, var(dark-blue), var(blue)",
        'noise': "url('/Noise.png",
        'card-gradient': "linear-gradient(to right, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.09) 100%)"
      },
    },
  },
  plugins: [],
}




