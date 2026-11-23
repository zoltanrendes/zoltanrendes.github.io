# Flora Studies Module Federation demo

From the repository root, use Node.js 24 and Corepack with Yarn 4.9.2.

```sh
corepack yarn --version
corepack yarn install
```

Build and serve the Flora Studies remote in the first terminal.

```sh
corepack yarn workspace flora-studies build
corepack yarn workspace flora-studies preview
```

Start the portfolio host in a second terminal.

```sh
corepack yarn workspace portfolio dev
```

Open http://localhost:5173/ to see the Gallery. In DevTools, open Network, disable cache, and reload. Verify that the gallery photos appear and that `http://localhost:5174/remoteEntry.js` returns a successful response. Open http://localhost:5174/ to see the standalone remote.

The preview serves the remote build output. Rebuild the remote after changing its code or images. Restart preview if you change its server configuration.

## GitHub Pages artifact

From the repository root, build and serve the exact directory uploaded by the Pages workflow.

```sh
corepack yarn install --immutable
corepack yarn build:pages
corepack yarn preview:pages
```

The build stages the portfolio at the root of `dist/pages` and Flora Studies under `dist/pages/flora-studies`. The preview serves both from one origin with directory indexes and a 404 for missing files.

Open http://127.0.0.1:4173/ and http://127.0.0.1:4173/flora-studies/. Verify navigation between the pages, the images, and the lightbox in both galleries. In DevTools, disable the cache and reload the portfolio. Check that `/flora-studies/remoteEntry.js`, the gallery chunks, and its stylesheet return successfully from the preview origin.

Run **Build and deploy Pages** from the GitHub Actions tab. Leave **Publish this build to GitHub Pages** unchecked for an artifact-only run. For a live release, confirm the repository uses GitHub Actions as its Pages source and check the publish option. Keep a known-good release ref or the prior publishing source available for rollback.

## Tests

From the repository root, install the workspace dependencies and Chromium, then run both suites.

```sh
corepack yarn install --immutable
corepack yarn playwright install chromium
corepack yarn test:unit
corepack yarn test:e2e
```

The unit command runs the React Testing Library unit and integration tests in jsdom. Playwright builds and starts the local federation servers on ports 5173 and 5174 and the staged Pages preview on port 4173. Stop existing servers on those ports before starting the suite.
