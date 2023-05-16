import { describe, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '@/tests/helpers/renderWithRouter.tsx';

describe('router', () => {
  it('Renders not found if invalid path ', () => {
    renderWithRouter(null, '/notFound');
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent(/not found/i);
  });
});
