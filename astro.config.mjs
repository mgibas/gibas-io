import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } }), alpinejs(), mdx()],
})
