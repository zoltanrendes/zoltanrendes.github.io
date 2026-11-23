import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: { jsx: 'automatic' },
  resolve: {
    alias: {
      'floraStudies/Gallery': fileURLToPath(new URL('./tests/unit/RemoteGallery.tsx', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['apps/**/*.test.tsx'],
    setupFiles: ['./tests/unit/setup.ts'],
  },
});
