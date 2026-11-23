# Proposal

## Why

The portfolio already links to a static Flora Studies gallery. A local demo will show how a portfolio host can load and render a gallery served by a separate application at browser runtime.

## What Changes

- Add a Yarn 4.9.2 workspace with two React, TypeScript, and Vite apps, `apps/portfolio` and `apps/flora-studies`.
- Expose a simple `Gallery` from the Flora Studies remote and render it in the portfolio host through Module Federation.
- Verify the rendered gallery at `http://localhost:5173/` and the browser's request for the remote entry on port `5174`.

## Capabilities

### New Capabilities

- `federated-flora-gallery` — Local browser-runtime loading and rendering of the Flora Studies gallery.

### Modified Capabilities

## Impact

The implementation adds workspace tooling and two local demo apps. Preserve the existing static portfolio, the original `flora-studies/` page and images, and the GitHub Pages deployment settings.
