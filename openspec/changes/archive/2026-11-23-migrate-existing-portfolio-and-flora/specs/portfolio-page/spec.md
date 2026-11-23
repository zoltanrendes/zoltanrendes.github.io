# Spec Delta

## Purpose

Preserve the original portfolio experience in the local portfolio host and integrate the shared Gallery into its Photography section.

## ADDED Requirements

### Requirement: Original portfolio experience

The portfolio host SHALL preserve the original content, navigation, responsive styling, scroll reveals, images, and links.

#### Scenario: A visitor browses the local portfolio

- **WHEN** a visitor opens `http://localhost:5173/` and navigates through the page
- **THEN** the original sections, anchor targets, links, profile and cover images, and CV are available
- **AND** the Photography cover and call to action open the standalone Flora Studies app
