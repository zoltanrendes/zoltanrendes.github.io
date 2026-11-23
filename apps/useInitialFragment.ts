import { useEffect } from 'react';

export function useInitialFragment() {
  useEffect(() => {
    const fragment = window.location.hash.slice(1);
    const target = fragment && document.getElementById(fragment);
    if (!target) return;

    const scrollToTarget = () => target.scrollIntoView({ behavior: 'instant' });
    scrollToTarget();
    if (typeof ResizeObserver === 'undefined') return;

    // Lazy images and fonts can move the target after the initial scroll.
    const observer = new ResizeObserver(() => {
      const { top, bottom } = target.getBoundingClientRect();
      if (top >= window.innerHeight || bottom <= 0) scrollToTarget();
    });
    observer.observe(document.body);

    const inputEvents = ['pointerdown', 'wheel', 'keydown', 'hashchange'];
    function stopFollowing() {
      observer.disconnect();
      for (const event of inputEvents) window.removeEventListener(event, stopFollowing);
    }

    for (const event of inputEvents) window.addEventListener(event, stopFollowing, { passive: true });
    return stopFollowing;
  }, []);
}
