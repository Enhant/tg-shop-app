'use client';

import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  group: 'red' | 'blue';
  details: { [key: string]: string };
  dependsOn?: number[]; // ID зависимых товаров
  maxBySumOf?: number[]; // ID товаров, суммы которых дают максимум
};

const products: Product[] = [
  {
    id: 1,
    name: 'Товар 1',
    price: 1500,
    image: '/product1.png',
    group: 'red',
    details: { Описание: 'Первый товар', Особенность: 'Без сахара' },
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 2400,
    image: '/product2.png',
    group: 'red',
    details: { Описание: 'Второй товар', Особенность: 'Со вкусом малины' },
    dependsOn: [1],
  },
  {
    id: 3,
    name: 'Товар 3',
    price: 1000,
    image: '/product3.png',
    group: 'blue',
    details: { Описание: 'Третий товар', Особенность: 'Мягкий' },
  },
  {
    id: 4,
    name: 'Товар 4',
    price: 1300,
    image: '/product4.png',
    group: 'blue',
    details: { Описание: 'Четвертый товар', Особенность: 'Хрустящий' },
  },
  {
    id: 5,
    name: 'Товар 5',
    price: 3000,
    image: '/product5.png',
    group: 'blue',
    details: { Описание: 'Пятый товар', Особенность: 'Ультра-версия' },
    dependsOn: [3, 4],
    maxBySumOf: [3, 4],
  },
];

export default function ProductList() {
  const [quantities, setQuantities] = useState<Record<number, number>>({});

  const getTotalOf = (ids: number[]) =>
    ids.reduce((sum, id) => sum + (quantities[id] || 0), 0);

  const handleChange = (id: number, delta: number, max?: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next < 0) return prev;
      if (typeof max === 'number' && next > max) return prev;
      return { ...prev, [id]: next };
    });
  };

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.map((product) => {
        const quantity = quantities[product.id] || 0;

        let max: number | undefined = undefined;
        let disabled = false;

        if (product.dependsOn) {
          const total = getTotalOf(product.dependsOn);
          max = product.maxBySumOf ? total : total;
          if (total === 0) disabled = true;
        }

        return (
          <div
            key={product.id}
            className={`rounded-2xl p-4 shadow-md border-4 ${
              product.group === 'red'
                ? 'border-red-500'
                : 'border-blue-500'
            } bg-gray-800 text-white`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-contain mb-3"
            />
            <h2 className="text-xl font-bold mb-1">{product.name}</h2>
            <div className="text-green-400 font-semibold text-lg mb-2">
              {product.price} ₽
            </div>

            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => handleChange(product.id, -1, max)}
                disabled={disabled}
                className={`p-2 rounded-lg ${
                  product.group === 'red'
                    ? 'bg-red-600'
                    : 'bg-blue-600'
                } disabled:opacity-40`}
              >
                <FaMinus />
              </button>

              <span className="text-lg min-w-[2ch] text-center">
                {quantity}
              </span>

              <button
                onClick={() => handleChange(product.id, 1, max)}
                disabled={disabled}
                className={`p-2 rounded-lg ${
                  product.group === 'red'
                    ? 'bg-red-600'
                    : 'bg-blue-600'
                } disabled:opacity-40`}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
