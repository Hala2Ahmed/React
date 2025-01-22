import React from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';

function App() {
 const router=createHashRouter([
 {path: "", element:<Layout />,children:[
  { index: true,element: <Home />},
  { path: 'about',element: <About />},
  { path: 'portfolio',element: <Portfolio />},
  { path: 'contact',element: <Contact />},
  { path: '*',element: <NotFound />},
 ]}
 ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
