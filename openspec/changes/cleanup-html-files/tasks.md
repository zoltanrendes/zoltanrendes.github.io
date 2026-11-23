# Tasks

## 1. Regression baseline and test setup

- [x] 1.1 Add Vitest with jsdom and React Testing Library to the Yarn 4.9.2 workspace, including user-event and a React matcher setup. Configure test-only resolution of `floraStudies/Gallery` and a controllable IntersectionObserver double where needed. Expose a non-watch `test:unit` command and verify that test discovery works without starting federation servers.
- [x] 1.2 Add Playwright with Chromium and a root `test:e2e` command. Configure the two-port host development server and built remote preview, plus a separate project using the staged Pages artifact on one static server. Before moving markup, run baseline browser tests for both page shells, navigation, gallery order, lightbox and the actual local and Pages remote entry responses. Document the Chromium install and suite commands in `apps/README.md`.

## 2. Portfolio component migration

- [x] 2.1 Write failing React Testing Library tests for the portfolio header, navigation targets, selected section content and contact links in `PortfolioApp`. Extract the sections from `apps/portfolio/index.html` into React components and mount the page using `apps/portfolio/src/main.tsx`. Preserve the DOM structure, headings, IDs, and CSS hooks. Verify the new tests and run the portfolio Chromium smoke tests.
- [x] 2.2 Test the Photography component's image and link, loading status, and rendered remote placeholder under the test-only substitution. Move the mode-aware Flora URL into the component boundary using the existing host Vite config. Preserve the lazy federated import and keep the Gallery below the Photography feature. Verify the real Gallery still renders in both browser projects.
- [x] 2.3 Add controlled observer tests for reveal registration after render, visibility on intersection and cleanup. Move the portfolio reveal logic into a mounted, root-scoped React effect and remove the old import-time behavior. Verify scrolling, reduced motion and direct navigation to `/#photography` in Chromium.

## 3. Flora Studies component migration

- [x] 3.1 Write failing React Testing Library tests for standalone navigation, featured photos, Gallery and Note anchors, and back links in `FloraStudiesApp`. Extract the page shell into React, supply the mode-specific portfolio URL, and import the featured photos. Verify the component tests and the built routes in Chromium, including direct fragment URLs after mount.
- [x] 3.2 Add React Testing Library coverage around the existing shared Gallery. Assert the eight-card order, captions and image alternatives. Exercise opening a photo, its title, initial focus and body scroll lock, Escape, Close and backdrop dismissal, focus restoration and unmount cleanup. Use browser assertions for actual image decoding and user scrolling.

## 4. End-to-end acceptance

- [x] 4.1 Run the two Chromium projects against the refactored apps. Check desktop and mobile layout, in-page and cross-app navigation, both galleries and original image order, successful local asset responses, CSS isolation, and no runtime errors. Assert a successful `http://localhost:5174/remoteEntry.js` response in the local flow and a same-origin `/flora-studies/remoteEntry.js` response in the packaged flow, with no development-port requests from the Pages build.
- [x] 4.2 Run immutable install, unit and integration suites, Chromium E2E, both workspace type checks and builds, and `build:pages`. Inspect the source HTML shells for only document setup, one root and the module entry. Review the change for duplicated gallery code, test-only dependencies leaking into production, and accidental changes to the original static site or Pages workflow.
