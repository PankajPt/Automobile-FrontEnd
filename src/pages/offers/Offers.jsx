import { FaCheck, FaCarSide, FaShieldAlt, FaCertificate   } from "react-icons/fa";
import { Link } from 'react-router-dom';

const offerSet = [
  {
    title: 'Basic Service',
    price: '₹3000',
    features: ['Oil Change', 'Brake Inspection', 'Battery Check'],
    bg: 'from-gray-800 to-gray-900',
    border: 'border-cyan-400',
    hoverGlow: 'hover:shadow-cyan-500/30'
  },
  {
    title: 'Standard Service',
    price: '₹4000',
    features: ['Basic Service +', 'Tire Rotation', 'Fluid Top-up'],
    bg: 'from-purple-900/80 to-gray-900',
    border: 'border-purple-400',
    hoverGlow: 'hover:shadow-purple-500/30'
  },
  {
    title: 'Comprehensive Service',
    price: '₹5000',
    features: ['Standard Service +', 'Engine Diagnostic', 'AC Check'],
    bg: 'from-cyan-900/50 to-gray-900',
    border: 'border-cyan-300',
    hoverGlow: 'hover:shadow-cyan-400/30'
  }
];

// export default function Offers() {
//   return (
//     <section className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Page Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             Maintenance Packages
//           </h1>
//           <p className="text-gray-300 text-lg max-w-2xl mx-auto">
//             Choose the perfect service package for your vehicle from our curated
//             maintenance plans
//           </p>
//         </div>

//         {/* Pricing Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
//           {offerSet.map((offer, index) => (
//             <div
//               key={index}
//               className={`relative bg-gradient-to-br ${offer.bg} rounded-2xl p-8 shadow-xl ${offer.hoverGlow} hover:shadow-2xl transition-all duration-300 border-2 ${offer.border}`}
//             >
//               {/* Popular Badge */}
//               {index === 1 && (
//                 <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
//                   Most Popular
//                 </div>
//               )}

//               {/* Package Header */}
//               <div className="mb-8">
//                 <FaCarSide className="text-3xl text-white mb-4" />
//                 <h2 className="text-2xl font-bold text-white mb-2">
//                   {offer.title}
//                 </h2>
//                 <div className="flex items-baseline">
//                   <span className="text-4xl font-extrabold text-white">
//                     {offer.price}
//                   </span>
//                   <span className="ml-2 text-gray-300">/service</span>
//                 </div>
//               </div>

//               {/* Features List */}
//               <ul className="space-y-4 mb-12">
//                 {offer.features.map((feature, fIndex) => (
//                   <li
//                     key={fIndex}
//                     className="flex items-center text-gray-200"
//                   >
//                     <FaCheck className="flex-shrink-0 text-green-400 mr-3" />
//                     <span className="text-base">{feature}</span>
//                   </li>
//                 ))}
//               </ul>

//               {/* CTA Button */}
//               <Link
//                 to="/booking"
//                 className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
//               >
//                 Choose Plan
//               </Link>
//             </div>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 text-center text-gray-300">
//           <p className="text-sm">
//             All packages include free 30-day warranty • 24/7 support • GST included
//           </p>
//           <div className="mt-6 flex items-center justify-center space-x-4">
//             <FaCheck className="text-green-400" />
//             <span className="text-sm">100% Satisfaction Guarantee</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function Offers() {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Maintenance Packages
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Choose the perfect service package for your vehicle from our curated
            maintenance plans
          </p>
        </div>

        {/* Trust Badges - Added to match Packages page */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <FaShieldAlt className="text-blue-600" />
            <span className="text-sm font-medium">1-Year Warranty</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <FaCertificate className="text-green-600" />
            <span className="text-sm font-medium">Certified Experts</span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {offerSet.map((offer, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${offer.border}`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-xl rounded-tr-xl text-sm font-medium">
                  Most Popular
                </div>
              )}

              {/* Package Header */}
              <div className="mb-8">
                <FaCarSide className="text-3xl text-blue-900 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {offer.title}
                </h2>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">
                    {offer.price}
                  </span>
                  <span className="ml-2 text-gray-600">/service</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-12">
                {offer.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-center text-gray-600"
                  >
                    <FaCheck className="flex-shrink-0 text-green-500 mr-3" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/consultation"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors duration-200"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            All packages include free 30-day warranty • 24/7 support • GST included
          </p>
          <div className="mt-6 flex items-center justify-center space-x-4">
            <FaCheck className="text-green-500" />
            <span className="text-sm">100% Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
}