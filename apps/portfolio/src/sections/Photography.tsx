import { Component, lazy, Suspense, type ReactNode } from 'react';

const Gallery = lazy(() => import('floraStudies/Gallery'));

class GalleryBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function Photography({ floraUrl }: { floraUrl: string }) {
  return (
    <section id="photography" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Photography</p>
        <h2>Flora Studies, a quiet visual essay from the garden.</h2>
      </div>

      <article className="photography-feature">
        <a
          className="photography-image"
          href={floraUrl}
          aria-label="Open Flora Studies gallery"
        >
          <img
            src="/photography/Flora%20007.png"
            alt="Flower photograph from the Flora Studies gallery"
            loading="lazy"
          />
        </a>

        <div className="photography-copy">
          <p>
            A personal photography series focused on small floral details,
            natural textures, and soft garden light. I keep it separate from
            the engineering case studies, but connected enough to show
            another part of how I observe and compose detail.
          </p>
          <a className="button button-primary" href={floraUrl}>Open Flora Studies</a>
        </div>
      </article>
      <div id="flora-gallery-root">
        <GalleryBoundary>
          <Suspense fallback={<p role="status">Loading Flora Studies…</p>}>
            <Gallery />
          </Suspense>
        </GalleryBoundary>
      </div>
    </section>
  );
}
