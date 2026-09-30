import React from 'react';
import { Truck, MessageSquare, DollarSign, LifeBuoy, ArrowRight } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/companyConfig';

interface WhyChooseUsProps {
  onQuoteClick: () => void;
}

const pointIcons: Record<string, React.ReactNode> = {
  'reliable-carrier-network': <Truck className="w-6 h-6 text-amber-400" />,
  'fast-communication': <MessageSquare className="w-6 h-6 text-amber-400" />,
  'competitive-freight-solutions': <DollarSign className="w-6 h-6 text-amber-400" />,
  'shipment-support': <LifeBuoy className="w-6 h-6 text-amber-400" />,
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onQuoteClick }) => {
  return (
    <section id="why-choose-us" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Why Shippers Work With Us
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Why Choose Global Logistical Brokers
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Straightforward freight brokerage built around dependable execution, qualified capacity, and transparent communication.
          </p>
          <div className="mt-4 h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, index) => {
            return (
              <div
                key={point.id}
                className="group relative rounded-xl bg-slate-850 p-6 sm:p-7 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {pointIcons[point.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Standard of Service</span>
                  <span className="text-amber-400 font-semibold">&bull; Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Gen Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-850 border border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white">Looking for dependable carrier capacity?</h4>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              Get competitive freight options and responsive coordination for your next load.
            </p>
          </div>
          <button
            type="button"
            onClick={onQuoteClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>GET A FREIGHT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
