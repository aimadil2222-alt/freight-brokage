import React, { useState, useEffect } from 'react';
import { X, RotateCcw, Check, Building2, ShieldCheck, MapPin } from 'lucide-react';
import { CompanyInfo } from '../types';
import { COMPANY_CONFIG } from '../data/companyConfig';

interface EditDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentInfo: CompanyInfo;
  onSave: (updated: Partial<CompanyInfo>) => void;
  onReset: () => void;
}

export const EditDetailsModal: React.FC<EditDetailsModalProps> = ({
  isOpen,
  onClose,
  currentInfo,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState({
    legalName: currentInfo.legalName,
    brandName: currentInfo.brandName,
    mcNumber: currentInfo.mcNumber,
    usdotNumber: currentInfo.usdotNumber,
    addressStreet: currentInfo.address.street,
    addressCityStateZip: currentInfo.address.cityStateZip,
    phone: currentInfo.phone.display,
    email: currentInfo.email.display,
  });

  useEffect(() => {
    if (isOpen) {
      setFormData({
        legalName: currentInfo.legalName,
        brandName: currentInfo.brandName,
        mcNumber: currentInfo.mcNumber,
        usdotNumber: currentInfo.usdotNumber,
        addressStreet: currentInfo.address.street,
        addressCityStateZip: currentInfo.address.cityStateZip,
        phone: currentInfo.phone.display,
        email: currentInfo.email.display,
      });
    }
  }, [isOpen, currentInfo]);

  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      legalName: formData.legalName || COMPANY_CONFIG.legalName,
      brandName: formData.brandName || COMPANY_CONFIG.brandName,
      mcNumber: formData.mcNumber || COMPANY_CONFIG.mcNumber,
      usdotNumber: formData.usdotNumber || COMPANY_CONFIG.usdotNumber,
      address: {
        street: formData.addressStreet || COMPANY_CONFIG.address.street,
        cityStateZip: formData.addressCityStateZip || COMPANY_CONFIG.address.cityStateZip,
        country: 'United States',
        full: `${formData.addressStreet || COMPANY_CONFIG.address.street}, ${formData.addressCityStateZip || COMPANY_CONFIG.address.cityStateZip}, United States`,
      },
      phone: {
        ...currentInfo.phone,
        display: formData.phone || COMPANY_CONFIG.phone.display,
        value: formData.phone.replace(/[^0-9+]/g, '') || COMPANY_CONFIG.phone.value,
      },
      email: {
        ...currentInfo.email,
        display: formData.email || COMPANY_CONFIG.email.display,
        value: formData.email || COMPANY_CONFIG.email.value,
      },
    });

    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 500);
  };

  const handleResetToDefaults = () => {
    onReset();
    setFormData({
      legalName: COMPANY_CONFIG.legalName,
      brandName: COMPANY_CONFIG.brandName,
      mcNumber: COMPANY_CONFIG.mcNumber,
      usdotNumber: COMPANY_CONFIG.usdotNumber,
      addressStreet: COMPANY_CONFIG.address.street,
      addressCityStateZip: COMPANY_CONFIG.address.cityStateZip,
      phone: COMPANY_CONFIG.phone.display,
      email: COMPANY_CONFIG.email.display,
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Building2 className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-base font-bold">Company Profile Information</h3>
              <p className="text-xs text-slate-400">Global Logistical Brokers LLC profile</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Legal Company Name
              </label>
              <input
                type="text"
                value={formData.legalName}
                onChange={(e) => setFormData({ ...formData, legalName: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Website / Brand Name
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
                MC Number
              </label>
              <input
                type="text"
                value={formData.mcNumber}
                onChange={(e) => setFormData({ ...formData, mcNumber: e.target.value })}
                className="w-full px-3.5 py-2 text-sm font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                USDOT Number
              </label>
              <input
                type="text"
                value={formData.usdotNumber}
                onChange={(e) => setFormData({ ...formData, usdotNumber: e.target.value })}
                className="w-full px-3.5 py-2 text-sm font-mono border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              Street Address
            </label>
            <input
              type="text"
              value={formData.addressStreet}
              onChange={(e) => setFormData({ ...formData, addressStreet: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              City, State ZIP
            </label>
            <input
              type="text"
              value={formData.addressCityStateZip}
              onChange={(e) => setFormData({ ...formData, addressCityStateZip: e.target.value })}
              className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Phone
              </label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Quick Helper Actions */}
          <div className="pt-2 flex items-center justify-end text-xs text-slate-500">
            <button
              type="button"
              onClick={handleResetToDefaults}
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Verified Info</span>
            </button>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm transition-colors cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-800" />
                  <span>Saved!</span>
                </>
              ) : (
                <span>Save Changes</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
