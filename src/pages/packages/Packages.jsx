import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaArrowRight, FaShieldAlt, FaCertificate, FaTimes } from 'react-icons/fa';
import { combo1, combo2, combo3 } from '../../assets/index.assets';

export default function Packages() {
  const packages = [
    {
      title: 'Essential Care Combo',
      price: '₹6000',
      image: combo1,
      features: ['Oil Change', 'Tire Rotation', 'Brake Inspection'],
      bg: 'from-gray-800 to-gray-900',
      border: 'border-cyan-400',
      hoverGlow: 'hover:shadow-cyan-500/30'
    },
    {
      title: 'Performance Boost Combo',
      price: '₹7500',
      image: combo2,
      features: ['Engine Diagnostics', 'Battery Check', 'Fluid Top-up'],
      bg: 'from-purple-900/80 to-gray-900',
      border: 'border-purple-400',
      hoverGlow: 'hover:shadow-purple-500/30'
    },
    {
      title: 'Complete Protection Combo',
      price: '₹10000',
      image: combo3,
      features: ['Essential Care Combo +', 'Wheel Alignment', 'AC & Heating Service'],
      bg: 'from-cyan-900/50 to-gray-900',
      border: 'border-cyan-300',
      hoverGlow: 'hover:shadow-cyan-400/30'
    }
  ];

  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Automotive Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services to maintain, repair, and enhance your vehicle's performance
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <FaShieldAlt className="text-blue-600" />
            <span className="text-sm font-medium">2-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <FaCertificate className="text-green-600" />
            <span className="text-sm font-medium">Certified Experts</span>
          </div>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {selectedPackage === index && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 z-20">
                  <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold">{pkg.title} Features</h3>
                      <button 
                        onClick={() => setSelectedPackage(null)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FaTimes />
                      </button>
                    </div>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li 
                          key={fIndex}
                          className="flex items-center gap-2 text-gray-600"
                        >
                          <FaArrowRight className="text-blue-500 text-sm" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Package Content */}
              <div className={`relative ${selectedPackage === index ? 'blur-sm' : ''}`}>
                <div className="relative aspect-video">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{pkg.price}</p>
                  <button
                    onClick={() => setSelectedPackage(index)}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Explore Services
                    <FaArrowRight className="text-sm" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-blue-900 text-white py-12 px-4 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Need Custom Solutions?
          </h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Contact us for personalized service packages tailored to your vehicle's needs
          </p>
          <Link
            to="/consultation"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Custom Quote
          </Link>
        </div>
      </div>
    </section>
  );
}