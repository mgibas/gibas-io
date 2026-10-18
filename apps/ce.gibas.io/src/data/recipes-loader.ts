import type { Loader, LoaderContext, DataStore } from 'astro/loaders'
import { RecipeSchema } from '../schemas.js'
import type { Recipe, Step, StepDefinition } from '../types.js'
import prettier from 'prettier'
import fs from 'fs/promises'

const prettierOptions: prettier.Options = { parser: 'html', semi: false, printWidth: 200, singleQuote: true }
async function syncData(store: DataStore, path: string, definitionsPath: string) {
  const recipes = JSON.parse(await fs.readFile(new URL(path, import.meta.url), 'utf-8')) as Recipe[]
  const stepDefinitions = JSON.parse(
    await fs.readFile(new URL(definitionsPath, import.meta.url), 'utf-8'),
  ) as StepDefinition[]

  for (const recipe of recipes) {
    await formatRecipe(recipe, recipes, stepDefinitions, prettierOptions)
    await RecipeSchema.parseAsync(recipe)
  }

  store.clear()
  recipes.forEach((recipe: Record<string, unknown>) => {
    store.set({ id: recipe.slug as string, data: recipe })
  })
}

async function formatRecipe(
  recipe: Recipe,
  recipes: Recipe[],
  stepDefinitions: StepDefinition[],
  prettierOptions: prettier.Options,
) {
  recipe.order = recipes.indexOf(recipe)
  recipe.next = {
    slug: recipes[(recipes.indexOf(recipe) + 1) % recipes.length].slug,
    stepsLength: recipes[(recipes.indexOf(recipe) + 1) % recipes.length].steps.length,
  }
  recipe.prev = {
    slug: recipes[(recipes.indexOf(recipe) - 1 + recipes.length) % recipes.length].slug,
    stepsLength: recipes[(recipes.indexOf(recipe) - 1 + recipes.length) % recipes.length].steps.length,
  }
  recipe.codeFormatted = await prettier.format(recipe.code.join('\n'), prettierOptions)
  recipe.hero.code = normalizeIndentation(
    recipe.codeFormatted
      .split('\n')
      .map((line: string, index: number) => (!recipe.hero.lines || recipe.hero.lines.includes(index) ? line : ''))
      .filter((line: string) => line)
      .join('\n'),
  )

  if (!recipe.steps) return
  for (const step of recipe.steps) formatStep(step, recipe, stepDefinitions)
}

async function formatStep(step: Step, recipe: Recipe, stepDefinitions: StepDefinition[]) {
  const index = recipe.steps.indexOf(step)
  step.slug = String(index)
  step.next = { slug: String((index + 1) % recipe.steps.length) }
  step.prev = { slug: String((index - 1 + recipe.steps.length) % recipe.steps.length) }
  if (step.definitionSlug) {
    const def = stepDefinitions.find((def) => def.slug === step.definitionSlug)
    step.title = def?.title ?? step.title
    step.description = def?.description ?? step.description
  }
  step.codeFormatted = recipe.codeFormatted
    .split('\n')
    .map((line: string, index: number) =>
      !step.lines || step.lines.includes(index) ? `${line}// [!code focus]` : line,
    )
    .join('\n')
}

function normalizeIndentation(code: string): string {
  const lines = code.split('\n')
  const indent = lines[0].match(/^\s+/)?.[0] ?? ''
  return lines.map((line) => line.replace(indent, '')).join('\n')
}

export default function RecipesLoader() {
  const filePath = './recipes.json'
  const definitionsFilePath = './step-definitions.json'
  const fileURL = new URL(filePath, import.meta.url).pathname
  const definitionsFileURL = new URL(definitionsFilePath, import.meta.url).pathname

  return {
    name: 'recipes-loader',
    load: async (context: LoaderContext): Promise<void> => {
      await syncData(context.store, filePath, definitionsFilePath)

      context.watcher?.on('change', async (changedPath) => {
        if (changedPath === fileURL || changedPath === definitionsFileURL)
          await syncData(context.store, filePath, definitionsFilePath)
      })
    },

    schema: RecipeSchema,
  } satisfies Loader
}
