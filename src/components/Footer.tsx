import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { CompanyInfo } from '../types';

interface FooterProps {
  companyInfo: CompanyInfo;
  onOpenEditModal?: () => void;
  onQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ companyInfo, onOpenEditModal, onQuoteClick }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
                GLB
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block">
                  {companyInfo.legalName}
                </span>
                <span className="text-xs text-amber-400 font-mono font-semibold">
                  {companyInfo.mcNumber} | USDOT #{companyInfo.usdotNumber}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Connecting shippers with reliable, qualified motor carriers to provide safe, efficient, and dependable transportation solutions across the United States.
            </p>

            {/* Exact Required Business Address */}
            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>{companyInfo.address.full}</span>
            </div>
          </div>

          {/* Navigation Links: Home, About Us, Services, Request a Quote, Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('services')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="text-amber-400 hover:text-amber-300 font-semibold transition-colors cursor-pointer"
                >
                  Request a Quote
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-amber-400 transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Contact & Authority
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`tel:${companyInfo.phone.value}`}
                  className="hover:text-white transition-colors font-medium text-sm text-white"
                >
                  {companyInfo.phone.display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${companyInfo.email.value}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {companyInfo.email.display}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1 font-mono text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>MC-50890676 | USDOT #7886113</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={onQuoteClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Get a Freight Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 {companyInfo.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono text-slate-400">
              Service Area: {companyInfo.serviceArea}
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
