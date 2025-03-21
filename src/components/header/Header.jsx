import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Offers', path: '/offers' },
    { name: 'Packages', path: '/packages' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 bg-gray-900 shadow-lg shadow-cyan-500/10 z-50"
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
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


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.div 
              whileHover={{ scale: 1.50 }} 
              key={link.name}
              className="relative"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) => 
                  `px-3 py-2 text-base sm:text-lg font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]' 
                      : 'text-gray-300 hover:text-cyan-300'
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 transition-all 
                  duration-300 group-hover:w-full group-hover:shadow-[0_0_10px_#22d3ee]"></span>
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-300 hover:text-cyan-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Bars3Icon className="w-8 h-8" />
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900 shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-gray-300 text-lg px-4 py-2 ${
                      isActive 
                        ? 'text-cyan-400 bg-gray-800 rounded-lg' 
                        : 'hover:text-cyan-300'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header