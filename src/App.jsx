import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import SEO from "./components/SEO";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import MoneyQuestSection from "./components/MoneyQuestSection";
import AvatarsSection from "./components/AvatarsSection";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <HelmetProvider>
      <SEO
        title="Nature Haven - Financial Literacy | Money Quest Adventure"
        description="Transform your financial future with Nature Haven's Money Quest. An engaging, gamified learning platform that teaches individuals essential money management skills through interactive adventures. Join thousands of people building financially smart."
        keywords="financial literacy, money management, finance app, teach people about money, financial education games, money quest, banking, savings for people, budgeting, financial skills for people, parenting finance, educational games, learn money skills"
        url="https://www.nurtureehaven.com/"
        image="/hero-section-logo.png"
        type="website"
        twitterHandle="@nurture_haven"
      />
      <div className="min-h-screen bg-[#F5EDE4]">
        <Header />
        <HeroSection />
        <MoneyQuestSection />
        <AvatarsSection />
        <Footer />
        <Analytics />
      </div>
    </HelmetProvider>
  );
}

export default App;
