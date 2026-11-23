import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

const origin = 'http://localhost:5174';
const localServer = {
  host: 'localhost',
  port: 5174,
  strictPort: true,
  cors: { origin: 'http://localhost:5173' },
};

export default defineConfig(({ mode }) => {
  const pages = mode === 'pages';
  const portfolioUrl = pages ? '/' : 'http://localhost:5173/';

  return {
    base: pages ? '/flora-studies/' : origin + '/',
    build: { outDir: pages ? 'dist-pages' : 'dist' },
    server: { ...localServer, origin },
    preview: localServer,
    define: { __PORTFOLIO_PAGE_URL__: JSON.stringify(portfolioUrl) },
    plugins: [
      federation({
        name: 'floraStudies',
        filename: 'remoteEntry.js',
        exposes: { './Gallery': './src/Gallery.tsx' },
        dts: false,
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
    ],
  };
});
