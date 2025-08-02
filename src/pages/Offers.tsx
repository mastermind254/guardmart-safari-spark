import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Gift, Percent } from 'lucide-react';
import freshFruitsImg from '@/assets/fresh-fruits.jpg';

const Offers = () => {
  const offers = [
    {
      title: 'Weekend Fresh Sale',
      description: 'Get 25% off on all fresh fruits and vegetables',
      discount: '25% OFF',
      validUntil: '2024-12-31',
      image: freshFruitsImg,
      code: 'FRESH25'
    },
    {
      title: 'First Order Special',
      description: 'New customers get free delivery + 15% discount',
      discount: '15% OFF + Free Delivery',
      validUntil: '2024-12-31',
      image: freshFruitsImg,
      code: 'WELCOME15'
    },
    {
      title: 'Safari Loyalty Bonus',
      description: 'Double loyalty points on orders above Ksh 2,000',
      discount: '2x Points',
      validUntil: '2024-12-31',
      image: freshFruitsImg,
      code: 'SAFARI2X'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Special Offers</h1>
          <p className="text-lg text-muted-foreground">Save more on your favorite products</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offers.map((offer, index) => (
            <div key={index} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <Percent className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{offer.title}</h3>
                  <Badge className="bg-accent text-accent-foreground">{offer.discount}</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{offer.description}</p>
              
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Valid until {offer.validUntil}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <Button className="flex-1">Shop Now</Button>
                <div className="bg-muted px-3 py-2 rounded-lg">
                  <span className="text-sm font-mono">{offer.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Offers;