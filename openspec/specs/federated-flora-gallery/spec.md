# Federated Flora Gallery

## Purpose

Provide a local demonstration of a portfolio host rendering a Flora Studies gallery loaded from an independently served remote at browser runtime.

## Requirements

### Requirement: Render the federated Flora Studies gallery

The standalone remote and local portfolio host SHALL render the same Gallery implementation with the eight original cards, their captions and images, and the original responsive layout.

#### Scenario: The complete Gallery appears in both apps

- **GIVEN** both local apps are running
- **WHEN** a visitor opens the standalone gallery or scrolls to Photography on the host
- **THEN** the cards appear in order 001, 002, 003, 005, 006, 004, 007, 008
- **AND** all eight photos and their captions are available

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

### Requirement: Gallery interactions in both contexts

The shared Gallery SHALL support card reveals and an image lightbox in both apps. The embedded Gallery's styles SHALL preserve the surrounding portfolio's appearance.

#### Scenario: A visitor opens and closes a photo

- **GIVEN** the shared Gallery is visible in either app
- **WHEN** the visitor activates a card with the pointer or keyboard
- **THEN** the lightbox shows the selected photo and title, focuses the Close button, and locks body scrolling
- **AND** Close, Escape, and backdrop activation dismiss it and restore focus and scrolling

#### Scenario: The Gallery stylesheet loads in the portfolio

- **WHEN** the remote Gallery stylesheet loads in the host
- **THEN** the surrounding portfolio's styles remain unchanged
