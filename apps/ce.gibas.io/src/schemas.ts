import { z } from 'astro/zod'

export const StepDefinitionSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
})
export const StepSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  definitionSlug: z.string().optional(),
  lines: z.array(z.number()).optional(),
  codeFormatted: z.string(),
  prev: z.object({ slug: z.string() }),
  next: z.object({ slug: z.string() }),
})
export const RecipeSchema = z.object({
  slug: z.string(),
  order: z.number(),
  category: z.union([z.literal('basic'), z.literal('forms'), z.literal('atoms')]),
  title: z.string(),
  hero: z.object({
    copy: z.string(),
    lines: z.array(z.number()),
    code: z.string(),
    lang: z.union([z.literal('js'), z.literal('ts'), z.literal('html'), z.literal('css')]),
  }),
  code: z.array(z.string()),
  codeFormatted: z.string(),
  steps: z.array(StepSchema),
  prev: z.object({ slug: z.string(), stepsLength: z.number() }),
  next: z.object({ slug: z.string(), stepsLength: z.number() }),
})
