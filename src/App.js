import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import MainPage from './pages/MainPage';
import ErrorPage from './pages/Error';
import MainNavigation from './pages/MainNavigation';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import DiscountPage from './pages/DiscountPage';
import NewPage from './pages/NewPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainNavigation />} errorElement={<ErrorPage />}>
      <Route index element={<MainPage />} />
      <Route path='/new' element={<NewPage />} />
      <Route path='/women' element={<WomenPage />} />
      <Route path='/men' element={<MenPage />} />
      <Route path='/kids' element={<KidsPage />} />
      <Route path='/discount' element={<DiscountPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
