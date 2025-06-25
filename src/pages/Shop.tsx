import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import Cart, { CartItem } from '@/components/Cart';
import { Product } from '@/components/ProductCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, Grid, List } from 'lucide-react';

// Extended product catalog for the shop
const allProducts: Product[] = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Apparel",
    description: "Ultra-soft premium cotton t-shirt with modern fit. Perfect for everyday wear with superior comfort and durability."
  },
  {
    id: 2,
    name: "Logo Hoodie",
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
    category: "Stickers",
    description: "Set of 10 high-quality vinyl stickers. Waterproof and fade-resistant, perfect for laptops and water bottles."
  },
  {
    id: 7,
    name: "Zip-Up Hoodie",
    price: 75,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Apparel",
    description: "Premium zip-up hoodie with soft fleece lining. Perfect for layering with modern streetwear aesthetic."
  },
  {
    id: 8,
    name: "Wireless Earbuds",
    price: 89,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Tech",
    description: "High-quality wireless earbuds with noise cancellation. Crystal clear audio and 24-hour battery life."
  },
  {
    id: 9,
    name: "Phone Case",
    price: 25,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Tech",
    description: "Durable phone case with shock absorption. Compatible with wireless charging and multiple phone models."
  },
  {
    id: 10,
    name: "Crew Neck Sweatshirt",
    price: 55,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Apparel",
    description: "Classic crew neck sweatshirt with premium cotton blend. Comfortable fit with ribbed cuffs and hem."
  },
  {
    id: 11,
    name: "Water Bottle",
    price: 28,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Accessories",
    description: "Insulated stainless steel water bottle. Keeps drinks cold for 24 hours or hot for 12 hours."
  },
  {
    id: 12,
    name: "Vinyl Sticker Set",
    price: 15,
    image: "/1fb5afa0-975f-4ce8-94ee-77672da9dbc9.png",
    category: "Stickers",
    description: "Premium vinyl sticker collection with holographic finish. Weather-resistant and fade-proof design."
  }
];

const ProductCard = ({ product, onAddToCart, onProductClick, viewMode }: {
  product: Product;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
  viewMode: 'grid' | 'list';
}) => {
  if (viewMode === 'list') {
    return (
      <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl degen-hover-lift border-0 degen-gradient-card backdrop-blur-sm degen-cyber-glow">
        <CardContent className="p-6">
          <div className="flex items-center space-x-6" onClick={() => onProductClick(product)}>
            <div className="w-24 h-24 overflow-hidden rounded-lg flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700 hover:text-pink-600 bg-slate-50 hover:bg-pink-50 px-3 py-1 rounded-full transition-all duration-300">
                  {product.category}
                </span>
                <span className="text-xl font-bold degen-text-gradient">
                  ${product.price}
                </span>
              </div>
              <h3 className="font-bold text-lg text-slate-700 hover:text-pink-600 mb-2 transition-all duration-300">
                {product.name}
              </h3>
              {/* <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                {product.description}
              </p> */}
            </div>
            <div className="flex-shrink-0">
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                className="degen-gradient-secondary hover:shadow-lg hover:shadow-cyan-500/25 text-white transition-all duration-300 font-semibold px-6 degen-hover-lift"
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

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

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
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

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allProducts.map(product => product.category)))];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen degen-gradient-light">
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)}
        products={allProducts}
        onProductClick={handleProductClick}
        onAddToCart={handleAddToCart}
      />
      
      {/* Shop Header */}


      {/* Filters and Search */}
      <section className="py-8 bg-white/50 backdrop-blur-sm border-b border-pink-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-700 h-5 w-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 backdrop-blur-sm border-pink-200/50 focus:border-pink-400"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm border-pink-200/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40 bg-white/80 backdrop-blur-sm border-pink-200/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-pink-200/50 rounded-lg p-1">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'degen-gradient-secondary text-white' : ''}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'degen-gradient-secondary text-white' : ''}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 text-slate-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>
        </div>
      </section>

              <div className="text-center mb-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 mt-6 text-slate-700">
            Our Stuff
          </h2>
          <div className="w-24 h-1 degen-gradient-secondary mx-auto mt-6 rounded-full"></div>
        </div>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-700 mb-2">No products found</h3>
              <p className="text-slate-500">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
              : "space-y-4"
            }>
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onProductClick={handleProductClick}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </section>

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

export default Shop;