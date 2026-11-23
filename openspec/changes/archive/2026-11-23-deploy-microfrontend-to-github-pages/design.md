# Design

## Context

Both apps are built with Vite and `@module-federation/vite`. The host currently points to `http://localhost:5174/remoteEntry.js`. The remote uses an absolute localhost Vite base, and both HTML shells contain cross-app localhost links. The host also ships a Photography cover under its own `flora-studies/` public directory. The repository tracks the original static pages and has no repository-local Pages workflow. The current GitHub Pages source setting has not been verified.

## Goals / Non-Goals

Use one reproducible build and assembly path locally and in CI. Preserve the current two-port development workflow and the original static sources. Keep Git integration, repository settings changes, and live publication outside the implementation pass unless separately authorized.

## Decisions

- **Use an explicit Pages build mode.** Keep the host base at `/` for the user site and set the remote base to `/flora-studies/`. Configure the Pages host's ESM remote using a same-origin entry URL derived from `/flora-studies/remoteEntry.js`. If the federation plugin requires an absolute URL, resolve that path against the browser origin at runtime. Use mode-specific URLs in the HTML for the links between apps and retain anchor links. A production hostname baked into the bundle would prevent the same release artifact from being tested on localhost.
- **Assemble both build outputs into a fresh directory.** Copy the contents of the host's `dist` to the staging root, then copy the contents of the remote's `dist` into `flora-studies/`. Relocate the host's Photography cover into a host-owned public path for the Pages build so that `flora-studies/` is owned by the remote. Verify the resulting `index.html`, `flora-studies/index.html`, `flora-studies/remoteEntry.js`, and asset paths before uploading. Keeping each output's asset paths intact avoids rewriting generated chunks and CSS after the build.
- **Use a manual GitHub Actions workflow.** Set up Node.js 24 and Corepack on the runner, verify Yarn 4.9.2, install with `yarn install --immutable`, then run the shared build and packaging command. Upload only the staging directory with `actions/upload-pages-artifact`. A separate job gated by an explicit boolean dispatch input defaulting to false deploys that run's artifact through `actions/deploy-pages` in the `github-pages` environment. Scope `pages: write` and `id-token: write` to the deploy job and configure Pages metadata as needed for that job. Keep the build and upload usable before a Pages source change. See [GitHub's custom Pages workflow guide](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Risks / Trade-offs

- The federation plugin generates remote chunks and shared CSS separately. A valid entry response can still mask incorrect asset URLs. Test a cold page load and inspect entry, chunk, CSS, and image requests from the staged output.
- A static server with SPA fallback can return HTML for missing JavaScript or assets. Use directory-index serving with real 404s and verify JavaScript response types.
- Switching Pages source can affect the currently published site. Build and validate the artifact first. Check the existing source and document the prior release or source for rollback before any authorized switch.

## Migration Plan

After local verification and separately authorized Git integration, run a build-only dispatch once the workflow is on the default branch. Verify the artifact. With separate authorization, select GitHub Actions as the Pages publishing source if needed, then explicitly dispatch a deployment. Verify both live URLs and the same-origin remote request before closing the release. If rollback is needed, deploy a known-good artifact or restore the previously recorded publishing source through the authorized release process. See [GitHub's Pages source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
