import React from 'react';

const Select = ({ placeholder = '', options, callbackFn }) => {
   return (
      <select
         className="w-full max-w-xs p-2 text-black bg-white border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white"
         onChange={(e) => callbackFn(e)}
      >
         <option value="">{placeholder}</option>
         {options?.map((category, index) => (
            <option key={index} value={category.url}>
               {category.name}
            </option>
         ))}
      </select>
   );
};

export default Select;
