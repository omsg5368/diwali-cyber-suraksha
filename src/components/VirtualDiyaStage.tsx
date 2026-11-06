import React, { useState } from 'react';
import { DiyaItem } from '../types';
import { INITIAL_DIYAS } from '../data/greetingsData';
import { playTempleChime } from '../utils/audio';
import { triggerGoldShower, triggerVictoryConfetti } from '../utils/confetti';
import { Flame, Sparkles, CheckCircle2, RotateCcw } from 'lucide-react';

interface VirtualDiyaStageProps {
  soundEnabled: boolean;
}

export const VirtualDiyaStage: React.FC<VirtualDiyaStageProps> = ({ soundEnabled }) => {
  const [diyas, setDiyas] = useState<DiyaItem[]>(INITIAL_DIYAS);
  const [selectedDiya, setSelectedDiya] = useState<DiyaItem | null>(null);

  const litCount = diyas.filter(d => d.isLit).length;
  const allLit = litCount === diyas.length;

  const handleLightDiya = (id: number) => {
    const target = diyas.find(d => d.id === id);
    if (!target) return;

    if (!target.isLit) {
      if (soundEnabled) playTempleChime();
      triggerGoldShower();

      const updated = diyas.map(d => d.id === id ? { ...d, isLit: true } : d);
      setDiyas(updated);
      setSelectedDiya({ ...target, isLit: true });

      if (updated.filter(d => d.isLit).length === diyas.length) {
        setTimeout(() => {
          triggerVictoryConfetti();
        }, 300);
      }
    } else {
      setSelectedDiya(target);
    }
  };

  const handleLightAll = () => {
    if (soundEnabled) playTempleChime();
    triggerVictoryConfetti();
    const updated = diyas.map(d => ({ ...d, isLit: true }));
    setDiyas(updated);
    setSelectedDiya(updated[0]);
  };

  const handleReset = () => {
    setDiyas(INITIAL_DIYAS);
    setSelectedDiya(null);
  };

  return (
    <section id="diyas" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-gradient-to-b from-[#070a12] via-[#090e1c] to-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/50 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <span>🪔</span>
            <span>पंचदीप प्रज्ज्वलन • Virtual Diya Sanctum</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Light the 5 Sacred Diyas for Family Well-Being & Digital Safety
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Click on each sacred earthen diya to kindle its flame. Each diya bestows an ancient Vedic blessing for our family and a modern cyber vigilance principle to protect our loved ones.
          </p>

          {/* Progress Bar */}
          <div className="mt-5 max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
              <span className="text-amber-300">Illumination Progress:</span>
              <span className="text-emerald-400">{litCount} of {diyas.length} Diyas Lit</span>
            </div>
            <div className="w-full h-2.5 bg-zinc-900 rounded-full overflow-hidden border border-amber-500/20 p-0.5">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-400 transition-all duration-500 shadow-sm shadow-amber-400"
                style={{ width: `${(litCount / diyas.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* 5 Diyas Stage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
          {diyas.map((diya) => (
            <div
              key={diya.id}
              onClick={() => handleLightDiya(diya.id)}
              className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center text-center select-none ${
                diya.isLit
                  ? 'bg-gradient-to-b from-amber-950/40 via-[#0d1527] to-[#070a12] border-amber-400/60 shadow-lg shadow-amber-500/20 scale-[1.02]'
                  : 'bg-[#0b101d]/60 border-zinc-800 hover:border-amber-500/40 hover:bg-[#0e1628]'
              }`}
            >
              {/* Flame Visual */}
              <div className="h-20 flex items-center justify-center relative mb-2">
                {diya.isLit ? (
                  <div className="relative flex flex-col items-center">
                    {/* Glowing Aura */}
                    <div className="absolute -inset-2 bg-amber-400/20 rounded-full blur-md" />
                    {/* Pulsing Flame */}
                    <div className="animate-flame relative z-10 text-amber-300 filter drop-shadow-[0_0_12px_rgba(245,158,11,1)]">
                      <Flame className="w-12 h-12 fill-amber-400 text-orange-500" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center group-hover:scale-110 transition-transform">
                    <Flame className="w-10 h-10 text-zinc-700 stroke-1" />
                    <span className="text-[10px] text-amber-400/70 mt-1 font-semibold tracking-wider uppercase">
                      Click to Light
                    </span>
                  </div>
                )}
              </div>

              {/* Clay Diya Base SVG */}
              <div className="w-16 h-6 bg-gradient-to-r from-amber-800 via-yellow-900 to-amber-800 rounded-b-full border-t border-amber-600/60 shadow-inner shadow-black mb-3 relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-amber-950 rounded-full" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm sm:text-base text-amber-200 mb-0.5">
                {diya.title}
              </h3>
              <p className="text-xs text-amber-400/80 font-medium mb-3">
                {diya.hindiTitle}
              </p>

              {/* Status pill */}
              <div className="mt-auto pt-2 w-full">
                {diya.isLit ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Lit & Blessed
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded-full">
                    Unlit Diya
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Global Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {!allLit ? (
            <button
              onClick={handleLightAll}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Light All 5 Diyas at Once</span>
            </button>
          ) : (
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset & Relight</span>
            </button>
          )}
        </div>

        {/* Selected Diya Deep Insight Card */}
        {selectedDiya && (
          <div className="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-[#0d1627] to-amber-950/40 border border-amber-400/40 shadow-xl shadow-amber-950/50 animate-fadeIn">
            <div className="flex items-start gap-4">
              <span className="text-3xl p-3 rounded-2xl bg-amber-900/40 border border-amber-500/30">
                🪔
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base sm:text-lg font-bold text-amber-200">
                    {selectedDiya.title} ({selectedDiya.hindiTitle})
                  </h4>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    Sacred Blessing
                  </span>
                </div>

                <p className="text-sm text-amber-100/90 leading-relaxed mb-3 italic">
                  "{selectedDiya.blessing}"
                </p>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-emerald-500/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    <span>🛡️</span> Digital Suraksha Principle
                  </div>
                  <p className="text-xs text-slate-200">
                    {selectedDiya.cyberPrinciple}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Lit Congratulatory Banner */}
        {allLit && (
          <div className="mt-8 max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-amber-950/70 via-emerald-950/40 to-amber-950/70 border-2 border-amber-400/60 shadow-2xl shadow-amber-500/30 text-center animate-gold-glow">
            <span className="text-4xl block mb-2">🎉🪔✨</span>
            <h3 className="text-xl sm:text-2xl font-bold font-['Cinzel'] gold-gradient-text mb-2">
              All 5 Diyas Are Luminous! Family Blessing Complete
            </h3>
            <p className="text-xs sm:text-sm text-amber-100/80 max-w-xl mx-auto mb-4">
              May the combined radiance of Arogya, Samriddhi, Vivek, Prem, and Cyber Suraksha protect our beloved family all throughout the coming year.
            </p>
            <a
              href="#card-studio"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md hover:scale-105 transition-all"
            >
              <span>💌</span> Share Customized Blessing on WhatsApp
            </a>
          </div>
        )}

      </div>
    </section>
  );
};
