import React from 'react';
import { PhoneCall, AlertTriangle, ShieldAlert, ExternalLink, Clock, CreditCard, Lock, FileText } from 'lucide-react';

export const EmergencyResponse: React.FC = () => {
  return (
    <section id="emergency-helpline" className="py-14 sm:py-20 relative border-t border-red-500/30 bg-gradient-to-b from-[#16060a] via-[#0d0711] to-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-bold mb-3">
            <AlertTriangle className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span>Emergency Cyber Action • आपातकालीन सहायता</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight text-white mb-3">
            Did Fraud Occur? National Helplines & Golden Hour Action Plan
          </h2>
          <p className="text-sm sm:text-base text-red-100/70">
            If an elder or family member accidentally entered a UPI PIN or clicked a malicious link, every minute counts. Take these urgent steps immediately.
          </p>
        </div>

        {/* Primary Helpline CTA Box */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/70 via-black to-red-950/70 border-2 border-red-500/60 shadow-2xl shadow-red-950/60 mb-10 text-center">
          <span className="text-xs uppercase tracking-widest font-black text-red-400 block mb-1">
            GOVERNMENT OF INDIA • NATIONAL CYBER CRIME HELPLINE
          </span>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-4">
            <a
              href="tel:1930"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-red-600 hover:from-red-500 hover:to-rose-500 text-white font-black text-xl sm:text-2xl shadow-xl shadow-red-900/60 flex items-center gap-3 hover:scale-105 transition-all"
            >
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <span>DIAL 1930 (Toll Free)</span>
            </a>

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-red-500/40 text-red-200 font-bold text-sm sm:text-base flex items-center gap-2 transition-all"
            >
              <span>cybercrime.gov.in</span>
              <ExternalLink className="w-4 h-4 text-red-400" />
            </a>
          </div>
          <p className="text-xs text-red-200/80 max-w-xl mx-auto">
            Operated by the Indian Cyber Crime Coordination Centre (I4C), Ministry of Home Affairs. 
            Calling 1930 alerts the Citizen Financial Cyber Fraud Reporting System to freeze fraudulent bank transfers before cash-out.
          </p>
        </div>

        {/* 4 Golden Hour Steps */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-base sm:text-lg font-bold text-amber-200 text-center mb-6 flex items-center justify-center gap-2">
            <Clock className="w-5 h-5 text-amber-400" />
            <span>The "Golden Hour" 4-Step Emergency Protocol</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-red-500/30">
              <div className="w-8 h-8 rounded-lg bg-red-950 border border-red-500/40 text-red-300 font-bold flex items-center justify-center text-sm mb-3">
                1
              </div>
              <h4 className="font-bold text-sm text-red-200 mb-1">
                Call 1930 Immediately
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Report within the first 2 hours. Police liaise directly with banks to freeze recipient accounts.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/30">
              <div className="w-8 h-8 rounded-lg bg-amber-950 border border-amber-500/40 text-amber-300 font-bold flex items-center justify-center text-sm mb-3">
                2
              </div>
              <h4 className="font-bold text-sm text-amber-200 mb-1">
                Freeze Bank Account & Cards
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Open mobile banking app to block debit/credit cards and disable international/online transactions immediately.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30">
              <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-center text-sm mb-3">
                3
              </div>
              <h4 className="font-bold text-sm text-emerald-200 mb-1">
                Save SMS, UTR & Screenshots
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Preserve payment transaction IDs (UTR number), sender mobile numbers, and chat screenshots as official evidence.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-blue-500/30">
              <div className="w-8 h-8 rounded-lg bg-blue-950 border border-blue-500/40 text-blue-300 font-bold flex items-center justify-center text-sm mb-3">
                4
              </div>
              <h4 className="font-bold text-sm text-blue-200 mb-1">
                Report on Chakshu Portal
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Report fraudulent WhatsApp numbers and SMS on Department of Telecom's Chakshu (sancharsaathi.gov.in) to disconnect spam lines.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

