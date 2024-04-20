import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../src/components/SharedLayout/SharedLayout';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../src/pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../src/pages/FavoritesPage/FavoritesPage'));

export function App() {
  return (

      <SharedLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes  basename="/truck-camper">
            <Route index path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
      </SharedLayout>

  );
}


export default App;









