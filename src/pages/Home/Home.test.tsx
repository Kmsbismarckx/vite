import { renderTestApp } from '@/tests/helpers/renderTestApp.tsx';

import { describe, it } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';

describe('Home', () => {
  it('Renders hello world', () => {
    renderTestApp(null);

    const helloWorldElement = screen.getByText(/hello world/i);

    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement);

    screen.debug();
  });

  it('Renders data', async () => {
    renderTestApp(null);

    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
  });
  it('Click event', () => {
    renderTestApp(null);

    const button = screen.getByTestId('toggle-button');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    fireEvent.click(button);
    expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });
  it('input', () => {
    renderTestApp(null);

    const inputElement = screen.getByPlaceholderText(/input value/i);

    expect(inputElement).toBeInTheDocument();
    expect(screen.queryByTestId('value-element')).toHaveTextContent('');
    fireEvent.input(inputElement, {
      target: { value: '123123' },
    });
    // userEvent.type(inputElement, '123123');

    expect(screen.queryByTestId('value-element')).toHaveTextContent('123123');
  });
});
