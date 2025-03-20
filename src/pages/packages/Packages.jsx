import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import './packages.css'

const Packages = () => {
  const packages = [
    {
      title: 'Essential Care Combo',
      price: '$99.99',
      features: ['Oil Change', 'Tire Rotation', 'Brake Inspection'],
      bg: 'from-gray-800 to-gray-900',
      border: 'border-cyan-400',
      hoverGlow: 'hover:shadow-cyan-500/30'
    },
    {
      title: 'Performance Boost Combo',
      price: '$149.99',
      features: ['Engine Diagnostics', 'Battery Check', 'Fluid Top-up'],
      bg: 'from-purple-900/80 to-gray-900',
      border: 'border-purple-400',
      hoverGlow: 'hover:shadow-purple-500/30'
    },
    {
      title: 'Complete Protection Combo',
      price: '$129.99',
      features: ['Essential Care Combo +', 'Wheel Alignment', 'AC & Heating Service'],
      bg: 'from-cyan-900/50 to-gray-900',
      border: 'border-cyan-300',
      hoverGlow: 'hover:shadow-cyan-400/30'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Combo Service Packages
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className={`relative bg-gradient-to-br ${pkg.bg} rounded-xl p-6 sm:p-8 border-2 ${pkg.border} shadow-xl ${pkg.hoverGlow} transition-all duration-300 group hover:z-10`}
            >
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-[shimmer_2s_infinite]"></div>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-cyan-100 transition-colors">
                  {pkg.title}
                </h2>
                
                <motion.div 
                  className="mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                </motion.div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      className="flex items-center text-gray-300 group-hover:text-white transition-colors"
                      initial={{ x: 10 }}
                      whileInView={{ x: 0 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.svg 
                        className="w-5 h-5 mr-2 text-cyan-400" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </motion.svg>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    background: `linear-gradient(to right, #22d3ee, ${pkg.border.replace('border-', '#')})`,
                    boxShadow: `0 0 25px ${pkg.hoverGlow.split('/')[0].replace('hover:shadow-', '#')}80`
                  }}
                >
                  <NavLink
                    to="/consultation"
                    className={`inline-block w-full py-3 px-6 text-center font-bold rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-gray-900 transition-all duration-300`}
                  >
                    Book Now
                  </NavLink>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Packages;