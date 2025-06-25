import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart, onProductClick }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl degen-hover-lift border-0 degen-gradient-card backdrop-blur-sm degen-cyber-glow">
      <div className="aspect-square overflow-hidden relative" onClick={() => onProductClick(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <CardContent className="p-6">
        <div onClick={() => onProductClick(product)}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700 hover:text-pink-600 bg-slate-50 hover:bg-pink-50 px-3 py-1 rounded-full transition-all duration-300">
              {product.category}
            </span>
            <span className="text-2xl font-bold degen-text-gradient">
              ${product.price}
            </span>
          </div>
          <h3 className="font-bold text-xl text-slate-700 hover:text-pink-600 mb-3 transition-all duration-300">
            {product.name}
          </h3>
          {/* <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
            {product.description}
          </p> */}
        </div>
        <Button 
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full degen-gradient-secondary hover:shadow-lg hover:shadow-cyan-500/25 text-white transition-all duration-300 font-semibold py-3 degen-hover-lift"
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;