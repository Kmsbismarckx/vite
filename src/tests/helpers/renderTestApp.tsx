import { createReduxStore } from '@/store/store.ts';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AppRouter } from '@/App.tsx';
import { MemoryRouter } from 'react-router-dom';
import { ReactNode } from 'react';

type Options = {
  initialState?: any;
  route?: string;
};
export const renderTestApp = (component: ReactNode, options?: Options) => {
  const store = createReduxStore(options?.initialState);

  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route || '/']}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
