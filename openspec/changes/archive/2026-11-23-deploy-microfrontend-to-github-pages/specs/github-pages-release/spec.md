# Spec Delta

## Purpose

Define how maintainers build and verify a single GitHub Pages release containing the portfolio and the independently built Flora Studies application.

## ADDED Requirements

### Requirement: Manual release builds

The repository SHALL provide a GitHub Actions workflow triggered only by `workflow_dispatch`. It SHALL build both workspaces using Yarn 4.9.2 and assemble one Pages artifact from the outputs of that run.

#### Scenario: Maintainer requests a release build

- **WHEN** a maintainer manually dispatches the workflow
- **THEN** the build verifies the Yarn version, installs from the lockfile, builds both apps, and packages one artifact
- **AND** publishing requires an explicit deployment selection in the manual dispatch

### Requirement: Static site entry points

The release artifact SHALL serve the portfolio at `/` and the full Flora Studies page at `/flora-studies/`. Both pages SHALL preserve their navigation, styles, and image assets, with cross-app links resolving on the same origin.

#### Scenario: Visitor opens either page on one static server

- **GIVEN** the assembled production artifact is served from one static origin
- **WHEN** the visitor opens each entry point directly and follows the links between them
- **THEN** both pages render with their styles, the portfolio images and CV link resolve, and the Flora Studies featured images and eight gallery images load
- **AND** the site's URLs work without a client-side fallback route

### Requirement: Same-origin federated Gallery

The release host SHALL load the shared Gallery at browser runtime through the same-origin URL `/flora-studies/remoteEntry.js`. The embedded Gallery SHALL retain its styles and interactions while preserving the surrounding portfolio's styles.

#### Scenario: The production Gallery loads at runtime

- **GIVEN** the artifact is served from one static origin and the browser cache is disabled
- **WHEN** a visitor opens the portfolio and scrolls to Photography
- **THEN** the browser successfully requests `/flora-studies/remoteEntry.js`, its dependent chunks, styles, and images
- **AND** all eight cards appear in the original order with the shared lightbox available
- **AND** the browser makes no requests to the localhost development ports
