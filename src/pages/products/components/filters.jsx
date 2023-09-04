// import { useState } from 'react'

// const Filters = ( {categories, selectedCategory, onSelectCategory, onPriceFilterChange, currentPriceRange }) => {
//     const [minPrice, setMinPrice] = useState(currentPriceRange.min)
//     const [maxPrice, setMaxPrice] = useState(currentPriceRange.mex)
    

//     const handleApplyFilters = () => {
//         onPriceFilterChange({ min: minPrice, max: maxPrice })
//     }
//     return(
//         <div className="bg-gray-200 p-4 rounded-md">
//            <div className="mb-4">
//                <label htmlFor="category" className="font-semibold mb-2 block">Category</label>
//                <select id="category" className="w-full bg-white border border-grey-300 px-3 py-2 rounded-md focus:outline-none"
//                value={selectedCategory} onChange={(e) => onSelectCategory(e.target.value)}>
//                 <option value="">All Categories</option>
//                 {categories.map((category) => (
//                     <option value={category.id}>
//                       {category.name}
//                     </option>
//                 ))}</select>
//            </div>
//            <div className="mb-4">
//              <label htmlFor="minPrice" className="font-semi-bold mb-2 block">
//              Price Range
//              </label>
//              <div className="flex items-center">
//                <input type="number" id="minPrice" className="w-1/2 bg-white border border-gray-300 px-3 py-2 rounded-1-md focus:outline-none"
//                placeholder="min" value={minPrice} onChange={(e) => setMinPrice(e.target.value)}/>
//                <span className="px-3">-</span>
//                <input type="number" id="maxPrice" className="w-1/2 bg-white border border-gray-300 px-3 py-2 rounded-1-md focus:outline-none"
//                placeholder="max" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>

//              </div>
//            </div>
//            <button className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
//            onClick={handleApplyFilters}>Apply</button>
//         </div>
//     )
// }
// export default Filters

// src/components/Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-full md:w-1/4 lg:w-1/5 bg-gray-100 p-4">
      {/* Add your filter options here */}
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {/* Filter components go here */}
    </div>
  );
};

export default Sidebar;
