import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ProductDetail = ({ ProductsD }) => {
  const { id } = useParams(); // Get the product ID from the URL parameter
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Find the product with the matching ID
  const product = ProductsD.find((p) => p.id === parseInt(id));

  // Check if the product exists
  if (!product) {
    return <div>Product not found.</div>;
  }

  const openContact = () => {
    setIsContactOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    // Add your email submission logic here
    // You can send an email using an API or handle it as needed.
    // For this example, we'll just set isSubmitted to true.
    setIsSubmitted(true);
  };

  return (
    <div className="container mx-auto py-6">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <img src={product.imageUrl} alt={product.name} className="w-full h-auto rounded" />
          </div>
          <div>
            <div className="text-left">
              <h1 className="text-2xl p-12 pb-2.5 font-bold">{product.name}</h1>
              <p className="pl-12">Brand: {product.brand}</p>
            </div>
            <h3 className="text-xl text-center w-52 h-10 flex items-center m-auto justify-center border-2 font-bold mt-4">{product.price}</h3>
            {isContactOpen ? (
              <div className="flex border items-center justify-center justify-evenly p-4 my-4 w-80 m-auto space-x-4">
                <button onClick={openModal} className="text-blue-400 text-2xl cursor-pointer">
                  <FaWhatsapp />
                </button>
                <button onClick={openModal} className="text-blue-400 text-2xl cursor-pointer">
                  <FaEnvelope />
                </button>
              </div>
            ) : (
              <button onClick={openContact} className="rounded-sm p-4 my-4 w-80 bg-blue-500 m-auto flex justify-center items-center text-white">
                Contact for current price
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="inline-flex mt-4 items-center">
        <div className="w-2 h-10 rounded-lg mr-2 bg-blue-400"></div>
        <span><h2 className="inline">Product Description </h2></span>
      </div>
      <div>
        <h4 className="py-6 font-semibold">Description</h4>
        <p className="text-gray-600 w-7/12">{product.des}</p>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black bg-opacity-75 fixed inset-0"></div>
          <div className="bg-white p-6 rounded-lg z-10 relative">
            {isSubmitted ? (
              <>
                <div className="text-green-500 text-center">
                  <FaWhatsapp className="text-5xl block" />
                  <p className="text-2xl ml-4">Your order is confirmed</p>
                </div>
                <div className="text-center mt-4">
                  <Link to="/products">
                    <button className="bg-blue-500 text-white p-2 rounded">
                      Continue Shopping
                    </button>
                  </Link>
                </div>
                <button onClick={closeModal} className="absolute top-2 right-2">
                  <FaEnvelope className="text-2xl" />
                </button>
              </>
            ) : (
              <>
                <div className="text-left">
                  <p className="font-semibold">Email</p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border p-2 rounded w-full mb-4"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded w-full">
                    Submit
                  </button>
                </div>
                <button onClick={closeModal} className="absolute top-2 right-2">
                  <FaEnvelope className="text-2xl" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;



// import React from 'react';
// import { useParams } from 'react-router-dom';

// const ProductDetail = ({ ProductsD }) => {
//   const { id } = useParams(); // Get the product ID from the URL parameter

//   // Find the product with the matching ID
//   const product = ProductsD.find((p) => p.id === parseInt(id));

//   // Check if the product exists
//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <div className="container mx-auto py-6">
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-auto rounded"
//             />
//           </div>
//           <div>
//               <div className=" text-left">          <h1 className="text-2xl p-12 pb-2.5 font-bold">{product.name}</h1>
//             <p className="pl-12">Brand :{product.brand}</p></div>
  
//             {/* <p className="text-gray-600">{product.des}</p> */}
//             <h3 className="text-xl text-center w-52 h-10 flex items-center m-auto justify-center border-2 font-bold mt-4">{product.price}</h3>
//             {/* Add more product details here */}
//             <button className=" rounded-sm p-4 my-4 w-80 bg-blue-500 m-auto flex justify-center items-center text-white">Contact for current price</button>
//           </div>
//         </div>
//       </div>
//       <div className="inline-flex mt-4 items-center">
//          <div className="w-2 h-10 rounded-lg mr-2 bg-blue-400  "></div>
//          <span><h2 className="inline">Product Description </h2></span>
//      </div>
//      <div>
//          <h4 className="py-6 font-semibold">Description</h4>
//          <p className="text-gray-600 w-7/12">{product.des}</p>
//      </div>
//     </div>
//   );
// };

// export default ProductDetail;


// import React from 'react';

// const ProductDetail = ({ product }) => {
//   return (
//     <div className="container mx-auto py-6">
//       <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow-lg">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <div>
//             <img
//               src={product.imageUrl}
//               alt={product.name}
//               className="w-full h-auto rounded"
//             />
//           </div>
//           <div>
//             <h1 className="text-2xl font-bold">{product.name}</h1>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="text-2xl font-bold mt-4">{product.price}</p>
//             {/* Add more product details here */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;
