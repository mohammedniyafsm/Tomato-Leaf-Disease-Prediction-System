import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  // Toggle function to show/hide more description
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    // Section with reduced height and width for better fit
    <section className="bg-gray-100 pt-28 pb-16">
      <div className="relative max-w-5xl mx-auto px-4">
        {/* Card with shadow and rounded corners */}
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col lg:flex-row">
          {/* Left Side - Text */}
          <div className="lg:w-1/2 p-6 lg:p-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 uppercase">
              <span className="border-b-8 border-red-600 pb-1 pr-2">ABOUT</span> US
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed tracking-wide mt-8">
              Our <span className="font-semibold text-gray-900">Tomato Leaf Prediction System</span> leverages state‑of‑the‑art <span className="text-red-600 font-medium">Machine Learning</span> models to identify diseases in tomato leaves with high accuracy.
              <br/><br/>
              It’s designed to help farmers take early action, reduce crop damage, and boost productivity by providing reliable, real-time insights from leaf images.
            </p>

            {/* Show more button */}
            <button
              onClick={handleShowMore}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2 rounded-full transition-all duration-300"
            >
              {showMore ? "Show Less" : "About More"}
            </button>

            {/* Conditional description */}
            {showMore && (
              <p className="mt-4 text-base lg:text-lg text-gray-700 leading-relaxed tracking-wide">
                The Tomato Leaf Prediction System is an innovative solution built using deep learning techniques to assist farmers in detecting and treating diseases in their tomato crops. By analyzing leaf images, the system can accurately predict the presence of diseases like blight, mildew, and wilt. Farmers can use this tool to monitor the health of their crops remotely, significantly reducing the need for manual inspection and ensuring faster disease detection and prevention.
                <br/><br/>
                By improving early detection, our system helps minimize the use of pesticides, promote sustainable farming practices, and optimize overall crop yield, all while reducing environmental impact. This solution is accessible via an easy-to-use web platform, making it an essential tool for modern farming.
              </p>
            )}
          </div>

          {/* Right Side - Image */}
          <div className="lg:w-1/2 h-64 lg:h-auto">
            <img
              src="/images/hel.jpeg"
              alt="Tomato Leaf Analysis"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
