import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 md:py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Resources Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">RESOURCES</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">What we do</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Media</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Travel Advice</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Protection</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400 transition-colors">Care</a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">ABOUT</h3>
            <p className="text-sm">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their
              default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
              infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
            </p>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">CONTACT US</h3>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Call :</span> +01 1234567890
              </li>
              <li>
                <span className="font-medium">Email :</span> demo@gmail.com
              </li>
            </ul>
          </div>

          {/* Countries Section */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">COUNTRIES</h3>
            {/* Map Image Placeholder - Replace with your actual image */}
            <div className="w-full h-32 bg-gray-700 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* Important: Add a proper alt attribute. */}
              <img
                src="/images/map.png" // Replace with your image URL
                alt="World Map"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-8 text-center text-sm">
          <p>© 2025 All Rights Reserved. Design by Mohammed Niyaf S M</p>
          <p className="mt-2">
            <a href="javascript:void(0);" className="hover:text-gray-400 transition-colors">
          
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
