export type ProductGroup = 'red' | 'blue';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  group: ProductGroup;
  details: { [key: string]: string };
  dependsOn?: number[];
}

export const products = [
  {
    id: 1,
    name: 'Продукт 1',
    price: 150,
    image: '/images/p1.jpg',
    group: 'red',
    details: {
      'Описание': 'Базовый продукт 1',
      'Характеристика': 'Важно купить первым'
    }
  },
  {
    id: 2,
    name: 'Продукт 2',
    price: 200,
    image: '/images/p2.jpg',
    group: 'red',
    dependsOn: [1],
    details: {
      'Описание': 'Доступен только после покупки Продукта 1',
      'Доп. опция': 'Привязан к первому товару'
    }
  },
  {
    id: 3,
    name: 'Продукт 3',
    price: 180,
    image: '/images/p3.jpg',
    group: 'blue',
    details: {
      'Описание': 'Один из двух необходимых для Продукта 5',
      'Важность': 'Средняя'
    }
  },
  {
    id: 4,
    name: 'Продукт 4',
    price: 160,
    image: '/images/p4.jpg',
    group: 'blue',
    details: {
      'Описание': 'Альтернатива Продукту 3 для активации Продукта 5',
      'Тип': 'Синий базовый'
    }
  },
  {
    id: 5,
    name: 'Продукт 5',
    price: 250,
    image: '/images/p5.jpg',
    group: 'blue',
    dependsOn: [3, 4],
    details: {
      'Описание': 'Доступен после покупки Продукта 3 и/или 4',
      'Условие': 'Количество ограничено суммой купленных 3 и 4'
    }
  }
];
