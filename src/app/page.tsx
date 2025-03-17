import ProductList from '@/components/ProductList';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-900">
      <h1 className="text-xl font-bold p-4 text-gray-300">Каталог товаров</h1>
      <ProductList />
    </main>
  );
}
