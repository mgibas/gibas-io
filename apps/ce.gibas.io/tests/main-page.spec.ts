import { test, expect } from '@chromatic-com/playwright'
;[
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
].forEach(({ name, width, height }) => {
  test.describe(name, () => {
    test.use({ viewport: { width, height } })
    test('renders', async ({ page }) => {
      await page.goto('/')
      await expect(page.getByRole('heading').first()).toHaveText('Custom Elements Recipes')
    })
  })
})
