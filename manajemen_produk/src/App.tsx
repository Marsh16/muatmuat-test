import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeeProductPage from './features/see-product/pages/SeeProductPage';
import Pokemon from './features/pokemon/pages/Pokemon';
import PokemonDetail from './features/pokemon/pages/PokemonDetail';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SeeProductPage />} />
          <Route path="/api-list-pokemon" element={<Pokemon />} />
          <Route path="/api-detail-pokemon" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
