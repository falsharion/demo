import React from 'react';
import ProductCard from "./productCard";
import { Link } from 'react-router-dom';

const ProductList = ({ ProductsD }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4">
      {ProductsD.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;

// // src/components/ProductList.js
// import React from 'react';
// import ProductCard from "./productCard"
// import { Link } from 'react-router-dom';
// import ProductDetail from "./productDetail"

// const ProductList = ({ ProductsD }) => {
//     return (

//     <div className="grid ml-96 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      
//       {ProductsD.map((product) => (
//          <Link to={`/product/${product.id}`} key={product.id}>
//         <ProductCard key={product.id} product={product} /> </Link>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
