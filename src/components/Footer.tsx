import React from 'react';
import { Shield, Heart, ExternalLink, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-amber-500/20 bg-[#05080e] pt-12 pb-8 text-amber-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          
          {/* Creator & Mission Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl animate-float">🪔</span>
              <span className="font-['Cinzel'] font-bold text-lg gold-gradient-text">
                Shubh Dhanteras & Deepavali
              </span>
            </div>

            <p className="text-xs sm:text-sm text-amber-100/70 leading-relaxed max-w-md">
              A bespoke family initiative blending sacred Indian festive traditions with modern cybersecurity awareness. Created to shield parents, elders, and loved ones from festive online shopping scams.
            </p>

            <div className="pt-2 text-xs text-amber-300/80 font-medium flex items-center gap-1.5">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>by <strong>Om Shrikrishna Gautam</strong> • MSc Cybersecurity Manager, ECE Paris</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold text-amber-400 uppercase tracking-wider block mb-2">
              Festive Highlights
            </span>
            <ul className="space-y-1.5">
              <li><a href="#diyas" className="hover:text-amber-300 transition-colors">🪔 Light 5 Sacred Diyas</a></li>
              <li><a href="#card-studio" className="hover:text-amber-300 transition-colors">💌 WhatsApp Family Card Studio</a></li>
              <li><a href="#cyber-rules" className="hover:text-amber-300 transition-colors">🛡️ 5 Golden Cyber Rules</a></li>
              <li><a href="#authorized-stores" className="hover:text-amber-300 transition-colors">🛍️ Authorized App Directory</a></li>
              <li><a href="#scam-quiz" className="hover:text-amber-300 transition-colors">🎯 Spot the Scam Quiz</a></li>
            </ul>
          </div>

          {/* Official Helplines */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-bold text-rose-400 uppercase tracking-wider block mb-2">
              National Cyber Defense
            </span>
            <ul className="space-y-1.5 text-zinc-300">
              <li>
                <a href="tel:1930" className="hover:text-red-300 transition-colors flex items-center gap-1 font-semibold text-rose-300">
                  <span>🚨 Dial 1930 (Helpline)</span>
                </a>
              </li>
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center gap-1">
                  <span>cybercrime.gov.in</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li>
                <a href="https://sancharsaathi.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-100 flex items-center gap-1">
                  <span>Chakshu Fraud Reporting</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </li>
              <li className="pt-2 text-[11px] text-zinc-400">
                Authorized Stores: Amazon • Flipkart • Myntra • Tata Neu • Ajio
              </li>
            </ul>
          </div>

        </div>

        {/* Sanskrit Benediction */}
        <div className="border-t border-zinc-800/80 pt-6 text-center">
          <p className="font-['Cinzel'] text-xs sm:text-sm text-amber-300/80 italic mb-2">
            "सर्वे भवन्तु सुखिनः सर्वे सन्तु निरामयाः। सर्वे भद्राणि पश्यन्तु मा कश्चिद्दुःखभाग्भवेत्॥"
          </p>
          <p className="text-[11px] text-zinc-500">
            May all beings be joyful; may all be healthy and protected. Wishing your family a secure, blessed, and prosperous Dhanteras & Diwali!
          </p>
        </div>

      </div>
    </footer>
  );
};
