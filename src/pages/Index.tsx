import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import Cart, { CartItem } from '@/components/Cart';
import { Product } from '@/components/ProductCard';

// Sample product data
const sampleProducts: Product[] = [
  {
    id: 1,
    name: "T-Shirt",
    price: 29,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Apparel",
    description: "Ultra-soft premium cotton t-shirt with modern fit. Perfect for everyday wear with superior comfort and durability."
  },
  {
    id: 2,
    name: "Zip Up Hoodie",
    price: 65,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Apparel",
    description: "Cozy fleece hoodie with embroidered logo. Features kangaroo pocket and adjustable drawstring hood."
  },
  {
    id: 3,
    name: "Ceramic Mug",
    price: 18,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Accessories",
    description: "High-quality ceramic mug with heat-resistant handle. Perfect for coffee, tea, or hot chocolate."
  },
  {
    id: 4,
    name: "Canvas Tote Bag",
    price: 22,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Accessories",
    description: "Durable canvas tote bag with reinforced handles. Eco-friendly and perfect for shopping or daily use."
  },
  {
    id: 5,
    name: "Baseball Cap",
    price: 32,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Accessories",
    description: "Adjustable baseball cap with premium embroidery. Comfortable fit with curved brim for sun protection."
  },
  {
    id: 6,
    name: "Laptop Sticker Pack",
    price: 12,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Accessories",
    description: "Set of 10 high-quality vinyl stickers. Waterproof and fade-resistant, perfect for laptops and water bottles."
  }
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cartItems change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen degen-gradient-light">
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)}
        products={sampleProducts}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
      />
      
      <HeroSection />

      <ProductsSection 
        products={sampleProducts}
        onAddToCart={handleAddToCart}
        onProductClick={handleProductClick}
      />

      <Footer />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Cart */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;