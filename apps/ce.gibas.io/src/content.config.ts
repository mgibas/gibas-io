import { defineCollection } from 'astro:content'
import RecipesLoader from './data/recipes-loader.ts'

const recipes = defineCollection({
  loader: RecipesLoader(),
})
export const collections = { recipes }
