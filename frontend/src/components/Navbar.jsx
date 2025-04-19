import React from 'react';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation
import ee from '../../public/images/1.jpeg';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[87px] bg-[rgb(237,36,46)] text-[rgb(241,241,241)] z-50">

      {/* Left Logo Section */}
      <div className="absolute left-0 top-0 h-[87px] w-[80px] flex items-center justify-center bg-[rgb(0,19,43)]">
        <span className="text-lg font-semibold">
          <FaUser className="text-white text-lg"/>
        </span>
      </div>

      {/* Right Search Icon */}
      <div className="absolute right-0 top-0 h-[87px] w-[80px] flex items-center justify-center bg-[rgb(0,19,43)] cursor-pointer hover:bg-[rgb(5,30,65)] transition">
        <FaSearch className="text-white text-lg" />
      </div>

      {/* Center Nav Items with padding */}
      <div className="flex justify-center items-center h-full px-[100px] space-x-10">
        {['Home', 'About', 'Predict', 'Contact'].map((item, idx) => {
          const to = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
          return (
            <Link
              key={idx}
              to={to}
              className="text-lg font-medium cursor-pointer hover:underline hover:scale-105 transition-all duration-150"
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Navbar;
