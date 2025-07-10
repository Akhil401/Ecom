import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/cartSlicer';
import StarRating from './StarRating';
import ShimmerUIForProducts from './ShimmerUIForProducts';
import { Bounce, toast, Zoom } from 'react-toastify';
import { Link } from 'react-router-dom';

const ProductList = () => {
   const dispatch = useDispatch();

   const { products, loading, error } = useSelector((state) => state.products);
   const { cart } = useSelector((state) => state.cart);

   useEffect(() => {
      dispatch(fetchProducts());
   }, [dispatch]);

   const handleAddToCart = (e, product) => {
      e.preventDefault();
      e.stopPropagation();
      dispatch(addToCart(product));
      toast.success(`${product.title} added to cart!`, {
         position: 'top-center',
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: 'light',
         transition: Zoom
      });
   };

   if (loading) return <ShimmerUIForProducts />;
   if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

   return (
      <div className="mt-12">
         <div className="flex px-12 flex-wrap gap-6 max-w-none justify-center">
            {products?.length > 0 &&
               products.map((product) => (
                  // <Link to={`/products/${product.id}`} key={product.id} className="w-full max-w-300 sm:w-1/2 md:w-1/3 lg:w-1/5">
                  <Link
                     to={`/products/${product.id}`}
                     key={product.id}
                     className="w-full max-w-300 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-gray-300 dark:bg-white p-4 rounded-lg "
                  >
                     <img src={product.images[0]} alt={product.title} className="w-full h-48 object-cover rounded-md mb-4" />
                     <h3
                        className="text-lg font-semibold text-black block"
                        style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                           overflow: 'hidden',
                           WebkitLineClamp: '1'
                        }}
                     >
                        {product.title}
                     </h3>
                     <p
                        className="text-gray-600 text-sm"
                        style={{
                           display: '-webkit-box',
                           WebkitBoxOrient: 'vertical',
                           overflow: 'hidden',
                           WebkitLineClamp: '2'
                        }}
                     >
                        {product.description}
                     </p>
                     <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-lg mt-2 text-black block">€{product.price}</span>
                        <span className=" text-md mt-2 text-black block flex gap-1 items-center">
                           {<StarRating rating={product.rating} />} <b className="text-xs">({product.reviews?.length})</b>
                        </span>
                     </div>
                     <button
                        onClick={(e) => handleAddToCart(e, product)}
                        className="mt-4 w-full py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
                     >
                        Add to Cart
                     </button>
                  </Link>
                  // </Link>
               ))}
         </div>
      </div>
   );
};

export default ProductList;
