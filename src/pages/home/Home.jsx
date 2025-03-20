import React from 'react';
import { car1, car2, car3, car4, car5, car6 } from '../../assets/index.assets.js';
import { Link } from 'react-router-dom';
import './home.css'; // Import CSS directly
import { FaTools } from "react-icons/fa";


const Home = () => {
  return (
    <div className="home-container text-white overflow-hidden flex flex-col items-center">
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 md:pt-20 w-full">
        <div className="relative z-10 text-center px-4 -mt-8 w-full">
          <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold mb-4 md:mb-6 glow-text mx-auto">
          Restore Your Ride to Perfection
            <span className="pixel-cursor">_</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 font-mono text-cyan-300 mx-auto flex items-center justify-center">
            <FaTools className="text-yellow-400 text-3xl mr-2" />
            Premium dent removal, precision paint correction, and expert auto restoration.
            <FaTools className="text-yellow-400 text-3xl ml-2" />
          </p>


          <Link 
            to="/consultation"
            className="inline-block px-4 md:px-8 py-2 md:py-4 bg-purple-600 hover-glow neon-border rounded-lg text-base md:text-xl font-bold mx-auto"
          >
            Book Your Consultation
          </Link>
        </div>


        {/* Scrolling Game Characters */}
        <div className="rolling-container">
          <div className="marquee">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <>
                <img key={`car1-${i}`} src={car1} alt="car1" />
                <img key={`car2-${i}`} src={car2} alt="car2" />
                <img key={`car3-${i}`} src={car3} alt="car3" />
                <img key={`car4-${i}`} src={car4} alt="car4" />
                <img key={`car5-${i}`} src={car5} alt="car5" />
                <img key={`car6-${i}`} src={car6} alt="car6" />
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
