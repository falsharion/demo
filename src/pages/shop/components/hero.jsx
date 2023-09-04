import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="mb-10 bg-[url('https://plus.unsplash.com/premium_photo-1682633157221-e31c2ad7be9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80')] h-96 w-full bg-cover bg-center p-24">
      <div className="p-4">
        <p className="text-white mb-4">Barcode Scanner</p>
        <p className="text-white text-3xl mb-4">RFR900 for EF501</p>
        <p className="text-white mb-2">Long Range and high speed</p>
        {/* Use the Link component to navigate to the Products page */}
        <Link to="/products">
          <button className="text-white px-9 py-2 text-xs rounded-md bg-black">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
