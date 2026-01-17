import { Trophy, Gift, Gamepad2, CreditCard, Shield, Star, Sparkles, Zap, TrendingUp, Award } from 'lucide-react';
import s99Logo from 'figma:asset/314f430ce559041b1f12d4d9ade6ebce6b7e4c38.png';
import rec99Logo from 'figma:asset/202a38abe729460264ca01c805f7603f141374fd.png';
import fc8Logo from 'figma:asset/665cccebb529f1ccc8f629514ac2c5455f3a37f0.png';
import dd8Logo from 'figma:asset/a7fc9d12ab7b5d332244241df04b07300ff826c6.png';
import splinkosLogo from 'figma:asset/e4f621a20b4e906b5b9c893660ce7b0e5af7b7a0.png';
import sboomerangLogo from 'figma:asset/ddf4ab95696ba33e8ae56d92dfb12bdc6f126264.png';
import m99Logo from 'figma:asset/76d764790982892df36479f4b5928ad9a032db87.png';
import w99Logo from 'figma:asset/a6a29c63b4a65e3c3110a3903d57594f31dba4a6.png';
import pp99Logo from 'figma:asset/f7635a00d3d23c5cfc448a4cf8002f42d4218f2b.png';
import bs22Logo from 'figma:asset/2f0f3b51bcb1c77fd92e80290edb2bdd2f32b7c6.png';

