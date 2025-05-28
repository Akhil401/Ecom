import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className="bg-blue-500 flex px-12 justify-between text-white p-4 ">
         <h2>
            <Link to="/" className="hover:text-gray-200">
               Commy
            </Link>
         </h2>
         <ul className="flex space-x-4">
            <li>
               <Link to="/" className="hover:text-gray-200">
                  Home
               </Link>
            </li>
            <li>
               <Link to="/cart" className="hover:text-gray-200">
                  Cart
               </Link>
            </li>
         </ul>
      </nav>
   );
};

export default Navbar;
