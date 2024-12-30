import { test, expect } from '@chromatic-com/playwright'
import type { Page } from '@playwright/test'
import { describe } from 'node:test'

describe('Main page', () => {
  test('renders', async ({ page }) => {
    await page.goto('/')
    await forceLoadLazyImages(page)
    const images = await page.locator('img')
    await images.evaluateAll((imgs) => imgs.every((img) => (img as HTMLImageElement).complete))
    await page.waitForTimeout(5000)
    await expect(page.getByRole('heading').first()).toHaveText(/Hello 👋🏼 I'm Maciej Gibas/)
  })
})

async function forceLoadLazyImages(page: Page): Promise<void> {
  return page.evaluate(() => {
    for (const image of document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]')) {
      image.setAttribute('loading', 'eager')
    }
  })
}
