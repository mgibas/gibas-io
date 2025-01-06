import { z } from 'astro:content'

export const ArticleSchema = z.object({
  slug: z.string(),
  order: z.number(),
  title: z.string(),
  subtitle: z.string(),
})
