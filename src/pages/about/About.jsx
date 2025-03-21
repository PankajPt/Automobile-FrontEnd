import React from "react";
import { MapPinIcon, ClockIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { aboutImg } from "../../assets/index.assets.js";
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
 
const About = () => {
  return (
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Title Section */}
<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center mb-8 md:mb-12 tracking-tight animate-fadeIn">
        About <span className="text-red-600">SP</span> Automobiles
</h1>
 
      {/* About Section with Responsive Image Handling */}
<div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch gap-8 md:gap-12 mb-16 bg-white shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl">
        {/* Image Container with Aspect Ratio */}
<div className="w-full md:w-1/2 flex justify-center items-center p-4 bg-gray-50 rounded-xl">
<img
            src={aboutImg}
            alt="Our Service Center"
            className="w-full h-auto max-h-96 object-contain rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
</div>
 
        {/* Description Section */}
<div className="w-full md:w-1/2 flex flex-col justify-center p-4 space-y-6">
<div className="space-y-4">
<h2 className="text-3xl font-bold text-gray-900 border-l-4 border-red-600 pl-4">
              Trusted Automotive Experts
</h2>
<div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl mt-1 text-blue-900">🚗</div>
                <p className="text-gray-600 leading-relaxed">
                  With over 25 years of industry experience, we established ourselves as a Chevrolet Authorized Outlet in Mohali (2019) and expanded with Toyota Pro-Service in Mansa (2021).
                </p>
              </div>

              <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg">
                <div className="text-3xl mt-1 text-blue-900">🔧</div>
                <p className="text-gray-600 leading-relaxed">
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
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg hover:bg-orange-50 transition-all">
                  <div className="text-orange-600">▹</div>
                  <span className="text-gray-600">{service}</span>
                </div>
              ))}
            </div>
</div>
</div>
</div>
 
      {/* Contact Details Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full mb-16">
        {[
          {
            icon: <MapPinIcon className="w-14 h-14 text-red-600 mb-4" />,
            title: "Address",
            content: "NM College Road, near Kidzee School, Arvind Nagar, Mansa, Punjab 151505",
            color: "border-red-500"
          },
          {
            icon: <ClockIcon className="w-14 h-14 text-blue-600 mb-4" />,
            title: "Working Hours",
            content: ["Mon - Sat: 9:30 AM - 6:00 PM", "Sunday: Closed"],
            color: "border-blue-500"
          },
          {
            icon: <PhoneIcon className="w-14 h-14 text-green-600 mb-4" />,
            title: "Contact Us",
            content: ["Service: +91-9970693706", "Insurance: +91-9115991166"],
            color: "border-green-500"
          },
          {
            icon: <EnvelopeIcon className="w-14 h-14 text-yellow-600 mb-4" />,
            title: "Email ID",
            content: ["gm@spautomobiles.co.in", "bh@spautomobiles.co.in"],
            color: "border-yellow-500"
          }
        ].map((card, index) => (
<div 
            key={index}
            className={`p-6 bg-white shadow-lg rounded-xl flex flex-col items-center text-center border-t-4 ${card.color} transition-all duration-300 hover:translate-y-2 hover:shadow-xl`}
>
            {card.icon}
<h3 className="text-xl font-semibold text-gray-800 mb-3">{card.title}</h3>
<div className="space-y-1">
              {Array.isArray(card.content) ? card.content.map((item, i) => (
<p key={i} className="text-gray-600">{item}</p>
              )) : <p className="text-gray-600">{card.content}</p>}
</div>
</div>
        ))}
</div>
 
      {/* Enhanced Google Maps Section */}
<div className="max-w-7xl w-full bg-white shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.01]">
<div className="p-8 pb-6 text-center">
<h2 className="text-3xl font-bold text-gray-900 mb-3">Our Location</h2>
<p className="text-gray-700 mb-6">Visit us for premium automotive services</p>
</div>
<div className="pt-6">

<div className="w-full h-96 rounded-b-2xl overflow-hidden border-t-8 border-red-600">
<iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55281.04998241671!2d75.3510581087848!3d30.006272013685095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111ee095bf3a1b%3A0x85eda07f0fbe5cb5!2sSP%20Automobiles%20(Toyota)%2C%20Mansa!5e0!3m2!1sen!2sus!4v1742367181482!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            title="Google Maps Location"
></iframe>
</div>
            </div>
            <div className="p-6 bg-white rounded-xl text-center border border-gray-200 shadow-lg">
                <p className="text-sm text-gray-600 mb-4">Certified Partners</p>
                <div className="flex flex-wrap justify-center items-center gap-6 text-3xl">
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
</div>
</div>
  );
};
 
export default About;