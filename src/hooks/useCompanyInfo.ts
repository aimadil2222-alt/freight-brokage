import { useState } from 'react';
import { CompanyInfo } from '../types';
import { COMPANY_CONFIG } from '../data/companyConfig';

const STORAGE_KEY = 'global_logistical_brokers_v3';

export function useCompanyInfo() {
  const [info, setInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.legalName && parsed.mcNumber) {
          return { ...COMPANY_CONFIG, ...parsed };
        }
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    return COMPANY_CONFIG;
  });

  const updateInfo = (newInfo: Partial<CompanyInfo>) => {
    setInfo((prev) => {
      const updated = { ...prev, ...newInfo };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      } catch (e) {
        console.warn('Could not save to localStorage', e);
      }
      return updated;
    });
  };

  const resetToDefaults = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn('Could not clear localStorage', e);
    }
    setInfo(COMPANY_CONFIG);
  };

  return {
    companyInfo: info,
    updateCompanyInfo: updateInfo,
    resetToDefaults,
  };
}
