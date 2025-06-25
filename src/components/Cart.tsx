import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Product } from './ProductCard';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg degen-gradient-card backdrop-blur-md border-l border-pink-200/50">
        <SheetHeader className="border-b border-pink-200/50 pb-4">
          <SheetTitle className="text-2xl font-bold degen-text-gradient">
            My Cart ({cartItems.length})
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto py-6">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="mb-6">
                  <ShoppingCart className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                </div>
                <p className="text-slate-500 text-lg mb-2">Your cart is empty</p>
                <p className="text-slate-400 text-sm">Add some awesome products to get started!</p>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 rounded-lg bg-white/50 backdrop-blur-sm border border-pink-100/50 degen-cyber-glow">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-pink-600 font-medium">{item.category}</p>
                      <p className="font-bold text-lg degen-text-gradient">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-pink-200 hover:bg-pink-50"
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-pink-200 hover:bg-pink-50"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className="border-t border-pink-200/50 pt-6 space-y-4">
              <Separator className="bg-pink-200/50" />
              <div className="flex justify-between items-center text-xl font-bold">
                <span className="text-slate-700">Total:</span>
                <span className="degen-text-gradient text-2xl">${totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full degen-gradient-secondary hover:shadow-lg hover:shadow-orange-500/25 text-white py-4 text-lg font-semibold degen-hover-lift">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                onClick={onClose}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;