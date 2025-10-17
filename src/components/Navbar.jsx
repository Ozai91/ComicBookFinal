import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const { cartItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img className="w-36" src={logo} alt="logo" />
          </Link>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-600">Home</Link>
            <Link to="/comic" className="hover:text-red-600">Comic</Link>
            <Link to="/about" className="hover:text-red-600">About</Link>
            <Link to="/contact" className="hover:text-red-600">Contact Us</Link>
          </div>

          {/* User & Cart */}
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
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu (Optional for later) */}
          <div className="md:hidden text-red-600 text-2xl">☰</div>
        </div>
      </nav>

      {/* Popup Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;
