/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'gold-trim': '#F19D0E',
      'gold-trim-hover': '#CA840C',
      'silver-background': '#F8FAFD',
      'blue-background': '#0E62F1',
      'blue-background-hover': '#0C52CA',
      'blue-highlight': '#a2d2ff',
      'white': '#FFFFFF',
      'white-hover': '#cfcccc',
      'footer-bg': '#e8e6e6',
      'black': '#000000',
      'border-footer': 'border-top-color: rgb(51 65 85);'
    },
    screens: {
      'sm': '330px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'OpenSans-Regular', 'Arial', 'Helvetica', 'sans-serif', 'Verdana'],
      }
    },
  },
  plugins: [],
}

