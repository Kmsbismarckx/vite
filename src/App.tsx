import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/Home.tsx';
import { NotFound } from '@/pages/NotFound.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default WrappedApp;
