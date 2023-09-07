// import React, { useState } from 'react';
// import logo from "../assets/main-logo.svg";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     // Handle search submission logic here
//     console.log('Search submitted:', searchQuery);
//     setSearchQuery('');
//   };

//   return (
//     <nav className="bg-gray-800 p-4 sticky top-0 w-full z-10">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center">
//           <a href="/" className="text-white font-semibold text-lg"><img src={logo} /></a>
//           <div className="hidden md:flex space-x-4">
//             <a href="/Shop" className="text-white">Shop</a>
//             <a href="/" className="text-white">Home</a>
//             <a href="/products" className="text-white">Products</a>
//             <a href="/contact" className="text-white">Contact</a>
//           </div>
//           <form onSubmit={handleSearchSubmit} className=" md:ml-4 flex items-center">
//             <input
//               type="text"
//               value={searchQuery}
//               onChange={handleSearchChange}
//               placeholder="Search..."
//               className="rounded-md px-2 py-1 mr-2"
//             />
//             <button type="submit" className="bg-blue-500 text-sm text-white px-2.5 py-1 rounded-md">Search</button>
//           </form>
//           <div className="md:hidden">
//             <button onClick={toggleMenu} className="text-white">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//             </button>
//           </div>
//         </div>
//         {isOpen && (
//           <div className="md:hidden bg-gray-800 p-2">
//             <a href="/Shop" className="block text-white mb-2">Shop</a>
//             <a href="/" className="block text-white mb-2">Home</a>
//             <a href="/products" className="block text-white mb-2">Products</a>
//             <a href="/contact" className="block text-white">Contact</a>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../assets/main-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Handle search submission logic here
    console.log('Search submitted:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 w-full z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-semibold text-lg"><img src={logo} alt="Logo" /></Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/Shop" className="text-white">Shop</Link>
            <Link to="/" className="text-white">Home</Link>
            <Link to="/products" className="text-white">Products</Link>
            <Link to="/contact" className="text-white">Contact</Link>
          </div>
          <form onSubmit={handleSearchSubmit} className="md:ml-4 flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="rounded-md px-2 py-1 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-sm text-white px-2.5 py-1 rounded-md">Search</button>
          </form>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-gray-800 p-2">
            <Link to="/Shop" className="block text-white mb-2">Shop</Link>
            <Link to="/" className="block text-white mb-2">Home</Link>
            <Link to="/products" className="block text-white mb-2">Products</Link>
            <Link to="/contact" className="block text-white">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;





