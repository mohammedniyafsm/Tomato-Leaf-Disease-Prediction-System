import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import banner from '../../public/images/main.png';

function Banner() {
  return (
    <>
      <div className="relative w-full h-[800px]">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white bg-opacity-40 pl-12">
          <h1 className="text-8xl leading-[90px] font-bold text-left pb-[50px] pl-28">
            Tomato Leaf <br /> Prediction <br /> System
          </h1>

          {/* Buttons */}
          <div className="pl-28 flex gap-6">
          <Link to="/about">  {/* Wrap in Link to navigate to About page */}
            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
              Read More
            </button>
            </Link>


            {/* About Us Button with Link */}
            <Link to="/about">  {/* Wrap in Link to navigate to About page */}
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-black transition">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
