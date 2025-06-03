import React from 'react';

const ShimmerCard = () => (
   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-4 rounded-lg animate-pulse">
      <div className="w-full h-48 bg-gray-300 rounded-md mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-300 rounded w-full mb-2" />
      <div className="h-3 bg-gray-300 rounded w-5/6 mb-4" />
      <div className="flex justify-between items-center mt-2">
         <div className="h-4 bg-gray-300 rounded w-1/4" />
         <div className="h-4 bg-gray-300 rounded w-1/3" />
      </div>
      <div className="mt-4 h-10 bg-gray-300 rounded-lg w-full" />
   </div>
);

const ShimmerUIForProducts = () => {
   return (
      <div className="mt-12 w-full">
         <div className="flex px-12 flex-wrap gap-6 max-w-none justify-center">
            {Array(10)
               .fill()
               .map((_, index) => (
                  <ShimmerCard key={index} />
               ))}
         </div>
      </div>
   );
};

export default ShimmerUIForProducts;
