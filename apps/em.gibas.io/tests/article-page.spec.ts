import { test, expect } from '@chromatic-com/playwright'
const testCases: { name: string; width: number; height: number }[] = [
  { name: 'desktop', width: 1280, height: 720 },
  { name: 'mobile', width: 390, height: 844 },
]
const articles = [
  { slug: 'the-job', title: 'The Job' },
  { slug: 'calendar', title: 'Calendar' },
  { slug: 'one-on-one', title: 'One on one' },
  { slug: 'resources', title: 'Resources' },
]

testCases.forEach(({ name, width, height }) => {
  test.describe(name, async () => {
    test.use({ viewport: { width, height } })
    articles.forEach((article) => {
      test(`renders ${article.slug}`, async ({ page }) => {
        await page.goto(`/articles/${article.slug}`)
        await expect(page.getByRole('heading').first()).toHaveText(article.title)
      })
    })
  })
})
