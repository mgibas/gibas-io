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
            maxWidth: '100ch',
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
            maxWidth: '100ch',
            h2: {
              color: 'var(--theme-inverted-text-secondary)',
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
            ':not(.prose-inverted) + .prose-inverted h2': {
              marginTop: 0,
            },
            ':not(.prose-inverted) + .prose-inverted:has(h2)': {
              marginTop: theme('spacing.32'),
              paddingTop: theme('spacing.32'),
              paddingBottom: theme('spacing.32'),
            },
            '.prose-inverted + .prose-inverted:has(h2)': {
              marginTop: `-${theme('spacing.32')}`,
              paddingBottom: theme('spacing.32'),
            },
            ':not(.prose-inverted) + .prose-inverted h3': {
              marginTop: 0,
            },
            ':not(.prose-inverted) + .prose-inverted:has(h3)': {
              marginTop: theme('spacing.12'),
              paddingTop: theme('spacing.12'),
              paddingBottom: theme('spacing.12'),
            },
            '.prose-inverted + .prose-inverted:has(h3)': {
              marginTop: `-${theme('spacing.12')}`,
              paddingBottom: theme('spacing.12'),
            },
          },
        },
      }),
    },
  },
}
