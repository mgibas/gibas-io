import { test, expect } from '@chromatic-com/playwright'
const testCases: { name: string; width: number; height: number }[] = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
]

testCases.forEach(({ name, width, height }) => {
  test.describe(name, () => {
    test.use({ viewport: { width, height } })
    test('renders', async ({ page }) => {
      await page.goto('/recipes/shadow-dom/steps/0')
      await expect(page.getByRole('heading')).toHaveText('Shadow DOM')
    })
  })
})
