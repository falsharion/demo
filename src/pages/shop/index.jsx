import ProductCard from "./components/productCard.jsx"
import StoreSection from "./components/storeSection.jsx"
import Hero from "./components/hero.jsx"

const Shop = ({ProductsD}) => {
    return ( 
        <div>
            
            <Hero />
            <div className="flex md:flex-wrap flex-col md:flex-row justify-center items-center my-4">
        <ProductCard
        productId="4"
          imageSrc="https://images.unsplash.com/photo-1683313107043-283d0319a11e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          productName="Rugged Tablet"
          description="RT10"
        />
        <ProductCard
        productId="8"
          imageSrc="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYWluJTIwYmFja2dyb3VuZCUyMHdpdGglMjBsYWR5JTIwc3RhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
          productName="Healthcare Mobile Computers"
          description="TC52ax-HC"
        />
      </div>
      <div className="container mx-auto mt-8">
                            <StoreSection title="Entrust" ProductsD={ProductsD}  />
                            <StoreSection title="Honeywell" ProductsD={ProductsD}/>
                            <StoreSection title="Bluebird" ProductsD={ProductsD} />
                        </div>
            
            {/* <Store />  */}
        </div>
     );
}

// import { Link } from "react-router-dom";
// import StoreSection from "./component/storeSection"

// const Shop = () => {

//     return (
//         <div>
//             <div className='mb-10'>
//                 <img src="https://images.unsplash.com/photo-1488547266171-52b11e0e5271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWluJTIwYmFja2dvdW5kJTIwd2l0aCUyMGElMjBsYWR5JTIwc3RhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-96 object-cover bg-cover bg-center absolute mix-blend-overlay" alt="hey" />
//                 <div className="p-24 ">
//                     <h3 className="text-white mb-4">Barcode Scanner</h3>
//                     <h1 className="text-white text-3xl mb-4">RFR900 for EF501</h1>
//                     <p className="text-white mb-2">Long Range and high speed</p>
//                     <button className="text-white px-9 py-2 text-xs rounded-md bg-black">Shop Now</button>
//                 </div>
//                 <div className="mx-20">
//                     <div className=" flex justify-evenly mt-20">
//                         <div className=" ">
//                             <div className=" bg-yellow-200 w-56 h-40 ">
//                                 <h2 className="pl-2 pt-5 text-md">Rugged Tablets</h2>
//                                 <p className="text-lg pl-2">RT10</p>
//                                 <ul className="pl-2 pt-9 text-sm">
//                                     <li><Link to="/products">Explore items</Link></li>
//                                 </ul>

//                             </div>
//                         </div>
//                         <div className=" bg-purple-300 w-56 h-40">
//                             <h2 className="pl-2 pt-5 text-md">Rugged Tablets</h2>
//                             <p className="text-lg pl-2">RT10</p>
//                             <ul className="pl-2 pt-9 text-sm">
//                                 <li><Link to="/products">Explore items</Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     {/* <storesPage /> */}
//                     <div>
//                         <div className="container mx-auto mt-8">
//                             <StoreSection title="store 1" apiUrl='https://fakestoreapi.com/products/category/jewelery'/>
//                             <StoreSection title="store 2" apiUrl='https://fakestoreapi.com/products/category/electronics'/>
//                             <StoreSection title="store 3" apiUrl="https://fakestoreapi.com/products/category/women's clothes"/>
//                         </div>
//                         <div>
//                         <img src="https://images.unsplash.com/photo-1488547266171-52b11e0e5271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBsYWluJTIwYmFja2dvdW5kJTIwd2l0aCUyMGElMjBsYWR5JTIwc3RhbmRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" className="w-full h-96 object-cover bg-cover bg-center absolute mix-blend-overlay" alt="hey" />
//                 <div className="p-24 ">
//                     <h3 className="text-white mb-4">Barcode Scanner</h3>
//                     <h1 className="text-white text-3xl mb-4">RFR900 for EF501</h1>
//                     <p className="text-white mb-2">Long Range and high speed</p>
//                     <button className="text-white px-9 py-2 text-xs rounded-md bg-black">Shop Now</button>
//                 </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )}
export default Shop