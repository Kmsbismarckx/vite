import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Users } from '@/Users/Users.tsx';
import { User } from '@/getData/types.ts';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '@/App.tsx';
import { renderWithRouter } from '@/tests/helpers/renderWithRouter.tsx';

type Response = { data: undefined | User[] };

vi.mock('axios');
describe('users', () => {
  let response: Response = { data: undefined };

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
      ],
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('get data', async () => {
    // @ts-ignore
    axios.get.mockResolvedValue({ data: response.data });

    render(
      <MemoryRouter>
        <AppRouter />
        <Users />
      </MemoryRouter>
    );

    const users = await screen.findAllByTestId('user-item');

    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);

    screen.debug();
  });

  it('redirect to details page', async () => {
    // @ts-ignore
    axios.get.mockResolvedValue({ data: response.data });

    renderWithRouter(<Users />);

    const users = await screen.findAllByTestId('user-item');

    expect(users.length).toBe(2);

    fireEvent.click(users[0]);

    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
