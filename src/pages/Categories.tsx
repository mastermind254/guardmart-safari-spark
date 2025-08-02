import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Badge } from '@/components/ui/badge';
import freshFruitsImg from '@/assets/fresh-fruits.jpg';
import meatPoultryImg from '@/assets/meat-poultry.jpg';
import dairyProductsImg from '@/assets/dairy-products.jpg';

const Categories = () => {
  const categories = [
    { name: 'Fresh Fruits', image: freshFruitsImg, count: 150, description: 'Organic and locally sourced fruits' },
    { name: 'Meat & Poultry', image: meatPoultryImg, count: 85, description: 'Premium quality meat and poultry' },
    { name: 'Dairy Products', image: dairyProductsImg, count: 65, description: 'Fresh dairy from local farms' },
    { name: 'Vegetables', image: freshFruitsImg, count: 200, description: 'Farm-fresh vegetables daily' },
    { name: 'Beverages', image: dairyProductsImg, count: 120, description: 'Refreshing drinks and juices' },
    { name: 'Household Items', image: meatPoultryImg, count: 300, description: 'Essential household products' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Shop by Categories</h1>
          <p className="text-lg text-muted-foreground">Explore our wide range of fresh products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`/products?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{category.name}</h3>
                  <Badge variant="secondary">{category.count} items</Badge>
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Categories;