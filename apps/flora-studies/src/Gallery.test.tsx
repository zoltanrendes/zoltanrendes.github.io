import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, it } from 'vitest';
import Gallery from './Gallery';

it('renders all eight photographs and their captions in the original order', () => {
  render(<Gallery />);
  const images = screen.getAllByRole('img');
  const order = ['001', '002', '003', '005', '006', '004', '007', '008'];
  expect(images.map(image => image.getAttribute('alt'))).toEqual(order.map(id => `Flora Study ${id}`));
  expect(images.map(image => image.closest('button')?.querySelector('.flora-caption > span')?.textContent)).toEqual([
    'Soft garden light', 'Vertical bloom', 'Quiet detail', 'Petal texture',
    'Small portrait', 'Long stem composition', 'Natural contrast', 'Close garden study',
  ]);
});

it('opens the selected photo and restores focus and scrolling for every dismissal', async () => {
  const user = userEvent.setup();
  render(<Gallery />);
  const card = screen.getByRole('button', { name: /Flora Study 007/ });
  const originalOverflow = document.body.style.overflow;

  for (const dismiss of ['escape', 'close', 'backdrop']) {
    card.focus();
    await user.keyboard('{Enter}');
    const dialog = screen.getByRole('dialog', { name: 'Enlarged photograph' });
    const close = within(dialog).getByRole('button', { name: 'Close' });
    expect(within(dialog).getByRole('img', { name: 'Flora Study 007' })).toBeInTheDocument();
    expect(within(dialog).getByText('Flora Study 007')).toBeInTheDocument();
    expect(close).toHaveFocus();
    expect(document.body.style.overflow).toBe('hidden');

    if (dismiss === 'escape') await user.keyboard('{Escape}');
    else await user.click(dismiss === 'close' ? close : dialog);

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    expect(card).toHaveFocus();
    expect(document.body.style.overflow).toBe(originalOverflow);
  }
});

it('removes the open lightbox and releases its scroll lock on unmount', async () => {
  const user = userEvent.setup();
  const originalOverflow = document.body.style.overflow;
  const { unmount } = render(<Gallery />);
  await user.click(screen.getByRole('button', { name: /Flora Study 001/ }));
  expect(document.body.style.overflow).toBe('hidden');
  unmount();
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(document.body.style.overflow).toBe(originalOverflow);
});
