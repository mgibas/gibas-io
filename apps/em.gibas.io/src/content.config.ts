import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro:content'

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/articles' }),
  schema: z.object({
    slug: z.string(),
    order: z.number(),
    title: z.string(),
    subtitle: z.string(),
    cover: z.string().optional(),
  }),
})
export const collections = { articles }
