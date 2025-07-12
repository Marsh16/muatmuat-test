import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeeProductPage from './features/see-product/pages/SeeProductPage';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SeeProductPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
