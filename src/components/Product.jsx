import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../redux/actions/productActions';

const Product = () => {
   const { productId } = useParams(),
      dispatch = useDispatch(),
      { product } = useSelector((state) => state.productById);
   useEffect(() => {
      dispatch(fetchProductById(productId));
   }, [dispatch]);

   return (
      <div className="w-full flex flex-col items-center p-8 my-12 ">
         <secion className=" flex items-center gap-20 w-full p-6 ">
            <img
               src={product?.images?.[0] || ''}
               alt={product?.title || 'Product Image'}
               className=" rounded-md border mb-4  shadow-lg dark:bg-gray-500"
            />
            <secion>
               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{product?.title}</h2>
               <p className="text-xl font-semibold text-orange-500">€{product?.price}</p>
               <button className="mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
                  Add to Cart
               </button>
            </secion>
         </secion>
         <section></section>
      </div>
   );
};

export default Product;
