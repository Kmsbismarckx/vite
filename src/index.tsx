import { WrappedApp } from './App.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/store/store.ts';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={createReduxStore()}>
      <WrappedApp />
    </Provider>
  </StrictMode>
);
