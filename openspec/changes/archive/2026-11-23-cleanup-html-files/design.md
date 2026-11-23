# Design

## Context

Both app entry documents contain full page bodies and a nested `flora-gallery-root`. The portfolio entry imports a reveal script that queries the document before React renders, and both Vite configs replace cross-app link tokens in HTML. Flora's standalone page references its featured images from HTML. There is no tracked automated test suite.

## Goals / Non-Goals

Make each app body render from one React root with testable sections. Preserve the content, DOM landmarks, IDs, class names, responsive styling, local ports, Pages routes, and existing Gallery contract. Keep the original root HTML pages and the deployment workflow outside the refactor.

## Decisions

- **Keep small document shells.** Retain language, metadata, title, and first-load CSS and font links in each HTML head. Mount `PortfolioApp` or `FloraStudiesApp` from the corresponding `src/main.tsx` into a single root. Preserve the existing layout structure when extracting the portfolio header, hero, overview, experience, projects, Photography, stack, strengths and contact sections. Extract the Flora header, hero, note and footer around the existing Gallery. Split by page responsibility and preserve source order.
- **Resolve routes and assets in the app.** Use each existing Vite config's mode-specific URL as the source for a typed build-time value passed to the page or link-bearing components. Remove the HTML token replacement when the last token is migrated. Keep local destinations at ports 5173 and 5174 and Pages destinations at `/` and `/flora-studies/`. Import the three Flora hero images from existing remote assets, preserve the portfolio public image and CV URLs, and verify generated URLs in both build modes.
- **Bind effects to the mounted page.** Replace `scroll-reveal.ts` side effects with a root-scoped React effect that observes rendered elements, preserves the current threshold and root margin, and disconnects on cleanup. Keep native anchor navigation. Verify direct entry with a fragment after React mounts and scroll to the target after render when needed. Preserve the existing reduced-motion styles.
- **Keep the federation boundary.** Use the existing lazy `floraStudies/Gallery` import and Suspense fallback in the portfolio Photography section. The standalone remote renders its own exported Gallery locally. Keep its lightbox portal and CSS scope. Give the portfolio component tests a test-only substitution for the remote import so they need no remote server or runtime cross-workspace dependency. Chromium exercises the real import.
- **Layer the checks.** Use Vitest with jsdom to run React Testing Library tests and user-event interactions. Keep this configuration separate from Vite federation builds. Use Playwright Chromium projects for the two-port local flow and the single-origin packaged Pages flow. Use the existing build and preview commands to provision the servers and assert their actual network responses. Compare layout and CSS in a browser where computed styles, image decoding and scrolling are available. [Vitest environments](https://vitest.dev/guide/environment) [Playwright web servers](https://playwright.dev/docs/test-webserver)

## Risks / Trade-offs

- Moving title or meta markup into React would make document metadata depend on JavaScript execution. Keep it in the document shell.
- React can commit after the browser first processes a URL fragment. Cover cold navigation to portfolio sections and Flora's Gallery and Note as well as in-page clicks.
- Styling can shift if the new mount node introduces a layout boundary or the moved markup changes selector relationships. Preserve the existing classes and DOM relationships and compare desktop and mobile renderings of each page.
- A DOM test double cannot establish that production federation works. Keep the local and packaged remote entry URLs, CSS, and photo requests in Chromium coverage.
