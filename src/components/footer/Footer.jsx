import { motion } from 'framer-motion'
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { Cog6ToothIcon, TruckIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 gap-4">
          <div className="flex items-center gap-3">
            <motion.div 
              className="bg-secondary/20 p-2 rounded-full"
              whileHover={{ rotate: 360 }}
            >
              <Cog6ToothIcon className="w-8 h-8 text-secondary" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold">SP Toyota</span>
              <span className="text-sm text-gray-300">Automotive Services</span>
            </div>
            <TruckIcon className="w-6 h-6 ml-2 text-secondary" />
          </div>
          
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-secondary transition-colors"
              aria-label="Facebook"
            >
              <FiFacebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="hover:text-secondary transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram size={24} />
            </motion.a>
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