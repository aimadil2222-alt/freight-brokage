import React from 'react';
import { ArrowRight, PhoneCall, ShieldCheck, MapPin, Truck, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import { CompanyInfo } from '../types';

interface HeroProps {
  companyInfo: CompanyInfo;
  onQuoteClick: () => void;
  onTalkToTeamClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ companyInfo, onQuoteClick, onTalkToTeamClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-slate-950 text-white">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Indicator & Authority Badges */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                <span>U.S. Freight Brokerage</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-xs font-mono font-medium text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-400 font-semibold">{companyInfo.mcNumber}</span>
                <span className="text-slate-600">|</span>
                <span>USDOT #{companyInfo.usdotNumber}</span>
              </div>
            </div>

            {/* Exact Required Primary Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-5 [text-wrap:balance]">
              Reliable Freight. Vetted Carriers. On-Time Delivery.
            </h1>

            {/* Exact Required Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 lg:mb-8 font-normal max-w-2xl">
              We connect shippers with reliable, qualified motor carriers to provide safe, efficient, and dependable transportation solutions across the United States.
            </p>

            {/* Mobile Written Box (Replaces picture with structured written details) */}
            <div className="block lg:hidden mb-8">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 space-y-3.5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Brokerage Credentials
                  </span>
                  <span className="text-xs font-mono text-slate-400">Active Authority</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">MC Authority</span>
                    <span className="font-mono font-bold text-amber-400 text-sm mt-0.5 block">{companyInfo.mcNumber}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 block text-[11px]">USDOT Number</span>
                    <span className="font-mono font-bold text-white text-sm mt-0.5 block">#{companyInfo.usdotNumber}</span>
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Nationwide Freight Coverage · All 48 States</span>
                </div>
              </div>
            </div>

            {/* Action Buttons (Primary CTA: GET A FREIGHT QUOTE) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-lg shadow-amber-400/20 transition-all duration-150 hover:shadow-amber-400/30 whitespace-nowrap cursor-pointer"
              >
                <span>GET A FREIGHT QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onTalkToTeamClick}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 active:bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-lg transition-all duration-150 whitespace-nowrap cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>TALK TO OUR TEAM</span>
              </button>
            </div>

            {/* Fact-based Trust Points */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-slate-400 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5">
                <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-300">Vetted Motor Carriers</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-300">MC-50890676 · DOT #7886113</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-medium text-slate-300">Nationwide Coverage</span>
              </div>
            </div>
          </div>

          {/* Desktop Written Box Column (Replaces picture with clean, professional written information boxes) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-7 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Brokerage Credentials & Authority
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {companyInfo.legalName}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              {/* Written Box: Authority Credentials */}
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Operating Authority
                  </span>
                  <span className="text-xl font-mono font-bold text-amber-400 mt-1 block">
                    {companyInfo.mcNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    Property Broker Authority
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    U.S. DOT Number
                  </span>
                  <span className="text-xl font-mono font-bold text-white mt-1 block">
                    #{companyInfo.usdotNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">
                    DOT Registered
                  </span>
                </div>
              </div>

              {/* Written Box: Service Territory */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Service Territory
                </span>
                <p className="text-sm font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>United States (Nationwide Coverage)</span>
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  Connecting shippers with qualified motor carriers across interstate and regional commercial freight lanes.
                </p>
              </div>

              {/* Written Box: Carrier Qualification Policy */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                  Carrier Compliance Standard
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We verify active operating authority, safety ratings, and valid certificate of insurance before assigning freight to any motor carrier.
                </p>
              </div>

              {/* Direct Dispatch Line Box */}
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-500/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                    Direct Dispatch
                  </span>
                  <a
                    href={`tel:${companyInfo.phone.value}`}
                    className="text-base font-bold text-white hover:text-amber-400 transition-colors"
                  >
                    {companyInfo.phone.display}
                  </a>
                </div>
                <button
                  type="button"
                  onClick={onQuoteClick}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  Quote
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
