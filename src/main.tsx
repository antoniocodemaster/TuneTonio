import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';
import { RouterProvider } from 'react-router-dom';
import './shared/styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
