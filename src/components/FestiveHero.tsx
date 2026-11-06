import React from 'react';
import { Shield, Sparkles, Heart, ChevronRight, Lock, BellRing, Gift } from 'lucide-react';
import { triggerGoldShower } from '../utils/confetti';
import { playTempleChime } from '../utils/audio';

interface FestiveHeroProps {
  soundEnabled: boolean;
}

export const FestiveHero: React.FC<FestiveHeroProps> = ({ soundEnabled }) => {
  const handleBlessingBurst = () => {
    triggerGoldShower();
    if (soundEnabled) {
      playTempleChime();
    }
  };

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-amber-500/20 via-orange-600/10 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-rose-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Auspicious Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-gradient-to-r from-amber-950/60 via-amber-900/40 to-amber-950/60 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-md shadow-amber-950/50">
          <span className="text-base">🪔</span>
          <span className="font-semibold tracking-wider">शुभ धनतेरस एवं दीपावली विशेषांक</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-emerald-400 font-semibold flex items-center gap-1 border-l border-amber-500/30 pl-2">
            <Shield className="w-3.5 h-3.5" /> साइबर सुरक्षा अभियान
          </span>
        </div>

        {/* Traditional Sanskrit Shloka */}
        <div className="mb-4 inline-block max-w-3xl">
          <p className="font-['Cinzel'] text-amber-200/90 text-sm sm:text-base italic tracking-wide">
            "असतो मा सद्गमय। तमसो मा ज्योतिर्गमय।"
          </p>
          <p className="text-xs text-amber-300/60 mt-0.5">
            May the sacred light lead our family from untruth to truth, and from digital darkness to wisdom.
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-['Cinzel'] leading-tight mb-4">
          <span className="gold-gradient-text block">Shubh Dhanteras & Deepavali</span>
          <span className="text-xl sm:text-3xl md:text-4xl text-amber-100 font-sans font-bold mt-2 block">
            Warm Family Greetings & Festive Cyber Suraksha
          </span>
        </h1>

        {/* Subtitle / Family Tribute */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-amber-100/80 font-normal leading-relaxed mb-4">
          A loving festive tribute to our parents, elders, siblings, and extended family by <strong className="text-amber-300 font-semibold">Om Shrikrishna Gautam</strong> (Ex-Penetration Tester at TMG Security • MSc Cybersecurity Manager, ECE Paris). 
          While we welcome health and prosperity into our households, let us guard our hard-earned wealth 
          against <strong className="text-amber-300 font-semibold">fake discount websites, suspicious WhatsApp forwards, and predatory festive lottery scams</strong>.
        </p>

        {/* Creator Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs">
          <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-emerald-500/40 text-emerald-300 font-semibold flex items-center gap-1.5">
            <span>🛡️</span> Ex-Penetration Tester at TMG Security
          </span>
          <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-amber-500/40 text-amber-300 font-semibold flex items-center gap-1.5">
            <span>🎓</span> MSc Cybersecurity Manager | ECE Paris
          </span>
          <a
            href="#festive-gift"
            className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/30 to-yellow-500/30 border border-amber-400 text-amber-200 hover:text-white font-bold flex items-center gap-1 transition-all"
          >
            <span>🪙</span> Send Shagun / Gift (UPI QR)
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <button
            onClick={handleBlessingBurst}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-amber-500/30 hover:from-amber-400 hover:to-yellow-400 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 group cursor-pointer"
          >
            <span>✨</span>
            <span>Receive Festive Blessing</span>
            <Sparkles className="w-4 h-4 text-slate-950 group-hover:rotate-12 transition-transform" />
          </button>

          <a
            href="#diyas"
            className="px-5 py-3.5 rounded-xl bg-amber-950/40 hover:bg-amber-900/40 border border-amber-500/30 text-amber-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <span>🪔</span>
            <span>Light Family Diya</span>
          </a>

          <a
            href="#card-studio"
            className="px-5 py-3.5 rounded-xl bg-rose-950/40 hover:bg-rose-900/40 border border-rose-500/30 text-rose-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <Gift className="w-4 h-4 text-rose-400" />
            <span>Create WhatsApp Card</span>
          </a>

          <a
            href="#cyber-rules"
            className="px-5 py-3.5 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/40 border border-emerald-500/30 text-emerald-200 font-semibold text-sm sm:text-base transition-all flex items-center gap-2"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>5 Cyber Defense Rules</span>
          </a>
        </div>

        {/* Trust & Awareness Highlights Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pt-4 text-left">
          
          <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-amber-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs sm:text-sm mb-1">
              <span>🪙</span> Dhanteras Arogya
            </div>
            <p className="text-[11px] sm:text-xs text-amber-100/70">
              Blessings of Lord Dhanvantari for good health & Maa Lakshmi for noble prosperity.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-rose-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs sm:text-sm mb-1">
              <Lock className="w-3.5 h-3.5" /> No Random Links
            </div>
            <p className="text-[11px] sm:text-xs text-rose-100/70">
              Zero-click rule on unverified WhatsApp gifts or free festive recharge offers.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-emerald-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm mb-1">
              <Shield className="w-3.5 h-3.5" /> Authorized Apps Only
            </div>
            <p className="text-[11px] sm:text-xs text-emerald-100/70">
              Shop exclusively via Amazon, Flipkart, Myntra, and verified brand apps.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-blue-500/20 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-blue-400 font-semibold text-xs sm:text-sm mb-1">
              <BellRing className="w-3.5 h-3.5" /> Helpline 1930
            </div>
            <p className="text-[11px] sm:text-xs text-blue-100/70">
              Direct access to National Cyber Crime Reporting Portal & Indian emergency desk.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

