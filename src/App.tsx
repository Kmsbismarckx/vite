import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home/Home.tsx';
import { NotFound } from '@/pages/NotFound.tsx';
import { AboutPage } from '@/pages/AboutPage.tsx';
import { Users } from '@/Users/Users.tsx';
import { UserDetailsPage } from '@/pages/UserDetailsPage.tsx';
import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { createReduxStore } from '@/store/store.ts';
import { Provider } from 'react-redux';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const WrappedApp = () => {
  return (
    <Provider store={createReduxStore()}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
