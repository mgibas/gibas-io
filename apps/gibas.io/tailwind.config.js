import Preset from '@gibas/tailwind/preset'

export default {
  presets: [Preset],
  content: ['node_modules/@gibas/components/src/**/*.astro', './src/**/*.{astro,html,js,md,mdx}'],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'var(--theme-text-secondary)',
            h2: {
              color: 'var(--theme-text-secondary)',
              fontFamily: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
              textTransform: 'uppercase',
            },
            h3: {
              fontWeight: '510',
              letterSpacing: '-0.022em',
            },
            b: {
              color: 'var(--tw-prose-bold)',
            },
          },
        },
        inverted: {
          css: {
            maxWidth: '100ch',
            color: 'var(--theme-inverted-text-secondary)',
            '--tw-prose-bold': 'var(--theme-inverted-text-primary)',
            h2: {
              color: 'var(--theme-inverted-text-secondary)',
            },
          },
        },
        lg: {
          css: {
            lineHeight: '1.65',
            h2: {
              fontSize: '0.875rem',
              marginTop: theme('spacing.32'),
              marginBottom: theme('spacing.4'),
              lineHeight: theme('lineHeight.tight'),
              fontWeight: theme('fontWeight.medium'),
              letterSpacing: '0.12em',
            },
            h3: {
              fontSize: '3rem',
              marginTop: theme('spacing.12'),
              marginBottom: theme('spacing.6'),
              lineHeight: '1.1',
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
