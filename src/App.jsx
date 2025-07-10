import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CartPage from './pages/CartPage';
import './App.css';
import LinksBar from './components/LinksBar';
import { ToastContainer } from 'react-toastify';
import Product from './components/Product';
import { useLocation } from 'react-router-dom';
import Contact from './pages/Contact';

function App() {
   const location = useLocation();
   const hideLinksBarRoutes = ['/cart', '/checkout'];
   const hideLinksBar = hideLinksBarRoutes.includes(location.pathname);

   return (
      <Provider store={store}>
         <ToastContainer />
         <Navbar />
         <Outlet />
         {/* {!hideLinksBar && <LinksBar />} */}
      </Provider>
   );
}

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      errorElement: <div>Page not found</div>,
      children: [
         {
            path: '/',
            element: <HomePage />
         },
         {
            path: '/home',
            element: <HomePage />
         },
         {
            path: '/cart',
            element: <CartPage />
         },
         {
            path: '/products/:productId',
            element: <Product />
         },
         {
            path: '/contact',
            element: <Contact />
         }
      ]
   }
]);

export default appRouter;
