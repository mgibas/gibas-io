import Preset from '@gibas/tailwind/preset'

export default {
  presets: [Preset],
  experimental: { matchVariant: true },
  content: ['node_modules/@gibas/components/src/**/*.astro', './src/**/*.{astro,html,js,md,mdx}'],
  safelist: ['html'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              color: 'var(--theme-text-secondary)',
              textDecoration: 'underline',
              textUnderlineOffset: theme('spacing.1'),
              textTransform: 'uppercase',
            },
          },
        },
        inverted: {
          css: {
            h2: {
              color: 'var(--theme-inverted-text-secondary)',
            },
          },
        },
      }),
    },
  },
}
