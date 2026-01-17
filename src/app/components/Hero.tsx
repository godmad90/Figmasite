import { Star, Shield, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759773911147-7f1b9816b6ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXNpbm8lMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc4ODQ1MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Premium online casino gaming experience in Australia"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 text-amber-400 bg-amber-400/10 px-4 py-2 rounded-full">
            <Star className="h-5 w-5 fill-amber-400" />
            <span className="text-sm font-semibold">Your Complete Guide to Online Casino Australia 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Online Casino Australia: Your Ultimate Gaming Guide
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Discover trusted Australian online casinos with AUD deposits, local payment methods, 
            and comprehensive information about legal, safe casino gaming for Aussie players in 2026.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 border-t border-slate-700">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-green-400" />
              <div className="text-left">
                <div className="font-semibold">Licensed & Regulated</div>
                <div className="text-sm text-slate-400">Secure AUD Gaming</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8 text-amber-400" />
              <div className="text-left">
                <div className="font-semibold">Aussie-Friendly Casinos</div>
                <div className="text-sm text-slate-400">Local Payment Options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}