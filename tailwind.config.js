/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors:{
      'gold-trim': '#BB9979',
      'gold-trim-hover': '#94785f',
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
        sans: ['OpenSans-Regular', 'Arial', 'Helvetica', 'sans-serif', 'Verdana'],
      }
    },
  },
  plugins: [],
}

