import React from 'react';

const diseases = [
  {
    name: 'Early Blight',
    description: 'Early Blight is a fungal disease causing dark concentric rings on lower leaves, which results in early leaf drop. This disease typically affects the bottom leaves first and can spread quickly if not managed.',
    image: '/images/early-bright.JPG'
  },
  {
    name: 'Late Blight',
    description: 'Late Blight is a fast-spreading disease caused by a fungus that creates water-soaked spots on leaves and fruit, leading to rapid deterioration. It’s a serious disease, particularly during humid, wet conditions.',
    image: '/images/late-blight.JPG'
  },
  {
    name: 'Powdery Mildew',
    description: 'Powdery Mildew appears as a white, powdery fungal growth on leaf surfaces. This disease hinders photosynthesis and can stunt plant growth, especially under warm, dry conditions.',
    image: '/images/leaf-mold.JPG'
  },
  {
    name: 'Bacterial Spot',
    description: 'Bacterial Spot causes water-soaked dark lesions on leaves and fruit, affecting market quality. It often leads to early defoliation, and the bacteria can spread through splashing water and wind.',
    image: '/images/bacterial.JPG'
  },
  {
    name: 'Septoria Leaf Spot',
    description: 'Septoria Leaf Spot results in small, round brown spots with gray centers, often leading to early leaf drop. It’s commonly seen in hot, humid conditions and spreads rapidly through irrigation water.',
    image: '/images/sepctoral.JPG'
  },
  {
    name: 'Fusarium Wilt',
    description: 'Fusarium Wilt is caused by a soil-borne fungus that causes yellowing of leaves and wilting. It can kill plants, especially when the infection is severe, and it’s often difficult to manage once the plant is infected.',
    image: '/images/spider.JPG'
  },
  {
    name: 'Tomato Mosaic Virus',
    description: 'Tomato Mosaic Virus causes yellow mottling and curling of leaves, as well as stunted growth in tomato plants. The virus spreads through mechanical damage and by infected seeds.',
    image: '/images/Tomato_mosaic.JPG'
  },
  {
    name: 'Blossom End Rot',
    description: 'Blossom End Rot is caused by a calcium deficiency, leading to black, sunken areas at the blossom end of tomatoes. It often appears in hot, dry weather when the plant cannot take up enough calcium from the soil.',
    image: '/images/target-spot.JPG'
  },
  {
    name: 'Tobacco Mosaic Virus',
    description: 'Tobacco Mosaic Virus causes yellow-green mosaic patterns on leaves and distorted leaf shapes. It weakens the plant, reducing its ability to photosynthesize and stunting growth.',
    image: '/images/Yellow-leaf.JPG'
  }
];

const TomatoDiseasesPage = () => {
  return (
    <div className="font-poppins">
      {/* Healthy Section */}
      <div className="bg-gradient-to-r from-green-100 via-white to-green-50 py-10 px-4 text-center shadow-inner rounded-md mb-10">
        <h1 className="text-5xl font-extrabold text-red-700 mb-4"> HEALTHY TOMATO LEAF</h1>
        <p className="text-gray-700 mb-6 text-lg max-w-xl mx-auto">Recognize what a healthy leaf looks like before comparing it with infected ones.</p>
        <img
          src="/images/healthy.JPG"
          alt="Healthy Tomato Leaf"
          className="mx-auto max-w-md h-[250px] object-cover rounded-xl shadow-xl border border-green-300"
        />
      </div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-red-700 mb-6">TOP 9 TOMATO LEAF DISEASES </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Learn to identify common tomato plant diseases and how they affect crop health and yield.</p>

      {/* Disease Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-16">
        {diseases.map((disease, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300"
          >
            {/* Image Zoom */}
            <img
              src={disease.image}
              alt={disease.name}
              className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
              <p className="text-white text-sm">{disease.description}</p>
            </div>

            {/* Name Badge */}
            <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-md shadow-md">
              {disease.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TomatoDiseasesPage;
