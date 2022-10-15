import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import alpinejs from '@astrojs/alpinejs'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    alpinejs(),
    {
      name: 'reveal.js',
      hooks: {
        'astro:config:setup': ({ injectScript }) => {
          injectScript(
            'page',
            `import Reveal from 'reveal.js';new Reveal({ disableLayout: false, center: false, width: 1440, height: 900 }).initialize();`
          )
        },
      },
    },
    mdx(),
  ],
})
