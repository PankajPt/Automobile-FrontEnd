import { motion } from 'framer-motion';
import { bodyRepair, insuranceService, mechJob, periodicM, vas} from '../../assets/index.assets.js';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Our Toyota Services
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-700 hover:border-cyan-400 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row h-full">
                <div className="relative md:w-1/2 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 md:h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                  {/* <div className="absolute top-4 left-4 text-4xl bg-gray-900/80 p-3 rounded-full">
                    {service.icon}
                  </div> */}
                </div>

                <div className="md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900">
                  <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center">
                    {service.title}
                    <ChevronRightIcon className="w-6 h-6 ml-2 text-purple-400 group-hover:translate-x-2 transition-transform" />
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <button className="flex items-center text-purple-400 hover:text-cyan-400 transition-colors">
                    Learn More
                    <ChevronRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-cyan-400/10 animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;