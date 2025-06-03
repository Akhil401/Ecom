import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
   const [theme, setTheme] = useState(() => {
      const stored = localStorage.getItem('theme');
      return stored ? stored : 'dark';
   });

   useEffect(() => {
      if (theme === 'dark') {
         document.documentElement.classList.add('dark');
         localStorage.setItem('theme', 'dark');
      } else {
         document.documentElement.classList.remove('dark');
         localStorage.setItem('theme', 'light');
      }
   }, [theme]);

   return (
      <div className="flex items-center justify-center">
         <div className="flex items-center gap-2 bg-gray-200 rounded-full dark:bg-gray-700  p-1">
            <button
               onClick={() => setTheme('light')}
               className={`px-4 rounded-full transition-all duration-200 ${
                  theme === 'light' ? 'bg-white text-black shadow-md' : 'text-white'
               }`}
            >
               ☀️
            </button>
            <button
               onClick={() => setTheme('dark')}
               className={`px-4 rounded-full transition-all duration-200 ${
                  theme === 'dark' ? 'bg-black text-white shadow-md' : 'text-gray-400'
               }`}
            >
               🌙
            </button>
         </div>
      </div>
   );
};

export default DarkModeToggle;
