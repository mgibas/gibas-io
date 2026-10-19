import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const sections = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sections' }),
  schema: z.object({
    order: z.number(),
    label: z.string().optional(),
    title: z.string(),
  }),
})

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    href: z.string(),
  }),
})

export const collections = { sections, projects }
