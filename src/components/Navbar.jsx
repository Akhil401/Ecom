import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="flex px-12 justify-between text-white p-4 items-center">
         <h2>
            <Link to="/" className="hover:text-[#ff4500] text-orange-400 text-2xl font-extrabold">
               Commy
            </Link>
         </h2>
         <ul className="flex space-x-4">
            <li>
               <Link
                  to="/"
                  className="text-black border-1 border-none bg-white px-3 py-1 hover:border-orange-400 hover:border hover:border-dashed hover:text-orange-400"
               >
                  Home
               </Link>
            </li>
            <li>
               <Link
                  to="/cart"
                  className="text-black border-1 border-none bg-white px-3 py-1 hover:border-orange-400 hover:border hover:border-dashed hover:text-orange-400"
               >
                  Cart
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
