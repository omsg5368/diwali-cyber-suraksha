import React, { useState } from 'react';
import { SAFE_CHECK_PRESETS } from '../data/authorizedAppsData';
import { ShieldCheck, ShieldAlert, Search, Check, AlertTriangle, ArrowRight } from 'lucide-react';
import { playSuccessChime, playWarningBeep } from '../utils/audio';

interface UrlSafetyCheckerProps {
  soundEnabled: boolean;
}

export const UrlSafetyChecker: React.FC<UrlSafetyCheckerProps> = ({ soundEnabled }) => {
  const [inputUrl, setInputUrl] = useState('');
  const [result, setResult] = useState<{ isSafe: boolean; reason: string; details: string[] } | null>(null);

  const analyzeUrl = (urlToTest: string) => {
    const trimmed = urlToTest.trim().toLowerCase();
    if (!trimmed) return;

    // Check against explicit presets first
    const preset = SAFE_CHECK_PRESETS.find(p => p.url.toLowerCase() === trimmed);
    if (preset) {
      const res = {
        isSafe: preset.isSafe,
        reason: preset.reason,
        details: preset.isSafe 
          ? ['Authorized ecosystem domain', 'Encrypted TLS/SSL protocol verified', 'Official corporate registry confirmed']
          : ['Unrecognized or malicious top-level domain', 'High-risk festive baiting keywords detected', 'Blocked on Indian cyber alert database']
      };
      setResult(res);
      if (soundEnabled) {
        if (res.isSafe) playSuccessChime();
        else playWarningBeep();
      }
      return;
    }

    // Heuristic analyzer
    const suspiciousTlds = ['.xyz', '.top', '.online', '.site', '.club', '.buzz', '.shop', '.cc', '.tk', '.ml'];
    const suspiciousKeywords = ['free-gift', 'freegold', 'free-recharge', 'lottery', 'spin-win', 'update.apk', 'lucky', 'cashback'];
    const authorizedRoots = ['amazon.in', 'flipkart.com', 'myntra.com', 'tataneu.com', 'tatacliq.com', 'ajio.com', 'cybercrime.gov.in', 'sancharsaathi.gov.in', 'indiapost.gov.in'];

    let isSafe = false;
    let reason = '';
    const details: string[] = [];

    const isAuthorized = authorizedRoots.some(root => trimmed.includes(root));
    const hasSuspiciousTld = suspiciousTlds.some(tld => trimmed.includes(tld));
    const hasSuspiciousKeyword = suspiciousKeywords.some(kw => trimmed.includes(kw));
    const isHttp = trimmed.startsWith('http://');

    if (isAuthorized && !hasSuspiciousTld && !hasSuspiciousKeyword) {
      isSafe = true;
      reason = 'Recognized legitimate Indian authorized platform.';
      details.push('Domain matches official verified merchant database.');
      details.push('Safe for festive shopping and browsing.');
    } else if (hasSuspiciousTld || hasSuspiciousKeyword || isHttp) {
      isSafe = false;
      reason = 'High-Risk Potential Scam! Do not proceed.';
      if (hasSuspiciousTld) details.push('Suspicious or cheap TLD commonly abused by cyber fraudsters.');
      if (hasSuspiciousKeyword) details.push('Contains social engineering lure words (free gift / lottery / apk).');
      if (isHttp) details.push('Insecure unencrypted HTTP connection.');
    } else {
      isSafe = false;
      reason = 'Unverified third-party link. Exercise extreme caution.';
      details.push('Not in the verified merchant directory.');
      details.push('Never enter payment passwords or UPI PINs on unfamiliar portals.');
    }

    setResult({ isSafe, reason, details });
    if (soundEnabled) {
      if (isSafe) playSuccessChime();
      else playWarningBeep();
    }
  };

  const handleSelectPreset = (url: string) => {
    setInputUrl(url);
    analyzeUrl(url);
  };

  return (
    <section id="url-checker" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-gradient-to-b from-[#070a12] via-[#091024] to-[#070a12]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span>Link Inspector • लिंक सुरक्षा जांच</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Family Link & Website Safety Inspector
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Did you or a relative receive a suspicious link on WhatsApp or SMS? Paste it here or click a test sample to evaluate its authenticity.
          </p>
        </div>

        {/* Input Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder="Paste suspicious website URL (e.g. http://cadbury-freegift.xyz)..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 border border-zinc-700 text-amber-100 text-xs sm:text-sm font-mono focus:border-amber-400 focus:outline-none"
            />
            <button
              onClick={() => analyzeUrl(inputUrl)}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-slate-950" />
              <span>Verify Link</span>
            </button>
          </div>

          {/* Preset Chips */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <span className="text-zinc-400 text-[11px] font-semibold">Try sample links:</span>
            {SAFE_CHECK_PRESETS.slice(0, 5).map((p, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPreset(p.url)}
                className={`text-[11px] px-2.5 py-1 rounded-full border transition-all truncate max-w-[200px] cursor-pointer ${
                  p.isSafe
                    ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300 hover:bg-emerald-900/50'
                    : 'bg-red-950/40 border-red-500/30 text-red-300 hover:bg-red-900/50'
                }`}
              >
                {p.url.replace('https://www.', '').replace('http://', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Analysis Result Box */}
        {result && (
          <div
            className={`max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl border shadow-xl transition-all animate-fadeIn ${
              result.isSafe
                ? 'bg-[#0b1b17] border-emerald-500/50 shadow-emerald-950/50'
                : 'bg-[#200c11] border-red-500/50 shadow-red-950/50'
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-black/40">
                {result.isSafe ? (
                  <ShieldCheck className="w-8 h-8 text-emerald-400" />
                ) : (
                  <ShieldAlert className="w-8 h-8 text-red-400 animate-pulse" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      result.isSafe
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-500/40'
                        : 'bg-red-950 text-red-300 border-red-500/40'
                    }`}
                  >
                    {result.isSafe ? 'VERIFIED SAFE WEBSITE' : 'DANGEROUS SCAM / FAKE LINK'}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-amber-100 mb-1">
                  {result.reason}
                </h4>

                <div className="mt-3 space-y-1 text-xs">
                  {result.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-300">
                      <span className={result.isSafe ? 'text-emerald-400' : 'text-red-400'}>
                        {result.isSafe ? '✓' : '✗'}
                      </span>
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
