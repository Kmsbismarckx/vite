import { describe, it } from 'vitest';
import { fireEvent } from '@testing-library/react';
import { renderTestApp } from '@/tests/helpers/renderTestApp.tsx';

describe('counter', async () => {
  it('increment ', () => {
    const { getByTestId } = renderTestApp(null, {
      route: '/',
      initialState: {
        counter: {
          value: 10,
        },
      },
    });

    const incrementButton = getByTestId('increment-button');
    expect(getByTestId('value-title')).toHaveTextContent('10');
    fireEvent.click(incrementButton);
    expect(getByTestId('value-title')).toHaveTextContent('11');
  });
});
