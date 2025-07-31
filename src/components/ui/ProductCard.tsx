import React from 'react';
import { Heart, ShoppingCart, Star, Eye, Gift } from 'lucide-react';
import { Button } from './button';
import { Badge } from './badge';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isOnSale?: boolean;
  discount?: number;
  loyaltyPoints?: number;
  isInStock?: boolean;
  badges?: string[];
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  originalPrice,
  image,
  rating,
  reviewCount,
  category,
  isOnSale = false,
  discount,
  loyaltyPoints = 0,
  isInStock = true,
  badges = [],
  className = ""
}) => {
  const formatPrice = (amount: number) => `KSh ${amount.toLocaleString()}`;

  return (
    <div className={`card-product group overflow-hidden ${className}`}>
      {/* Product Image Container */}
      <div className="relative overflow-hidden bg-muted aspect-square">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {isOnSale && discount && (
            <Badge className="bg-destructive text-destructive-foreground">
              -{discount}%
            </Badge>
          )}
          {badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {badge}
            </Badge>
          ))}
          {!isInStock && (
            <Badge variant="destructive">
              Out of Stock
            </Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0 rounded-full shadow-md">
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Loyalty Points */}
        {loyaltyPoints > 0 && (
          <div className="absolute bottom-3 left-3">
            <div className="flex items-center gap-1 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              <Gift className="h-3 w-3" />
              +{loyaltyPoints} pts
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        {/* Category */}
        <div className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </div>

        {/* Product Name */}
        <h3 className="font-medium text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({reviewCount} reviews)
          </span>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full btn-primary group-hover:btn-hero transition-all duration-300"
          disabled={!isInStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isInStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};