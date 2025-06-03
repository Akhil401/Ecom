import React from 'react';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

const HomePage = () => {
   return (
      <div className="flex flex-col justify-center items-center p-4">
         <FilterBar />
         <ProductList />
      </div>
   );
};

export default HomePage;
