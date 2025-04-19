import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import TomatoDiseasesPage from '../components/TomatoDiseasesPage';
import ProtectYourselfPage from '../components/ProtectYourselfPage';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Banner />
      <div className='h-[800px]'>
        <div className="relative z-10 -mt-40 bg-white shadow-lg rounded-[80px] w-[1400px] h-[600px] mx-auto px-16 py-12 flex items-center justify-between">
          {/* Left Side - Text */}
          <div className="w-1/2">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-6 uppercase">
                <span className="border-b-8 border-[rgb(237,36,46)] pb-1 pr-2">ABOUT</span> US
             {/* Closing Link tag */}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed tracking-wide pt-10">
              Our <span className="font-semibold text-gray-900">Tomato Leaf Prediction System</span> leverages state-of-the-art <span className="text-[rgb(237,36,46)] font-medium">Machine Learning</span> models to identify diseases in tomato leaves with high accuracy.
              <br /><br />
              It’s designed to help farmers take early action, reduce crop damage, and boost productivity by providing reliable, real-time insights from leaf images.
            </p>

            {/* About More Button */}
            <Link to="/about">  {/* Correctly wrapped Link for navigation */}
              <button className="mt-8 bg-blue-950 hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300">
                About More
              </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src="/images/hel.jpeg"
              alt="Tomato Leaf Analysis"
              className="w-[400px] h-[400px] object-cover rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
      <TomatoDiseasesPage />
      <ProtectYourselfPage />
   
    </>
  );
}

export default Home;
