/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        'PrimaryColor': '#0B0D17',
        'SecondaryColor': '#D0D6F9',
        'TertiaryColor': '#FFFFFF',
      },
      fontFamily: {
        'Barlow': ['Barlow Condensed', 'sans-serif'],
        'Bellefair': ['Bellefair', 'serif'],
      }
    },
  },
  plugins: [],
}

