"use client";

import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

type Props = {
  totalPrice: number;
};

export function Header({ totalPrice }: Props) {
  return (
    <div className="relative py-4">
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
        <div className="text-white text-xl font-semibold ml-8">{totalPrice}₽</div>
        <FaShoppingCart className="text-4xl text-white" />
      </div>

      <h1 className="text-center text-xl font-bold text-white">Магазин</h1>
    </div>
  );
}
