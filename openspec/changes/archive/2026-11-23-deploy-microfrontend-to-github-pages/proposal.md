# Proposal

## Why

The migrated portfolio and Flora Studies work on two localhost origins. Publishing them as one static GitHub Pages site will preserve the existing public entry points and let the portfolio continue to load the Gallery in the browser.

## What Changes

- Build both Yarn 4.9.2 workspaces in a manually dispatched GitHub Actions workflow in `zoltanrendes/zoltanrendes.github.io`.
- Assemble one release artifact with the portfolio at its root and the standalone Flora Studies app under `/flora-studies/`.
- Load the federated Gallery from the same origin at `/flora-studies/remoteEntry.js` in the Pages build. Keep the existing two-port local development workflow.
- Validate the production artifact locally with a single static server, checking both entry points, federation, links, images, and CSS.

## Capabilities

### New Capabilities

- `github-pages-release` — Manual builds, static artifact assembly, and same-origin delivery of the portfolio and federated Flora Studies app.

### Modified Capabilities

## Impact

The implementation will affect Vite build settings, cross-app links, release packaging, and GitHub Actions. The original sources remain available as references. Repository settings, Git integration, and the first live deployment require separate authorization.
