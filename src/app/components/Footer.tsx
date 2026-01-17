import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-xl font-bold text-white">
                RoyalBet Casino
              </span>
            </div>
            <p className="text-sm mb-4">
              Your trusted destination for premium online casino gaming. 
              Licensed and regulated for your peace of mind.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Games Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Games</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">Slots</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Live Casino</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Table Games</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Poker</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Jackpots</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">New Releases</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#support" className="hover:text-amber-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Payment Methods</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Withdrawal Guide</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Responsible Gaming</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Bonus Terms</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-slate-800 pt-8 pb-6">
          <h4 className="text-white font-semibold mb-4 text-center">Accepted Payment Methods</h4>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
            <span className="px-4 py-2 bg-slate-800 rounded">Visa</span>
            <span className="px-4 py-2 bg-slate-800 rounded">Mastercard</span>
            <span className="px-4 py-2 bg-slate-800 rounded">PayPal</span>
            <span className="px-4 py-2 bg-slate-800 rounded">Skrill</span>
            <span className="px-4 py-2 bg-slate-800 rounded">Neteller</span>
            <span className="px-4 py-2 bg-slate-800 rounded">Bitcoin</span>
            <span className="px-4 py-2 bg-slate-800 rounded">Bank Transfer</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© 2026 RoyalBet Casino. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:support@royalbet.example" className="hover:text-amber-400 transition-colors">
                support@royalbet.example
              </a>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            18+ only. Gambling can be addictive. Please play responsibly. RoyalBet Casino is licensed and regulated 
            by the Gaming Authority. Licensed in Curacao under license #12345.
          </p>
        </div>
      </div>
    </footer>
  );
}
