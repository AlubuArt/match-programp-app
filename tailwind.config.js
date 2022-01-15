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
        'body-image': "url('../public/body-image.jpeg')",
        'customGradient': "linear-gradient(to bottom, var(blue), var(dark-blue)",
        'noise': "url('../public/Noise.png",
        'card-gradient': "linear-gradient(to right, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.09) 100%)"
      },
    },
  },
  plugins: [],
}




