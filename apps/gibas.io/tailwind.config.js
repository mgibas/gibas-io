import Preset from '@gibas/tailwind/preset'

export default {
  presets: [Preset],
  experimental: { matchVariant: true },
  content: ['node_modules/@gibas/components/src/*.astro', './src/**/*.{astro,html,js,md,mdx}'],
  safelist: ['html'],
}
