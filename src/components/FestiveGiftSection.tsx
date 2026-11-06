import React, { useState } from 'react';
import { Copy, Check, QrCode, Smartphone, Sparkles, Heart, ShieldCheck, ExternalLink, Award } from 'lucide-react';
import { triggerGoldShower } from '../utils/confetti';
import { playTempleChime } from '../utils/audio';
import { Tilt3DCard } from './Tilt3DCard';

interface FestiveGiftSectionProps {
  soundEnabled: boolean;
}

export const FestiveGiftSection: React.FC<FestiveGiftSectionProps> = ({ soundEnabled }) => {
  const [copied, setCopied] = useState(false);
  const upiId = "omgautam721-3@okicici";
  const upiDeepLink = `upi://pay?pa=${upiId}&pn=Om%20Gautam&cu=INR&tn=Dhanteras%20Diwali%20Shagun`;

  const handleCopy = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    if (soundEnabled) playTempleChime();
    triggerGoldShower();
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="festive-gift" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-gradient-to-b from-[#070a12] via-[#0b1020] to-[#070a12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <span>🪙</span>
            <span>Festive Shagun & Appreciation • धनतेरस एवं दीपावली शगुन</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Send Festive Shagun / Gift to Om Gautam
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Support this Cyber Suraksha family initiative or send traditional festive blessings and shagun directly via UPI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Creator Profile & Credentials (6 Cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#0a0f1d] border border-amber-500/30 shadow-2xl space-y-5">
            
            <div className="flex items-center gap-4 border-b border-zinc-800 pb-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-700 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center font-['Cinzel'] text-2xl font-black text-amber-300">
                  OG
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-amber-100 font-['Cinzel']">
                  Om Shrikrishna Gautam
                </h3>
                <p className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ex-Penetration Tester at TMG Security</span>
                </p>
                <p className="text-[11px] text-amber-300/80 mt-0.5">
                  MSc Cybersecurity Manager | ECE Paris
                </p>
              </div>
            </div>

            {/* Profile Credentials List */}
            <div className="space-y-2.5 text-xs">
              <span className="font-bold text-amber-300 uppercase tracking-wider block text-[11px]">
                Professional Profile & Accreditations:
              </span>
              
              <div className="p-3 rounded-xl bg-slate-900/90 border border-zinc-800 flex items-start gap-2.5">
                <span className="text-emerald-400 text-sm mt-0.5">🛡️</span>
                <div>
                  <strong className="text-slate-100 block">Ex-Penetration Tester — TMG Security</strong>
                  <span className="text-zinc-400 text-[11px]">Vulnerability Assessment & Penetration Testing (VAPT), ethical hacking & enterprise defense.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-zinc-800 flex items-start gap-2.5">
                <span className="text-amber-400 text-sm mt-0.5">🎓</span>
                <div>
                  <strong className="text-slate-100 block">MSc Cybersecurity Manager — ECE Paris</strong>
                  <span className="text-zinc-400 text-[11px]">Advanced security governance, cyber threat intelligence & cloud security architecture.</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-zinc-800 flex items-start gap-2.5">
                <span className="text-blue-400 text-sm mt-0.5">☁️</span>
                <div>
                  <strong className="text-slate-100 block">BCA (Cloud Computing & SysAdmin) — DYPIU Pune</strong>
                  <span className="text-zinc-400 text-[11px]">System administration, cloud virtualization & secure network protocols.</span>
                </div>
              </div>
            </div>

            {/* Cyber Safety Note on UPI */}
            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200/90 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-emerald-300 block mb-0.5 font-semibold">
                  Safe UPI Education:
                </strong>
                <span>
                  Notice how genuine UPI payments work: When you send shagun or pay a merchant, YOU authorize it with your secret UPI PIN. <strong>Remember: You NEVER enter your PIN to receive money.</strong>
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Google Pay QR Code & UPI ID (6 Cols) */}
          <div className="md:col-span-6 flex flex-col items-center">
            
            <Tilt3DCard className="w-full max-w-sm">
              <div className="w-full p-6 rounded-3xl bg-gradient-to-b from-[#161224] via-[#0f1422] to-[#0a0d18] border-2 border-amber-400/60 shadow-2xl shadow-amber-500/20 text-center relative overflow-hidden">
                
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-amber-500" />

                <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
                  Official Google Pay / UPI QR
                </span>
                <h4 className="text-lg font-bold text-amber-100 font-['Cinzel'] mb-3">
                  Scan with Any UPI App
                </h4>

                {/* The Actual Uploaded QR Code Image */}
                <div className="p-3 bg-white rounded-2xl shadow-xl inline-block mx-auto mb-4 border-2 border-amber-400/40">
                  <img
                    src="./om-gautam-upi-qr.jpg"
                    alt="Om Gautam UPI QR Code - omgautam721-3@okicici"
                    className="w-56 h-auto max-w-full rounded-xl mx-auto object-contain"
                  />
                </div>

                {/* UPI ID Pill with Copy Button */}
                <div className="mb-4 p-3 rounded-xl bg-slate-900 border border-zinc-700/80 flex items-center justify-between gap-2">
                  <div className="text-left font-mono text-xs">
                    <span className="text-[10px] text-zinc-400 block uppercase font-bold">UPI ID:</span>
                    <span className="text-amber-300 font-semibold select-all">omgautam721-3@okicici</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 transition-all text-xs font-semibold flex items-center gap-1 cursor-pointer"
                    title="Copy UPI ID"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[11px]">{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                </div>

                {/* Mobile Direct UPI Pay Button */}
                <a
                  href={upiDeepLink}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/30 transition-all flex items-center justify-center gap-2"
                >
                  <Smartphone className="w-4 h-4 text-slate-950" />
                  <span>Pay via UPI App (GPay / PhonePe / Paytm)</span>
                </a>

                <p className="text-[10px] text-zinc-400 mt-3">
                  GPay • PhonePe • Paytm • BHIM • Amazon Pay
                </p>

              </div>
            </Tilt3DCard>

          </div>

        </div>

      </div>
    </section>
  );
};

