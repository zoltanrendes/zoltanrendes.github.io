# Spec Delta

## Purpose

Provide a local demonstration of a portfolio host rendering a Flora Studies gallery loaded from an independently served remote at browser runtime.

## ADDED Requirements

### Requirement: Render the federated Flora Studies gallery

The local portfolio host at `http://localhost:5173/` SHALL render the remote Gallery with a visible Flora Studies heading and successfully loaded photos from the existing collection.

#### Scenario: Gallery appears on the host

- **GIVEN** the portfolio host and Flora Studies remote are running locally
- **WHEN** a visitor opens `http://localhost:5173/`
- **THEN** the host displays the Flora Studies heading and at least one loaded photo from the Gallery

### Requirement: Load the remote entry in the browser

The host SHALL load the Gallery through Module Federation at browser runtime using a remote entry served from `http://localhost:5174`.

#### Scenario: The remote entry request appears in the Network panel

- **GIVEN** both local apps are running and the browser Network panel is open with its cache disabled
- **WHEN** the visitor reloads `http://localhost:5173/`
- **THEN** the Network panel shows a successful request for `remoteEntry.js` to `http://localhost:5174`
- **AND** the host renders the Gallery loaded through that remote entry

### Requirement: Preserve the published portfolio

The demo SHALL preserve the existing static portfolio and Flora Studies page, including their tracked assets and routes, and the existing GitHub Pages settings.

#### Scenario: The demo leaves the published site intact

- **WHEN** the local demo is added to the repository
- **THEN** the existing portfolio and Flora Studies files remain unchanged at their current paths
- **AND** the GitHub Pages publishing configuration remains unchanged
