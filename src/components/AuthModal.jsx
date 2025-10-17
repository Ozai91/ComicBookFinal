import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {/* Background Overlay (Blur + Dim) */}
      <Motion.div
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Black Form Box */}
        <Motion.div
          className="bg-[#111] w-11/12 sm:w-[420px] rounded-2xl p-6 shadow-2xl relative border border-gray-800"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <AiOutlineClose size={20} />
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-white mb-2">
            {isLogin ? "Login to Your Account" : "Create Your Account"}
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">
            {isLogin
              ? "Sign in to continue to your account"
              : "Fill in the details to sign up"}
          </p>

          {/* Form */}
          <form className="flex flex-col space-y-4">
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className="bg-[#222] text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
            <input
              type="email"
              placeholder="you@example.com"
              className="bg-[#222] text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="bg-[#222] text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {isLogin && (
              <div className="flex justify-between text-sm text-gray-400">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-blue-600" />
                  Remember me
                </label>
                <button className="hover:text-blue-400">
                  Forgot password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Switch between Login/Signup */}
          <p className="text-center text-sm text-gray-400 mt-4">
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-500 hover:underline font-semibold"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </Motion.div>
      </Motion.div>
    </AnimatePresence>
  );
};

export default AuthModal;
