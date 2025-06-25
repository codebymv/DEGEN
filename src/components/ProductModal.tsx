import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from 'lucide-react';
import { Product } from './ProductCard';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductModal = ({ product, isOpen, onClose, onAddToCart }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto degen-gradient-card backdrop-blur-md border border-pink-200/50 degen-cyber-glow">
        <DialogHeader>
          <DialogTitle className="sr-only">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-8 p-2">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-xl degen-cyber-glow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-slate-700 hover:text-pink-600 bg-slate-50 hover:bg-pink-50 px-4 py-2 rounded-full transition-all duration-300">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                </div>
              </div>
              <h1 className="text-4xl font-bold text-slate-700 hover:text-pink-600 mb-4 transition-all duration-300">{product.name}</h1>
              <p className="text-3xl font-bold degen-text-gradient mb-6">${product.price}</p>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">{product.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-slate-600">Fast shipping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-emerald-600">✓</span>
                  <span className="text-slate-600">30-day returns</span>
                </div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center space-x-6">
                <span className="font-semibold text-slate-700 text-lg">Quantity:</span>
                <div className="flex items-center border border-pink-200 rounded-lg bg-white/50 backdrop-blur-sm">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-12 w-12 text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-6 py-3 font-semibold text-lg text-slate-700">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-12 w-12 text-slate-700 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button 
                onClick={handleAddToCart}
                className="w-full degen-gradient-secondary hover:shadow-lg hover:shadow-cyan-500/25 text-white py-4 text-xl font-semibold degen-hover-lift"
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;