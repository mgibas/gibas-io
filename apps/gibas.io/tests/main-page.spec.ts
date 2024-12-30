import { test, expect } from '@chromatic-com/playwright'
import type { Page } from '@playwright/test'
;[
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
].forEach(({ name, width, height }) => {
  test.describe(name, () => {
    test.use({ viewport: { width, height } })
    test('renders', async ({ page }) => {
      await page.goto('/')
      await forceLoadLazyImages(page)
      await expect(page.getByRole('heading').first()).toHaveText(/Hello 👋🏼 I'm Maciej Gibas/)
    })
  })
})

async function forceLoadLazyImages(page: Page): Promise<void> {
  return page.evaluate(() => {
    for (const image of document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
      image.setAttribute('loading', 'eager')
    }
  })
}
