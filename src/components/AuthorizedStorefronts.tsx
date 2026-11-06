import React from 'react';
import { AUTHORIZED_APPS } from '../data/authorizedAppsData';
import { CheckCircle2, XCircle, ShieldCheck, ExternalLink, Smartphone, AlertCircle } from 'lucide-react';

export const AuthorizedStorefronts: React.FC = () => {
  return (
    <section id="authorized-stores" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Authorized Directory • केवल अधिकृत ऐप्स</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Official Authorized Storefronts vs Fake Counterfeit Clones
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Cybercriminals create exact carbon copies of Amazon, Flipkart, and Myntra logos. Always check the exact domain spelling and install exclusively via verified app stores.
          </p>
        </div>

        {/* Storefront Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {AUTHORIZED_APPS.map((app) => (
            <div
              key={app.name}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0e1628] to-[#0a0f1d] border border-amber-500/20 shadow-lg hover:border-amber-400/50 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-bold text-lg text-amber-100">
                      {app.name}
                    </h3>
                    <span className="text-[11px] text-amber-400/80 font-medium">
                      {app.category}
                    </span>
                  </div>
                  <span className="p-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                </div>

                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  {app.description}
                </p>

                {/* Verified Domain Badge */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/30 mb-3 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-zinc-400 block text-[10px] uppercase font-bold">Official Domain:</span>
                    <span className="text-emerald-300 font-mono font-semibold">https://www.{app.officialDomain}</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                {/* Verification points */}
                <div className="mb-4">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block mb-1.5">
                    How to Verify Genuineness:
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {app.howToVerify.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Danger Clones warning */}
              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/30 text-xs">
                <span className="text-red-400 font-bold flex items-center gap-1 text-[11px] uppercase mb-1">
                  <XCircle className="w-3.5 h-3.5" /> Blocked Fake Clones to Avoid:
                </span>
                <div className="font-mono text-[10px] text-red-200/80 space-y-0.5">
                  {app.fakeCloneExamples.map((clone, i) => (
                    <div key={i} className="line-through decoration-red-500">
                      ✗ {clone}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Side-by-Side Quick Summary Banner */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-red-950/40 via-slate-950 to-emerald-950/40 border border-amber-500/30 shadow-xl">
          <h3 className="text-base sm:text-lg font-bold text-amber-200 text-center mb-4">
            Comparison Guide: Genuine App vs Counterfeit Website
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-500/40">
              <span className="font-bold text-emerald-300 text-sm flex items-center gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Genuine Official Platforms (SAFE)
              </span>
              <ul className="space-y-1.5 text-emerald-100/90">
                <li>• Installed from Google Play Store or Apple App Store.</li>
                <li>• HTTPS lock icon in browser with exact domain (amazon.in, flipkart.com).</li>
                <li>• Multiple payment options: COD, Net Banking, Credit/Debit, EMI.</li>
                <li>• Customer service numbers published on registered corporate website.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-red-950/50 border border-red-500/40">
              <span className="font-bold text-red-300 text-sm flex items-center gap-1.5 mb-2">
                <AlertCircle className="w-4 h-4 text-red-400" /> Fake Counterfeit Websites (SCAM)
              </span>
              <ul className="space-y-1.5 text-red-100/90">
                <li>• Promoted via Instagram Ads, SMS links, or WhatsApp forwards.</li>
                <li>• Strange domain extensions (.xyz, .top, .online, .site, .buzz).</li>
                <li>• Prepayment mandatory (Forces you to send UPI to personal phone number).</li>
                <li>• No verified corporate address, zero customer support responsiveness.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

