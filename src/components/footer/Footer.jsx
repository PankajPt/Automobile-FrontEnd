import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
import { Cog6ToothIcon, TruckIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 gap-4">
          <div className="flex items-center gap-3">
            {/* Logo Section */}
            <NavLink 
              to="/" 
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img 
                  src="/logo.png" 
                  alt="Logo" 
                  className="w-16 h-16 sm:w-[90px] sm:h-[90px] object-contain transition-transform duration-300 
                  group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                />
              </motion.div>
              
              <span className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 
              bg-clip-text text-transparent transition-all duration-300 
              group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                SP AUTOMOBILE
              </span>
            </NavLink>
          </div>
          
          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-purple-400 font-bold uppercase text-sm font-orbitron tracking-wider">
              Follow Us
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: <FaFacebook className="text-2xl" />, name: 'Facebook' },
                { icon: <FaTwitter className="text-2xl" />, name: 'Twitter' },
                { icon: <FaInstagram className="text-2xl" />, name: 'Instagram' },
              ].map((social) => (
                    <a
                        key={social.name}
                        href="#"
                        className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
                    >
                        {social.icon}
                        <span>{social.name}</span>
                    </a>
                ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} SP Automobiles. All rights reserved.</p>
          <p className="mt-2">Premium Automotive Services</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer