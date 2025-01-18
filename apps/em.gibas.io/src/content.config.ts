import { defineCollection } from 'astro:content'
import { glob, file } from 'astro/loaders'
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
const resources = defineCollection({
  loader: file('./src/data/resources.json'),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    author: z.string(),
    url: z.string(),
  }),
})
export const collections = { articles, resources }
