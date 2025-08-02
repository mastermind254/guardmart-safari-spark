import React, { useState } from 'react';
import { Filter, Grid, List, SlidersHorizontal, Star } from 'lucide-react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { ProductCard } from '@/components/ui/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import freshFruitsImg from '@/assets/fresh-fruits.jpg';
import meatPoultryImg from '@/assets/meat-poultry.jpg';
import dairyProductsImg from '@/assets/dairy-products.jpg';

const Products = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Sample products data
  const products = [
    {
      id: '1',
      name: 'Fresh Organic Avocados',
      price: 250,
      originalPrice: 300,
      image: freshFruitsImg,
      rating: 4.8,
      reviewCount: 127,
      category: 'Fresh Fruits',
      isOnSale: true,
      discount: 17,
      loyaltyPoints: 25,
      badges: ['Organic', 'Local']
    },
    {
      id: '2', 
      name: 'Premium Beef Tenderloin',
      price: 1800,
      image: meatPoultryImg,
      rating: 4.9,
      reviewCount: 89,
      category: 'Meat & Poultry',
      loyaltyPoints: 180,
      badges: ['Premium', 'Fresh']
    },
    {
      id: '3',
      name: 'Fresh Whole Milk 1L',
      price: 120,
      image: dairyProductsImg,
      rating: 4.7,
      reviewCount: 203,
      category: 'Dairy Products',
      loyaltyPoints: 12,
      badges: ['Farm Fresh']
    },
    {
      id: '4',
      name: 'Organic Bananas',
      price: 180,
      originalPrice: 220,
      image: freshFruitsImg,
      rating: 4.6,
      reviewCount: 156,
      category: 'Fresh Fruits',
      isOnSale: true,
      discount: 18,
      loyaltyPoints: 18,
      badges: ['Organic']
    },
    {
      id: '5',
      name: 'Free Range Chicken',
      price: 850,
      image: meatPoultryImg,
      rating: 4.8,
      reviewCount: 94,
      category: 'Meat & Poultry',
      loyaltyPoints: 85,
      badges: ['Free Range', 'Local']
    },
    {
      id: '6',
      name: 'Greek Yogurt 500g',
      price: 320,
      image: dairyProductsImg,
      rating: 4.5,
      reviewCount: 78,
      category: 'Dairy Products',
      loyaltyPoints: 32,
      badges: ['Protein Rich']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Categories', count: products.length },
    { id: 'fruits', name: 'Fresh Fruits', count: 2 },
    { id: 'meat', name: 'Meat & Poultry', count: 2 },
    { id: 'dairy', name: 'Dairy Products', count: 2 },
    { id: 'vegetables', name: 'Vegetables', count: 0 },
    { id: 'beverages', name: 'Beverages', count: 0 }
  ];

  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <a href="/" className="hover:text-primary">Home</a>
          <span>/</span>
          <span className="text-foreground">Products</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">All Products</h1>
            <p className="text-muted-foreground">Discover fresh, quality products delivered to your door</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex rounded-lg border border-border bg-muted/20">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-64 space-y-6">
            {/* Categories */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <span>{category.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" />
                Price Range
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Ksh {priceRange[0]}</span>
                  <span className="text-muted-foreground">Ksh {priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-4 w-4" />
                Rating
              </h3>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <button
                    key={rating}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-muted transition-colors flex items-center gap-2"
                  >
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">& up</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {products.length} of {products.length} products
              </p>
            </div>

            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  {...product}
                  className={viewMode === 'list' ? 'flex-row' : ''}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="px-8">
                Load More Products
              </Button>
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;