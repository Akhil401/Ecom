import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom';
import appRouter from './App';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={appRouter} />
   </StrictMode>
);
