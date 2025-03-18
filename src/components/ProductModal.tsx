import { Product } from "../types/product";

export default function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
      <div className="bg-[#2b2b2b] w-full rounded-t-3xl p-6 max-h-[80%] overflow-y-auto text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-400 text-2xl">
            ×
          </button>
        </div>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-green-400 text-xl font-bold mb-4">
          {product.price} ₽
        </p>
        <div className="space-y-2">
          {Object.entries(product.details).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between border-b border-gray-600 pb-1"
            >
              <span className="text-lg font-medium">{key}</span>
              <span className="text-lg">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
