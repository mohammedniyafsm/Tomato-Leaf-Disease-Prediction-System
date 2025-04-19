import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Tips data with images
const tips = [
  {
    image: <img src="/images/1n.jpeg" alt="Control Pests" className="w-full object-cover h-[200px]" />,
    title: "Control Pests",
    description: "Use organic pesticides to protect from aphids, whiteflies, and other pests."
  },
  {
    image: <img src="/images/2n.jpeg" alt="Sunlight Matters" className="w-full object-cover h-[200px]" />,
    title: "Sunlight Matters",
    description: "Give 6–8 hours of sunlight to prevent leaf diseases caused by dampness."
  },
  {
    image: <img src="/images/3n.jpeg" alt="Water Smart" className="w-full object-cover h-[200px]" />,
    title: "Water Smart",
    description: "Water at the base. Wet leaves invite fungal diseases."
  },
  {
    image: <img src="/images/4n.jpeg" alt="Choose Disease-Resistant Varieties" className="w-full object-cover h-[200px]" />,
    title: "Choose Disease-Resistant Varieties",
    description: "Pick tomato plants that are naturally resistant to blight and mildew."
  },
  {
    image: <img src="/images/5n.jpeg" alt="Prune & Space Well" className="w-full object-cover h-[200px]" />,
    title: "Prune & Space Well",
    description: "Good airflow and trimming lower leaves reduce chances of infections."
  }
];

const ProtectYourselfPage = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images per frame
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="px-4 py-10 ">
      {/* Heading Section */}
      <h2 className="text-4xl font-bold text-center text-green-900 mb-12">
        How to <span className="text-red-600">Protect Tomato Leaves</span> from Diseases
      </h2>

      {/* Slider Section with background image */}
      <div
        className="bg-cover bg-center bg-no-repeat py-16 px-4 rounded-[30px] shadow-lg"
        style={{
          backgroundImage: "url('/images/bg.jpeg')" // Replace with your image
        }}
      >
        <div className="backdrop-blur-md max-w-6xl mx-auto p-4 rounded-2xl h-[450px] ">
          <Slider {...settings}>
            {tips.map((tip, index) => (
              <div key={index} className="p-4">
                <div className="bg-white rounded-xl p-6 shadow-md flex flex-col items-center h-[350px] hover:shadow-xl transition duration-300 hover:-translate-y-1">
                  {tip.image}
                  <h3 className="mt-5 text-lg font-semibold text-gray-800">{tip.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{tip.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ProtectYourselfPage;
