import { Link } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const LinksBar = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.items),
      { products, loading, error } = useSelector((state) => state.products),
      { product, loadingp } = useSelector((state) => state.productById);
   const [UILoading, setUILoading] = useState(loading || loadingp || true);

   useEffect(() => {
      console.log('loading:', loading);
      console.log('loadingp:', loadingp);

      setUILoading(loadingp);
   }, [loading, loadingp]);

   return (
      !UILoading && (
         <div className="flex bottom-0 px-12 h-26 justify-between items-center p-4 text-white dark:bg-gray-900 shadow-md dark:shadow-md flex-wrap shadow-gray-300 dark:shadow-gray-500">
            <h2>
               <Link to="/" className="hover:text-[#ff4500] text-orange-400 text-2xl font-extrabold">
                  Commy
               </Link>
            </h2>
            <ul className="flex space-x-4 items-center">
               <li>
                  <Link
                     to="/"
                     className="text-black dark:text-white border-1 border-none px-3 py-1 hover:shadow-orange-400 hover:shadow hover:shadow-dashed hover:text-orange-400"
                  >
                     Home
                  </Link>
               </li>
               <li className="relative">
                  <Link
                     to="/cart"
                     className="text-black dark:text-white border-1 border-none px-3 py-1 hover:shadow-orange-400 hover:shadow hover:shadow-dashed hover:text-orange-400"
                  >
                     Cart
                  </Link>
                  <span
                     className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs font-bold
                    rounded-full px-2 py-0.5"
                  >
                     {cartItems.length}
                  </span>
               </li>
               <li>
                  <DarkModeToggle />
               </li>
            </ul>
         </div>
      )
   );
};

export default LinksBar;
