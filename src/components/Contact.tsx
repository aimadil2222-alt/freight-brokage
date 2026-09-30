import React, { useState } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { CompanyInfo } from '../types';

interface ContactProps {
  companyInfo: CompanyInfo;
  onQuoteClick: () => void;
}

export const Contact: React.FC<ContactProps> = ({ companyInfo, onQuoteClick }) => {
  const [quickMessage, setQuickMessage] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickMessage.name || !quickMessage.email || !quickMessage.message) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setQuickMessage({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-600 mb-2">
            Direct Communication
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight [text-wrap:balance]">
            Contact Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Reach out to our brokerage team by phone, email, or through our quote request form. We are ready to assist with your transportation requirements.
          </p>
          <div className="mt-4 h-1 w-16 bg-amber-500 rounded-full" />
        </div>

        {/* 3 Prominent Required Action Buttons (CALL US, EMAIL US, GET A FREIGHT QUOTE) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href={`tel:${companyInfo.phone.value}`}
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-sm border border-slate-800 transition-all hover:shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>CALL US</span>
          </a>

          <a
            href={`mailto:${companyInfo.email.value}`}
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-sm border border-slate-800 transition-all hover:shadow-md cursor-pointer"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>EMAIL US</span>
          </a>

          <button
            type="button"
            onClick={onQuoteClick}
            className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20 transition-all cursor-pointer"
          >
            <span>GET A FREIGHT QUOTE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                  Legal Company Name
                </span>
                <h3 className="text-xl font-bold text-slate-950">
                  {companyInfo.legalName}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 mt-1.5">
                  <span className="text-amber-600 font-bold">{companyInfo.mcNumber}</span>
                  <span>|</span>
                  <span>USDOT #{companyInfo.usdotNumber}</span>
                </div>
              </div>

              {/* Physical Business Address */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Business Address
                  </span>
                  <p className="text-sm font-semibold text-slate-900 leading-snug">
                    {companyInfo.address.street}
                  </p>
                  <p className="text-sm text-slate-600 leading-snug">
                    {companyInfo.address.cityStateZip}
                  </p>
                  <p className="text-sm text-slate-600 leading-snug">
                    {companyInfo.address.country}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Phone
                  </span>
                  <a
                    href={`tel:${companyInfo.phone.value}`}
                    className="text-base font-bold text-slate-950 hover:text-amber-600 transition-colors"
                  >
                    {companyInfo.phone.display}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Direct line for freight inquiries and carrier dispatch
                  </span>
                </div>
              </div>

              {/* Email */}
              <div className="pt-4 border-t border-slate-100 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5">
                    Email
                  </span>
                  <a
                    href={`mailto:${companyInfo.email.value}`}
                    className="text-base font-bold text-slate-950 hover:text-blue-700 transition-colors break-all"
                  >
                    {companyInfo.email.display}
                  </a>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    General brokerage correspondence and rate confirmation
                  </span>
                </div>
              </div>

              {/* Service Area */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Service Area: <strong>{companyInfo.serviceArea}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Inquiries Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 md:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950 mb-2">Send a Direct Message</h3>
              <p className="text-sm text-slate-600 mb-6">
                Have a general inquiry or need to connect with our brokerage team? Fill in the details below.
              </p>

              {isSent ? (
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Message Sent Successfully</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Thank you for reaching out to {companyInfo.legalName}. Our team will review your message and reply promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSent(false)}
                    className="text-xs font-semibold text-slate-800 underline mt-2"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={quickMessage.name}
                        onChange={(e) => setQuickMessage({ ...quickMessage, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={quickMessage.email}
                        onChange={(e) => setQuickMessage({ ...quickMessage, email: e.target.value })}
                        placeholder="shipper@example.com"
                        className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={quickMessage.phone}
                      onChange={(e) => setQuickMessage({ ...quickMessage, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={quickMessage.message}
                      onChange={(e) => setQuickMessage({ ...quickMessage, message: e.target.value })}
                      placeholder="How can our freight team assist you today?"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg bg-slate-50 border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
