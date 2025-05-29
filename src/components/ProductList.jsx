import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductList = () => {
   const dispatch = useDispatch();

   const { products, loading, error } = useSelector((state) => state.products);
   const { cart } = useSelector((state) => state.cart);

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   const handleAddToCart = (product) => {
      dispatch(addToCart(product));
   };

   if (loading) return <div className="text-center py-4">Loading...</div>;
   if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

   return (
      <div className="mt-12">
         <div className="flex flex-wrap gap-4 justify-center">
            {products?.map((product) => (
               <div
                  key={product.id}
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white cursor-pointer p-4 rounded-lg shadow-lg hover:shadow-xl hover:transition-shadow hover:duration-300"
               >
                  <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
                  <br />
                  <h3
                     className="text-lg font-semibold text-black block"
                     style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: '2'
                     }}
                  >
                     {product.title}
                  </h3>
                  <br />
                  <p
                     className="text-gray-600 text-sm"
                     style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: '3'
                     }}
                  >
                     {product.description}
                  </p>
                  <br />
                  <p className="font-bold text-lg mt-2 text-black block">${product.price}</p>
                  <br />
                  <button
                     onClick={() => handleAddToCart(product)}
                     className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                     Add to Cart
                  </button>
               </div>
            ))}
         </div>
         <h3 className="text-lg mt-6 font-semibold">
            Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
         </h3>
      </div>
   );
};

export default ProductList;
