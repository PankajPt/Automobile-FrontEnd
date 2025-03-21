import { motion } from 'framer-motion';
import { bodyRepair, insuranceService, mechJob, periodicM, vas } from '../../assets/index.assets.js';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { FaShieldAlt, FaCertificate } from 'react-icons/fa';
import './services.css'


const Services = () => {
  const services = [
    {
      title: 'Periodic Maintenance',
      description: 'Routine inspections, oil changes, brake servicing, and diagnostics to keep your car in top condition.',
      image: periodicM,
      icon: '🛠️'
    },
    {
      title: 'Mechanical Jobs',
      description: 'Brake, suspension, steering, clutch, engine, transmission, A.C., electrical problem diagnosis, and computer scanning.',
      image: mechJob,
      icon: '⚙️'
    },
    {
      title: 'Body Repair Jobs',
      description: 'Professional denting and painting services in a state-of-the-art paint booth for a flawless finish.',
      image: bodyRepair,
      icon: '🎨'
    },
    {
      title: 'Insurance Services',
      description: 'Seamless insurance renewal and cashless claim settlements for your convenience.',
      image: insuranceService,
      icon: '📜'
    },
    {
      title: 'Value Added Services',
      description: 'Ceramic coating, interior dry cleaning, A.C. disinfectant, bacteria removal, anti-rust coating, and more.',
      image: vas,
      icon: '✨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header with Trust Badges */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Our Toyota Services
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200">
              <FaShieldAlt className="text-orange-600" />
              <span className="text-sm font-medium text-gray-700">2-Year Warranty</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-2 rounded-full shadow-sm border border-gray-200">
              <FaCertificate className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Certified Experts</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-orange-400 transition-all duration-500 bg-white"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative md:w-1/2 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                </div>

                <div className="md:w-1/2 p-6 md:p-8 bg-white">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                    {service.title}
                    <ChevronRightIcon className="w-6 h-6 ml-2 text-orange-600 group-hover:translate-x-2 transition-transform" />
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center text-orange-600 hover:text-orange-700 transition-colors font-medium">
                    Learn More
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-orange-400/10 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;