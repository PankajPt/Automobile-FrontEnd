import { motion } from 'framer-motion';
import { aboutImg } from '../../assets/index.assets.js';
import { CheckBadgeIcon, ClockIcon, UserGroupIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/solid';
import { 
    SiToyota, 
    SiMercedes,
    SiChevrolet,
    SiHyundai,
    SiSuzuki,
    SiBmw,
    SiAudi,
    SiHonda
  } from "react-icons/si";
  import { MdMedicalServices } from "react-icons/md";
import './about.css'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Title Section - Moved to main content */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About SP Automobiles
          </h1>
          <p className="text-xl text-gray-300 mt-4">Trusted Automotive Experts</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="lg:w-1/2 flex flex-col gap-8"
            >
            {/* Image Section */}
            <div className="relative group flex-1 flex items-center justify-center">
                <div className="w-full h-[150px] sm:h-[360px] flex items-center justify-center overflow-hidden rounded-2xl border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-500">
                <img
                    src={aboutImg}
                    alt="SP Automobiles Workshop"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                </div>
            </div>

            {/* Bottom Left Content - Why Choose Us */}
            <div className="p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-cyan-400 transition-all">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <CheckBadgeIcon className="w-8 h-8 text-purple-400" />
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: ClockIcon, text: '25+ Years Experience' },
                  { icon: UserGroupIcon, text: 'Certified Technicians' },
                  { icon: WrenchScrewdriverIcon, text: 'Genuine Parts' },
                  { icon: MdMedicalServices, text: 'Free Diagnostics' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 hover:bg-gray-700/50 rounded-lg transition-colors">
                    {item.icon && (
                      <item.icon className="w-6 h-6 text-purple-400" />
                    )}
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certified Partners */}
            <div className="p-4 bg-gray-800/50 rounded-xl text-center border border-gray-700">
                <p className="text-sm text-gray-400 mb-4">Certified Partners</p>
                <div className="flex flex-wrap justify-center items-center gap-6 text-3xl opacity-75 hover:opacity-100 transition-opacity">
                    {/* Existing Icons */}
                    <SiToyota className="hover:scale-110 transition-transform" style={{ color: "#EB0A1E" }} /> 
                    <SiMercedes className="hover:scale-110 transition-transform" style={{ color: "#C0C0C0" }} />
                    <SiChevrolet className="hover:scale-110 transition-transform" style={{ color: "#FFB700" }} />
                    <SiHyundai className="hover:scale-110 transition-transform" style={{ color: "#00287A" }} />
                    <SiSuzuki className="hover:scale-110 transition-transform" style={{ color: "#E30613" }} />
                    <SiBmw className="hover:scale-110 transition-transform" style={{ color: "#0066B1" }} />
                    <SiAudi className="hover:scale-110 transition-transform" style={{ color: "#C0C0C0" }} />
                    <SiHonda className="hover:scale-110 transition-transform" style={{ color: "#E40521" }} />
                </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="lg:w-1/2 space-y-8 text-gray-300"
          >
            {/* Experience Section */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">🚗</div>
                <p className="text-lg leading-relaxed">
                  With over 25 years of industry experience, we established ourselves as a Chevrolet Authorized Outlet in Mohali (2019) and expanded with Toyota Pro-Service in Mansa (2021).
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-3xl mt-1">🔧</div>
                <p className="text-lg leading-relaxed">
                  Our certified technicians combine cutting-edge technology with old-school craftsmanship to deliver unparalleled automotive care.
                </p>
              </div>
            </div>

            {/* Specializations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Comprehensive vehicle servicing',
                'Advanced diagnostics',
                'Genuine parts replacement',
                'Insurance claim assistance'
              ].map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/80 transition-all">
                  <div className="text-cyan-400">▹</div>
                  <span className="text-gray-300">{service}</span>
                </div>
              ))}
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address Block */}
              <div className="space-y-4 p-4 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400">Address</h3>
                <p className="text-gray-300">
                  NM College Road, near Kidzee School,<br/>
                  Arvind Nagar, Mansa, Punjab 151505
                </p>
                <a
                  href="https://maps.google.com?q=SP+Automobiles+Mansa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-glow transition-all"
                >
                  Get Directions →
                </a>
              </div>

              {/* Working Hours */}
              <div className="space-y-4 p-4 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400">Working Hours</h3>
                <p className="text-gray-300">
                  Mon - Sat: 9:30 AM - 6:00 PM<br/>
                  Sunday: Closed
                </p>
              </div>

              {/* Contact Numbers */}
              <div className="space-y-4 p-4 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400">Contact Us</h3>
                <div className="space-y-2">
                  <p className="hover:text-cyan-400 transition-colors">
                    <a href="tel:+919970693706" className="flex items-center gap-2">
                      <span className="text-purple-400">⎋</span>
                      Service: +91-9970693706
                    </a>
                  </p>
                  <p className="hover:text-cyan-400 transition-colors">
                    <a href="tel:+919115991166" className="flex items-center gap-2">
                      <span className="text-purple-400">⎋</span>
                      Insurance: +91-9115991166
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="space-y-4 p-4 bg-gray-800/50 rounded-xl">
                <h3 className="text-xl font-bold text-cyan-400">Email ID</h3>
                <div className="space-y-2">
                  <p className="hover:text-cyan-400 transition-colors">
                    <a href="mailto:gm@spautomobiles.co.in" className="flex items-center gap-2">
                      <span className="text-purple-400">✉</span>
                      gm@spautomobiles.co.in
                    </a>
                  </p>
                  <p className="hover:text-cyan-400 transition-colors">
                    <a href="mailto:bh@spautomobiles.co.in" className="flex items-center gap-2">
                      <span className="text-purple-400">✉</span>
                      bh@spautomobiles.co.in
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="pt-6">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-700 hover:border-cyan-400 transition-all duration-300">
                <iframe
                  title="SP Automobiles Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.067828046063!2d75.38968287463011!3d30.006208720383075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ee095bf3a1b%3A0x85eda07f0fbe5cb5!2sSP%20Automobiles%20(Toyota)%2C%20Mansa!5e0!3m2!1sen!2sin!4v1742403380888!5m2!1sen!2sin"
                  className="w-full h-64"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;