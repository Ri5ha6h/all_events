import { memo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import AllPage from './Pages/AllPage';
import BusinessPage from './Pages/BusinessPage';
import CategoryPage from './Pages/CategoryPage';
import MusicPage from './Pages/MusicPage';
import SportsPage from './Pages/SportsPage';
import WorkshopsPage from './Pages/WorkshopsPage';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CategoryPage />
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/all' />}
          />
          <Route
            path='/all'
            element={<AllPage />}
          />
          <Route
            path='/music'
            element={<MusicPage />}
          />
          <Route
            path='/business'
            element={<BusinessPage />}
          />
          <Route
            path='/sports'
            element={<SportsPage />}
          />
          <Route
            path='/workshops'
            element={<WorkshopsPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
