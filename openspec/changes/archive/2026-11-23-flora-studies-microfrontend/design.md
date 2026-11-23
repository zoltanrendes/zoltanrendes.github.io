# Design

## Context

The root `index.html` loads `styles.css` and `script.js` and links to `flora-studies/index.html`. The latter is a standalone static gallery with eight PNGs in the same directory. The repository has no existing JavaScript workspace. See [proposal.md](proposal.md) for motivation.

## Goals / Non-Goals

Give each demo app its own Vite entry point and server. Preserve the static site's paths and publishing configuration. The existing site's navigation, styling, and gallery lightbox are outside the demo implementation scope.

## Decisions

- **Use a private root workspace.** Set `packageManager` to `yarn@4.9.2`, include `apps/*` as workspaces, and use a shared lockfile. Place all app code under `apps/` so the static files can continue to serve the existing site from their current locations.
- **Use a Vite Module Federation integration.** Select and pin a compatible release for the two apps. Configure the remote as `floraStudies` and expose `./Gallery` with a default React component export. Configure the host to resolve `floraStudies/Gallery` from the remote entry URL on `http://localhost:5174`. Lazy-load the component and provide a matching TypeScript module declaration in the host. Share compatible React and React DOM versions as singletons through the integration.
- **Keep server origins deterministic.** Bind the host to port `5173` and the remote to port `5174` with strict port selection. Allow the host origin to fetch remote assets, and configure remote chunks and photo URLs to resolve from the remote origin. Use a remote dev server if the pinned integration serves the entry in dev mode. Otherwise serve the remote's Vite build with Vite preview on port `5174`, and document the required build and restart steps.
- **Use a small selection of existing artwork.** Publish demo copies of selected PNGs as remote-owned assets and include descriptive alt text in the Gallery. This keeps asset delivery self-contained and leaves the original static files at their published URLs.

## Risks / Trade-offs

- Vite federation behavior can vary by integration and version. Verify the entry URL, cross-origin access, dependent chunks, and image requests in the browser with the selected local commands.
- A remote served from build output requires a rebuild to pick up changes. Document this in the local run instructions if preview is used.
