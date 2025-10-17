// src/components/Banner.jsx
import React from "react";
import bannerImage from "../assets/banner.png";

function Banner() {
  return (
    <div className="relative h-screen overflow-hidden text-white">
      {/* Background image container */}
      <div className="absolute inset-0">
        <img
          src={bannerImage}
          alt="Background"
          className="w-full object-cover object-center" // no h-full here
          style={{ height: "100vh" }} // <-- limit height via inline style
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center text-center text-white px-4">
        <button className="bg-white text-black font-semibold px-4 py-1 rounded mb-4">
          Marvel Universe
        </button>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-2">
          READ THESE FREE COMICS
        </h1>
        <p className="max-w-xl text-sm md:text-base">
          From Marvel classics, to must-read runs, jump start your comic reading
          with these events, intro arcs, and storylines.
        </p>
      </div>
    </div>
  );
}

export default Banner;
