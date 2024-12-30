import { test, expect } from '@chromatic-com/playwright'
import type { Page } from '@playwright/test'
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
