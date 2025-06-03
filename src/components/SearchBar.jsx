import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
   const [searchTerm, setSeachTerm] = useState('');

   const dispatch = useDispatch();
   const onChangeHandler = () => {
      dispatch(fetchProducts(null, `/search?q=${searchTerm}`));
   };

   return (
      <div className="relative flex items-center justify-center w-full max-w-xs">
         <input
            type="text"
            placeholder="Search for products..."
            className="w-2xl max-w-xs p-2 text-black border border-gray-300 rounded focus:outline-none bg-gray-400 border-gray-300 dark:text-black dark:bg-white rounded-md dark:focus:outline-none"
            onChange={(e) => setSeachTerm(e.target.value)}
            value={searchTerm}
            onKeyDown={(e) => {
               if (e.key === 'Enter') {
                  onChangeHandler();
               }
            }}
         />
         <FaSearch onClick={onChangeHandler} className="absolute right-3 top-3 text-gray-500 text-xl cursor-pointer" />
      </div>
   );
};

export default SearchBar;
