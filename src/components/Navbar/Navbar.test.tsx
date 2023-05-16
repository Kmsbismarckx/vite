import { describe, it } from 'vitest';
import { renderTestApp } from '@/tests/helpers/renderTestApp.tsx';
import { fireEvent, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar/Navbar.tsx';

describe('Users test', () => {
  it('about', () => {
    renderTestApp(<Navbar />, {
      route: '/',
    });

    const aboutLink = screen.getByTestId('about-link');

    fireEvent.click(aboutLink);
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });
  it('home', () => {
    renderTestApp(<Navbar />, {
      route: '/',
    });

    const homeLink = screen.getByTestId('home-link');

    fireEvent.click(homeLink);
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
  it('user', () => {
    renderTestApp(<Navbar />, {
      route: '/',
    });

    const usersLink = screen.getByTestId('users-link');

    fireEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
