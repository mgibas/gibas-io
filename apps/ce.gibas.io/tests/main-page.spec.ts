import { test, expect } from '@chromatic-com/playwright'
const testCases: { name: string; width: number; height: number; colorScheme: 'light' | 'dark' }[] = [
  { name: 'desktop light', width: 1280, height: 720, colorScheme: 'light' },
  { name: 'mobile light', width: 390, height: 844, colorScheme: 'light' },
  { name: 'desktop dark', width: 1280, height: 720, colorScheme: 'dark' },
  { name: 'mobile dark', width: 390, height: 844, colorScheme: 'dark' },
]

testCases.forEach(({ name, width, height, colorScheme }) => {
  test.describe(name, () => {
    test.use({ viewport: { width, height }, colorScheme })
    test('renders', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByRole('heading').first()).toHaveText('Custom Elements Recipes')
    })
  })
})
