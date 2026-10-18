import { defineConfig, fontProviders } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://gibas.io',
  compressHTML: true,
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-inter',
      weights: ['100 900'],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': './',
        '@src': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@data': '/src/data',
        '@assets': '/src/assets',
      },
    },
  },
  integrations: [alpinejs(), sitemap()],
})
