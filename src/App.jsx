import { Route, Routes } from 'react-router-dom';
import SharedLayout from '../src/components/SharedLayout/SharedLayout';
import HomePage from '../src/pages/HomePage/HomePage';
import CatalogPage from 'pages/CatalogPage/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
   
  );
}
export default App;

