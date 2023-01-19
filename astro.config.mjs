import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://gibas.io',
  integrations: [tailwind({ config: { applyBaseStyles: false } }), alpinejs(), mdx(), sitemap()],
})
