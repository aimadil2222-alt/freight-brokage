import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Settings2, Phone, ShieldCheck } from 'lucide-react';
import { CompanyInfo } from '../types';

interface HeaderProps {
  companyInfo: CompanyInfo;
  onOpenEditModal?: () => void;
  onQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ companyInfo, onOpenEditModal, onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-950/20 border-b border-slate-800/80 py-3'
          : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/60 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Brand Name & Authority */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 shadow-md shadow-amber-500/20 font-black text-lg tracking-tighter transition-transform group-hover:scale-105 shrink-0">
              <span>GLB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors truncate max-w-[200px] sm:max-w-xs md:max-w-sm">
                {companyInfo.brandName}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-400">
                <span className="text-amber-400 font-semibold">{companyInfo.mcNumber}</span>
                <span className="text-slate-600">|</span>
                <span>USDOT #{companyInfo.usdotNumber}</span>
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-300">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="hover:text-white transition-colors"
            >
              About Us
            </a>
            <a
              href="#why-choose-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('why-choose-us');
              }}
              className="hover:text-white transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#compliance"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('compliance');
              }}
              className="hover:text-white transition-colors"
            >
              Compliance & Safety
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Actions (Get a Freight Quote & Direct Phone) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone.value}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800/60 hover:bg-slate-800 rounded-lg border border-slate-700/60 transition-colors"
              title="Call Direct Dispatch"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.phone.display}</span>
            </a>

            {onOpenEditModal && (
              <button
                type="button"
                onClick={onOpenEditModal}
                className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700/60 transition-colors"
                title="Edit info"
              >
                <Settings2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Edit</span>
              </button>
            )}

            <button
              type="button"
              onClick={onQuoteClick}
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-sm shadow-amber-400/20 transition-all duration-150 hover:shadow-md cursor-pointer"
            >
              <span>Get a Freight Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyInfo.phone.value}`}
              className="p-2 text-amber-400 bg-slate-800/80 border border-slate-700 rounded-lg"
              title="Call Direct Dispatch"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-800 flex flex-col gap-2">
            <div className="px-3 py-1.5 text-xs font-mono text-amber-400 flex items-center justify-between bg-slate-950/60 rounded-md">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{companyInfo.mcNumber}</span>
              </span>
              <span className="text-slate-400">USDOT #{companyInfo.usdotNumber}</span>
            </div>

            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('about');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              About Us
            </a>
            <a
              href="#why-choose-us"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('why-choose-us');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              Why Choose Us
            </a>
            <a
              href="#compliance"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('compliance');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              Compliance & Safety
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('services');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              Our Freight Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-3 py-2 text-base font-medium text-slate-200 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
            >
              Contact Us
            </a>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full text-center py-2.5 px-4 font-bold text-sm uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Get a Freight Quote
              </button>

              <a
                href={`tel:${companyInfo.phone.value}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 font-semibold text-sm text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {companyInfo.phone.display}</span>
              </a>

              {onOpenEditModal && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEditModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-medium text-slate-400 bg-slate-850 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors"
                >
                  <Settings2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>Customize Company Details</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
