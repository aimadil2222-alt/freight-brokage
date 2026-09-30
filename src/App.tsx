/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useCompanyInfo } from './hooks/useCompanyInfo';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ComplianceSafety } from './components/ComplianceSafety';
import { Services } from './components/Services';
import { QuoteRequest } from './components/QuoteRequest';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { EditDetailsModal } from './components/EditDetailsModal';
import { Settings2 } from 'lucide-react';

export default function App() {
  const { companyInfo, updateCompanyInfo, resetToDefaults } = useCompanyInfo();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const scrollToQuote = () => {
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = quoteSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
      const nameInput = document.getElementById('fullName');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 600);
      }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* Header / Navigation with Primary "GET A FREIGHT QUOTE" CTA */}
      <Header
        companyInfo={companyInfo}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onQuoteClick={scrollToQuote}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Homepage Hero Section */}
        <Hero
          companyInfo={companyInfo}
          onQuoteClick={scrollToQuote}
          onTalkToTeamClick={scrollToContact}
        />

        {/* 2. About Us Section */}
        <About
          companyInfo={companyInfo}
          onQuoteClick={scrollToQuote}
        />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs onQuoteClick={scrollToQuote} />

        {/* 4. Carrier Compliance & Safety Section */}
        <ComplianceSafety
          companyInfo={companyInfo}
          onQuoteClick={scrollToQuote}
        />

        {/* 5. Freight Services Section */}
        <Services onQuoteClick={scrollToQuote} />

        {/* 6. Request a Freight Quote (Lead-Gen Form) */}
        <QuoteRequest companyInfo={companyInfo} />

        {/* 7. Contact Us Section */}
        <Contact
          companyInfo={companyInfo}
          onQuoteClick={scrollToQuote}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        companyInfo={companyInfo}
        onOpenEditModal={() => setIsEditModalOpen(true)}
        onQuoteClick={scrollToQuote}
      />

      {/* Interactive Modal to adjust details */}
      <EditDetailsModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        currentInfo={companyInfo}
        onSave={updateCompanyInfo}
        onReset={resetToDefaults}
      />

      {/* Discreet floating helper button in bottom corner for quick access */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsEditModalOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-full shadow-lg shadow-amber-400/25 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
          title="Quickly adjust company profile details"
        >
          <Settings2 className="w-3.5 h-3.5" />
          <span>Company Info</span>
        </button>
      </div>
    </div>
  );
}
