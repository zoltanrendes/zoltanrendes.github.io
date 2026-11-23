import { useEffect, type RefObject } from 'react';

export function useScrollReveal(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const elements = root.current?.querySelectorAll('.reveal');
    if (!elements?.length) return;

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (isIntersecting) {
          target.classList.add('is-visible');
          observer.unobserve(target);
        }
      }
    }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [root]);
}
