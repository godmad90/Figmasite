import { Shield, Clock, Lock, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ResponsibleGaming() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <Shield className="h-5 w-5" />
              <span className="font-semibold">Responsible Gaming</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              At RoyalBet Casino, we are committed to promoting responsible gambling practices 
              and ensuring a safe gaming environment for all our players.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-8 w-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time & Deposit Limits</h3>
                    <p className="text-slate-600">
                      Set daily, weekly, or monthly limits on your deposits and playing time. 
                      Control your gaming experience with our easy-to-use tools.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Lock className="h-8 w-8 text-red-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Self-Exclusion</h3>
                    <p className="text-slate-600">
                      Take a break from gaming with our self-exclusion program. 
                      Temporarily or permanently restrict access to your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Shield className="h-8 w-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Age Verification</h3>
                    <p className="text-slate-600">
                      Strict age verification ensures only players 18+ can access our platform. 
                      We take underage gambling prevention seriously.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="h-8 w-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Support & Resources</h3>
                    <p className="text-slate-600">
                      Access support resources and connect with problem gambling organizations. 
                      Help is always available when you need it.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              If you or someone you know has a gambling problem, help is available. 
              Contact these organizations for confidential support:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                GamCare.org.uk
              </a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                BeGambleAware.org
              </a>
              <span className="text-slate-400">•</span>
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                National Council on Problem Gambling
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
