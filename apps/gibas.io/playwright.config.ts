import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  projects: [{ name: 'desktop', use: { ...devices['Desktop Chrome'] } }],
  use: { baseURL: 'http://localhost:4320/' },
  webServer: {
    command: 'pnpm preview --port 4320',
    url: 'http://localhost:4320/',
    reuseExistingServer: !process.env.CI,
  },
})
