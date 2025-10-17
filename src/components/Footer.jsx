import React from "react";
import Mlogo from "../assets/Mlogo.png";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-start justify-items-center">
            {/* Logo and Name */}
            <div className="flex ">
              <img className="w-35" src={Mlogo} alt="logo" />
              <div className="flex flex-col justify-center ml-3">
                <Link to="/" className="hover:text-red-600 mb-3">
                  Home
                </Link>
                <Link to="/comic" className="hover:text-red-600 mb-3">
                  Comic
                </Link>
                <Link to="/about" className="hover:text-red-600 mb-3">
                  About
                </Link>
                <Link to="/contact" className="hover:text-red-600 mb-3">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:pr-6">
              <h2 className="text-[10px] md:text-sm lg:text-base text-lg font-bold text-end mb-5 tracking-wider">
                FOLLOW MARVEL
              </h2>
              <div className="text-[10px] md:text-base lg:text-[19px] justify-end flex gap-3 text-2xl cursor-pointer">
                <FaFacebookF />
                <FaXTwitter />
                <FaInstagram />
                <FaYoutube />
                <FaTiktok />
              </div>
            </div>
            {/* More Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">More</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>
                  <a href="#" className="hover:text-red-600">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-red-600">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 border-t pt-4 text-sm text-center text-gray-500">
            © {new Date().getFullYear()} ComicBook. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
