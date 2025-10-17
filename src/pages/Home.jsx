import React from "react";
import Banner from "../components/Banner";
import spideMan from "../assets/NoWayHome.png";
import IronMan from "../assets/IronExtremis.png";
import DoctorStrange from "../assets/DRtheOath.png";
import Endgame from "../assets/EndGame.png";

const Home = () => {
  return (
    <div className="bg-gray-950 text-white">
      {/* Hero / Banner Section */}
      <Banner />

      {/* Featured Comics */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4">
          Featured Comics
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            {
              title: "Spider-Man: No Way Home",
              img: spideMan,
            },
            {
              title: "Iron Man: Extremis",
              img: IronMan,
            },
            {
              title: "Doctor Strange: The Oath",
              img: DoctorStrange,
            },
            {
              title: "Avengers: Endgame Prelude",
              img: Endgame,
            },
          ].map((comic, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden hover:scale-105 transition-transform shadow-lg"
            >
              <img
                src={comic.img}
                alt={comic.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{comic.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-900 py-16 px-6 md:px-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 border-l-4 border-red-600 pl-4">
          Explore by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Heroes", "Villains", "Events", "Series"].map((cat, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-40 rounded-xl bg-gradient-to-br from-red-700 to-black hover:from-red-600 hover:to-gray-800 transition"
            >
              <span className="text-xl font-semibold">{cat}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 text-center bg-gradient-to-b from-gray-900 to-black px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Stay Updated with Marvel
        </h2>
        <p className="text-gray-400 mb-6">
          Subscribe to get the latest news, offers, and free comics.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded text-black w-full sm:w-auto flex-grow"
          />
          <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded font-semibold">
            Subscribe
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Marvel Universe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
