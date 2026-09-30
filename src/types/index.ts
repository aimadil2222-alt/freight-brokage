export interface ContactChannel {
  label: string;
  value: string;
  display: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  legalName: string;
  brandName: string;
  mcNumber: string;
  usdotNumber: string;
  address: {
    street: string;
    cityStateZip: string;
    country: string;
    full: string;
  };
  phone: ContactChannel;
  email: ContactChannel;
  serviceArea: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  pickupLocation: string;
  deliveryLocation: string;
  pickupDate: string;
  equipmentType: string;
  commodity: string;
  weight: string;
  additionalDetails: string;
}
