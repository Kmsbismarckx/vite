import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Home } from '@/pages/Home/Home.tsx';

describe('Home', () => {
  it('Renders hello world', () => {
    render(<Home />);

    const helloWorldElement = screen.getByText(/hello world/i);
    const buttonElement = screen.getByRole('button');

    expect(helloWorldElement).toBeInTheDocument();
    expect(helloWorldElement);

    expect(buttonElement).toBeInTheDocument();
    screen.debug();
  });

  it('Renders data', async () => {
    render(<Home />);

    const dataElement = await screen.findByText(/data/i);
    expect(dataElement).toBeInTheDocument();
  });
  it('Click event', () => {
    render(<Home />);

    const button = screen.getByTestId('toggle-button');
    expect(screen.queryByTestId('toggle-element')).toBeNull();
    fireEvent.click(button);
    expect(screen.queryByTestId('toggle-element')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByTestId('toggle-element')).toBeNull();
  });
  it('input', () => {
    render(<Home />);

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
