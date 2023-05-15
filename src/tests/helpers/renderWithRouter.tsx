import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '@/App.tsx';
import { ReactNode } from 'react';
import { render } from '@testing-library/react';

export const renderWithRouter = (component: ReactNode, initialRouter = '/') => {
  return render(
    <MemoryRouter initialEntries={[initialRouter]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
};
