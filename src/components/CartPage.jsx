import React from "react";
import { useCart } from "../contexts/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, addToCart, decreaseQty, removeFromCart, clearCart } =
    useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold text-center mb-8">Shopping Cart</h2>

      <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
        {/* Left: Cart Items */}
        <div className="flex-1 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center text-3xl">
              Your cart is empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg shadow-sm p-4 gap-4"
              >
                {/* Image + Title + Quantity */}
                <div className="flex items-start gap-4">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex flex-col">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-sm">
                      ${item.price.toFixed(2)} each
                    </p>

                    {/* Quantity buttons */}
                    <div className="flex items-center gap-2 mt-2 w-32">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        aria-label="Decrease quantity"
                      >
                        <AiOutlineMinus />
                      </button>
                      <span className="font-semibold text-lg w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="p-2 bg-gray-200 rounded hover:bg-gray-300"
                        aria-label="Increase quantity"
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Total price */}
                <p className="font-bold text-lg self-start sm:self-center">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Delete button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-600 hover:text-red-800 self-start sm:self-center"
                  aria-label="Remove item"
                >
                  <FaTrashAlt />
                </button>
              </div>
            ))
          )}

          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md mt-4"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Tax (5%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <ul className="text-sm text-gray-500 space-y-1 mb-4">
              <li>📦 Free shipping on orders over $100</li>
              <li>⏱️ Delivery in 3-5 business days</li>
              <li>🔒 100% secure checkout</li>
            </ul>

            <Link
              to="/payment"
              className="w-full block text-center bg-black text-white py-2 rounded-md hover:opacity-90 mb-2"
            >
              Proceed to Checkout →
            </Link>
            <Link
              to="/comic"
              className="w-full block text-center border py-2 rounded-md hover:bg-gray-100"
            >
              ← Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
