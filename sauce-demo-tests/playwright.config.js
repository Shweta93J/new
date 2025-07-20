// playwright.config.js
module.exports = {
  testDir: './tests',
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://www.saucedemo.com'
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]]
};
