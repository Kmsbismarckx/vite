import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/store/store.ts';

export const renderWithRedux = (component: ReactNode, initialState) => {
  const store = createReduxStore(initialState);

  return render(<Provider store={store}>{component}</Provider>);
};
