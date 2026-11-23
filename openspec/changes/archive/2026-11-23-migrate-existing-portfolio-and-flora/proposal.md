# Proposal

## Why

The local Module Federation demo proves browser-runtime loading with a three-photo sample. The next step is to bring the complete portfolio and Flora Studies experience into the two apps while preserving the original appearance and behavior.

## What Changes

- Render the original portfolio at `http://localhost:5173/`, preserving its content, styling, responsive layout, section navigation, scroll reveals, image assets, external links, and CV links.
- Render the full original Flora Studies page at `http://localhost:5174/`, including its navigation, featured photos, gallery, note, footer, original styles, and interactions.
- Use the same Gallery component, photo data, and lightbox in the standalone remote and in the host's Photography section. Keep the existing Photography feature and its standalone-page links, with the embedded Gallery directly below it. In the local apps, point cross-page links to the corresponding localhost app and preserve in-page anchors.
- Keep browser-runtime loading through `floraStudies/Gallery` and `http://localhost:5174/remoteEntry.js`. Scope gallery styling and interaction state to protect the surrounding portfolio.
- Compare both apps against the original pages in a browser on desktop and mobile. Verify images, navigation, gallery behavior, style isolation, and the remote entry request.

## Capabilities

### New Capabilities

- `portfolio-page` — The migrated portfolio's content, navigation, and presentation.
- `flora-studies-page` — The standalone Flora Studies page and its navigation and presentation.

### Modified Capabilities

- `federated-flora-gallery` — Extend the working demo contract to cover all eight cards in the original order and their interactions in both contexts. The current contract lives in the completed `flora-studies-microfrontend` change. Its delta has yet to be synced into the main spec inventory.

## Impact

The implementation targets the existing React, TypeScript, and Vite apps in the Yarn 4.9.2 workspace. Keep the tracked root portfolio and `flora-studies/` files as the comparison baseline and preserve GitHub Pages settings. Publishing and Git integration are outside this change.
