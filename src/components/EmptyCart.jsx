import React from 'react';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
   return (
      <div className="flex flex-col justify-center items-center h-full">
         <BsBag className="text-6xl text-gray-500 dark:text-white mb-4" />
         <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">Your Cart is Empty</h1>
         <p className="text-gray-500 mt-2">Add some products to your cart to get started!</p>
         <Link to="/home" className="mt-4 text-blue-500 hover:underline">
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
               Browse Products
            </button>
         </Link>
      </div>
   );
};

export default EmptyCart;
