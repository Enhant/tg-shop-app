'use client';

import React, { useState, useMemo } from 'react';
import { FaQuestionCircle, FaMinus, FaPlus, FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import ProductModal from './ProductModal';
import Image from 'next/image';
import { Header } from './Header';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  details: { [key: string]: string };
  group: 'red' | 'blue';
  dependsOn?: number[];
};

type Props = {
  products: Product[];
};

export default function ProductList({ products }: Props) {
  const [quantities, setQuantities] = useState<{ [productId: number]: number }>({});
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const totalPrice = useMemo(() => {
    return products.reduce((sum, p) => {
      const qty = quantities[p.id] || 0;
      return sum + p.price * qty;
    }, 0);
  }, [products, quantities]);

  const getMaxAvailable = (product: Product): number => {
    if (!product.dependsOn) return 99;

    return product.dependsOn.reduce((sum, depId) => {
      return sum + (quantities[depId] || 0);
    }, 0);
  };

  const isAvailable = (product: Product): boolean => {
    if (!product.dependsOn) return true;
    return getMaxAvailable(product) > 0;
  };

  const handleChange = (productId: number, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 0;
      const newQty = Math.max(0, current + delta);
      return { ...prev, [productId]: newQty };
    });
  };

  return (
    <div className="min-h-screen bg-[#1c1c1e] text-white px-4 py-2">
      <Header totalPrice={totalPrice} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {products.map((product) => {
          const groupColor = product.group === 'red' ? 'border-red-500' : 'border-blue-500';
          const qty = quantities[product.id] || 0;
          const maxQty = getMaxAvailable(product);
          const available = isAvailable(product);

          return (
            <div
              key={product.id}
              className={`bg-[#2c2c2e] p-4 rounded-xl border-2 ${groupColor} flex flex-col`}
            >
              <div className="relative w-full h-40 mb-3 rounded-lg overflow-hidden bg-white">
                <Image src={product.image} alt={product.name} fill objectFit="cover" />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <FaQuestionCircle
                  className="text-gray-300 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                />
              </div>
              <div className="text-green-400 text-lg font-bold mb-3">{product.price} ₽</div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gray-700 px-2 py-1 rounded text-lg"
                  onClick={() => handleChange(product.id, -1)}
                  disabled={qty === 0}
                >
                  <FaMinus />
                </button>
                <span className="text-lg font-semibold">{qty}</span>
                <button
                  className={`px-2 py-1 rounded text-lg ${
                    product.group === 'red' ? 'bg-red-600' : 'bg-blue-600'
                  } ${qty >= maxQty || !available ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleChange(product.id, 1)}
                  disabled={qty >= maxQty || !available}
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}
