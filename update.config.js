const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["public/index.html"],
  theme: {
    colors: {
      'blue': colors.blue,
      'black': colors.black,
      'red': colors.red,
      'zinc': colors.zinc,
      'slate': colors.slate,
      'cyan': colors.cyan
    },
    spaging: {},
    extend: {},
  },
  plugins: [],
}
