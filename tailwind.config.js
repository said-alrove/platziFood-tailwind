// TailwindCss v2.2.3 
// *NOTE:* You can reference any value from the default theme if needed
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: media, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      cyan: '#9cdbff'
    },
    extend: {
      screens: {
        '3xl': '1300px'
      }
    },
    fill: theme => theme('colors')
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
