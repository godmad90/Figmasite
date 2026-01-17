import { Gift, Percent, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

const promotions = [
  {
    icon: Gift,
    badge: 'New Players',
    title: '100% Welcome Bonus up to $1000',
    description: 'Double your first deposit with our generous welcome offer plus 200 free spins on selected slots.',
    cta: 'Claim Bonus',
    color: 'from-amber-500 to-red-600'
  },
  {
    icon: Percent,
    badge: 'Weekly',
    title: '50% Reload Bonus Every Monday',
    description: 'Start your week right with a 50% reload bonus up to $500 on your Monday deposits.',
    cta: 'Get Bonus',
    color: 'from-blue-500 to-purple-600'
  },
  {
    icon: TrendingUp,
    badge: 'Daily',
    title: '10% Daily Cashback',
    description: 'Get 10% cashback on all losses, credited daily with no maximum limit. Play with confidence!',
    cta: 'Learn More',
    color: 'from-green-500 to-teal-600'
  },
  {
    icon: Users,
    badge: 'VIP',
    title: 'Exclusive VIP Rewards Program',
    description: 'Climb the VIP ranks for exclusive bonuses, faster withdrawals, and personal account managers.',
    cta: 'Join VIP',
    color: 'from-purple-500 to-pink-600'
  }
];

export function Promotions() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" id="promotions">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Exclusive Bonuses & Promotions
          </h2>
          <p className="text-lg text-slate-300">
            Maximize your winnings with our generous bonuses, daily promotions, and VIP rewards. 
            There's always something special waiting for you at RoyalBet Casino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {promotions.map((promo, index) => {
            const Icon = promo.icon;
            return (
              <Card key={index} className="bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${promo.color} flex items-center justify-center`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge className="mb-3 bg-white/20">{promo.badge}</Badge>
                      <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                      <p className="text-slate-300 mb-4">{promo.description}</p>
                      <Button className={`bg-gradient-to-r ${promo.color} hover:opacity-90`}>
                        {promo.cta}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Terms & Conditions */}
        <div className="text-center text-sm text-slate-400 max-w-4xl mx-auto">
          <p className="mb-2">
            All bonuses are subject to terms and conditions. 18+ only. Gambling can be addictive. Please play responsibly.
          </p>
          <a href="#terms" className="text-amber-400 hover:underline">
            View Full Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
}
