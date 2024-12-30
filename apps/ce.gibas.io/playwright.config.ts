import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } } },
    { name: 'mobile', use: { ...devices['iPhone 12 Pro'], viewport: { width: 390, height: 844 } } },
  ],
  use: { baseURL: 'http://localhost:4321/' },
  webServer: {
    command: 'pnpm preview --port 4321',
    url: 'http://localhost:4321/',
    reuseExistingServer: !process.env.CI,
  },
})
