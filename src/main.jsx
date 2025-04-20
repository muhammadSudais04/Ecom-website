
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import SingleProduct from './pages/Singleproducts'; 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import { Provider } from 'react-redux';
import store from './configure/redux/store/store'; 
import Cart from './pages/addToCart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id', 
        element: <SingleProduct />,
      },
      { path: 'cart', 
        element: <Cart /> 
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);