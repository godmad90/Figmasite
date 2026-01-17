import { Dices, Spade, Flame } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const games = [
  {
    title: 'Live Dealer Tables',
    category: 'Live Casino',
    players: '2,450',
    hot: true,
    description: 'Experience authentic casino action with real dealers streaming in HD quality.'
  },
  {
    title: 'Mega Fortune Slots',
    category: 'Slots',
    players: '8,932',
    hot: true,
    description: 'Progressive jackpot slots with millions in prizes waiting to be won.'
  },
  {
    title: 'Blackjack Pro',
    category: 'Table Games',
    players: '1,223',
    hot: false,
    description: 'Classic blackjack with perfect pair side bets and multiple hand options.'
  },
  {
    title: 'European Roulette',
    category: 'Roulette',
    players: '3,567',
    hot: true,
    description: 'Spin the wheel with the best odds in our European roulette variant.'
  },
  {
    title: 'Texas Hold\'em Poker',
    category: 'Poker',
    players: '4,821',
    hot: false,
    description: 'Join multiplayer tables and compete against players worldwide.'
  },
  {
    title: 'Baccarat Squeeze',
    category: 'Table Games',
    players: '1,892',
    hot: false,
    description: 'High-stakes baccarat with the dramatic squeeze feature for VIP players.'
  }
];

export function PopularGames() {
  return (
    <section className="py-16 md:py-24 bg-white" id="games">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Casino Games
          </h2>
          <p className="text-lg text-slate-600">
            Explore our vast collection of over 2,000 games including slots, table games, 
            live dealers, and progressive jackpots.
          </p>
        </div>

        {/* Featured Game Image */}
        <div className="relative rounded-2xl overflow-hidden mb-12 shadow-xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1719228159232-48608b807a58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2tlciUyMGNhcmRzJTIwdGFibGV8ZW58MXx8fHwxNzY3ODg0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Poker cards on casino table"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent flex items-center">
            <div className="container mx-auto px-8">
              <div className="max-w-xl text-white">
                <Badge className="bg-red-600 mb-4">Featured Game</Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-3">Royal Poker Championship</h3>
                <p className="text-lg mb-6 text-slate-200">
                  Join the high-stakes tournament with a $100,000 prize pool. Play now and compete for glory!
                </p>
                <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700">
                  Play Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {game.category === 'Live Casino' && <Dices className="h-5 w-5 text-red-600" />}
                    {game.category === 'Slots' && <Flame className="h-5 w-5 text-amber-600" />}
                    {(game.category === 'Table Games' || game.category === 'Roulette' || game.category === 'Poker') && 
                      <Spade className="h-5 w-5 text-slate-800" />}
                    <Badge variant="outline" className="text-xs">
                      {game.category}
                    </Badge>
                  </div>
                  {game.hot && (
                    <Badge className="bg-red-600">🔥 Hot</Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{game.description}</p>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-slate-500">
                    👥 {game.players} playing
                  </div>
                  <Button variant="outline" size="sm" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                    Play
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2">
            View All 2,000+ Games
          </Button>
        </div>
      </div>
    </section>
  );
}
