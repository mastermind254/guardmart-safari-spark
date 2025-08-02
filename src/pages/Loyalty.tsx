import React from 'react';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Gift, Star, Plane, Mountain } from 'lucide-react';

const Loyalty = () => {
  const userPoints = 2450;
  const nextTier = 5000;

  const rewards = [
    { name: 'Maasai Mara Safari', points: 15000, icon: Mountain, description: '3-day wildlife safari experience' },
    { name: 'Coastal Getaway', points: 12000, icon: Plane, description: '2-day Diani beach resort stay' },
    { name: 'Free Delivery Month', points: 500, icon: Gift, description: 'Free delivery for 30 days' },
    { name: '20% Store Credit', points: 1000, icon: Star, description: 'Ksh 200 shopping credit' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Safari Loyalty Program</h1>
          <p className="text-lg text-muted-foreground">Earn points and redeem amazing safari experiences</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-primary rounded-xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Safari Points</h2>
              <div className="text-4xl font-bold mb-2">{userPoints.toLocaleString()}</div>
              <p className="text-white/80">You're {nextTier - userPoints} points away from Gold status!</p>
              <div className="mt-4 bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(userPoints / nextTier) * 100}%` }}
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-6">Available Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rewards.map((reward, index) => (
                <div key={index} className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <reward.icon className="h-8 w-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">{reward.name}</h4>
                      <Badge variant="outline">{reward.points.toLocaleString()} points</Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{reward.description}</p>
                  <Button 
                    disabled={userPoints < reward.points}
                    className="w-full"
                  >
                    {userPoints >= reward.points ? 'Redeem Now' : 'Not Enough Points'}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">How to Earn Points</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Every Ksh 10 spent</span>
                  <span className="font-medium">1 point</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product review</span>
                  <span className="font-medium">50 points</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Refer a friend</span>
                  <span className="font-medium">500 points</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-foreground mb-4">Membership Tiers</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Bronze (0-999)</span>
                  <Badge variant="outline">1x points</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Silver (1,000-4,999)</span>
                  <Badge variant="secondary">1.5x points</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Gold (5,000+)</span>
                  <Badge className="bg-yellow-500 text-white">2x points</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Loyalty;