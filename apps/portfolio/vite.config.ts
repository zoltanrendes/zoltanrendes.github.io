import { federation } from '@module-federation/vite';
import { defineConfig } from 'vite';

const localServer = { host: 'localhost', port: 5173, strictPort: true };

export default defineConfig(({ mode }) => {
  const pages = mode === 'pages';
  const floraUrl = pages ? '/flora-studies/' : 'http://localhost:5174/';

  return {
    build: { outDir: pages ? 'dist-pages' : 'dist' },
    server: localServer,
    preview: localServer,
    plugins: [
      {
        name: 'flora-page-link',
        transformIndexHtml: (html) => html.replaceAll('%FLORA_PAGE_URL%', floraUrl),
      },
      federation({
        name: 'portfolio',
        remotes: {
          floraStudies: {
            name: 'floraStudies',
            type: 'module',
            entry: floraUrl + 'remoteEntry.js',
          },
        },
        dts: false,
        shared: {
          react: { singleton: true },
          'react-dom': { singleton: true },
        },
      }),
    ],
  };
});
