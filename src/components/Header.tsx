import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import SearchModal from './SearchModal';
import UserModal from './UserModal';
import { Product } from './ProductCard';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  products?: Product[];
  onProductClick?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
}

const Header = ({ cartItemCount, onCartClick, products = [], onProductClick, onAddToCart }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const handleLogoClick = () => {
    window.location.href = '/';
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleUserClick = () => {
    setIsUserModalOpen(true);
  };

  const handleProductClick = (product: Product) => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={handleLogoClick} 
                className="block px-3 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-pink-200/50 shadow-sm hover:shadow-md transition-all duration-300 degen-hover-lift"
              >
                <img 
                  src="/7dee3161-37c4-443b-aaa6-9469befd5132.png" 
                  alt="DEGEN Logo" 
                  className="h-8 w-auto rounded-md"
                  style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(320deg) brightness(104%) contrast(97%)' }}
                />
              </button>
            </div>

            {/* Navigation - Desktop - Centered */}
            <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
              <a href="/" className="text-slate-700 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 degen-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/shop" className="text-slate-700 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 degen-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/contact" className="text-slate-700 hover:text-pink-600 font-medium transition-all duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 degen-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300"
                onClick={handleSearchClick}
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300"
                onClick={onCartClick}
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 degen-gradient-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium degen-cyber-glow">
                    {cartItemCount}
                  </span>
                )}
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hidden sm:flex hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300"
                onClick={handleUserClick}
              >
                <User className="h-5 w-5" />
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="md:hidden hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] sm:w-[350px] p-0"
                >
                  <SheetHeader>
                    <SheetDescription className="sr-only">
                      Main navigation menu with links to different sections of the website
                    </SheetDescription>
                  </SheetHeader>
                  <div className="p-4 border-b border-pink-100 flex items-center justify-between">
                    <img 
                      src="/7dee3161-37c4-443b-aaa6-9469befd5132.png" 
                      alt="DEGEN Logo" 
                      className="h-8 w-auto rounded-md"
                      style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(320deg) brightness(104%) contrast(97%)' }}
                    />
                    <SheetTitle className="text-lg font-semibold text-slate-800 m-0">Menu</SheetTitle>
                    <div className="w-8"></div> {/* Spacer for alignment */}
                  </div>
                      <div className="py-4 px-6 flex flex-col space-y-4">
                        <a 
                          href="/" 
                          className="text-slate-700 hover:text-pink-600 font-medium py-2 transition-colors duration-300 border-b border-pink-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Home
                        </a>
                        <a 
                          href="/shop" 
                          className="text-slate-700 hover:text-pink-600 font-medium py-2 transition-colors duration-300 border-b border-pink-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Shop
                        </a>
                        <a 
                          href="/contact" 
                          className="text-slate-700 hover:text-pink-600 font-medium py-2 transition-colors duration-300 border-b border-pink-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Contact
                        </a>
                        <div className="flex space-x-4 pt-4">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300 border-pink-100"
                            onClick={() => {
                              setIsMenuOpen(false);
                              handleSearchClick();
                            }}
                          >
                            <Search className="h-4 w-4 mr-2" />
                            Search
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm" 
                            className="flex-1 hover:bg-pink-50 text-slate-700 hover:text-pink-600 transition-all duration-300 border-pink-100"
                            onClick={() => {
                              setIsMenuOpen(false);
                              handleUserClick();
                            }}
                          >
                            <User className="h-4 w-4 mr-2" />
                            Account
                          </Button>
                        </div>
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
      </header>

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={products}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
      />

      {/* User Modal */}
      <UserModal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />
    </>
  );
};

export default Header;