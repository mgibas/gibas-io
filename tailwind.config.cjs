const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  experimental: { matchVariant: true },
  content: ['./src/**/*.{astro,html,js,md,mdx}'],
  safelist: ['html'],
  corePlugins: { container: false },
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
      spacing: {
        100: '25rem',
        150: '37.5rem',
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--theme-text-primary)',
            maxWidth: '100%',
            a: {
              color: 'var(--theme-text-primary)',
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              textDecoration: 'underline',
              textUnderlineOffset: theme('spacing.1'),
              textTransform: 'uppercase',
              color: 'var(--theme-text-tertiary)',
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
              color: 'var(--theme-inverted-text-tertiary)',
            },
            h3: {
              color: 'var(--theme-inverted-text-primary)',
            },
          },
        },
        lg: {
          css: {
            lineHeight: theme('lineHeight.normal'),
            h2: {
              fontSize: theme('fontSize.base'),
              marginTop: theme('spacing.32'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.tight'),
              fontWeight: theme('fontWeight.bold'),
            },
            h3: {
              fontSize: theme('fontSize.5xl'),
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              lineHeight: theme('lineHeight.tight'),
            },
            p: {
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.3'),
            },
            ul: {
              marginTop: theme('spacing.3'),
              marginBottom: theme('spacing.3'),
            },
            ':not(.prose-inverted) + =.prose-inverted > h2': {
              marginTop: 0,
            },
            ':not(.prose-inverted) + .prose-inverted:has(> h2)': {
              marginTop: theme('spacing.32'),
              paddingTop: theme('spacing.32'),
              paddingBottom: theme('spacing.32'),
            },
            '.prose-inverted + .prose-inverted:has(> h2)': {
              marginTop: `-${theme('spacing.32')}`,
              paddingBottom: theme('spacing.32'),
            },
            ':not(.prose-inverted) + .prose-inverted > h3': {
              marginTop: 0,
            },
            ':not(.prose-inverted) + .prose-inverted:has(>h3)': {
              marginTop: theme('spacing.12'),
              paddingTop: theme('spacing.12'),
              paddingBottom: theme('spacing.12'),
            },
            '.prose-inverted + .prose-inverted:has(> h3)': {
              marginTop: `-${theme('spacing.12')}`,
              paddingBottom: theme('spacing.12'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ matchVariant, addUtilities, addVariant, matchUtilities, addBase, theme }) => {
      addBase({
        '.container > *': {
          gridColumn: '2',
        },
      })
      addUtilities({
        '.cq': { 'container-type': 'inline-size' },
        '.container': {
          display: 'grid',
          gridTemplateColumns: `1fr min(${theme('screens.lg')}, calc(100% - calc(2 * var(--container-gap, ${theme(
            'spacing.8'
          )})))) 1fr`,
          width: '100%',
        },
        '.container-bleed': {
          width: '100%',
          gridColumn: '1 / -1',
        },
      })
      matchUtilities(
        {
          'container-gap': (value) => ({
            '--container-gap': value,
          }),
        },
        { values: theme('spacing') }
      )
      matchUtilities(
        {
          container: (value) => ({
            display: 'grid',
            gridTemplateColumns: `1fr min(${value}, calc(100% - calc(2 * var(--container-gap, ${theme(
              'spacing.8'
            )})))) 1fr`,
            width: '100%',
            '& > *': {
              gridColumn: '2',
            },
            '& > .container-bleed': {
              width: '100%',
              gridColumn: '1 / -1',
            },
          }),
        },
        { values: theme('screens') }
      )
      matchVariant({
        'cq-h': (value) => `@container (min-height: ${value})`,
        'cq-w': (value) => `@container (min-width: ${value})`,
      })
      addVariant('odd-alternate', ['&:nth-child(4n)', '&:nth-child(4n + 1)'])
    }),
  ],
}
