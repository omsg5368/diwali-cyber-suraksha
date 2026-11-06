import React, { useState } from 'react';
import { Shield, Sparkles, Volume2, VolumeX, PhoneCall, AlertTriangle, Menu, X } from 'lucide-react';
import { playTempleChime } from '../utils/audio';

interface NavbarProps {
  soundEnabled: boolean;
  setSoundEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({ soundEnabled, setSoundEnabled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      playTempleChime();
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#070a12]/90 border-b border-amber-500/20 shadow-lg shadow-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand */}
          <div className="flex items-center space-x-3">
            <span className="text-3xl animate-float filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]">🪔</span>
            <div>
              <a href="#hero" className="flex items-center gap-1.5 font-bold tracking-tight text-lg sm:text-xl font-['Cinzel']">
                <span className="gold-gradient-text">Shubh Utsav</span>
                <span className="text-amber-400/60 font-light hidden sm:inline">|</span>
                <span className="text-emerald-400 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase border border-emerald-500/30 bg-emerald-950/40 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Shield className="w-3 h-3 text-emerald-400" /> Cyber Suraksha
                </span>
              </a>
              <p className="text-[10px] text-amber-200/60 hidden sm:block">
                Festive Blessings & Cyber Awareness by Om Shrikrishna Gautam
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <a href="#diyas" className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>🪔</span> Light Diya
            </a>
            <a href="#card-studio" className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <span>💌</span> Family Card
            </a>
            <a href="#cyber-rules" className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-amber-400" /> 5 Golden Rules
            </a>
            <a href="#authorized-stores" className="text-amber-100/80 hover:text-amber-300 transition-colors">
              Verified Stores
            </a>
            <a href="#scam-quiz" className="text-amber-100/80 hover:text-amber-300 transition-colors flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Scam Quiz
            </a>
            <a href="#url-checker" className="text-amber-100/80 hover:text-amber-300 transition-colors">
              Verify Link
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center space-x-3">
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              aria-label={soundEnabled ? 'Disable audio' : 'Enable audio'}
              className="p-2 rounded-full border border-amber-500/30 bg-amber-950/30 text-amber-300 hover:bg-amber-900/40 hover:border-amber-400 transition-all text-xs flex items-center gap-1"
              title={soundEnabled ? 'Festive Sounds ON' : 'Festive Sounds OFF'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span className="hidden xl:inline text-[11px] text-amber-200">Audio ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-zinc-500" />
                  <span className="hidden xl:inline text-[11px] text-zinc-400">Audio OFF</span>
                </>
              )}
            </button>

            {/* Emergency Helpline Pill */}
            <a
              href="tel:1930"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-700 text-white font-semibold text-xs shadow-md shadow-red-900/40 hover:from-red-500 hover:to-rose-600 transition-all border border-red-400/40"
              title="National Cyber Crime Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-bounce" />
              <span>Helpline 1930</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-amber-300 hover:text-amber-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1d] border-b border-amber-500/20 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs text-amber-300/70 font-semibold uppercase tracking-wider px-2 py-1">
            Festive & Cyber Sections
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a
              href="#diyas"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <span>🪔</span> Light Diya
            </a>
            <a
              href="#card-studio"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <span>💌</span> Family Card
            </a>
            <a
              href="#cyber-rules"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <Shield className="w-4 h-4 text-amber-400" /> 5 Cyber Rules
            </a>
            <a
              href="#authorized-stores"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <span>🛍️</span> Verified Stores
            </a>
            <a
              href="#scam-quiz"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <Sparkles className="w-4 h-4 text-amber-400" /> Scam Quiz
            </a>
            <a
              href="#url-checker"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-amber-950/30 border border-amber-500/20 text-amber-200 hover:bg-amber-900/30"
            >
              <span>🔍</span> Verify Link
            </a>
          </div>

          <div className="pt-2 border-t border-zinc-800">
            <a
              href="#emergency-helpline"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full p-2.5 rounded-lg bg-red-950/50 border border-red-500/30 text-red-200 font-semibold text-xs"
            >
              <AlertTriangle className="w-4 h-4 text-red-400" /> National Cyber Crime Protocol (1930 & cybercrime.gov.in)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
