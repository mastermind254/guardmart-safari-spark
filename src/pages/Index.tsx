import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { HeroSection } from '@/components/ui/HeroSection';
import { ProductCard } from '@/components/ui/ProductCard';
import { Carousel } from '@/components/ui/Carousel';
import { WhatsAppChatButton } from '@/components/ui/WhatsAppChatButton';
import freshFruitsImg from '@/assets/fresh-fruits.jpg';
import meatPoultryImg from '@/assets/meat-poultry.jpg';
import dairyProductsImg from '@/assets/dairy-products.jpg';

const Index = () => {
  // Sample product data
  const featuredProducts = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-hero-gradient mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">Discover our most popular items</p>
        </div>
        
        <Carousel slidesToShow={3} gap={24} autoPlay showDots>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
          {featuredProducts.map((product) => (
            <ProductCard key={`${product.id}-2`} {...product} />
          ))}
        </Carousel>
      </section>

      <Footer />
      
      {/* WhatsApp Chat Button */}
      <WhatsAppChatButton />
    </div>
  );
};

export default Index;
