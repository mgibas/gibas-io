import Preset from '@gibas/tailwind/preset'
import plugin from 'tailwindcss/plugin'
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

export default {
  presets: [Preset],
  experimental: { matchVariant: true },
  content: ['node_modules/@gibas/components/src/*.astro', './src/**/*.{astro,html,js,md,mdx}'],
  safelist: ['html'],
  corePlugins: { container: false },
  plugins: [
    plugin(({ addUtilities, addVariant, matchUtilities, addBase, theme }) => {
      addBase({
        '.container > *': {
          gridColumn: '2',
        },
        '*': {
          outlineColor: theme('colors.zinc.400'),
          outlineWidth: '2px',
          outlineOffset: '4px',
        },
      })
      addUtilities({
        '.container': {
          display: 'grid',
          gridTemplateColumns: `1fr min(${theme('screens.lg')}, calc(100% - calc(2 * var(--container-gap, ${theme(
            'spacing.8',
          )})))) 1fr`,
          width: '100%',
        },
        '.container-bleed': {
          width: '100%',
          gridColumn: '1 / -1',
        },
      })
      matchUtilities({
        'clip-path-inset': (value) => ({
          clipPath: `inset(${value})`,
        }),
      })
      matchUtilities(
        {
          'container-gap': (value) => ({
            '--container-gap': value,
          }),
        },
        { values: theme('spacing') },
      )
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: `4px 8px ${value}`,
          }),
        },
        { values: flattenColorPalette(theme('colors')) },
      )
      matchUtilities(
        {
          container: (value) => ({
            display: 'grid',
            gridTemplateColumns: `1fr min(${value}, calc(100% - calc(2 * var(--container-gap, ${theme(
              'spacing.8',
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
        { values: theme('screens') },
      )
      matchUtilities(
        {
          'word-spacing': (value) => ({
            'word-spacing': value,
          }),
        },
        { values: theme('spacing') },
      )
      addVariant('odd-alternate', ['&:nth-child(4n)', '&:nth-child(4n + 1)'])
    }),
  ],
}
