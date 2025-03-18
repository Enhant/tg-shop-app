import ProductList from '@/components/ProductList';
import { Product, products } from '@/types/product';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-900">      
      <ProductList products={products as never as Product[]} />
    </main>
  );
}
