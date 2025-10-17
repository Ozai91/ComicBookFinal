// src/components/Banner.jsx
import React from "react";
import bannerImage from "../assets/banner.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <button className="bg-white text-black font-semibold px-4 py-2 rounded mb-4 text-sm sm:text-base md:text-lg">
          Marvel Universe
        </button>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4">
          READ THESE FREE COMICS
        </h1>
        <p className="max-w-xs sm:max-w-md md:max-w-xl text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
          From Marvel classics, to must-read runs, jump start your comic reading
          with these events, intro arcs, and storylines.
        </p>
        <Link
          to="/comic"
          className="bg-white text-black font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded mb-4 hover:bg-red-600 hover:text-white transition-colors duration-300 text-sm sm:text-base md:text-lg"
        >
          READ NOW!
        </Link>
      </div>
    </div>
  );
}

export default Banner;
