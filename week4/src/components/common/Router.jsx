import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
