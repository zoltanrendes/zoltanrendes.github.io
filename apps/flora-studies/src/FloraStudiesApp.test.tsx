import { render, screen, within } from '@testing-library/react';
import { expect, it } from 'vitest';
import FloraStudiesApp from './FloraStudiesApp';

it('renders the standalone page with its anchors, featured images and portfolio links', () => {
  render(<FloraStudiesApp portfolioUrl="/" />);

  expect(screen.getByRole('heading', { level: 1, name: 'Flora Studies' })).toBeInTheDocument();
  const navigation = screen.getByRole('navigation', { name: 'Flora Studies navigation' });
  expect(within(navigation).getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#gallery');
  expect(within(navigation).getByRole('link', { name: 'Note' })).toHaveAttribute('href', '#note');
  expect(within(navigation).getByRole('link', { name: 'Portfolio' })).toHaveAttribute('href', '/');
  const backLinks = screen.getAllByRole('link', { name: 'Back to portfolio' });
  expect(backLinks).toHaveLength(2);
  for (const link of backLinks) {
    expect(link).toHaveAttribute('href', '/');
  }
  for (const alt of [
    'Close flower photograph with soft garden light',
    'Flower photograph with natural contrast',
    'Circular cropped flower detail',
  ]) {
    expect(screen.getByRole('img', { name: alt })).toHaveAttribute('src');
  }
  expect(document.getElementById('gallery')).toContainElement(screen.getByRole('img', { name: 'Flora Study 001' }));
  expect(document.getElementById('note')).toHaveTextContent('Small things deserve attention.');
});
