import { describe, it } from 'vitest';
import { renderWithRouter } from '@/tests/helpers/renderWithRouter.tsx';
import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar/Navbar.tsx';

describe('Users test', () => {
  it('about', () => {
    renderWithRouter(<Navbar />);

    const aboutLink = screen.getByTestId('about-link');

    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  it('about', () => {
    renderWithRouter(<Navbar />);

    const aboutLink = screen.getByTestId('about-link');

    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  it('home', () => {
    renderWithRouter(<Navbar />);

    const homeLink = screen.getByTestId('home-link');

    fireEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
  it('user', () => {
    renderWithRouter(<Navbar />);

    const usersLink = screen.getByTestId('users-link');

    fireEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
