const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{md,njk,html}'],
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: colors.slate,
      },
      textColor: (theme) => ({
        primary: theme('colors.gray.700'),
        secondary: theme('colors.gray.500'),
        heading: theme('colors.gray.900'),
        dark: {
          primary: theme('colors.gray.300'),
          secondary: theme('colors.gray.400'),
          heading: 'white',
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        cursor: 'cursor 1s infinite',
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: 0 },
          '50%, 90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
    },
  },
}
