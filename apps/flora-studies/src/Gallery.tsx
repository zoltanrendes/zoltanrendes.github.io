import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import flora001 from './images/Flora 001.png';
import flora002 from './images/Flora 002.png';
import flora003 from './images/Flora 003.png';
import flora005 from './images/Flora 005.png';
import flora006 from './images/Flora 006.png';
import flora004 from './images/Flora 004.png';
import flora007 from './images/Flora 007.png';
import flora008 from './images/Flora 008.png';
import './gallery.css';

const photos = [
  { title: 'Flora Study 001', caption: 'Soft garden light', src: flora001, size: 'flora-wide' },
  { title: 'Flora Study 002', caption: 'Vertical bloom', src: flora002, size: 'flora-tall' },
  { title: 'Flora Study 003', caption: 'Quiet detail', src: flora003 },
  { title: 'Flora Study 005', caption: 'Petal texture', src: flora005 },
  { title: 'Flora Study 006', caption: 'Small portrait', src: flora006 },
  { title: 'Flora Study 004', caption: 'Long stem composition', src: flora004, size: 'flora-tall' },
  { title: 'Flora Study 007', caption: 'Natural contrast', src: flora007, size: 'flora-wide' },
  { title: 'Flora Study 008', caption: 'Close garden study', src: flora008, size: 'flora-medium' },
];

export default function Gallery() {
  const grid = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const [activePhoto, setActivePhoto] = useState<(typeof photos)[number]>();

  useEffect(() => {
    const cards = grid.current!.querySelectorAll('.flora-gallery-card');
    if (!('IntersectionObserver' in window)) {
      cards.forEach((card) => card.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!activePhoto) return;

    const { style } = document.body;
    const previousOverflow = style.overflow;
    style.overflow = 'hidden';
    closeButton.current?.focus({ preventScroll: true });

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setActivePhoto(undefined);
    }

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      style.overflow = previousOverflow;
      trigger.current?.focus({ preventScroll: true });
    };
  }, [activePhoto]);

  return (
    <section className="flora-section" id="gallery">
      <div className="flora-section-heading">
        <div>
          <p className="flora-eyebrow">Gallery</p>
          <h3>Eight small studies in colour, texture, and light.
            Let the flowers tell their own story, in their own light.</h3>
        </div>
        <p>
          The gallery is deliberately separate from my engineering work, but it belongs here as a
          personal craft: observing detail, framing choices, and editing with restraint.
        </p>
      </div>
      <div ref={grid} className="flora-gallery" aria-label="Flower photography gallery">
        {photos.map((photo, index) => (
          <button
            key={photo.title}
            className={photo.size ? `flora-gallery-card ${photo.size}` : 'flora-gallery-card'}
            type="button"
            style={{ transitionDelay: `${Math.min(index * 70, 420)}ms` }}
            onFocus={(event) => event.currentTarget.classList.add('is-visible')}
            onClick={(event) => {
              trigger.current = event.currentTarget;
              setActivePhoto(photo);
            }}
          >
            <img src={photo.src} alt={photo.title} loading="lazy" />
            <span className="flora-caption"><strong>{photo.title}</strong><span>{photo.caption}</span></span>
          </button>
        ))}
      </div>
      {activePhoto && createPortal(
        <div
          className="flora-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged photograph"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(undefined);
          }}
        >
          <div className="flora-lightbox-inner">
            <img src={activePhoto.src} alt={activePhoto.title} />
            <div className="flora-lightbox-bar">
              <div className="flora-lightbox-title">{activePhoto.title}</div>
              <button ref={closeButton} className="flora-close" type="button" onClick={() => setActivePhoto(undefined)}>
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
}

