import React from 'react';
import { ShieldCheck, MapPin, Building2, CheckCircle2, ArrowRight, Phone, Mail, FileCheck } from 'lucide-react';
import { CompanyInfo } from '../types';

interface AboutProps {
  companyInfo: CompanyInfo;
  onQuoteClick: () => void;
}

export const About: React.FC<AboutProps> = ({ companyInfo, onQuoteClick }) => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-600 mb-2">
            <span>Company Profile</span>
            <span className="font-mono text-slate-500 font-normal">
              · {companyInfo.mcNumber}
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            About {companyInfo.legalName}
          </h2>
          <div className="mt-4 h-1 w-16 bg-amber-500 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Required Exact Text & Verified Attributes */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-medium">
              Global Logistical Brokers LLC is a U.S.-based freight brokerage focused on connecting shippers with dependable transportation providers. We coordinate reliable freight solutions while maintaining clear communication, professionalism, and attention to each shipment’s requirements.
            </p>

            {/* Company Credentials Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <Building2 className="w-4 h-4 text-amber-600" />
                  <span>Brokerage Authority</span>
                </div>
                <div className="text-sm font-bold text-slate-900 font-mono">
                  {companyInfo.mcNumber}
                </div>
                <div className="text-xs text-slate-600 font-mono mt-0.5">
                  USDOT #{companyInfo.usdotNumber}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Service Area</span>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {companyInfo.serviceArea}
                </div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Headquartered in Cleveland, Ohio
                </div>
              </div>
            </div>

            {/* Core Commitments */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Our Operational Principles
              </div>
              <div className="space-y-2.5 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Clear & Direct Communication:</strong> Consistent updates from dispatch coordination through delivery confirmation.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Qualified Carriers:</strong> We verify motor carrier credentials and operating status prior to dispatch.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>Dedicated Shipment Care:</strong> Attentive load coordination tailored to your specific freight requirements.</span>
                </div>
              </div>
            </div>

            {/* CTA inside About */}
            <div className="pt-4">
              <button
                type="button"
                onClick={onQuoteClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm cursor-pointer"
              >
                <span>Request a Freight Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Written Information Card (Replaces picture with pure written box) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7 shadow-sm space-y-5">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Official Entity Information
                </span>
                <h3 className="text-lg font-bold text-slate-950 mt-0.5">
                  {companyInfo.legalName}
                </h3>
              </div>

              {/* Written Box: Physical Office */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <MapPin className="w-4 h-4 text-amber-600" />
                  <span>Headquarters & Mailing Address</span>
                </div>
                <p className="text-sm font-semibold text-slate-900 leading-snug pt-0.5">
                  {companyInfo.address.street}
                </p>
                <p className="text-sm text-slate-600 leading-snug">
                  {companyInfo.address.cityStateZip}, {companyInfo.address.country}
                </p>
              </div>

              {/* Written Box: Regulatory Credentials */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 uppercase tracking-wider text-[11px] block">FMCSA MC Authority</span>
                  <span className="text-sm font-mono font-bold text-slate-900 mt-0.5 block">{companyInfo.mcNumber}</span>
                  <span className="text-[11px] text-emerald-600 font-medium mt-0.5 block">Authorized Broker</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 uppercase tracking-wider text-[11px] block">USDOT Registration</span>
                  <span className="text-sm font-mono font-bold text-slate-900 mt-0.5 block">#{companyInfo.usdotNumber}</span>
                  <span className="text-[11px] text-slate-500 mt-0.5 block">DOT Registered</span>
                </div>
              </div>

              {/* Written Box: Operating Scope */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                  <FileCheck className="w-4 h-4 text-amber-600" />
                  <span>Operations & Compliance</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-0.5">
                  We maintain strict adherence to federal motor carrier safety standards and cargo insurance verification across all freight assignments.
                </p>
              </div>

              {/* Quick Contact Prompt Banner */}
              <div className="p-4 rounded-xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-200">Need freight moved?</p>
                  <p className="text-xs text-slate-400">Call our dispatch desk directly.</p>
                </div>
                <a
                  href={`tel:${companyInfo.phone.value}`}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  {companyInfo.phone.display} &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
