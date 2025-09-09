import Home from './pages/Home';
import About from './pages/About';
import Error from './components/Error';
import Layout from './components/Layout';
import NotFound from './components/NotFound';
import VanDetail from './pages/Vans/VanDetail';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='vans'
        loader={vansLoader}
        errorElement={<Error />}
        element={<Vans />}
      />
      <Route path='vans/:id' element={<VanDetail />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
