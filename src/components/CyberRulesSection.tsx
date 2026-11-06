import React, { useState } from 'react';
import { CYBER_RULES } from '../data/cyberRulesData';
import { Shield, AlertTriangle, CheckCircle, ChevronDown, ChevronUp, Lock, ExternalLink, Zap } from 'lucide-react';

export const CyberRulesSection: React.FC = () => {
  const [expandedRule, setExpandedRule] = useState<string | null>("rule-1");

  const toggleRule = (id: string) => {
    setExpandedRule(prev => (prev === id ? null : id));
  };

  return (
    <section id="cyber-rules" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-gradient-to-b from-[#070a12] via-[#091024] to-[#070a12]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cyber Jagrukta Abhiyan • साइबर सुरक्षा निर्देश</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            5 Golden Rules to Protect Your Family’s Wealth This Festive Season
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            During Dhanteras and Diwali, cyber syndicates exploit festive euphoria with fake free gifts, duplicate websites, and UPI traps. Teach these 5 non-negotiable rules to every family member.
          </p>
        </div>

        {/* 5 Rules Accordion / Cards List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {CYBER_RULES.map((rule) => {
            const isExpanded = expandedRule === rule.id;

            return (
              <div
                key={rule.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0c142b] border-amber-400/50 shadow-xl shadow-amber-950/40'
                    : 'bg-[#0a0f1e]/80 border-zinc-800 hover:border-amber-500/30 hover:bg-[#0c1326]'
                }`}
              >
                {/* Header Bar */}
                <button
                  onClick={() => toggleRule(rule.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
                    {/* Number Badge */}
                    <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 font-black text-base flex items-center justify-center shadow-md">
                      {rule.number}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        <h3 className="font-bold text-base sm:text-lg text-amber-100">
                          {rule.title}
                        </h3>
                        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          {rule.badge}
                        </span>
                      </div>
                      <p className="text-xs text-amber-400/80 font-medium">
                        {rule.hindiSubtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-1 sm:mt-0 text-amber-300">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 border-t border-zinc-800/80 pt-4 space-y-4">
                    
                    {/* Summary & Threat Description */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 uppercase tracking-wider mb-1.5">
                          <AlertTriangle className="w-4 h-4 text-rose-400" />
                          <span>The Danger (How Scammers Attack)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                          {rule.dangerDesc}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-500/30">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400" />
                          <span>Safe Family Protocol (What You Must Do)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                          {rule.safeAction}
                        </p>
                      </div>
                    </div>

                    {/* Red Flags Checklist */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-zinc-700/60">
                      <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span>🚩</span> Tell-Tale Red Flags to Teach Parents & Relatives:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {rule.redFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-rose-400 font-bold">•</span>
                            <span>{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Real-World Case Study */}
                    <div className="p-3.5 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200/90 flex items-start gap-2.5">
                      <span className="text-base">📌</span>
                      <div>
                        <strong className="text-amber-300 font-semibold block mb-0.5">
                          Real Festive Case Example:
                        </strong>
                        <p className="text-amber-100/80">
                          {rule.realWorldScam}
                        </p>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

