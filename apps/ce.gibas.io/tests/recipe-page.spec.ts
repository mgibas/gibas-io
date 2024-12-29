import { test, expect } from '@chromatic-com/playwright'

test('renders', async ({ page }) => {
  await page.goto('/recipes/shadow-dom/steps/0')
  await expect(page.getByRole('heading')).toHaveText('Shadow DOM')
})
