import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } }), alpinejs()],
  outDir: './_site',
})
