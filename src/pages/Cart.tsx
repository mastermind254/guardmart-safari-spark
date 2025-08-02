import React, { useState } from 'react';
import { Trash2, Plus, Minus, ShoppingBag, Truck, Clock, Gift } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import freshFruitsImg from '@/assets/fresh-fruits.jpg';
import meatPoultryImg from '@/assets/meat-poultry.jpg';
import dairyProductsImg from '@/assets/dairy-products.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Fresh Organic Avocados',
      price: 250,
      originalPrice: 300,
      image: freshFruitsImg,
      quantity: 2,
      category: 'Fresh Fruits',
      isOnSale: true,
      discount: 17,
      loyaltyPoints: 25,
      inStock: true
    },
    {
      id: '2',
      name: 'Premium Beef Tenderloin',
      price: 1800,
      image: meatPoultryImg,
      quantity: 1,
      category: 'Meat & Poultry',
      loyaltyPoints: 180,
      inStock: true
    },
    {
      id: '3',
      name: 'Fresh Whole Milk 1L',
      price: 120,
      image: dairyProductsImg,
      quantity: 3,
      category: 'Dairy Products',
      loyaltyPoints: 12,
      inStock: true
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === 'SAFARI10') {
      setIsPromoApplied(true);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalLoyaltyPoints = cartItems.reduce((sum, item) => sum + (item.loyaltyPoints * item.quantity), 0);
  const deliveryFee = subtotal >= 2000 ? 0 : 150;
  const promoDiscount = isPromoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - promoDiscount;

  const estimatedDelivery = new Date();
  estimatedDelivery.setHours(estimatedDelivery.getHours() + 2);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-md mx-auto">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet
            </p>
            <Button size="lg" asChild>
              <a href="/products">Start Shopping</a>
            </Button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <span className="text-foreground">Shopping Cart</span>
        </nav>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-foreground">Shopping Cart</h1>
          <Badge variant="outline" className="text-lg px-4 py-2">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
          </Badge>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg border border-border p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.category}</p>
                        {item.isOnSale && (
                          <Badge variant="secondary" className="mt-1">
                            {item.discount}% OFF
                          </Badge>
                        )}
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Price */}
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-primary">Ksh {item.price}</span>
                        {item.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            Ksh {item.originalPrice}
                          </span>
                        )}
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>

                    {/* Item Total & Loyalty Points */}
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-muted-foreground">
                        +{item.loyaltyPoints * item.quantity} Safari Points
                      </span>
                      <span className="font-semibold text-foreground">
                        Ksh {item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Promo Code */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Promo Code</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button onClick={applyPromoCode} disabled={isPromoApplied}>
                  {isPromoApplied ? 'Applied' : 'Apply'}
                </Button>
              </div>
              {isPromoApplied && (
                <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                  <Gift className="h-4 w-4" />
                  SAFARI10 applied - 10% discount!
                </p>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Delivery Estimate */}
            <div className="bg-gradient-primary rounded-lg p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="h-5 w-5" />
                <h3 className="font-semibold">Estimated Delivery</h3>
              </div>
              <p className="text-white/90">
                {estimatedDelivery.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} today
              </p>
              <p className="text-sm text-white/80 mt-1">
                Order within the next 30 minutes
              </p>
            </div>

            {/* Order Summary */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">Ksh {subtotal}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery Fee</span>
                  <span className="text-foreground">
                    {deliveryFee === 0 ? 'FREE' : `Ksh ${deliveryFee}`}
                  </span>
                </div>
                
                {isPromoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Promo Discount</span>
                    <span className="text-green-600">-Ksh {promoDiscount}</span>
                  </div>
                )}

                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-foreground">Total</span>
                  <span className="text-primary">Ksh {total}</span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Gift className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    You'll earn {totalLoyaltyPoints} Safari Points
                  </span>
                </div>
              </div>

              <Button size="lg" className="w-full mt-6" asChild>
                <a href="/checkout">
                  Proceed to Checkout
                </a>
              </Button>

              {subtotal < 2000 && (
                <p className="text-sm text-center text-muted-foreground mt-4">
                  Add Ksh {2000 - subtotal} more for free delivery
                </p>
              )}
            </div>

            {/* Delivery Info */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="flex items-center gap-3 mb-4">
                <Truck className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Delivery Information</h3>
              </div>
              
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Free delivery on orders over Ksh 2,000</p>
                <p>• Same-day delivery available</p>
                <p>• Fresh products guarantee</p>
                <p>• Contact-free delivery option</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;