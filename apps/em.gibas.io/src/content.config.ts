import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { ArticleSchema } from './schemas.js'

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/data/articles' }),
  schema: ArticleSchema,
})
export const collections = { articles }
