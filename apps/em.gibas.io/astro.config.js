// @ts-check
import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://ce.gibas.io',
  vite: {
    resolve: {
      alias: {
        '@': 'src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@styles': '/src/styles',
        '@data': '/src/data',
      },
    },
  },
  integrations: [tailwind(), alpinejs(), sitemap(), mdx()],
})
