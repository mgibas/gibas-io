const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './*.njk',
    './_includes/**/*.njk'
  ],
  darkMode: 'media',
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
      animation: {
        cursor: 'cursor 1s infinite'
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: 0 },
          '50%, 90%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    }
  }
}
