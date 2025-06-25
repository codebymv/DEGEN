import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface ProductsSectionProps {
  products: Product[];
  onAddToCart: (product: Product, quantity?: number) => void;
  onProductClick: (product: Product) => void;
}

const ProductsSection = ({ products, onAddToCart, onProductClick }: ProductsSectionProps) => {
  return (
    <section id="products" className="py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700">
            Featured Products
          </h2>
          <div className="w-24 h-1 degen-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onProductClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;