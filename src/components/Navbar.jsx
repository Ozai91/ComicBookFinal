import React, { useState } from "react";
import Logo from "../assets/LogoMarvel.png";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 shadow-md relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img className="w-36" src={Logo} alt="Marvel Comics Logo" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/comic" className="hover:text-red-600">Comic</Link>
            <Link to="/about" className="hover:text-red-600">About</Link>
            <Link to="/contact" className="hover:text-red-600">Contact Us</Link>
          </div>

          {/* Desktop & Mobile Icons */}
          <div className="flex items-center gap-4">
            {/* Desktop User & Cart */}
            <div className="hidden md:flex gap-6 items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium hover:bg-red-700"
              >
                <HiOutlineUserCircle className="text-2xl" />
                LOG IN | SIGN UP
              </button>

              <Link to="/cart" className="relative">
                <AiOutlineShopping className="text-2xl cursor-pointer" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full px-2">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Cart */}
            <Link to="/cart" className="relative md:hidden">
              <AiOutlineShopping className="text-2xl cursor-pointer text-red-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full px-2">
                  {cartItems.length}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <div
              className="md:hidden text-red-600 text-2xl cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black text-white flex flex-col space-y-4 p-4 z-10">
            <Link to="/" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/comic" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>Comic</Link>
            <Link to="/about" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-red-600" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <button
              onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
              className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-1 font-medium hover:bg-red-700"
            >
              <HiOutlineUserCircle className="text-2xl" />
              LOG IN | SIGN UP
            </button>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
