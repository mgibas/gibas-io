import { z } from 'astro:content'

export const ArticleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  nextSlug: z.string().optional(),
})
