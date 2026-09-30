import React from 'react';
import { ShieldCheck, FileCheck, Truck, AlertCircle, ArrowRight } from 'lucide-react';
import { CompanyInfo } from '../types';

interface ComplianceSafetyProps {
  companyInfo: CompanyInfo;
  onQuoteClick: () => void;
}

export const ComplianceSafety: React.FC<ComplianceSafetyProps> = ({ companyInfo, onQuoteClick }) => {
  return (
    <section id="compliance" className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Required Statement */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Standards & Verification</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
              Carrier Compliance & Safety
            </h2>

            <div className="h-1 w-16 bg-amber-400 rounded-full" />

            {/* Exact Required Wording */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We work with properly authorized and insured motor carriers and review carrier credentials before assigning freight. Our goal is to provide shippers with dependable transportation while maintaining a strong focus on safety, compliance, and professionalism.
            </p>

            {/* Highlighted Verified Brokerage Information */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Official Brokerage Authority Details
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Operating Authority
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-amber-400 mt-1 block">
                    {companyInfo.mcNumber}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 block">
                    Federal Motor Carrier Safety Administration
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    U.S. DOT Number
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white mt-1 block">
                    USDOT #{companyInfo.usdotNumber}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5 block">
                    Department of Transportation Registered
                  </span>
                </div>
              </div>

              <div className="text-xs text-slate-400 flex items-start gap-2 pt-1">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  Registered legal entity: <strong className="text-white">{companyInfo.legalName}</strong>. Service area covers nationwide freight shipping across the United States.
                </span>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                <span>GET A FREIGHT QUOTE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Compliance Breakdown */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-400" />
                <span>Our Carrier Review Process</span>
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Active Operating Authority</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Verification of valid MC/DOT common or contract motor carrier authority.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Active Insurance Confirmation</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Review of Auto Liability and Cargo Insurance coverage directly on file.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80">
                  <div className="w-7 h-7 rounded-md bg-amber-400/10 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Safety Status & Performance</h4>
                    <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Screening motor carrier safety data and inspection records prior to load assignment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 border-t border-slate-800 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Strict adherence to DOT/FMCSA freight brokerage regulations.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
