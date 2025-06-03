import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { clearCart, removeFromCart } from '../redux/cartSlicer';

const Cart = () => {
   const dispatch = useDispatch();
   const cartItems = useSelector((state) => state.cart.items);

   const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

   const handleRemove = (id) => {
      dispatch(removeFromCart(id));
   };

   return (
      <div className="container mx-auto p-4">
         <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
         {cartItems.length === 0 ? (
            <span className="text-center text-xl">Your cart is empty.</span>
         ) : (
            <div>
               <div className="flex flex-col gap-4">
                  {cartItems.map((item, index) => (
                     <div
                        key={index}
                        className="flex flex-col grow sm:flex-row justify-between items-start sm:items-center bg-gray-600 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                     >
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                           <img
                              src={item.images[0]}
                              alt={item.title}
                              className="w-16 h-16 object-cover rounded-md sm:w-24 sm:h-24"
                           />
                           <div className="flex grow gap-12 justify-between items-center ">
                              <h3 className="text-lg min-w-32 w-90 text-center font-semibold">{item.title}</h3>
                              <p className="text-orange-500 text-center">€{item.price * item.quantity}</p>
                           </div>
                        </div>
                        <span>Quantity: {item.quantity}</span>
                        <MdDelete
                           className=" text-3xl cursor-pointer text-red-500 mt-2 sm:mt-0"
                           onClick={() => handleRemove(item.id)}
                        />
                     </div>
                  ))}
               </div>

               <div className="mt-6 flex items-center justify-between flex-col sm:flex-row gap-4">
                  <button
                     className="mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 w-full sm:w-auto"
                     onClick={() => dispatch(clearCart())}
                  >
                     Clear Cart
                  </button>

                  <section>
                     <span className="font-bold px-5 text-xl">Total: ${total}</span>
                     <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 w-full sm:w-auto">
                        Checkout
                     </button>
                  </section>
               </div>
            </div>
         )}

         <div className="mt-4 text-center">
            <Link to="/home" className="text-blue-500">
               Back to Products
            </Link>
         </div>
      </div>
   );
};

export default Cart;
