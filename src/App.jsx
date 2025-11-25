import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MoneyQuestSection from './components/MoneyQuestSection';
import AvatarsSection from './components/AvatarsSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <Header />
      <HeroSection />
      <MoneyQuestSection />
      <AvatarsSection />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;