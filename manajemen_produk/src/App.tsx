import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SeeProductPage from './features/see-product/pages/SeeProductPage';
import PokemonDetail from './features/pokemon/pages/PokemonDetail';
import PokemonList from './features/pokemon/pages/Pokemon';

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SeeProductPage />} />
          <Route path="/api-list-pokemon" element={<PokemonList />} />
          <Route path="/api-detail-pokemon" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
