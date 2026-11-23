# Spec Delta

## Purpose

Preserve the full standalone Flora Studies experience on the local remote app alongside its federated Gallery export.

## ADDED Requirements

### Requirement: Original standalone Flora Studies experience

The remote app SHALL preserve the original page's navigation, featured photos, Gallery, note, footer, and responsive presentation.

#### Scenario: A visitor browses the standalone page

- **WHEN** a visitor opens `http://localhost:5174/`
- **THEN** the original three featured photos, gallery, note, and footer appear
- **AND** the Gallery and Note anchors resolve inside the page and portfolio links open the local host
