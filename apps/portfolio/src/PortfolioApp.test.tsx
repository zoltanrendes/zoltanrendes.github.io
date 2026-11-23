import { render, screen, within, act } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import PortfolioApp from './PortfolioApp';

it('renders the original portfolio content and navigation targets', async () => {
  render(<PortfolioApp floraUrl="/flora-studies/" />);

  const navigation = screen.getByRole('navigation');
  for (const [name, id] of [
    ['Experience', 'experience'], ['Projects', 'projects'], ['Photography', 'photography'],
    ['Stack', 'stack'], ['Strengths', 'strengths'], ['Contact', 'contact'],
  ]) {
    expect(within(navigation).getByRole('link', { name })).toHaveAttribute('href', `#${id}`);
    expect(document.getElementById(id)).toBeInTheDocument();
  }
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/complex web products/);
  expect(screen.getByRole('heading', { name: 'ESP32 Weather Stack' })).toBeInTheDocument();
  const footer = screen.getByRole('contentinfo');
  expect(within(footer).getByRole('link', { name: /@gmail\.com/ })).toHaveAttribute('href', 'mailto:rendes.zoltan@gmail.com');
  expect(within(footer).getByRole('link', { name: '+44 7874 742084' })).toHaveAttribute('href', 'tel:+447874742084');
  await screen.findByRole('heading', { name: 'Gallery test substitute' });
});

it('observes the mounted reveal sections and disconnects on unmount', async () => {
  const observe = vi.fn();
  const unobserve = vi.fn();
  const disconnect = vi.fn();
  let notify: IntersectionObserverCallback;
  const observer = { observe, unobserve, disconnect };
  vi.stubGlobal('IntersectionObserver', class {
    observe = observe;
    unobserve = unobserve;
    disconnect = disconnect;
    constructor(callback: IntersectionObserverCallback) {
      notify = callback;
    }
  });

  const { container, unmount } = render(<PortfolioApp floraUrl="/flora-studies/" />);
  const targets = [...container.querySelectorAll('.reveal')];
  expect(targets.length).toBeGreaterThan(0);
  expect(observe.mock.calls.flat()).toEqual(targets);
  expect(targets[0]).not.toHaveClass('is-visible');
  act(() => notify([{ target: targets[0], isIntersecting: true } as IntersectionObserverEntry], observer as unknown as IntersectionObserver));
  expect(targets[0]).toHaveClass('is-visible');
  expect(unobserve).toHaveBeenCalledWith(targets[0]);
  await screen.findByRole('heading', { name: 'Gallery test substitute' });
  unmount();
  expect(disconnect).toHaveBeenCalledOnce();
});
