import { z } from 'astro/zod'
import { StepSchema, RecipeSchema, StepDefinitionSchema } from './schemas.js'

export type Step = z.infer<typeof StepSchema>
export type Recipe = z.infer<typeof RecipeSchema>
export type StepDefinition = z.infer<typeof StepDefinitionSchema>
