// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { fetchProductsByStore } from '../../src/api/api'; 
// import { data } from 'autoprefixer';

// function ProductPage() {
//   const { productId } = useParams();
//   const [product, setProduct] = React.useState(null);

//   React.useEffect(() => {
//     fetchProductsByStore(productId)
//       .then((data) => setProduct(data))
//       .catch((error) => console.error('Error fetching product:', error));
//   }, [productId]);

//   if (!product) {
  
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{product.name}</h2>
//       <img src={product.imageUrl} alt={product.name} />
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       {/* Add more product details as needed */}
//     </div>
//   );
// }

// export default ProductPage;