import { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './scroll-reveal';

const Gallery = lazy(() => import('floraStudies/Gallery'));

createRoot(document.getElementById('flora-gallery-root')!).render(
  <Suspense fallback={<p role="status">Loading Flora Studies…</p>}>
    <Gallery />
  </Suspense>,
);
