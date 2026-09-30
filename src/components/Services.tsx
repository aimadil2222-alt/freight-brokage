import React from 'react';
import {
  Truck,
  Box,
  Layers,
  ThermometerSnowflake,
  Shield,
  Zap,
  Clock,
  ArrowRight,
  CheckCircle,
  FileCheck
} from 'lucide-react';
import { FREIGHT_SERVICES } from '../data/companyConfig';

interface ServicesProps {
  onQuoteClick: () => void;
}

const serviceIcons: Record<string, React.ReactNode> = {
  ftl: <Truck className="w-6 h-6 text-amber-400" />,
  ltl: <Box className="w-6 h-6 text-amber-400" />,
  'dry-van': <Layers className="w-6 h-6 text-amber-400" />,
  reefer: <ThermometerSnowflake className="w-6 h-6 text-amber-400" />,
  flatbed: <Shield className="w-6 h-6 text-amber-400" />,
  hotshot: <Zap className="w-6 h-6 text-amber-400" />,
  'expedited-freight': <Clock className="w-6 h-6 text-amber-400" />,
};

export const Services: React.FC<ServicesProps> = ({ onQuoteClick }) => {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-28 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 mb-2">
            Transportation Solutions
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Our Freight Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We provide dependable transportation solutions across multiple equipment types and service levels to fit your freight requirements.
          </p>
          <div className="mt-4 h-1 w-16 bg-amber-400 rounded-full" />
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREIGHT_SERVICES.map((service, index) => {
            return (
              <div
                key={service.id}
                className="group relative rounded-xl bg-slate-850 p-6 sm:p-7 border border-slate-800 hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {serviceIcons[service.id]}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between text-xs font-medium text-slate-400">
                  <span>Nationwide Availability</span>
                  <button
                    type="button"
                    onClick={onQuoteClick}
                    className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    Quote &rarr;
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Written Callout Box (Pure written box with no pictures) */}
        <div className="mt-12 sm:mt-16 rounded-2xl border border-slate-800 bg-slate-850 p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Written Box: Key Capabilities */}
            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                Fast & Accurate Freight Quotes
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to move your next commercial shipment?
              </h4>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Submit your shipment details online or speak directly with our team. We match your lane requirements with qualified, insured motor carriers across the country.
              </p>

              {/* Service Attribute Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Dry Van, Reefer & Flatbed</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>FTL, LTL & Hotshot</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>48-State Coverage</span>
                </div>
              </div>
            </div>

            {/* Action Box */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3 justify-center">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-sm transition-colors cursor-pointer text-center"
              >
                <span>GET A FREIGHT QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-slate-400">
                Direct response · No obligation
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
