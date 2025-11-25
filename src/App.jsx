import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MoneyQuestSection from './components/MoneyQuestSection';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-[#F5EDE4]">
      <Header />
      <HeroSection />
      <MoneyQuestSection />
    </div>
  );
}

export default App;