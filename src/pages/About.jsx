import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <section className="relative bg-gray-950 text-white py-24 px-6 md:px-20 overflow-hidden">
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-red-600 mb-6">
              About Marvel Comics
            </h1>
            <p className="text-lg leading-relaxed text-gray-300 mb-5">
              Marvel Comics, originally founded in 1939 as Timely Publications,
              has become a global storytelling powerhouse. With a roster that
              includes Spider-Man, Iron Man, Captain America, and the Avengers,
              Marvel has transformed the comic industry and shaped generations.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-5">
              Known for its rich multiverses and epic crossovers, Marvel
              combines mythic heroism with human emotion, exploring themes of
              responsibility, justice, and identity through comics, films, and
              streaming series.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              As a subsidiary of The Walt Disney Company, Marvel continues its
              legacy through the Marvel Cinematic Universe (MCU), cutting-edge
              animation, and immersive experiences worldwide.
            </p>
            <a
              href="https://www.marvel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 shadow-lg"
            >
              Visit Official Marvel Site
            </a>
          </div>

          {/* Image or Stat Section */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h2 className="text-3xl font-bold text-red-500">1939</h2>
                <p className="text-sm text-gray-400">Founded</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-red-500">8000+</h2>
                <p className="text-sm text-gray-400">Characters</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-red-500">30+</h2>
                <p className="text-sm text-gray-400">MCU Films</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-red-500">100M+</h2>
                <p className="text-sm text-gray-400">Global Fans</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
