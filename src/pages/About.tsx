import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Truck, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Happy Customers', value: '50,000+', icon: Users },
    { label: 'Products Available', value: '10,000+', icon: Heart },
    { label: 'Daily Deliveries', value: '1,500+', icon: Truck },
    { label: 'Years of Service', value: '5+', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Guardmart</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenya's premier online supermarket dedicated to delivering fresh, quality products with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, Guardmart began with a simple mission: to make fresh, quality groceries 
                accessible to every Kenyan household through the convenience of online shopping.
              </p>
              <p>
                We partner directly with local farmers and trusted suppliers to ensure that every product 
                meets our high standards for freshness and quality. Our commitment extends beyond just 
                delivering groceries – we're building a community that values sustainability, local sourcing, 
                and customer satisfaction.
              </p>
              <p>
                Through our unique Safari Loyalty Program, powered by Solvo Tours, we reward our customers 
                with unforgettable experiences that showcase the beauty of Kenya while supporting local tourism.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Quality First</h3>
                  <p className="text-sm text-muted-foreground">
                    Every product is carefully selected and quality-checked before reaching your doorstep.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Community Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Supporting local farmers and suppliers while serving our community with dedication.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Trust & Reliability</h3>
                  <p className="text-sm text-muted-foreground">
                    Building lasting relationships through consistent service and transparent practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-primary rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join the Guardmart Family</h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Experience the convenience of fresh grocery delivery and start earning Safari points 
            towards your next Kenyan adventure.
          </p>
          <Badge className="bg-white text-primary px-6 py-2 text-lg">
            Download Our App Today
          </Badge>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;