const Select = ({ placeholder = '', options, callbackFn }) => {
   return (
      <select
         className="w-full max-w-xs p-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none"
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
