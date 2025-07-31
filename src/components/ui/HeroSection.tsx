import React from 'react';
import { ArrowRight, Truck, Shield, Gift, MapPin } from 'lucide-react';
import { Button } from './button';
import { SearchBar } from './SearchBar';
import heroImage from '@/assets/hero-banner.jpg';

export const HeroSection: React.FC = () => {
  const features = [
    {
      icon: <Truck className="h-5 w-5" />,
      text: "Free delivery above KSh 2,000"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      text: "100% Fresh guarantee"
    },
    {
      icon: <Gift className="h-5 w-5" />,
      text: "Earn Safari points on every purchase"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: "Serving all Nairobi & surrounds"
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Guardmart Fresh Groceries"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                <Gift className="h-4 w-4" />
                New: Earn Safari rewards on every purchase!
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-hero-gradient">Fresh</span>
                <br />
                <span className="text-foreground">Groceries</span>
                <br />
                <span className="text-hero-gradient">Delivered</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Shop the freshest produce, premium meats, and everyday essentials. 
                Delivered to your doorstep with care and speed.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-xl">
              <SearchBar 
                placeholder="Search for fresh groceries..."
                onSearch={(query) => console.log('Search:', query)}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero px-8 py-4 text-lg">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button variant="outline" className="px-8 py-4 text-lg border-2">
                View Offers
              </Button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-sm">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                  <span className="text-muted-foreground">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Floating Elements */}
          <div className="relative hidden lg:block">
            <div className="space-y-6">
              {/* Floating Cards */}
              <div className="animate-float bg-card border border-border rounded-xl p-6 shadow-medium max-w-sm ml-auto">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Fast Delivery</h3>
                    <p className="text-sm text-muted-foreground">Within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="animate-float bg-card border border-border rounded-xl p-6 shadow-medium max-w-sm" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Gift className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Safari Points</h3>
                    <p className="text-sm text-muted-foreground">Redeem for trips</p>
                  </div>
                </div>
              </div>

              <div className="animate-float bg-card border border-border rounded-xl p-6 shadow-medium max-w-sm ml-auto" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">100% Fresh</h3>
                    <p className="text-sm text-muted-foreground">Quality guaranteed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};