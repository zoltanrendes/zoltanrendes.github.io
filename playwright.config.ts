import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  webServer: [
    {
      command: 'yarn workspace portfolio dev',
      url: 'http://localhost:5173/',
    },
    {
      command: 'yarn workspace flora-studies build && yarn workspace flora-studies preview',
      url: 'http://localhost:5174/remoteEntry.js',
    },
    {
      command: 'yarn build:pages && yarn preview:pages',
      url: 'http://127.0.0.1:4173/flora-studies/remoteEntry.js',
    },
  ],
  projects: [
    { name: 'local-chromium', use: { browserName: 'chromium', baseURL: 'http://localhost:5173' } },
    { name: 'pages-chromium', use: { browserName: 'chromium', baseURL: 'http://127.0.0.1:4173' } },
  ],
});
