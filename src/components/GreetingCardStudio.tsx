import React, { useState } from 'react';
import { CustomCardState } from '../types';
import { DEFAULT_GREETING_TEMPLATES } from '../data/greetingsData';
import { Share2, Copy, Check, Sparkles, Heart, Shield, Printer } from 'lucide-react';
import { triggerGoldShower } from '../utils/confetti';
import { playTempleChime } from '../utils/audio';

interface GreetingCardStudioProps {
  soundEnabled: boolean;
}

export const GreetingCardStudio: React.FC<GreetingCardStudioProps> = ({ soundEnabled }) => {
  const [cardState, setCardState] = useState<CustomCardState>({
    recipientName: "Mummy & Papa",
    occasion: "both",
    senderName: "Om Shrikrishna Gautam & Family",
    customBlessing: DEFAULT_GREETING_TEMPLATES.both,
    includeCyberTips: true,
  });

  const [copied, setCopied] = useState(false);

  const handleOccasionChange = (occ: 'dhanteras' | 'diwali' | 'both') => {
    setCardState(prev => ({
      ...prev,
      occasion: occ,
      customBlessing: DEFAULT_GREETING_TEMPLATES[occ]
    }));
  };

  const getFullShareText = () => {
    let text = `🪔 *SHUBH FESTIVE GREETINGS!* 🪔\n\n`;
    text += `*To Dear:* ${cardState.recipientName}\n\n`;
    text += `${cardState.customBlessing}\n\n`;

    if (cardState.includeCyberTips) {
      text += `🛡️ *FESTIVE CYBER SURAKSHA REMINDERS:* 🛡️\n`;
      text += `1. ❌ Do NOT click on unverified WhatsApp gift/lottery links or strange .xyz domains.\n`;
      text += `2. ❌ Beware of fake 90% discount shopping portals on Instagram or SMS.\n`;
      text += `3. ✅ Shop ONLY via authorized apps: Amazon, Flipkart, Myntra, or official brand stores.\n`;
      text += `4. ⚠️ UPI PIN is ONLY for paying money; NEVER enter PIN or OTP to receive cashback.\n`;
      text += `5. 🚨 In case of cyber fraud, immediately dial National Helpline: 1930\n\n`;
    }

    text += `*With Lots of Love & Respect,*\n${cardState.senderName} ❤️✨`;
    return text;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getFullShareText());
    setCopied(true);
    if (soundEnabled) playTempleChime();
    triggerGoldShower();
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(getFullShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    if (soundEnabled) playTempleChime();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="card-studio" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/50 border border-rose-500/30 text-rose-300 text-xs font-semibold mb-3">
            <span>💌</span>
            <span>Family Blessing Studio • परिवार बधाई पत्र</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Personalized Family Greeting & Cyber Shield Card
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Create an authentic, heartfelt digital greeting card for parents, elders, and relatives with one-tap sharing on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Card Customization Controls (Left 5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0b101e] border border-amber-500/30 shadow-xl space-y-5">
            <h3 className="text-base font-bold text-amber-200 flex items-center gap-2 border-b border-zinc-800 pb-3">
              <span>✍️</span> Customize Your Card
            </h3>

            {/* Recipient */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                Greeting Recipient (To:)
              </label>
              <input
                type="text"
                value={cardState.recipientName}
                onChange={(e) => setCardState({ ...cardState, recipientName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-zinc-700 text-amber-100 text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
                placeholder="e.g. Mummy & Papa, Sharma Parivar"
              />
              <div className="flex flex-wrap gap-1.5 mt-2">
                {["Mummy & Papa", "Beloved Family", "Chacha-Chachi", "Dada-Dadi"].map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setCardState({ ...cardState, recipientName: name })}
                    className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 hover:bg-amber-900/40 text-amber-200/80 hover:text-amber-200 border border-zinc-700"
                  >
                    + {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasion Switcher */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                Festive Occasion
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { key: 'dhanteras', label: '🪙 Dhanteras' },
                  { key: 'diwali', label: '🪔 Diwali' },
                  { key: 'both', label: '✨ Both' },
                ].map((item) => (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleOccasionChange(item.key as 'dhanteras' | 'diwali' | 'both')}
                    className={`py-2 px-2 rounded-xl text-xs font-bold transition-all ${
                      cardState.occasion === item.key
                        ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                        : 'bg-slate-900 border border-zinc-800 text-zinc-300 hover:border-amber-500/30'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Blessing Message Text */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                Blessing & Wishes
              </label>
              <textarea
                rows={4}
                value={cardState.customBlessing}
                onChange={(e) => setCardState({ ...cardState, customBlessing: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-zinc-700 text-amber-100 text-xs sm:text-sm focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
            </div>

            {/* Sender Name */}
            <div>
              <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1.5">
                Sender Signature (From:)
              </label>
              <input
                type="text"
                value={cardState.senderName}
                onChange={(e) => setCardState({ ...cardState, senderName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-zinc-700 text-amber-100 text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            {/* Include Cyber Tips Toggle */}
            <div className="p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-200">
                  Attach 5 Cyber Suraksha Tips in WhatsApp message
                </span>
              </div>
              <input
                type="checkbox"
                checked={cardState.includeCyberTips}
                onChange={(e) => setCardState({ ...cardState, includeCyberTips: e.target.checked })}
                className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
              />
            </div>

          </div>

          {/* Live Card Preview (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* The Ornamental Card Container */}
            <div 
              id="printable-card"
              className="w-full max-w-lg p-7 sm:p-9 rounded-3xl bg-gradient-to-b from-[#140b05] via-[#101424] to-[#0c0803] border-4 border-amber-400/80 shadow-2xl shadow-amber-500/20 relative overflow-hidden text-center"
            >
              {/* Traditional Gold Ornamental Corner Accents */}
              <div className="absolute top-2 left-2 text-amber-400/40 text-lg select-none">⚜️</div>
              <div className="absolute top-2 right-2 text-amber-400/40 text-lg select-none">⚜️</div>
              <div className="absolute bottom-2 left-2 text-amber-400/40 text-lg select-none">⚜️</div>
              <div className="absolute bottom-2 right-2 text-amber-400/40 text-lg select-none">⚜️</div>

              {/* Shubh Labh / Swastik traditional header */}
              <div className="flex items-center justify-center gap-4 text-amber-400 text-sm font-semibold tracking-widest mb-3">
                <span>शुभ</span>
                <span className="text-2xl animate-float">🪔</span>
                <span>लाभ</span>
              </div>

              {/* Sanskrit Mantra */}
              <p className="font-['Cinzel'] text-xs text-amber-300/80 italic tracking-wider mb-4 border-b border-amber-500/20 pb-2">
                ॐ महालक्ष्म्यै नमः • ॐ धन्वन्तरये नमः
              </p>

              {/* Recipient */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-widest text-amber-400 font-semibold block">
                  Auspicious Greetings To
                </span>
                <h4 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] gold-gradient-text mt-0.5">
                  {cardState.recipientName || "Beloved Family"}
                </h4>
              </div>

              {/* Occasion Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-amber-950/70 border border-amber-400/40 text-amber-300 text-xs font-bold mb-4 uppercase tracking-wider">
                {cardState.occasion === 'dhanteras' && '🪙 Shubh Dhanteras Blessings'}
                {cardState.occasion === 'diwali' && '🪔 Happy Deepavali / Festival of Lights'}
                {cardState.occasion === 'both' && '🪙 Shubh Dhanteras & Happy Deepavali 🪔'}
              </div>

              {/* Blessing Body */}
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed font-sans mb-6 italic px-2">
                "{cardState.customBlessing}"
              </p>

              {/* Cyber Suraksha Stamp */}
              {cardState.includeCyberTips && (
                <div className="mb-6 p-3 rounded-xl bg-slate-950/70 border border-emerald-500/40 text-left flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-950 border border-emerald-500/50">
                    <Shield className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-300 block uppercase tracking-wider">
                      Family Cyber Shield Certified
                    </span>
                    <span className="text-[11px] text-zinc-300 block">
                      Shop safe on Amazon, Flipkart, Myntra • Never share UPI PIN for cashbacks • Helpline: 1930
                    </span>
                  </div>
                </div>
              )}

              {/* Signature */}
              <div className="pt-3 border-t border-amber-500/20">
                <span className="text-[11px] text-amber-400/70 uppercase tracking-widest block">
                  With Reverence & Blessings,
                </span>
                <p className="font-['Cinzel'] text-base sm:text-lg font-bold text-amber-200 mt-0.5">
                  {cardState.senderName}
                </p>
              </div>

            </div>

            {/* Sharing Action Toolbar */}
            <div className="w-full max-w-lg mt-6 flex flex-wrap items-center justify-center gap-3">
              
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 min-w-[200px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Send to Family on WhatsApp</span>
              </button>

              <button
                onClick={handleCopy}
                className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-200 font-semibold text-sm border border-zinc-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="py-3 px-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-xs border border-zinc-800 transition-all flex items-center justify-center gap-1.5"
                title="Print or Save Card as PDF"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

