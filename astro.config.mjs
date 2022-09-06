import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import image from '@astrojs/image'

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } }), alpinejs(), image()],
  outDir: './_site',
})
