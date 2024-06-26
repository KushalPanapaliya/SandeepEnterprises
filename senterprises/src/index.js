import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './Cart/Cart';
import Profile from './Profile';
import Product from './Product';
import Products from './Products';
import Admin from './AdminPage/Admin';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:productId",
    element: <Product />
  },
  {
    path: "/admin",
    element: <Admin />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);