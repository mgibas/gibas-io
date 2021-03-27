const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './*.njk',
    './_includes/**/*.njk'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      ...colors
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  }
}
