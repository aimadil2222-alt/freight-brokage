import { CompanyInfo, ServiceItem } from '../types';

export const COMPANY_CONFIG: CompanyInfo = {
  legalName: 'Global Logistical Brokers LLC',
  brandName: 'Global Logistical Brokers',
  mcNumber: 'MC-50890676',
  usdotNumber: '7886113',
  address: {
    street: '1030 Ansel Rd Apt 1',
    cityStateZip: 'Cleveland, OH 44103',
    country: 'United States',
    full: '1030 Ansel Rd Apt 1, Cleveland, OH 44103, United States',
  },
  phone: {
    label: 'Direct Brokerage & Dispatch',
    value: '+19519656496',
    display: '(951) 965-6496',
  },
  email: {
    label: 'Brokerage Inquiries & Dispatch',
    value: 'glbrokersllc@gmail.com',
    display: 'glbrokersllc@gmail.com',
  },
  serviceArea: 'United States',
};

export const FREIGHT_SERVICES: ServiceItem[] = [
  {
    id: 'ftl',
    title: 'Full Truckload (FTL)',
    description:
      'Dedicated point-to-point truckload capacity for shipments requiring an exclusive trailer, direct transit, and scheduled delivery times across nationwide lanes.',
  },
  {
    id: 'ltl',
    title: 'Less Than Truckload (LTL)',
    description:
      'Cost-effective freight coordination for palletized or boxed shipments that do not require an entire trailer, optimized for rate efficiency and safety.',
  },
  {
    id: 'dry-van',
    title: 'Dry Van',
    description:
      'Standard enclosed 53ft trailer transportation protecting general commercial freight, packaged goods, and manufactured materials from weather and road elements.',
  },
  {
    id: 'reefer',
    title: 'Reefer',
    description:
      'Temperature-controlled refrigerated and heated trailers with verified continuous temperature monitoring for perishable food, beverage, and sensitive cargo.',
  },
  {
    id: 'flatbed',
    title: 'Flatbed',
    description:
      'Open-deck trailers for oversized cargo, industrial machinery, building materials, and equipment requiring side or crane loading and secure strapping/tarping.',
  },
  {
    id: 'hotshot',
    title: 'Hotshot',
    description:
      'Agile medium-duty truck and flatbed trailer setups ideal for rapid delivery of smaller, time-critical industrial loads without the cost of a full semi.',
  },
  {
    id: 'expedited-freight',
    title: 'Expedited Freight',
    description:
      'Priority direct-drive and team driver dispatch for mission-critical, time-sensitive shipments that require non-stop transit and immediate arrival.',
  },
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'reliable-carrier-network',
    title: 'Reliable Carrier Network',
    description:
      'We work with qualified and properly authorized motor carriers to help provide dependable transportation solutions.',
  },
  {
    id: 'fast-communication',
    title: 'Fast Communication',
    description:
      'Our team provides responsive communication and keeps customers informed throughout the shipment process.',
  },
  {
    id: 'competitive-freight-solutions',
    title: 'Competitive Freight Solutions',
    description:
      'We work to find transportation solutions that meet each customer’s specific shipping requirements.',
  },
  {
    id: 'shipment-support',
    title: 'Shipment Support',
    description:
      'From booking to delivery, our team remains available to help coordinate and support each shipment.',
  },
];
