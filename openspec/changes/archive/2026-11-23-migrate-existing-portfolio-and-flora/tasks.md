# Tasks

## 1. Portfolio parity

- [x] 1.1 Port the root `index.html`, `styles.css`, and `script.js` behavior into `apps/portfolio`. Preserve the document metadata, typography, header, all sections and footer, section order, anchors, sticky navigation, responsive layout, and scroll reveals. Compare the host with the original at desktop and mobile widths, including reduced-motion behavior.
- [x] 1.2 Wire the profile image, Photography cover, and CV PDF into the host. Verify that both images decode, both CV links open the PDF, and external, email, telephone, and section links retain their original destinations or behaviors. Verify that the Photography cover and CTA open the local standalone Flora Studies app.

## 2. Standalone Flora Studies parity

- [x] 2.1 Port the complete standalone page from `flora-studies/index.html` into `apps/flora-studies`. Preserve the responsive CSS, fonts, header, featured photos (001, 007, 008), gallery heading and copy, note, and footer. Compare the standalone page with the original and verify the Gallery and Note anchors and all back-to-portfolio links.
- [x] 2.2 Expand the remote Gallery into the shared implementation. Preserve card order (001, 002, 003, 005, 006, 004, 007, 008), original captions, image alternatives, card sizes and crops, lazy loading, hover/focus states, and staggered reveals. Scroll through the standalone gallery and verify all eight cards and featured image instances render and decode in the original order.
- [x] 2.3 Port the lightbox into the shared Gallery. Verify keyboard and pointer activation, selected image and title, focus on Close, closing via Close, backdrop, or Escape, scroll lock while open, and focus and scroll restoration after closing. Ensure any listeners or scroll locks are cleaned up when the Gallery unmounts.

## 3. Host integration and CSS isolation

- [x] 3.1 Mount the shared Gallery beneath the existing Photography feature via the current lazy `floraStudies/Gallery` import. Keep the standalone app rendering the same component and photo data. Verify the host builds without importing remote source files or depending on the remote workspace package.
- [x] 3.2 Keep Flora's page-wide styles in the standalone entry and scope the shared Gallery and lightbox CSS to their own markup, including any overlay rendered outside the gallery container. Check that CSS variables, typography, generic class names, and resets stay scoped. In Chromium, compare computed styles for the portfolio body, header, hero, Photography feature, and footer before and after the remote CSS loads. Verify that the lightbox overlays the sticky header and that closing it restores the host's scroll state.

## 4. Browser and repository acceptance

- [x] 4.1 Serve the unchanged static originals separately as the reference and run both workspace apps. Compare the host and standalone remote with their corresponding originals at desktop and mobile widths. Check layout, content, responsive navigation, anchors, reveals, and the original gallery interactions in both embedded and standalone contexts. Verify the extra host embed sits below the Photography feature.
- [x] 4.2 With browser cache disabled, reload the host and confirm a successful request to `http://localhost:5174/remoteEntry.js`. Inspect remote chunks and CSS, scroll each gallery to trigger lazy loading, and verify that every portfolio, featured, card, and opened lightbox image decodes. Check the console for federation, CORS, and asset errors.
- [x] 4.3 Run both workspace type checks and builds using Yarn 4.9.2. Review staged, unstaged, and untracked files to verify that the tracked originals and GitHub Pages configuration remain intact.
