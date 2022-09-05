const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  experimental: { matchVariant: true },
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  safelist: ['html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        sunset: {
          orange: '#FCB827',
          violet: '#FC14E6',
        },
      },
      backgroundColor: {
        theme: {
          DEFAULT: 'var(--theme-background)',
          inverted: 'var(--theme-inverted-background)',
        },
      },
      textColor: (theme) => ({
        primary: {
          DEFAULT: 'var(--theme-text-primary)',
          inverted: 'var(--theme-inverted-text-primary)',
        },
        secondary: {
          DEFAULT: 'var(--theme-text-secondary)',
          inverted: 'var(--theme-inverted-text-secondary)',
        },
        tertiary: {
          DEFAULT: 'var(--theme-text-tertiary)',
          inverted: 'var(--theme-inverted-text-tertiary)',
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        content: '1fr min(65ch, 100%) 1fr',
      },
      animation: {
        cursor: 'cursor 1s infinite',
        wave: 'wave 2.5s infinite',
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: 0 },
          '50%, 90%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        wave: {
          '0%': { transform: 'rotate( 0.0deg)' },
          '10%': { transform: 'rotate(14.0deg)' },
          '20%': { transform: 'rotate(-8.0deg)' },
          '30%': { transform: 'rotate(14.0deg)' },
          '40%': { transform: 'rotate(-4.0deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate( 0.0deg)' },
          '100%': { transform: 'rotate( 0.0deg)' },
        },
      },
    },
  },
  plugins: [
    plugin(({ matchVariant, addUtilities, theme }) => {
      addUtilities({
        '.cq': { 'container-type': 'inline-size' },
        '.content': {
          maxWidth: theme('screens.lg'),
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
      matchVariant({
        'cq-h': (value) => `@container (min-height: ${value})`,
        'cq-w': (value) => `@container (min-width: ${value})`,
      })
    }),
  ],
}
