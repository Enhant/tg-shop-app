export type ProductGroup = 'red' | 'blue';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  group: ProductGroup;
  details: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Красный товар 1',
    price: 1500,
    image: '/img/red1.png',
    group: 'red',
    details: {
      Материал: 'Хлопок',
      Размер: 'M',
      Производитель: 'Россия',
    },
  },
  {
    id: 2,
    name: 'Красный товар 2',
    price: 2400,
    image: '/img/red2.png',
    group: 'red',
    details: {
      Материал: 'Шерсть',
      Размер: 'L',
      Производитель: 'Россия',
    },
  },
  {
    id: 3,
    name: 'Синий товар 3',
    price: 1700,
    image: '/img/blue1.png',
    group: 'blue',
    details: {
      Материал: 'Полиэстер',
      Размер: 'S',
      Производитель: 'Китай',
    },
  },
  {
    id: 4,
    name: 'Синий товар 4',
    price: 3100,
    image: '/img/blue2.png',
    group: 'blue',
    details: {
      Материал: 'Нейлон',
      Размер: 'M',
      Производитель: 'Германия',
    },
  },
  {
    id: 5,
    name: 'Синий товар 5',
    price: 2000,
    image: '/img/blue3.png',
    group: 'blue',
    details: {
      Материал: 'Лён',
      Размер: 'XL',
      Производитель: 'Италия',
    },
  },
];