export function TopCasinos() {
  const casinos = [
    {
      rank: 1,
      name: "S99AU",
      logo: s99Logo,
      rating: 5.0,
      badge: "BEST OVERALL",
      badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-400",
      bonus: "100% SLOT up to AUD 500 + Live Casino 50% + Sportbook 100%",
      freeSpins: "200 Free Spins",
      games: "6000+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-amber-500",
      bgGradient: "from-amber-50 to-orange-50",
      link: "https://super99au.com/RF2176A827"
    },
    {
      rank: 2,
      name: "REC99AU",
      logo: rec99Logo,
      rating: 4.9,
      badge: "MOST TRUSTED",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
      bonus: "100% SLOT up to AUD 499 + Daily First 15%",
      freeSpins: "50 Free Spins",
      games: "3000+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-blue-500",
      bgGradient: "from-blue-50 to-cyan-50",
      link: "https://rec99au.com/RF38A712717"
    },
    {
      rank: 3,
      name: "FC8AU",
      logo: fc8Logo,
      rating: 4.9,
      badge: "INSTANT PAYOUTS",
      badgeColor: "bg-gradient-to-r from-slate-500 to-gray-400",
      bonus: "100% SLOT up to AUD 500",
      freeSpins: "Poker Bonus",
      games: "3000+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-slate-500",
      bgGradient: "from-slate-50 to-gray-50",
      link: "https://fc8au.com/RF38A713033"
    },
    {
      rank: 4,
      name: "DD8AU",
      logo: dd8Logo,
      rating: 4.9,
      badge: "CASHBACK KING",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      bonus: "100% SLOT + Daily 10% Unlimited",
      freeSpins: "100 Free Spins",
      games: "3,000+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      link: "https://dd8au.com/DD838A713330"
    },
    {
      rank: 5,
      name: "SPLINKOS",
      logo: splinkosLogo,
      rating: 4.9,
      badge: "BIGGEST BONUS",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
      bonus: "150% SLOT + Daily First 20%",
      freeSpins: "550 Free Spins",
      games: "2,500+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-blue-500",
      bgGradient: "from-blue-50 to-cyan-50",
      link: "https://splinkos.com/RF21765121"
    },
    {
      rank: 6,
      name: "SBOOMERANG",
      logo: sboomerangLogo,
      rating: 4.9,
      badge: "POKIE SPECIALIST",
      badgeColor: "bg-gradient-to-r from-amber-500 to-yellow-400",
      bonus: "150% SLOT + Daily First 20%",
      freeSpins: "Free Spins",
      games: "2500+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-amber-500",
      bgGradient: "from-amber-50 to-yellow-50",
      link: "https://sboomerang.com/RF21765100"
    },
    {
      rank: 7,
      name: "M99AU",
      logo: m99Logo,
      rating: 4.9,
      badge: "CRYPTO EXPERT",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      bonus: "100% SLOT + 50% Live Casino",
      freeSpins: "180 Free Spins",
      games: "3,500+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      link: "https://m99aud.com/"
    },
    {
      rank: 8,
      name: "W99AU",
      logo: w99Logo,
      rating: 4.9,
      badge: "MULTI-PROVIDER",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      bonus: "100% SLOT + 50% Live Casino",
      freeSpins: "150 Free Spins",
      games: "4,000+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      link: "https://w99aud.com/"
    },
    {
      rank: 9,
      name: "PP99AU",
      logo: pp99Logo,
      rating: 4.9,
      badge: "100% AUSSIE",
      badgeColor: "bg-gradient-to-r from-green-500 to-emerald-400",
      bonus: "100% SLOT",
      freeSpins: "Free Spins",
      games: "3500+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-green-500",
      bgGradient: "from-green-50 to-emerald-50",
      link: "https://www.pp99au.com/"
    },
    {
      rank: 10,
      name: "BS22AU",
      logo: bs22Logo,
      rating: 4.9,
      badge: "BONUS MASTER",
      badgeColor: "bg-gradient-to-r from-blue-500 to-cyan-400",
      bonus: "100% SLOT + Live Casino 100% + Sportbook 100%",
      freeSpins: "100 Free Spins",
      games: "3500+",
      payments: ["PayID", "Bank", "Card", "Crypto"],
      borderColor: "border-blue-500",
      bgGradient: "from-blue-50 to-cyan-50",
      link: "https://www.bs22au.com/"
    }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="w-6 h-6 text-amber-500" />;
    if (rank === 2) return <Award className="w-6 h-6 text-blue-500" />;
    if (rank === 3) return <Sparkles className="w-6 h-6 text-purple-500" />;
    return <Star className="w-5 h-5 text-slate-400" />;
  };

  return (
    <section id="top-casinos" className="mb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8 lg:p-12 rounded-3xl border-2 border-amber-400/30 shadow-2xl">
      <div className="text-center mb-8 md:mb-12">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 px-3 md:px-4 py-2 rounded-full mb-3 md:mb-4">
          <Trophy className="w-4 h-4 md:w-5 md:h-5 text-amber-400" />
          <span className="text-amber-400 font-semibold text-xs md:text-sm">EDITOR'S CHOICE 2026</span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-white px-2">
          Top 10 Online Casino Australia
        </h2>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto px-4">
          Discover the <strong className="text-amber-400">best online casinos</strong> for Australian players with exclusive bonuses, 
          local payment methods, and thousands of pokies.
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        {casinos.map((casino) => (
          <div 
            key={casino.rank}
            className={`bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${casino.borderColor}`}
          >
            {/* Header Section */}
            <div className={`bg-gradient-to-r ${casino.bgGradient} p-4 md:p-6 border-b-2 ${casino.borderColor}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Logo with Rank Badge */}
                  <div className="relative flex-shrink-0">
                    {casino.logo && (
                      <div className="bg-slate-800 rounded-lg md:rounded-xl p-1.5 md:p-2 shadow-lg border-2 border-slate-700 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center">
                        <img src={casino.logo} alt={casino.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                    {/* Rank Badge - Overlay */}
                    <div className={`absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 rounded-full ${casino.borderColor} border-2 bg-white shadow-lg flex items-center justify-center`}>
                      <span className="text-xs md:text-sm font-bold text-slate-800">#{casino.rank}</span>
                    </div>
                  </div>
                  
                  {/* Casino Name & Rating */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 truncate">{casino.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => {
                          const isFilled = i < Math.floor(casino.rating);
                          const isHalf = !isFilled && i < casino.rating;
                          
                          if (isFilled) {
                            return (
                              <Star 
                                key={i} 
                                className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400"
                              />
                            );
                          } else if (isHalf) {
                            return (
                              <div key={i} className="relative w-3 h-3 md:w-4 md:h-4">
                                <Star className="w-3 h-3 md:w-4 md:h-4 text-slate-300" />
                                <div className="absolute inset-0 overflow-hidden w-1/2">
                                  <Star className="w-3 h-3 md:w-4 md:h-4 fill-amber-400 text-amber-400" />
                                </div>
                              </div>
                            );
                          } else {
                            return (
                              <Star 
                                key={i} 
                                className="w-3 h-3 md:w-4 md:h-4 text-slate-300"
                              />
                            );
                          }
                        })}
                      </div>
                      <span className="text-xs md:text-sm text-slate-700 font-semibold">{casino.rating}/5.0</span>
                      <span className={`${casino.badgeColor} text-white text-[10px] md:text-xs font-bold px-2 md:px-3 py-1 rounded-full`}>
                        {casino.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button - Full Width on Mobile */}
                <a 
                  href={casino.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base">Play Now</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Bonus */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gift className="w-4 h-4 md:w-5 md:h-5 text-green-600 flex-shrink-0" />
                    <span className="text-[10px] md:text-xs font-semibold text-green-700 uppercase">Welcome Bonus</span>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800 leading-tight">{casino.bonus.split(' + ')[0]}</p>
                  {casino.bonus.includes(' + ') && (
                    <p className="text-xs md:text-sm text-green-600 font-semibold mt-1 md:mt-2 leading-tight">
                      + {casino.bonus.split(' + ').slice(1).join(' + ')}
                    </p>
                  )}
                </div>

                {/* Games */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Gamepad2 className="w-4 h-4 md:w-5 md:h-5 text-purple-600 flex-shrink-0" />
                    <span className="text-[10px] md:text-xs font-semibold text-purple-700 uppercase">Game Library</span>
                  </div>
                  <p className="text-sm md:text-lg font-bold text-slate-800">{casino.games} Games</p>
                  <p className="text-xs md:text-sm text-purple-600 font-semibold mt-1">Pokies & Live Dealer</p>
                </div>

                {/* Payments */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-[10px] md:text-xs font-semibold text-blue-700 uppercase">Payment Methods</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {casino.payments.map((method) => (
                      <span 
                        key={method}
                        className="bg-blue-100 text-blue-700 text-[10px] md:text-xs font-semibold px-2 md:px-2.5 py-1 rounded-full"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Features */}
              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-slate-200">
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-600 bg-slate-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                  <Shield className="w-3 h-3 md:w-4 md:h-4 text-green-600" />
                  <span>Licensed</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-600 bg-slate-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                  <span>High RTP</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-600 bg-slate-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                  <Zap className="w-3 h-3 md:w-4 md:h-4 text-amber-600" />
                  <span>Fast Payouts</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs md:text-sm text-slate-600 bg-slate-100 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                  <span>Mobile Optimized</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-6 md:mt-10 bg-blue-900/50 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-blue-400/30">
        <div className="flex gap-3">
          <Shield className="w-5 h-5 md:w-6 md:h-6 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              <strong className="text-white">Important:</strong> All casinos listed are licensed international operators accepting Australian players. 
              Verify current bonus offers and terms before registering. Play responsibly - gambling can be addictive. 
              All players must be 18+. For support, contact <strong className="text-blue-400">Gambling Help Online: 1800 858 858</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}