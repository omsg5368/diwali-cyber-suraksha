import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { triggerDiwaliCracker } from '../utils/confetti';
import { playSparkle } from '../utils/audio';

interface FireworksCanvasProps {
  soundEnabled: boolean;
}

export const FireworksCanvas: React.FC<FireworksCanvasProps> = ({ soundEnabled }) => {
  const launchCracker = () => {
    const randomX = 0.2 + Math.random() * 0.6;
    const randomY = 0.3 + Math.random() * 0.4;
    triggerDiwaliCracker(randomX, randomY);
    if (soundEnabled) playSparkle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={launchCracker}
        className="px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white font-bold text-xs sm:text-sm shadow-xl shadow-amber-950/60 hover:scale-110 active:scale-95 transition-all flex items-center gap-2 border border-amber-300/40 cursor-pointer animate-float"
        title="Launch Eco-Friendly Digital Diwali Fireworks"
      >
        <span className="text-base">🎆</span>
        <span className="hidden sm:inline">Eco Sparkler</span>
      </button>
    </div>
  );
};
