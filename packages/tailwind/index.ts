import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import TypographyPlugin from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

const preset: Partial<Config> = {
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
    },
    extend: {
      stroke: {
        theme: 'var(--theme-background)',
      },
      borderColor: () => ({
        theme: 'var(--theme-border)',
      }),
      gradientColorStops: {
        theme: 'var(--theme-background)',
        'theme-secondary': 'var(--theme-background-secondary)',
      },
      backgroundColor: {
        theme: 'var(--theme-background)',
        'theme-secondary': 'var(--theme-background-secondary)',
      },
      backgroundImage: {
        stripes: `linear-gradient(to top right, transparent, var(--tw-gradient-from), transparent, var(--tw-gradient-to), transparent),
                  repeating-linear-gradient(to top right, var(--tw-gradient-from), var(--tw-gradient-from) 2px, transparent 0%, transparent 4px)`,
      },
      textColor: () => ({
        primary: 'var(--theme-text-primary)',
        secondary: 'var(--theme-text-secondary)',
        disabled: 'var(--theme-text-disabled)',
      }),
      fontSize: {
        '10xl': '12.5rem',
        '11xl': '16rem',
      },
      colors: {
        sunset: {
          'orange-400': '#FFCB3D',
          orange: '#FCB827',
          'orange-600': '#E5A31F',
          'violet-400': '#FF33FF',
          violet: '#FC14E6',
          'violet-600': '#E312CF',
        },
      },
      flexBasis: {
        content: 'content',
        max: 'max-content',
        min: 'min-content',
        fit: 'fit-content',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        100: '25rem',
        150: '37.5rem',
        200: '50rem',
        'full-vw': '100vw',
        'full-vh': '100vh',
      },
      animation: {
        cursor: 'cursor 1s infinite',
        wave: 'wave 2.5s infinite',
        'reverse-spin': 'reverse-spin 1s linear infinite',
      },
      keyframes: {
        cursor: {
          '0%, 40%': { opacity: '0' },
          '50%, 90%': { opacity: '1' },
          '100%': { opacity: '0' },
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
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)',
          },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--theme-text-primary)',
            width: '100%',
            maxWidth: 'auto',
            '--tw-prose-bold': 'var(--theme-text-primary)',
            a: {
              color: 'var(--theme-text-primary)',
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              color: 'var(--theme-text-primary)',
            },
            h3: {
              color: 'var(--theme-text-primary)',
            },
          },
        },
        inverted: {
          css: {
            color: 'var(--theme-inverted-text-primary)',
            backgroundColor: 'var(--theme-inverted-background)',
            h2: {
              color: 'var(--theme-inverted-text-primary)',
            },
            h3: {
              color: 'var(--theme-inverted-text-primary)',
            },
          },
        },
      }),
    },
  },
  plugins: [
    TypographyPlugin,
    plugin(({ addBase, addComponents, matchUtilities, addVariant, theme }) => {
      addBase({
        ':root': {
          '--theme-light-background': theme('colors.white'),
          '--theme-light-background-secondary': theme('colors.zinc.50'),
          '--theme-light-primary-text': theme('colors.zinc.800'),
          '--theme-light-secondary-text': theme('colors.zinc.600'),
          '--theme-light-disabled-text': theme('colors.zinc.300'),
          '--theme-light-border': theme('colors.zinc.100'),
          '--theme-dark-background': theme('colors.zinc.900'),
          '--theme-dark-background-secondary': theme('colors.zinc.800'),
          '--theme-dark-primary-text': theme('colors.zinc.50'),
          '--theme-dark-secondary-text': theme('colors.zinc.400'),
          '--theme-dark-disabled-text': theme('colors.zinc.700'),
          '--theme-dark-border': theme('colors.zinc.700'),
        },
        html: {
          '--theme-background': 'var(--theme-light-background)',
          '--theme-background-secondary': 'var(--theme-light-background-secondary)',
          '--theme-text-primary': 'var(--theme-light-primary-text)',
          '--theme-text-secondary': 'var(--theme-light-secondary-text)',
          '--theme-text-disabled': 'var(--theme-light-disabled-text)',
          '--theme-border': 'var(--theme-light-border)',
          '--theme-inverted-background': 'var(--theme-dark-background)',
          '--theme-inverted-text-primary': 'var(--theme-dark-primary-text)',
          '--theme-inverted-text-secondary': 'var(--theme-dark-secondary-text)',
          '--theme-inverted-text-disabled': 'var(--theme-dark-disabled-text)',
          '--theme-inverted-border': 'var(--theme-dark-border)',
        },
        '@media (prefers-color-scheme: dark)': {
          html: {
            '--theme-background': 'var(--theme-dark-background)',
            '--theme-background-secondary': 'var(--theme-dark-background-secondary)',
            '--theme-text-primary': 'var(--theme-dark-primary-text)',
            '--theme-text-secondary': 'var(--theme-dark-secondary-text)',
            '--theme-text-disabled': 'var(--theme-dark-disabled-text)',
            '--theme-border': 'var(--theme-dark-border)',
            '--theme-inverted-background': 'var(--theme-light-background)',
            '--theme-inverted-background-secondary': 'var(--theme-light-background-secondary)',
            '--theme-inverted-text-primary': 'var(--theme-light-primary-text)',
            '--theme-inverted-text-secondary': 'var(--theme-light-secondary-text)',
            '--theme-inverted-text-disabled': 'var(--theme-light-disabled-text)',
            '--theme-inverted-border': 'var(--theme-light-border)',
          },
        },
        'body, h1, h2, p, section': {
          transitionProperty: 'color, background-color, border-color, text-decoration-color, fill, stroke',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          transitionDuration: '200ms',
        },
        '*': {
          outlineColor: theme('colors.zinc.400'),
          outlineWidth: '2px',
          outlineOffset: '4px',
        },
      })
      addComponents({
        '.container-bleed': {
          width: '100vw',
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        },
      })
      matchUtilities({
        'clip-path-inset': (value) => ({
          clipPath: `inset(${value})`,
        }),
      })
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: `4px 8px ${value}`,
          }),
        },
        { values: flattenColorPalette(theme('colors')) },
      )

      addVariant('odd-alternate', ['&:nth-child(4n)', '&:nth-child(4n + 1)'])
    }),
  ],
}
export default preset
