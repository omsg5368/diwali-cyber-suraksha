import React, { useState } from 'react';
import { SCAM_QUIZ_QUESTIONS } from '../data/scamQuizData';
import { Sparkles, Shield, AlertTriangle, CheckCircle2, XCircle, RotateCcw, Share2, Award } from 'lucide-react';
import { playSuccessChime, playWarningBeep, playTempleChime } from '../utils/audio';
import { triggerVictoryConfetti, triggerDiwaliCracker } from '../utils/confetti';

interface ScamSimulatorQuizProps {
  soundEnabled: boolean;
}

export const ScamSimulatorQuiz: React.FC<ScamSimulatorQuizProps> = ({ soundEnabled }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userChoice, setUserChoice] = useState<boolean | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = SCAM_QUIZ_QUESTIONS[currentIdx];

  const handleAnswer = (choiceIsScam: boolean) => {
    if (answered) return;
    setUserChoice(choiceIsScam);
    setAnswered(true);

    const isCorrect = choiceIsScam === currentQ.isScam;
    if (isCorrect) {
      setScore(prev => prev + 1);
      if (soundEnabled) playSuccessChime();
    } else {
      if (soundEnabled) playWarningBeep();
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < SCAM_QUIZ_QUESTIONS.length) {
      setCurrentIdx(prev => prev + 1);
      setAnswered(false);
      setUserChoice(null);
    } else {
      setQuizFinished(true);
      if (soundEnabled) playTempleChime();
      triggerVictoryConfetti();
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setScore(0);
    setAnswered(false);
    setUserChoice(null);
    setQuizFinished(false);
  };

  const handleShareScore = () => {
    const text = encodeURIComponent(
      `🛡️ *Festive Cyber Safety Quiz Result!* 🛡️\nI scored ${score}/${SCAM_QUIZ_QUESTIONS.length} on the Dhanteras & Diwali Family Cyber Suraksha test.\nTest your family's cyber safety score and protect against fake shopping links & UPI scams: Happy & Safe Diwali! 🪔✨`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <section id="scam-quiz" className="py-14 sm:py-20 relative border-t border-amber-500/20 bg-[#070a12]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Interactive Scam Simulator • साइबर परीक्षा</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cinzel'] tracking-tight gold-gradient-text mb-3">
            Spot the Scam: Test Your Family's Cyber Vigilance
          </h2>
          <p className="text-sm sm:text-base text-amber-100/70">
            Can your parents, kids, or relatives spot the difference between an authentic festive offer and a predatory cyber scam? Test your instincts below!
          </p>
        </div>

        {!quizFinished ? (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0e162b] to-[#090f1e] border border-amber-500/30 shadow-2xl">
            
            {/* Quiz Progress & Question Meta */}
            <div className="flex items-center justify-between mb-6 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
                  Question {currentIdx + 1} of {SCAM_QUIZ_QUESTIONS.length}
                </span>
                <span className="text-sm font-semibold text-zinc-300">
                  Scenario: {currentQ.scenario}
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-800 border border-zinc-700 text-xs font-mono text-amber-200">
                Channel: {currentQ.channel}
              </span>
            </div>

            {/* Realistic Scenario Mockup Box */}
            <div className="mb-6 p-5 sm:p-6 rounded-2xl bg-slate-950/90 border border-zinc-800 font-sans shadow-inner">
              <div className="flex items-center gap-2.5 text-xs text-zinc-400 mb-3 border-b border-zinc-800/80 pb-2">
                <span className="font-bold text-amber-300">From:</span>
                <span>{currentQ.sender}</span>
              </div>

              <div className="text-xs sm:text-sm text-amber-50 whitespace-pre-line leading-relaxed font-mono bg-black/40 p-4 rounded-xl border border-zinc-800/60">
                {currentQ.messageText}
              </div>
            </div>

            {/* Question prompt */}
            <p className="text-center font-bold text-base sm:text-lg text-amber-200 mb-5">
              Is this message a <span className="text-rose-400">CYBER SCAM</span> or a <span className="text-emerald-400">GENUINE OFFER</span>?
            </p>

            {/* Answer Buttons */}
            {!answered ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-4">
                <button
                  onClick={() => handleAnswer(true)}
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-red-700 hover:from-rose-500 hover:to-red-600 text-white font-bold text-sm shadow-lg shadow-red-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <AlertTriangle className="w-4 h-4" />
                  <span>🚨 It's a SCAM!</span>
                </button>

                <button
                  onClick={() => handleAnswer(false)}
                  className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-sm shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>✅ Genuine / Safe</span>
                </button>
              </div>
            ) : (
              /* Answer Feedback Card */
              <div className="space-y-4 animate-fadeIn">
                <div
                  className={`p-4 sm:p-5 rounded-2xl border ${
                    userChoice === currentQ.isScam
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-100'
                      : 'bg-red-950/40 border-red-500/50 text-red-100'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-base mb-1">
                    {userChoice === currentQ.isScam ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-emerald-300">Correct Analysis! You nailed it.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-red-400" />
                        <span className="text-red-300">Incorrect! Here's why you must be careful:</span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 mt-2 leading-relaxed">
                    {currentQ.correctExplanation}
                  </p>

                  {/* Red flags */}
                  {currentQ.cyberRedFlags.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-zinc-800">
                      <span className="text-[11px] font-bold text-amber-300 uppercase block mb-1">
                        Key Red Flags Detected:
                      </span>
                      <ul className="text-xs space-y-1 text-slate-300">
                        {currentQ.cyberRedFlags.map((flag, idx) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <span className="text-rose-400">•</span>
                            <span>{flag}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-3 p-2.5 rounded-lg bg-black/40 text-xs text-amber-200 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>Family Safety Rule:</strong> {currentQ.safetyTip}</span>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    {currentIdx + 1 < SCAM_QUIZ_QUESTIONS.length ? 'Next Question →' : 'View Final Score & Certificate 🏆'}
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Final Score & Certified Badge Screen */
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#11192e] via-[#0d1424] to-[#070a12] border-2 border-amber-400/60 shadow-2xl text-center animate-gold-glow">
            <span className="text-5xl block mb-3 animate-bounce">🏆🪔</span>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cinzel'] gold-gradient-text mb-2">
              Cyber Surakshit Parivar Certificate
            </h3>
            <p className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-4">
              Festive Cybersecurity Readiness Verified
            </p>

            <div className="inline-block p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 mb-6">
              <span className="text-3xl sm:text-4xl font-black text-amber-300 block font-mono">
                {score} / {SCAM_QUIZ_QUESTIONS.length}
              </span>
              <span className="text-xs text-zinc-400 mt-1 block">
                {score === 5 ? 'Perfect 100% Score! Your family is fully armored against festive cyber fraud.' : 'Great job! Review the red flags above to ensure 100% safety.'}
              </span>
            </div>

            {/* Certificate Details */}
            <p className="text-sm text-amber-100/80 max-w-lg mx-auto mb-6 leading-relaxed">
              Awarded in honor of Shubh Dhanteras & Deepavali to empower your family against fraudulent shopping portals, WhatsApp lottery forwards, and UPI traps.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleShareScore}
                className="py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg transition-all flex items-center gap-2 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                <span>Share Score with Family on WhatsApp</span>
              </button>

              <button
                onClick={handleRestart}
                className="py-3 px-5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-amber-200 font-semibold text-xs sm:text-sm border border-zinc-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Retake Quiz</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

