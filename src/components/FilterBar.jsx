import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import Select from './Select';
import SearchBar from './SearchBar';
import { fetchCategories } from '../redux/actions/categoryActions';

const FilterBar = () => {
   const dispatch = useDispatch();
   const { categories, loading, error } = useSelector((state) => state.categories);

   useEffect(() => {
      dispatch(fetchCategories());
   }, [dispatch]);

   const onSelectOption = (e) => {
      const selectedCategoryUrl = e.target.value;
      dispatch(fetchProducts(selectedCategoryUrl));
   };

   return (
      <div className="flex items-center justify-around px-4 w-full text-white">
         <SearchBar />
         <section className="flex items-center gap-4">
            <Select placeholder="Select a category" options={categories} callbackFn={onSelectOption} />
         </section>
      </div>
   );
};

export default FilterBar;
