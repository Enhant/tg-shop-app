"use client";

import { useState } from "react";
import { Product } from "../types/product";
import ProductModal from "./ProductModal";

const groupColors = {
  red: {
    border: "border-red-500",
    button: "bg-red-600 hover:bg-red-700",
  },
  blue: {
    border: "border-blue-500",
    button: "bg-blue-600 hover:bg-blue-700",
  },
};

export default function ProductCard({ product }: { product: Product }) {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => (c > 0 ? c - 1 : 0));

  const color = groupColors[product.group];

  return (
    <>
      <div
        className={`border-2 ${color.border} rounded-xl bg-[#1f1f1f] text-white shadow-md p-3 w-full max-w-xs flex flex-col`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-36 object-cover rounded-md"
        />
        <div className="mt-2 flex-1">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-green-400 text-lg font-bold">{product.price} ₽</p>
        </div>

        <div className="flex items-center gap-3 mt-3 justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={decrease}
              className={`${color.button} text-white text-xl px-3 py-1 rounded-full`}
            >
              −
            </button>
            <span className="text-lg font-medium min-w-[24px] text-center">
              {count}
            </span>
            <button
              onClick={increase}
              className={`${color.button} text-white text-xl px-3 py-1 rounded-full`}
            >
              +
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="text-gray-400 text-2xl"
          >
            ?
          </button>
        </div>
      </div>

      {isOpen && (
        <ProductModal product={product} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
