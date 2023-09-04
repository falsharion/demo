import React, { useState } from 'react';

const Sidebar = ({ selectedCategory, onSelectCategory, onPriceFilterChange, currentPriceRange }) => {
  const categories = [
    {
      categoryId: "ae62224c-aeb7-4bfe-99ee-a9e476f4a924",
      name: "Printers",
    },
        {
          categoryId:"61f192f3-fb59-440f-990a-a79f07250f1e",
          name:"Mobile Computers"
        },
        {
          categoryId:"9fb234cf-8fd6-45c5-8d5d-011a5912898b",
          name:"Barcode Scanners"
        },
        {
          categoryId:"86c2f31b-375b-44a2-930c-d35c5e744a20",
          name:"Labels"
        },
        {
          categoryId:"d88874a9-1b18-46c9-9636-cbdc33a615cc",
          name:"Ribbon"
        },
        {
          categoryId:"983391b4-8a7b-448f-b5dc-9f5cbe11fa89",
          name:"(POS) Systems"
        },
        {
          categoryId:"63aca559-f3a1-43ba-927f-1849457d13f7",
          name:"Security"
        }
      ]
 

  return (
    <div className="fixed left-0 top-0 h-full w-36 sm:w-48 p-4 bg-gray-200">
      <div className="mb-8 mt-20">
        <h3 className="font-semibold mb-2">Categories</h3>
        <ul>
          {categories.map((category) => (
            <li
              key={category.categoryId}
              className={`cursor-pointer text-sm sm:text-md mb-2 text-gray-600 ${selectedCategory === category.categoryId ? 'font-semibold' : ''}`}
              onClick={() => onSelectCategory(category.categoryId)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <div className="mb-2 ">
          <input
            type="number"
            placeholder="Min Price"
            className="border p-2 rounded w-4/12"
            value={''}
           
          />     -     <input
            type="number"
            placeholder="Max Price"
            className="border p-2 rounded w-4/12"
            value={''}
         
          />
        </div>

      </div>
    </div>
  );
};

export default Sidebar;


// import React from 'react';

// const Sidebar = ({ categorie, selectedCategory, onSelectCategory }) => {

//   const categories =[
//     {
//       categoryId:"ae62224c-aeb7-4bfe-99ee-a9e476f4a924",
//       name:"Printers"
//     },
//     {
//       categoryId:"61f192f3-fb59-440f-990a-a79f07250f1e",
//       name:"Mobile Computers"
//     },
//     {
//       categoryId:"9fb234cf-8fd6-45c5-8d5d-011a5912898b",
//       name:"Barcode Scanners"
//     },
//     {
//       categoryId:"86c2f31b-375b-44a2-930c-d35c5e744a20",
//       name:"Labels"
//     },
//     {
//       categoryId:"d88874a9-1b18-46c9-9636-cbdc33a615cc",
//       name:"Ribbon"
//     },
//     {
//       categoryId:"983391b4-8a7b-448f-b5dc-9f5cbe11fa89",
//       name:"(POS) Systems"
//     },
//     {
//       categoryId:"63aca559-f3a1-43ba-927f-1849457d13f7",
//       name:"Security"
//     }
//   ]

//   return (
//     <div className="w-72 p-4">
//          <div className="bg-gray-200 p-4 rounded-md">
//            <h3 className="font-semibold mb-2">Categories</h3>
//            <ul>
//              {categories.map((category) => (
//               <li
//                 key={category.id}
//                 className={`cursor-pointer text-grey-300 ${selectedCategory == category.categoryId ? 'font-semibold' : ''}`}
//                 onClick={() => onSelectCategory(category.categoryId)}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//     </div>
//   );
// };

// export default Sidebar;

// const Sidebar = ({ categories, selectedCategory, onSelectCategory }) => {
//     return (
//         <div className="bg-gray-200 p-4 rounded-md">
//           <h3 className="font-semibold mb-2">Categories</h3>
//           <ul>
//             {categories.map((category) => (
//               <li
//                 key={category.id}
//                 className={`cursor-pointer ${selectedCategory === category.id ? 'font-semibold' : ''}`}
//                 onClick={() => onSelectCategory(category.id)}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       );
// }
// export default Sidebar