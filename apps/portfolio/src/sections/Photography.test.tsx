import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';
import Photography from './Photography';

it('shows the original feature and lazily mounts the Gallery below it', async () => {
  render(<Photography floraUrl="http://localhost:5174/" />);

  const cover = screen.getByRole('link', { name: 'Open Flora Studies gallery' });
  expect(cover).toHaveAttribute('href', 'http://localhost:5174/');
  expect(screen.getByRole('img')).toHaveAttribute('src', '/photography/Flora%20007.png');
  expect(screen.getByRole('link', { name: 'Open Flora Studies' })).toHaveAttribute('href', 'http://localhost:5174/');
  expect(screen.getByRole('status')).toHaveTextContent('Loading Flora Studies');
  const remote = await screen.findByRole('heading', { name: 'Gallery test substitute' });
  expect(cover.closest('article')?.nextElementSibling).toContainElement(remote);
  expect(screen.queryByRole('status')).not.toBeInTheDocument();
});
