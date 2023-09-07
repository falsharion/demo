// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="w-40 border border-gray-200 p-4 mb-4">
      <img src={product.imageUrl} alt={product.name} className="w-full h-auto" />
      <h2 className="text-xs sm:text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;

// const ProductCard = ({ product }) => {

//         return (
//           <div className="bg-white shadow-md p-4 rounded-md">
//             <img src={product.image} alt={product.name} className="w-40 h-40 object-cover mx-auto mb-4" />
//             <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
//             <p className="text-gray-600 mb-2">{product.description}</p>
//             <p className="text-blue-600 font-semibold">{product.price}</p>
//           </div>
//         );

// }
// export default ProductCard