import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from 'lucide-react';
import { Product } from './ProductCard';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const SearchModal = ({ isOpen, onClose, products, onProductClick, onAddToCart }: SearchModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filtered.slice(0, 6)); // Limit to 6 results
  }, [searchTerm, products]);

  const handleProductClick = (product: Product) => {
    onProductClick(product);
    onClose();
    setSearchTerm('');
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden degen-gradient-card backdrop-blur-md border border-pink-200/50 degen-cyber-glow">
        <DialogHeader>
          <DialogTitle className="sr-only">Search Products</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Header */}
          <div className="text-center">
            <div className="w-16 h-16 degen-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-slate-700 mb-2">Search</h2>
            <p className="text-slate-600">Find exactly what you're looking for</p>
          </div>

          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-700 h-5 w-5" />
            <Input
              placeholder="Search for products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-4 text-lg bg-white/80 backdrop-blur-sm border-pink-200/50 focus:border-pink-400 transition-all duration-300"
              autoFocus
            />
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {searchTerm.trim() === '' ? (
              <div className="text-center py-12">
                <p className="text-slate-500">Searched products will appear here</p>
              </div>
            ) : searchResults.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-500">No products found for "{searchTerm}"</p>
                <p className="text-slate-400 text-sm mt-2">Try a different search term</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-slate-600 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-100/50 hover:bg-white/70 cursor-pointer transition-all duration-300 degen-hover-lift"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800 hover:text-pink-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm text-pink-600 font-medium">{product.category}</p>
                      <p className="text-lg font-bold degen-text-gradient">${product.price}</p>
                    </div>
                    <Button
                      onClick={(e) => handleAddToCart(e, product)}
                      size="sm"
                      className="degen-gradient-secondary hover:shadow-lg hover:shadow-orange-500/25 text-white transition-all duration-300"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                ))}
                {searchResults.length === 6 && (
                  <div className="text-center py-4">
                    <p className="text-slate-500 text-sm">Showing first 6 results</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        window.location.href = `/shop?search=${encodeURIComponent(searchTerm)}`;
                      }}
                      className="mt-2 border-pink-200 text-pink-600 hover:bg-pink-50"
                    >
                      View All Results
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;