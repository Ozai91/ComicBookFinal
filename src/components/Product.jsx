import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import fantastic from "../assets/fantastic2025.png";
import predator from "../assets/predator.png";
import hulk from "../assets/Hulk.png";
import cap from "../assets/captain.png";
import ironman from "../assets/ironman.png";
import thor from "../assets/thor.png";
import blackwidow from "../assets/blackwidow.png";
import hawkeye from "../assets/hawkeye.png";
import thanos from "../assets/thanos.png";
import deadpool from "../assets/deadpool.png";
import venom from "../assets/venom.png";
import wanda from "../assets/wanda.png";
import { useCart } from "../contexts/CartContext";

const Product = () => {
  const { addToCart } = useCart();
  const [clickedIndex, setClickedIndex] = useState(null); // Track which button was clicked

    const books = [
    {
      id: 1,
      cover: ironman,
      title: "Iron Man Epic Collection",
      author: "Scott Benson",
      rating: 9.5,
      price: 39.99,
    },
    {
      id: 2,
      cover: thor,
      title: "Immortal Thor (2023) #10",
      author: "Al Ewing",
      rating: 8.9,
      price: 39.99,
    },
    {
      id: 3,
      cover: cap,
      title: "Captain America: Steve Rogers (2016) #15",
      author: "Nick Spencer",
      rating: 9.8,
      price: 45.99,
    },
    {
      id: 4,
      cover: hulk,
      title: "HULK: BLOOD HUNT (2024) #1",
      author: "Phillip Kennedy Johnson",
      rating: 7.5,
      price: 35.99,
    },
    {
      id: 5,
      cover: fantastic,
      title: "Fantastic Four (2025) #1",
      author: "Ryan North",
      rating: 9.5,
      price: 39.99,
    },
    {
      id: 6,
      cover: wanda,
      title: "Scarlet Witch (2024) #1",
      author: "Steve Orlando",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 7,
      cover: blackwidow,
      title: "Black Widow (2020) #14",
      author: "Kelly Thompson",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 8,
      cover: hawkeye,
      title: "HAWKEYE BY FRACTION & AJA",
      author: "Matt Fraction",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 9,
      cover: thanos,
      title: "Thanos (2023) #1",
      author: "Christopher Cantwell",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 10,
      cover: deadpool,
      title: "DEADPOOL: THE SAGA OF WADE WILSON",
      author: "Gerry Duggan",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 11,
      cover: venom,
      title: "VENOM: THE SAGA OF EDDIE BROCK",
      author: "Peter David",
      rating: 8.5,
      price: 29.99,
    },
    {
      id: 12,
      cover: predator,
      title: "Predator: Black, White & Blood (2025) #1",
      author: "Sarah GaileyJoe, KellyEliot, Rahal",
      rating: 8.5,
      price: 29.99,
    },
  ];

  const handleAddToCart = (book, index) => {
    addToCart(book);
    setClickedIndex(index);
    setTimeout(() => setClickedIndex(null), 100); // Reset after animation
  };

  return (
    <div>
      <h1 className="px-5 mt-5 font-bold text-lg md:text-xl lg:text-2xl mx-auto text-red-600">
        NEW THIS WEEK
      </h1>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center p-5 gap-x-3 gap-y-6 md:gap-x-4 md:gap-y-7 lg:gap-x-5 lg:gap-y-8">
        {books.map((book, index) => (
          <div
            key={index}
            className="p-3 rounded-md bg-gray-00 border-2 h-full flex flex-col"
          >
            <div className="flex flex-col flex-1 cursor-pointer">
              <img
                className="rounded-t-md hover:scale-[1.02] transition-transform duration-200"
                src={book.cover}
                alt={book.title}
              />
              <h3 className="font-bold hover:text-red-500 m-1 text-sm md:text-[15px] lg:text-[17px]">
                {book.title}
              </h3>
              <h3 className="font-bold hover:text-red-400 m-1 text-sm md:text-[15px] lg:text-[17px] ">
                Author: {book.author}
              </h3>
              <p className="font-bold hover:text-red-400 m-1 text-sm md:text-[15px] lg:text-[17px]">
                Rating: {book.rating}/10
              </p>
              <p className="font-bold text-red-600 m-1 text-sm md:text-[15px] lg:text-[20px]">
                Price: {book.price}$
              </p>
              <div className="flex-1 cursor-default mb-2"></div>
              <button
                onClick={() => handleAddToCart(book, index)}
                className={`flex items-center justify-center my-2 m-auto px-7 py-2 border-2 border-red-600 rounded-md text-[13px] md:text-[15px] lg:text-[16px] mt-auto
                  transition-transform duration-200 ${
                    clickedIndex === index
                      ? "scale-110 bg-red-200 text-red-700"
                      : "hover:scale-[1.05] hover:bg-red-100"
                  }`}
              >
                <MdAddShoppingCart className="mr-1" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Product;
