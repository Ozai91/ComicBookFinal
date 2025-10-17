import React from "react";
import Mlogo from "../assets/Mlogo.png";
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">
          {/* Logo and Navigation */}
          <div className="flex flex-col sm:items-center md:items-start">
            <div className="flex items-center mb-4">
              <img className="w-24 sm:w-20" src={Mlogo} alt="logo" />
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2 text-sm sm:text-xs">
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>
              <Link to="/comic" className="hover:text-red-600">
                Comic
              </Link>
              <Link to="/about" className="hover:text-red-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-red-600">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h2 className="text-sm sm:text-xs md:text-base font-bold mb-4 tracking-wider">
              FOLLOW MARVEL
            </h2>
            <div className="flex gap-4 text-lg sm:text-base md:text-2xl cursor-pointer">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
              <FaYoutube />
              <FaTiktok />
            </div>
          </div>

          {/* More Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-3">More</h3>
            <ul className="space-y-2 text-sm sm:text-xs text-gray-400">
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
  );
};

export default Footer;
