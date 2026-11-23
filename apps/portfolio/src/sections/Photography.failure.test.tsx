import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import Photography from './Photography';

vi.mock('floraStudies/Gallery', () => {
  throw new Error('Remote unavailable');
});

it('keeps the Photography feature available when the federated import fails', async () => {
  const logError = vi.spyOn(console, 'error').mockImplementation(() => {});
  try {
    render(<Photography floraUrl="/flora-studies/" />);
    await waitForElementToBeRemoved(screen.getByRole('status'));
    expect(screen.getByRole('link', { name: 'Open Flora Studies' })).toHaveAttribute('href', '/flora-studies/');
  } finally {
    logError.mockRestore();
  }
});
