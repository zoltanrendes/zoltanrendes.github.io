# Proposal

## Why

The two Vite app entry documents contain nearly all of the page markup, while React currently mounts only the Gallery. Moving page markup into React components gives each app clear component boundaries and makes the existing behavior directly testable.

## What Changes

- Reduce the two app entry documents to document metadata, first-load stylesheet and font links, a React root, and the Vite module entry. Render both page bodies through React components.
- Preserve the existing content, typography, layout, anchors, assets, reveal behavior, and links. Keep the shared Gallery federated at runtime in local and GitHub Pages builds.
- Add React Testing Library unit and integration coverage and Playwright end-to-end coverage in Chromium for both serving modes.
- Use the Superpowers test-driven-development workflow during implementation, starting with observable behavior and checking each migration slice before proceeding.

## Capabilities

### New Capabilities

### Modified Capabilities

## Impact

This refactor touches the two app entry documents, React source, Vite link configuration, and local test tooling in the Yarn 4.9.2 workspace. The existing `portfolio-page`, `flora-studies-page`, `federated-flora-gallery`, and `github-pages-release` specifications are the regression baseline. The original root site and root `flora-studies/` files remain the parity reference. The plan leaves the release workflow and repository settings intact.
