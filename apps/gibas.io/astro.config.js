import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://gibas.io',
  vite: {
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
  integrations: [tailwind({ config: { applyBaseStyles: false } }), alpinejs(), sitemap()],
})
