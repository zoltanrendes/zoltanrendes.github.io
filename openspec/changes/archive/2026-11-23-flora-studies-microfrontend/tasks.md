# Tasks

## 1. Workspace

- [x] 1.1 Add the private Yarn 4.9.2 workspace and scaffold React, TypeScript, and Vite in `apps/portfolio` and `apps/flora-studies`. Verify `yarn --version` prints `4.9.2`, installation creates a shared lockfile, and `yarn workspaces list` shows both apps.
- [x] 1.2 Pin a compatible Vite Module Federation integration and align React and React DOM dependencies across the workspaces. Verify both apps pass TypeScript checks and Vite builds after installing the integration.

## 2. Flora Studies remote

- [x] 2.1 Add a Gallery with a Flora Studies heading, descriptive image alternatives, and a small set of copies from the existing collection. Render it in the remote's own app and verify the images load there.
- [x] 2.2 Expose `./Gallery` as a default React component export, configure shared React dependencies and remote asset URLs, and serve the remote on strict port `5174` with cross-origin access for `http://localhost:5173`. Verify the configured `remoteEntry.js` URL returns JavaScript and the expected CORS header for the host origin.

## 3. Portfolio host

- [x] 3.1 Configure the host on strict port `5173` to load `floraStudies/Gallery` at runtime from the remote entry URL. Add the matching TypeScript declaration and render the lazy-loaded component. Verify the host type-checks and builds without a workspace dependency on the remote app.
- [x] 3.2 Document the install and launch commands for both apps in the demo documentation, including the remote build and preview commands if needed. Run the documented commands and confirm both localhost URLs use their assigned ports.

## 4. Integration acceptance

- [x] 4.1 With both apps running, open DevTools Network, disable cache, and reload `http://localhost:5173/`. Confirm the Flora Studies heading and photos render and the browser successfully requests `remoteEntry.js` from `http://localhost:5174`.
- [x] 4.2 Review the repository diff to confirm the existing static site, original Flora Studies files and paths, and any Pages workflow or configuration files are preserved. Leave GitHub Pages repository settings untouched.
