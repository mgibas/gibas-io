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
            `
              import Reveal from 'reveal.js';
              const urlSearchParams = new URLSearchParams(location.search)
              const { slideh = 0, slidev = 0 } = Object.fromEntries(urlSearchParams.entries())
              
              console.log('Initializing')
              const deck = new Reveal({
                disableLayout: false,
                center: false, 
                width: 1440, 
                height: 900 
              })
              deck.initialize().then(() => {
                deck.slide(slideh, slidev)
              })
              deck.on('slidechanged', (e) => {
                urlSearchParams.set('slideh', e.indexh)
                urlSearchParams.set('slidev', e.indexv)
                
                const url = new URL(location.pathname, location.origin)
                url.search = urlSearchParams
                history.pushState({ path: url.toString() },'',url.toString())
              })

              deck.on('fragmentshown', (e) => {
                const slide = e.fragment.closest('section')
                const fragments = slide.querySelectorAll('.fragment').length
                const visibleFragments = slide.querySelectorAll('.fragment.visible').length
                slide.classList.toggle('all-visible', fragments === visibleFragments)
              })
              deck.on('fragmenthidden', (e) => {
                const slide = e.fragment.closest('section')
                const fragments = slide.querySelectorAll('.fragment').length
                const visibleFragments = slide.querySelectorAll('.fragment.visible').length
                slide.classList.toggle('all-visible', fragments === visibleFragments)
              } );
            `
          )
        },
      },
    },
    mdx(),
  ],
})
