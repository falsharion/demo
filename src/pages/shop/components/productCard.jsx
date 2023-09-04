// import React from 'react';

// const ProductCard = ({ imageSrc, productName, description }) => {
//   return (
//     <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
//       <div className="relative">
//         <img className="w-full" src={imageSrc} alt={productName} />
//         <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
//           <h2 className="text-white font-bold text-xl mb-2">{productName}</h2>
//           <p className="text-gray-300 text-base">{description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ProductCard = ({ imageSrc, productName, description, productId }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-2">
      <div className="relative">
        <img className="w-full" src={imageSrc} alt={productName} />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50">
          <h2 className="text-white font-bold text-xl mb-2">{productName}</h2>
          <p className="text-gray-300 text-base">
            {description}{' '}
            <Link to={`/product/${productId}`} className="text-blue-400 ml-4">
              Explore Items
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
