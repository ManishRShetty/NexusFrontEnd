/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      // Define the default font
      sans: ['Satoshi', 'sans-serif'],
      // Keep your other custom fonts
      satoshi: ['Satoshi', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      pixel: ['"Press Start 2P"', 'cursive'],
    },
    extend: {
      // ...other theme extensions
    },
  },
  plugins: [],
}