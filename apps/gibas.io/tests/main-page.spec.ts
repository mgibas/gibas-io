import { test, expect } from '@chromatic-com/playwright'

test('renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading').first()).toHaveText(/Hello 👋🏼 I'm Maciej Gibas/)
})
