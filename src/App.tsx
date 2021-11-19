import axios from 'axios';
import { memo, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { categoryApi } from './Api/Api';
import { Category } from './Modal/Category';
import CategoryPage from './Pages/CategoryPage';
import EventPage from './Pages/EventPage';

const App = () => {
  const [url, setUrl] = useState<Category[]>([]);
  useEffect(() => {
     categoryApi().then((res)=>{return setUrl(res.data)});
  }, []);
  return (
    <>
      <BrowserRouter>
        <CategoryPage />
        <Routes>
          <Route
            path='/'
            element={<Navigate to='/all' />}
          />
          {url.map((r,i)=> (
            <Route key={i} path={`/${r.category}`} element={<EventPage url={r.category}/>}/>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default memo(App);
