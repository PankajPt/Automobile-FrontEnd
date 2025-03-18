import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Cog6ToothIcon, TruckIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Offers & Packages', path: '/offers' },
    { name: 'Enquiry', path: '/enquiry' },
    { name: 'About', path: '/about' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-white shadow-sm z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className="flex items-center gap-2 group"
        >
          <motion.div 
            className="relative"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-secondary/10 rounded-full" />
            <Cog6ToothIcon className="w-8 h-8 text-primary" />
          </motion.div>
          
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary">
              SP Toyota
            </span>
            <span className="text-xs text-gray-500 group-hover:text-secondary">
              Automobile
            </span>
          </div>
          
          <TruckIcon className="w-6 h-6 ml-2 text-secondary" />
        </NavLink>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.div whileHover={{ scale: 1.05 }} key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `flex items-center gap-1 ${
                    isActive ? 'text-primary' : 'text-gray-600'
                  } hover:text-primary`
                }
              >
                {link.name}
                <ChevronRightIcon className="w-3 h-3" />
              </NavLink>
            </motion.div>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}

export default Header