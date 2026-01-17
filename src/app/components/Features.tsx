import { Zap, Gift, Clock, Smartphone, CreditCard, Headphones } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Zap,
    title: 'Instant Play',
    description: 'No downloads required. Play instantly in your browser with seamless performance.'
  },
  {
    icon: Gift,
    title: 'Daily Bonuses',
    description: 'Enjoy daily promotions, free spins, and cashback rewards for loyal players.'
  },
  {
    icon: Clock,
    title: 'Fast Withdrawals',
    description: 'Get your winnings quickly with our 24-hour withdrawal processing guarantee.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Gaming',
    description: 'Play anywhere, anytime on your smartphone or tablet with our mobile-optimized platform.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Multiple payment methods with bank-level encryption for your peace of mind.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our friendly support team is available around the clock to assist you.'
  }
];

export function Features() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose RoyalBet Casino?
          </h2>
          <p className="text-lg text-slate-600">
            We provide the best online gaming experience with industry-leading features, 
            top-tier security, and unmatched customer service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-amber-500 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
