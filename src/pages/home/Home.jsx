import React from 'react';
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, toyotaallcars, repairProcess } from '../../assets/index.assets.js';
import { Link } from 'react-router-dom';
import './home.css';
import { FaTools, FaShieldAlt, FaMoneyCheck, FaCertificate } from "react-icons/fa";
import { GiCarDoor, GiPaintRoller, GiCarWheel } from 'react-icons/gi';
import { MdOutlineCarRepair } from 'react-icons/md';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[500px] md:h-[600px] bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Precision Auto Body Repair & Paint Services
            </h1>
            <p className="text-lg sm:text-xl mb-6 md:mb-8">
              Restoring your vehicle's beauty with expert care
            </p>
            <Link to={'/consultation'}>
              <button className="text-sm md:text-lg bg-orange-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-orange-700 transition">
                Get Free Estimate
              </button>
            </Link>
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 md:gap-6 text-sm md:text-base">
              <span className="flex items-center gap-2">
                <MdOutlineCarRepair className="text-xl md:text-2xl" />
                ASE-Certified Technicians
              </span>
              <span className="flex items-center gap-2">
                <GiPaintRoller className="text-xl md:text-2xl" />
                Lifetime Warranty
              </span>
            </div>
          </div>
          <img 
            src={toyotaallcars}
            alt="Car repair" 
            className="hidden md:block absolute right-0 bottom-0 h-full object-cover w-1/2"
          />
        </div>
      </section>

      {/* Services Section - Mobile Optimized */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { icon: GiCarDoor, title: 'Periodic Maintenance', desc: 'Routine inspections, oil changes, brake servicing, and diagnostics to keep your car in top condition.' },
            { icon: GiPaintRoller, title: 'Body Repair Jobs', desc: 'Professional denting and painting services in a state-of-the-art paint booth for a flawless finish.' },
            { icon: GiCarWheel, title: 'Mechanical Jobs', desc: 'Brake, suspension, steering, clutch, engine, transmission, A.C., electrical problem diagnosis, and computer scanning.' },
            { icon: FaShieldAlt, title: 'Collision Repair', desc: 'Frame straightening & restoration' },
            { icon: FaCertificate, title: 'Value Added Services', desc: 'Ceramic coating, interior dry cleaning, A.C. disinfectant, bacteria removal, anti-rust coating, and more.' },
            { icon: FaMoneyCheck, title: 'Insurance Services', desc: 'Seamless insurance renewal and cashless claim settlements for your convenience.' },
          ].map((service, index) => (
            <div key={index} className="p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition">
              <service.icon className="text-3xl md:text-4xl text-blue-900 mb-3 md:mb-4" />
              <h3 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* USP Section - Mobile Optimized */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Choose Us?</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                'Free pickup & dropoff service',
                'Insurance claim assistance',
                'Eco-friendly painting solutions',
                '24/7 emergency support'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 md:gap-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-600 rounded-full flex items-center justify-center text-white text-sm md:text-base">
                    ✓
                  </div>
                  <p className="text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <img 
            src={repairProcess}
            alt="Repair process" 
            className="order-1 md:order-2 w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Testimonials - Mobile Optimized */}
      <section className="py-12 md:py-20 container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Customer Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="p-6 md:p-8 bg-white rounded-xl shadow-lg">
              <p className="text-gray-600 text-sm md:text-base mb-4">"They restored my car to better than new condition! Professional service from start to finish."</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://i.pravatar.cc/100?img=${item}`} 
                  alt="Client" 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                />
                <div>
                  <p className="font-bold text-sm md:text-base">Aakash G.</p>
                  <p className="text-xs md:text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery - Mobile Optimized */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Our Work</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((item, index) => (
            <img 
              key={index}
              src={item}
              alt={`Gallery${index + 1}`}
              className="w-full h-40 sm:h-48 md:h-64 object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Contact CTA - Mobile Optimized */}
      <section className="bg-blue-900 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Ready to Restore Your Vehicle?
          </h2>
          <div className="max-w-2xl mx-auto">
            <Link to={"/consultation"}>
              <button className="text-sm md:text-base bg-orange-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold hover:bg-orange-700 transition w-full sm:w-auto">
                Enquire Now
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}