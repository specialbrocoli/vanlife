import React from 'react';
import Vans from './pages/Vans';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './components/Layout';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About/>}/>
      <Route path='vans' element={<Vans/>}/>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
