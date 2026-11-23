# Design

## Context

The static portfolio and Flora Studies pages are the parity references. The local demo already exposes a small Gallery over Module Federation on port 5174.

## Goals / Non-Goals

Preserve the original pages' presentation and interactions in the two local apps. Keep the original tracked files and publishing settings as the comparison baseline.

## Decisions

- Keep the original page shells in the apps' HTML and mount React at the shared gallery boundary. This preserves document metadata, navigation, and layout while reusing the existing federation contract.
- Own the card data, reveal behavior, and lightbox in the remote Gallery. Both the standalone page and the host render that component. Keep standalone page styles in its entry and scope the shared styles to the Gallery and its portal.
- Keep cross-app links on the local app origins and retain same-page anchors. Serve portfolio assets from the host and gallery assets from the remote.

## Risks / Trade-offs

- Shared class names can affect the host. Compare computed styles with the remote stylesheet toggled.
- A successful remote entry response can hide a broken image or stylesheet URL. Compare the apps side by side with the originals and validate their network responses and image decoding.
