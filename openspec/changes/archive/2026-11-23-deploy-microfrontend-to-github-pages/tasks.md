# Tasks

## 1. Pages build mode

- [x] 1.1 Add a Pages build mode to the existing Vite configs. Verify that the host uses the same-origin `/flora-studies/remoteEntry.js` and the remote emits its entry, chunks, and CSS with URLs valid under `/flora-studies/`. Run the existing local flow to confirm that ports 5173 and 5174 still work.
- [x] 1.2 Update the cross-app links for Pages mode and relocate the host's Photography cover to a host-owned asset path. Verify both local builds and Pages outputs retain their intended links, the cover and CV paths are valid, and the host output leaves the remote's staging directory available.

## 2. Build and package

- [x] 2.1 Add one reusable build-and-stage command using the root Yarn 4.9.2 workspace. Run it twice and verify that the second run assembles clean outputs with both HTML entry points, the remote entry, and both sets of assets at their expected paths.
- [x] 2.2 Document the command and how to serve its staging directory locally using one static server with directory indexes and real 404 responses. Run the documented commands and confirm that `/`, `/flora-studies/`, and `/flora-studies/remoteEntry.js` resolve from the same server.

## 3. Manual GitHub Actions workflow

- [x] 3.1 Add a `workflow_dispatch` workflow that verifies Yarn 4.9.2, installs with `--immutable`, runs the shared packaging command, and uploads only the staging directory. Check the workflow syntax locally and confirm the build commands match the tested local process and that the workflow defines no push or pull request triggers.
- [x] 3.2 Add a deploy job that consumes the current run's Pages artifact and runs only when the explicit deploy input is true. Verify the default is false, the build is a job dependency, and the `github-pages` environment and Pages/OIDC permissions apply to the deploy job.

## 4. Release artifact acceptance

- [x] 4.1 Open the equivalent of the Pages artifact on a single local static server. Check `/` and direct navigation and refresh at `/flora-studies/` and `/flora-studies/index.html`. Verify cross-app navigation, section anchors, the CV, both portfolio images, all three featured images, and all eight standalone and embedded gallery cards in their original order.
- [x] 4.2 With browser cache disabled, verify that the host's Network panel shows a successful JavaScript response from the same-origin `/flora-studies/remoteEntry.js`. Verify the remote chunks, CSS, and decoded images load, the lightbox works in both contexts, and the embedded CSS does not change the portfolio's styles. Check for requests to the development ports and broken asset URLs.

## Workflow follow-up

- After separate approval for Git integration, dispatch the workflow in build-only mode and verify the uploaded artifact.
- After separate approval for Pages settings and live deployment, record the previous publishing source, select GitHub Actions as the source if needed, and dispatch with deployment explicitly enabled. Verify both live URLs and the same-origin remote request. Use the documented rollback path if needed.
