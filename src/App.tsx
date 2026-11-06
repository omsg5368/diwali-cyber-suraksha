import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { FestiveHero } from './components/FestiveHero';
import { VirtualDiyaStage } from './components/VirtualDiyaStage';
import { GreetingCardStudio } from './components/GreetingCardStudio';
import { CyberRulesSection } from './components/CyberRulesSection';
import { AuthorizedStorefronts } from './components/AuthorizedStorefronts';
import { UrlSafetyChecker } from './components/UrlSafetyChecker';
import { ScamSimulatorQuiz } from './components/ScamSimulatorQuiz';
import { EmergencyResponse } from './components/EmergencyResponse';
import { FireworksCanvas } from './components/FireworksCanvas';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#070a12] text-amber-50 selection:bg-amber-500 selection:text-slate-950 flex flex-col font-sans">
      {/* Sticky Navbar */}
      <Navbar soundEnabled={soundEnabled} setSoundEnabled={setSoundEnabled} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Festive Dual Greeting Hero */}
        <FestiveHero soundEnabled={soundEnabled} />

        {/* Interactive Virtual Diya Lighting Stage */}
        <VirtualDiyaStage soundEnabled={soundEnabled} />

        {/* Personalized Family Greeting Card Studio & WhatsApp Sharing */}
        <GreetingCardStudio soundEnabled={soundEnabled} />

        {/* Festive Cyber Suraksha: 5 Golden Rules */}
        <CyberRulesSection />

        {/* Authorized Platforms (Amazon, Flipkart, Myntra) Directory */}
        <AuthorizedStorefronts />

        {/* Interactive Link & Website Safety Inspector */}
        <UrlSafetyChecker soundEnabled={soundEnabled} />

        {/* Spot the Scam: Interactive Family Quiz */}
        <ScamSimulatorQuiz soundEnabled={soundEnabled} />

        {/* National Emergency Protocol (1930 & Golden Hour) */}
        <EmergencyResponse />
      </main>

      {/* Floating Eco-Friendly Firecracker Trigger */}
      <FireworksCanvas soundEnabled={soundEnabled} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
