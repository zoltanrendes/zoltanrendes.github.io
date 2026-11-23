import { fileURLToPath } from 'node:url';

export default {
  appType: 'mpa',
  build: { outDir: fileURLToPath(new URL('../dist/pages/', import.meta.url)) },
  preview: { host: '127.0.0.1', port: 4173, strictPort: true },
};
