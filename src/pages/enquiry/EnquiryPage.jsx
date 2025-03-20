import { useState } from 'react';
import EnquiryForm from './EnquiryForm.jsx';
import {
    toyotaallcars, glanza, camry, fortuner, hilux,
    innovacrysta, innovahycross, vellfire, urbanch, urbanct, rumion, landcruiser, yaris, etios, corollaaltis
  } from '../../assets/index.assets.js';

const EnquiryPage = () => {
    const [selectedModel, setSelectedModel] = useState(null);
  // Car models data
  const models = [
    {
        name: "Toyota Camry",
        tagline: "Luxury Meets Performance.",
        description:
          "The Toyota Camry offers a perfect blend of luxury, efficiency, and high performance. Its hybrid technology, plush interiors, and advanced safety features make every drive smooth and refined.",
        fullImage: toyotaallcars,
        smallImage: camry,
    },
    {
      name: "Toyota Corolla Altis",
      tagline: "Elevate Your Drive with Power and Prestige.",
      description:
        "The Toyota Corolla Altis is a symbol of sophistication, blending premium comfort with dynamic performance. With its sleek design, spacious interiors, and advanced safety features, it offers a smooth and luxurious driving experience. Whether in the city or on the highway, the Corolla Altis delivers reliability, efficiency, and elegance in every ride.",
      fullImage: toyotaallcars,
      smallImage: corollaaltis,
    },
    {
      name: "Toyota Etios",
      tagline: "Built to Last, Designed for Comfort.",
      description:
          "The Toyota Etios is a reliable and fuel-efficient sedan, offering a perfect blend of comfort, performance, and durability. With its spacious interiors, powerful yet economical engine, and Toyota’s legendary reliability, the Etios is an ideal choice for both city commutes and long highway drives. Whether for personal use or commercial purposes, the Etios delivers a smooth and hassle-free driving experience.",
      fullImage: toyotaallcars,
      smallImage: etios,
    },
    {
        name: "Toyota Fortuner",
        tagline: "Conquer Every Terrain.",
        description:
          "The Toyota Fortuner is a rugged SUV built for adventure. With a powerful diesel engine, off-road capabilities, and premium features, it dominates both highways and rough trails.",
        fullImage: toyotaallcars,
        smallImage: fortuner,
    },
    {
        name: "Toyota Glanza",
        tagline: "Smart, Stylish, and Efficient.",
        description:
            "The Toyota Glanza is a feature-packed hatchback with a sporty design and excellent fuel efficiency. It's ideal for city drives with a spacious cabin and advanced tech.",
        fullImage: toyotaallcars,
        smallImage: glanza,
    },
    {
        name: "Toyota Hilux",
        tagline: "The Toughest Pickup Ever.",
        description:
            "The Toyota Hilux is built for extreme conditions, offering unmatched durability, a robust diesel engine, and exceptional off-road performance.",
        fullImage: toyotaallcars,
        smallImage: hilux,
    },
    {
        name: "Toyota Innova Crysta",
        tagline: "A Legacy of Comfort and Reliability.",
        description:
        "The Toyota Innova Crysta is India's favorite MPV, offering premium interiors, powerful engine options, and best-in-class reliability for families and business owners alike.",
        fullImage: toyotaallcars,
        smallImage: innovacrysta,
    },
    {
        name: "Toyota Innova Hycross",
        tagline: "The Future of Mobility.",
        description:
            "The Toyota Innova Hycross is a next-generation hybrid MPV that combines fuel efficiency with high performance, spacious interiors, and cutting-edge technology.",
        fullImage: toyotaallcars,
        smallImage: innovahycross,
    },
    {
        name: "Toyota Innova Rumion",
        tagline: "The Ultimate Family Car.",
        description:
            "The Toyota Innova Rumion offers best-in-class comfort, a powerful yet fuel-efficient engine, and premium features, making it the perfect family MPV.",
        fullImage: toyotaallcars,
        smallImage: rumion,
    },
    {
      name: "Toyota Land Cruiser 300",
      tagline: "Unmatched Power, Ultimate Prestige.",
      description:
          "The Toyota Land Cruiser 300 is a legendary SUV known for its rugged capability, luxurious comfort, and advanced technology. With a powerful twin-turbo V6 engine, superior off-road performance, and a refined interior, it sets the benchmark for full-size SUVs.",
      fullImage: toyotaallcars,
      smallImage: landcruiser,
    },
    {
        name: "Toyota Vellfire",
        tagline: "Luxury, Redefined.",
        description:
            "The Toyota Vellfire is a high-end luxury MPV that provides first-class comfort, a powerful hybrid engine, and ultra-premium interiors for an unmatched driving experience.",
        fullImage: toyotaallcars,
        smallImage: vellfire,
    },
    {
      name: "Toyota Yaris",
      tagline: "Drive in Style, Arrive with Confidence.",
      description:
          "The Toyota Yaris is a premium sedan that combines elegance, efficiency, and advanced safety features. Designed for urban and highway driving, it offers a refined driving experience with its smooth performance, spacious interiors, and cutting-edge technology. With Toyota’s legendary reliability and fuel efficiency, the Yaris ensures every journey is comfortable, safe, and stylish.",
      fullImage: toyotaallcars,
      smallImage: yaris,
    },
    {
        name: "Urban Cruiser Hyryder",
        tagline: "Go Farther with Hybrid Power.",
        description:
            "The Toyota Urban Cruiser Hyryder is a stylish hybrid SUV with excellent fuel economy, advanced safety features, and a futuristic design.",
        fullImage: toyotaallcars,
        smallImage: urbanch,
    },
    {
        name: "Urban Cruiser Taisor",
        tagline: "Bold, Smart, and Dynamic.",
        description:
            "The Toyota Urban Cruiser Taisor is a compact SUV with a bold design, modern technology, and an efficient powertrain—perfect for urban explorers.",
        fullImage: toyotaallcars,
        smallImage: urbanct,
    },
];

return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
            Toyota Service Enquiry
          </h1>
          <p className="text-xl text-gray-300">
            Get expert service for your Toyota vehicle
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Form Section */}
          <div className="lg:w-1/2">
            <EnquiryForm 
              models={models}
              selectedModel={selectedModel}
              setSelectedModel={setSelectedModel}
            />
          </div>

          {/* Car Details Section */}
          <div className="lg:w-1/2">
            <div className="sticky top-24 p-6 bg-gray-800/50 rounded-xl border-2 border-gray-700">
              {selectedModel ? (
                <div className="space-y-6">
                  <div className="relative group">
                    <img
                      src={selectedModel.smallImage}
                      alt={selectedModel.name}
                      className="w-full h-64 object-cover rounded-lg border-2 border-gray-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent rounded-lg" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-cyan-400">
                      {selectedModel.name}
                    </h3>
                    <p className="text-purple-300 text-xl">{selectedModel.tagline}</p>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedModel.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-96 flex flex-col items-center justify-center text-center p-6">
                  <div className="text-4xl mb-4">🚗</div>
                  <h3 className="text-2xl text-gray-300 mb-2">Select Your Vehicle</h3>
                  <p className="text-gray-400">
                    Choose a model from the dropdown to see details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;