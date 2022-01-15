module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./ui/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Montserrat', 'Arial', 'sans-serif'],
        
      },
      colors: {
        'blue': '#0048A4',
        'dark-blue': '#00132C',
        'white': '#FFFFFF',
      },
      backgroundImage: {
        'body-image': "url('../images/body-image.jpeg')",
        'customGradient': "linear-gradient(to bottom, var(blue), var(dark-blue)"
      },
    },
  },
  plugins: [],
}

