# Spec Delta

## MODIFIED Requirements

### Requirement: Render the federated Flora Studies gallery

The standalone remote and local portfolio host SHALL render the same Gallery implementation with the eight original cards, their captions and images, and the original responsive layout.

#### Scenario: The complete Gallery appears in both apps

- **GIVEN** both local apps are running
- **WHEN** a visitor opens the standalone gallery or scrolls to Photography on the host
- **THEN** the cards appear in order 001, 002, 003, 005, 006, 004, 007, 008
- **AND** all eight photos and their captions are available

## ADDED Requirements

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
