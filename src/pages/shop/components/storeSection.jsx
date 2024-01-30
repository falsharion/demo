// import React, { useState, useEffect } from 'react'
// const StoreSection = ({ title, apiUrl }) => {
//     const[products, setProducts] = useState([])

//     useEffect(() => {
//         fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => setProducts(data.slice(0, 4)))
//         .catch(error => console.error(`error fetching the products for ${title} store`, error))
//       }, [apiUrl])
//     return
//     ( 
//         <>
//         <div className="inline-flex items-center">
//         <div className="w-2 h-10 rounded-lg mr-2 bg-purple-300  "></div>
//         <span><h2 className="inline">{title} store </h2></span>
//     </div>
//     <div className="mb-8">
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.map(product => (
//           <div key={product.id} className="bg-white p-4 rounded shadow">
//             <img src={product.url} alt={product.name} className="w-full mb-2 rounded" />
//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">${product.price}</p>
//             <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//     </>     
//     )
// }
// export default StoreSection

import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProductsByStore } from '../../../api/api'
import { Link } from 'react-router-dom';

function StoreSection({ storeName, storeId })  {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    fetchProductsByStore(storeName, storeId)
      .then(products => setProducts(products || []))
      .catch(error => console.error('Error fetching products:', error));
  }, [storeName, storeId]);

   // Define the path to the public folder
  //  const publicPath = '/public/';
  const navigateToProductPage = (storeId) => {
    navigate(`/store/${storeId}`);
  };
 
  // Use slice(0, 3) to get the first three products
  const firstThreeProducts = products.slice(0, 4);

    // Add the full image path to each product
    // const productsWithFullPaths = firstThreeProducts.map((storeData) => ({
    //   ...storeData,
    //   fullImagePath: publicPath + storeData.imageUrl,
    // }));
  return (
    <>
      <div className="inline-flex items-center">
        <div className="w-2 h-10 rounded-lg mr-2 bg-purple-300"></div>
        <span>
          <h2 className="inline">{storeName} store </h2>
        </span>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 gap-4">
          {firstThreeProducts.map((storeData) => (
            <div key={storeData.id} className="bg-white p-4 rounded shadow">
              <img
                src={storeData.imageUrl}
                alt={storeData.name}
                className="w-full mb-2 rounded"
                onClick={() => navigateToProductPage(storeData.id)}
              style={{ cursor: 'pointer' }}
              />
              <h3 className="text-lg font-semibold">{storeData.name}</h3>
              <p className="text-sm font-light">
                {storeData.description.length > 100
                  ? `${storeData.description.slice(0, 100)}...`
                  : storeData.description}
              </p>
              {storeData.description.length > 100 && (
                <Link to={`/product/${storeData.id}`}>
                  <button className="text-blue-500 hover:underline">Read more</button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoreSection;
