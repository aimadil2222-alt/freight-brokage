import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Truck,
  MapPin,
  Calendar,
  Building,
  User,
  Mail,
  Phone,
  Package,
  Weight,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { CompanyInfo, QuoteFormData } from '../types';

interface QuoteRequestProps {
  companyInfo: CompanyInfo;
}

const EQUIPMENT_OPTIONS = [
  'Dry Van',
  'Reefer (Refrigerated)',
  'Flatbed',
  'Hotshot',
  'Full Truckload (FTL)',
  'Less Than Truckload (LTL)',
  'Step Deck',
  'Power Only',
  'Expedited / Cargo Van',
  'Other Equipment'
];

export const QuoteRequest: React.FC<QuoteRequestProps> = ({ companyInfo }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    pickupLocation: '',
    deliveryLocation: '',
    pickupDate: '',
    equipmentType: 'Dry Van',
    commodity: '',
    weight: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone Number is required';
    if (!formData.pickupLocation.trim()) errs.pickupLocation = 'Pickup Location (City, State or ZIP) is required';
    if (!formData.deliveryLocation.trim()) errs.deliveryLocation = 'Delivery Location (City, State or ZIP) is required';
    if (!formData.pickupDate.trim()) errs.pickupDate = 'Pickup Date is required';
    if (!formData.commodity.trim()) errs.commodity = 'Commodity is required';
    if (!formData.weight.trim()) errs.weight = 'Estimated Weight is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = Object.keys(errors)[0];
      const el = document.getElementById(firstError);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    // Frontend-only submission with realistic settlement
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        pickupLocation: '',
        deliveryLocation: '',
        pickupDate: '',
        equipmentType: 'Dry Van',
        commodity: '',
        weight: '',
        additionalDetails: '',
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="quote" className="py-16 sm:py-20 lg:py-28 bg-slate-950 text-white relative border-b border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5" />
            <span>Fast, Responsive Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Request a Freight Quote
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Submit your shipment specifications below. Our brokerage team will promptly review your lane requirements and contact you with competitive freight options.
          </p>
          <div className="mt-4 h-1 w-16 bg-amber-400 rounded-full mx-auto" />
        </div>

        {/* Lead Gen Form Card */}
        <div className="bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl p-6 sm:p-8 md:p-10">
          {isSubmitted ? (
            <div className="py-12 px-4 text-center space-y-5 max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold text-white">Quote Request Received!</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Thank you for contacting <strong className="text-white">{companyInfo.legalName}</strong>. Our dispatch team has received your shipment specifications and will reach out shortly.
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400">
                For immediate assistance, you can also call our direct line at{' '}
                <a href={`tel:${companyInfo.phone.value}`} className="text-amber-400 font-semibold hover:underline">
                  {companyInfo.phone.display}
                </a>.
              </div>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer"
              >
                Submit Another Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Group 1: Contact & Company Information */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>1. Shipper / Contact Information</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Company Name <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. ACME Logistics Inc."
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.companyName
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                    </div>
                    {errors.companyName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. dispatch@acme.com"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (555) 000-0000"
                        className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 2: Shipment Route & Date */}
              <div className="pt-2 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>2. Lane & Timing</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {/* Pickup Location */}
                  <div>
                    <label htmlFor="pickupLocation" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Pickup Location <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="pickupLocation"
                      type="text"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      placeholder="City, State or ZIP"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.pickupLocation
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.pickupLocation && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.pickupLocation}
                      </p>
                    )}
                  </div>

                  {/* Delivery Location */}
                  <div>
                    <label htmlFor="deliveryLocation" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Delivery Location <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="deliveryLocation"
                      type="text"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      placeholder="City, State or ZIP"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.deliveryLocation
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.deliveryLocation && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.deliveryLocation}
                      </p>
                    )}
                  </div>

                  {/* Pickup Date */}
                  <div>
                    <label htmlFor="pickupDate" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Pickup Date <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="pickupDate"
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.pickupDate
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.pickupDate && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.pickupDate}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 3: Equipment & Cargo Details */}
              <div className="pt-2 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  <span>3. Freight & Equipment Specifications</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  {/* Equipment Type */}
                  <div>
                    <label htmlFor="equipmentType" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Equipment Type <span className="text-amber-400">*</span>
                    </label>
                    <select
                      id="equipmentType"
                      value={formData.equipmentType}
                      onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-colors"
                    >
                      {EQUIPMENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Commodity */}
                  <div>
                    <label htmlFor="commodity" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Commodity <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="commodity"
                      type="text"
                      value={formData.commodity}
                      onChange={(e) => setFormData({ ...formData, commodity: e.target.value })}
                      placeholder="e.g. Palletized Goods / Machinery"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.commodity
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.commodity && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.commodity}
                      </p>
                    )}
                  </div>

                  {/* Weight */}
                  <div>
                    <label htmlFor="weight" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Weight <span className="text-amber-400">*</span>
                    </label>
                    <input
                      id="weight"
                      type="text"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      placeholder="e.g. 42,000 lbs"
                      className={`w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-colors ${
                        errors.weight
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-800 focus:border-amber-400 focus:ring-amber-400'
                      }`}
                    />
                    {errors.weight && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.weight}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Group 4: Additional Details */}
              <div className="pt-2 border-t border-slate-800">
                <label htmlFor="additionalDetails" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Additional Details
                </label>
                <textarea
                  id="additionalDetails"
                  rows={3}
                  value={formData.additionalDetails}
                  onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                  placeholder="Special instructions, liftgate requirement, tarping, dimensions, dock hours, or delivery notes..."
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-400 transition-colors"
                />
              </div>

              {/* Submit Button (Exact text: REQUEST A QUOTE) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded-lg shadow-lg shadow-amber-400/20 transition-all duration-150 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Quote Request...</span>
                  ) : (
                    <>
                      <span>REQUEST A QUOTE</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="mt-3 text-xs text-slate-400">
                  {companyInfo.legalName} · Direct freight quotes across the United States.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </section>
  );
};
