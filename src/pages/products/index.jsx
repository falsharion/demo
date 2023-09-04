import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';

const Product = ({ ProductsD }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPriceRange, setCurrentPriceRange] = useState({ min: '', max: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceFilterChange = (newPriceRange) => {
    setCurrentPriceRange(newPriceRange);
  };

  const toggleSidebar = () => {
    setIsOpen(!isisOpen);
  };

  return (
    <div className="container mx-auto p-4 flex">
      <button className="text-white"onClick={toggleSidebar}>Toggle Sidebar</button>
      <Sidebar
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
        onPriceFilterChange={handlePriceFilterChange}
        currentPriceRange={currentPriceRange}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 ml-4">
        <ProductList ProductsD={ProductsD} />
      </div>
    </div>
  );
};

export default Product;



// src/components/ProductPage.js
// import { useState } from 'react';
// import React from 'react';
// import ProductList from "./components/productList";
// import Sidebar from './components/sidebar';





// const Product = ({ProductsD}) => {

//     const [products, setProducts] = useState([])
//     const [category, setCategory] = useState([])
//     const [selectedCategory, setSelectedCategory] = useState('')
//     const [currentPriceRange, setCurrentPriceRange] = useState([])
//     const [currentPage, setCurrentPage] = useState([])
//     const productsPerPage = 10

//   const filteredProducts = products
//       . filter((product) =>{
//           if (selectedCategory && product.categoryId !== selectedCategory) {
//               return false
//           }
//           const productPrice = parseFloat(product.price)
//           return productPrice >= currentPriceRange.min && productPrice <= currentPriceRange.max
//       })
//       .slice((currentPage - 1 ) * productsPerPage, currentPage * productsPerPage)
  
//       const handleCategoryChange = (category) => {
//           setSelectedCategory(category)
//       }
  
//       const handlePriceFilterChange = (newPriceRange) => {
//           setCurrentPriceRange(newPriceRange)
//       } 
  
//       const handlePageChange = (page) => {
//           setCurrentPage(page);
//       }
//   return (
//     <div className="container mx-auto p-4">
//       <div className="flex flex-col md:flex-row">
//         <div className="fixed items-center flex-col flex h-full w-2/12">
//         <Sidebar
//                categorie={category}
//                selectedCategory={selectedCategory}
//                onSelectCategory={handleCategoryChange} 
//                />
//                {/* <Filters 
//                categories={category}
//                selectedCategory={selectedCategory}
//                onSelectCategory={handleCategoryChange}
//                onPriceFilterChange={handlePriceFilterChange}
//                currentPriceRange={currentPriceRange}/> */}
//         </div>
//         <ProductList ProductsD={ProductsD} />
//       </div>
//     </div>
//   );
// };


// export default Product




// import { useEffect, useState } from 'react';
// import Filters from "./components/filters"
// import Sidebar from "./components/sidebar"
// import ProductCard from "./components/productCard"
// import Pagination from "./components/pagination"


// const Products = () => {
//     const [products, setProducts] = useState([])
//     const [category, setCategory] = useState([])
//     const [selectedCategory, setSelectedCategory] = useState('')
//     const [currentPriceRange, setCurrentPriceRange] = useState([])
//     const [currentPage, setCurrentPage] = useState([])
//     const productsPerPage = 10

// // https://32z124fh-7202.uks1.devtunnels.ms/api/stores/0e0fb1f6-f60b-4d93-ec15-08db8d4ddbf8/products
//     console.log('outside useeffect')
//     useEffect(() =>{
//         // fetch the products
//         fetch('https://fakestoreapi.com/products')
//         .then(response => response.json())
//         .then(data => setProducts(data))
//         .catch(err => console.log(err, "Error fetching products"))

//         // fetch the categoreies
//         fetch('https://fakestoreapi.com/products/categories')
//         .then(response => response.json())
//         .then(data => setCategory(data))
//         .catch(err => console.log(err, "Error fetching categories"))
//     }, [])

//     const filteredProducts = products
//     . filter((product) =>{
//         if (selectedCategory && product.category !== selectedCategory) {
//             return false
//         }
//         const productPrice = parseFloat(product.price)
//         return productPrice >= currentPriceRange.min && productPrice <= currentPriceRange.max
//     })
//     .slice((currentPage - 1 ) * productsPerPage, currentPage * productsPerPage)

//     const handleCategoryChange = (category) => {
//         setSelectedCategory(category)
//     }

//     const handlePriceFilterChange = (newPriceRange) => {
//         setCurrentPriceRange(newPriceRange)
//     } 

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     }


//     return ( 
//         <div className="flex">
//             <div className="w-3/4 p-4">
//             {filteredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//             ))}
//             <Pagination 
//             currentPage={currentPage}
//             totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
//             onPageChange={handlePageChange}
//             />
//             </div>
//             <div className="w-1/4 p-4">
//                <Sidebar
//                categories={category}
//                selectedCategory={selectedCategory}
//                onSelectCategory={handleCategoryChange} 
//                />
//                <Filters 
//                categories={category}
//                selectedCategory={selectedCategory}
//                onSelectCategory={handleCategoryChange}
//                onPriceFilterChange={handlePriceFilterChange}
//                currentPriceRange={currentPriceRange}/>
//             </div>
//             {/* <ul>
//                 {products.map((list, index) => (
//                     <li key={index}>{list.category} | {list.title}</li>
//                 ))}
//             </ul> */}
//         </div>
//      );
// }
 
// export default Products; 