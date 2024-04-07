import React from 'react';

export default function Search() {
  return (
    <form className="max-w-md mx-auto my-5 bg-offwhite rounded-lg shadow-lg p-4">
      <label htmlFor="default-search" className="mb-2 text-md font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative bg-transparent">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-900 dark:text-violet-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="search" id="default-search" className="bg-transparent block w-full p-4 pl-10 text-sm text-gray-900 border border-transparent rounded-lg focus:outline-none dark:bg-gray-400 dark:border-0 dark:placeholder-violet-800 dark:text-violet-700 dark:focus:ring-0 dark:focus:border-0" placeholder="Search Recipes Here ..." required />
        <button type="submit" className="absolute bottom-2.5 right-2.5 bg-violet-600 hover:bg-violet-700 focus:ring-0 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-white dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-0">Search</button>
      </div>
    </form>
  );
}
