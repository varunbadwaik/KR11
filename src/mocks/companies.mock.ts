import type { Company } from '../types';

export interface TeamCompanyMock {
  id: string;
  name: string;
  value: number;
  change: number;
  percentage: number;
  sector: string;
}

export interface CompanySummaryMock {
  name: string;
  sector: string;
  value: number;
  summary: string;
  percentage: number;
  riskLevel: string;
  keyFactors: string[];
}

export const mockCompanies: Company[] = [
  {
    id: 'reliance',
    symbol: 'RELIANCE',
    name: 'RELIANCE',
    sector: 'Energy - Telecom',
    coinValue: 2431,
    movementPercent: 0.76,
    movementDirection: 'UP',
    description: 'Large diversified company across energy, telecom, retail, and digital services.',
    riskLabel: 'Medium',
  },
  {
    id: 'tata-motors',
    symbol: 'TATAMOTORS',
    name: 'TATA MOTORS',
    sector: 'Automobile',
    coinValue: 740,
    movementPercent: -0.55,
    movementDirection: 'DOWN',
    description: 'Automobile company focused on passenger vehicles, EVs, and commercial vehicles.',
    riskLabel: 'High',
  },
  {
    id: 'zomato',
    symbol: 'ZOMATO',
    name: 'ZOMATO',
    sector: 'Food Tech',
    coinValue: 186,
    movementPercent: 1.25,
    movementDirection: 'UP',
    description: 'Food delivery and quick commerce platform with high growth potential.',
    riskLabel: 'High',
  },
  {
    id: 'ioc',
    symbol: 'IOC',
    name: 'IOC',
    sector: 'Oil & Gas',
    coinValue: 165,
    movementPercent: -0.72,
    movementDirection: 'DOWN',
  },
  {
    id: 'swiggy',
    symbol: 'SWIGGY',
    name: 'SWIGGY',
    sector: 'Food Tech',
    coinValue: 443,
    movementPercent: 4.32,
    movementDirection: 'UP',
  },
  {
    id: 'hdfc',
    symbol: 'HDFC',
    name: 'HDFC FINANCE',
    sector: 'Financial Services',
    coinValue: 1654,
    movementPercent: 0.76,
    movementDirection: 'UP',
    description: 'Large financial services company with strong retail and corporate presence.',
    riskLabel: 'Low',
  },
  {
    id: 'infosys',
    symbol: 'INFY',
    name: 'INFOSYS',
    sector: 'IT Services',
    coinValue: 1432,
    movementPercent: -0.58,
    movementDirection: 'DOWN',
    description: 'Global IT services and consulting company with strong digital capabilities.',
    riskLabel: 'Medium',
  },
  {
    id: 'google',
    symbol: 'Google',
    name: 'Google',
    sector: 'Internet Services',
    coinValue: 250,
    movementPercent: 1.92,
    movementDirection: 'UP',
    description:
      'Global technology giant specializing in internet services, search, and cloud computing.',
    riskLabel: 'Low',
  },
  {
    id: 'apple',
    symbol: 'Apple',
    name: 'Apple',
    sector: 'Consumer Electronics',
    coinValue: 250,
    movementPercent: -0.92,
    movementDirection: 'DOWN',
    description:
      'Global consumer electronics leader known for mobile devices and software services.',
    riskLabel: 'Low',
  },
  {
    id: 'adani-ports',
    symbol: 'ADANIPORTS',
    name: 'ADANI PORTS',
    sector: 'Infrastructure',
    coinValue: 892,
    movementPercent: 1.73,
    movementDirection: 'UP',
  },
];

export const mockTeamCompanies: TeamCompanyMock[] = [
  {
    id: 'reliance',
    name: 'Reliance',
    value: 250,
    change: 18.4,
    percentage: 0.76,
    sector: 'Energy - Telecom',
  },
  {
    id: 'tata-motors',
    name: 'Tata',
    value: 250,
    change: -4.1,
    percentage: -0.55,
    sector: 'Automobile',
  },
  {
    id: 'google',
    name: 'Google',
    value: 250,
    change: 4.8,
    percentage: 1.92,
    sector: 'Internet Services',
  },
  {
    id: 'infosys',
    name: 'Infosys',
    value: 250,
    change: -8.3,
    percentage: -0.58,
    sector: 'IT Services',
  },
  {
    id: 'apple',
    name: 'Apple',
    value: 250,
    change: -2.3,
    percentage: -0.92,
    sector: 'Consumer Electronics',
  },
  { id: 'zomato', name: 'ZOMATO', value: 250, change: 2.3, percentage: 1.25, sector: 'Food Tech' },
  { id: 'ioc', name: 'IOC', value: 250, change: -1.2, percentage: -0.72, sector: 'Oil & Gas' },
  { id: 'swiggy', name: 'SWIGGY', value: 250, change: 1.8, percentage: 4.32, sector: 'Food Tech' },
];

export const mockCompanySummaries: CompanySummaryMock[] = [
  {
    name: 'RELIANCE',
    sector: 'Energy - Telecom',
    value: 2431,
    summary: 'Large diversified company across energy, telecom, retail, and digital services.',
    percentage: 0.76,
    riskLevel: 'Medium',
    keyFactors: [
      'Crude oil prices',
      'Jio subscriber growth',
      'Retail expansion',
      'Quarterly earnings',
    ],
  },
  {
    name: 'TATA MOTORS',
    sector: 'Automobile',
    value: 740,
    summary: 'Automobile company focused on passenger vehicles, EVs, and commercial vehicles.',
    percentage: -0.55,
    riskLevel: 'High',
    keyFactors: ['EV market growth', 'Commodity prices', 'JLR performance', 'Domestic demand'],
  },
  {
    name: 'ZOMATO',
    sector: 'Food Tech',
    value: 186,
    summary: 'Food delivery and quick commerce platform with high growth potential.',
    percentage: 1.25,
    riskLevel: 'High',
    keyFactors: ['Order volume', 'Competition', 'Growth path', 'Quick commerce growth'],
  },
  {
    name: 'HDFC FINANCE',
    sector: 'Financial Services',
    value: 1654,
    summary: 'Large financial services company with strong retail and corporate presence.',
    percentage: 0.76,
    riskLevel: 'Low',
    keyFactors: ['Interest rates', 'Loan growth', 'Asset quality', 'Customer growth'],
  },
  {
    name: 'INFOSYS',
    sector: 'IT Services',
    value: 1432,
    summary: 'Global IT services and consulting company with strong digital capabilities.',
    percentage: -0.58,
    riskLevel: 'Medium',
    keyFactors: ['Deal wins', 'Client spending', 'Margin pressure', 'Attrition rates'],
  },
  {
    name: 'Google',
    sector: 'Internet Services',
    value: 250,
    summary:
      'Global technology giant specializing in search, advertising, cloud computing, and hardware.',
    percentage: 1.92,
    riskLevel: 'Low',
    keyFactors: [
      'Ad revenue growth',
      'AI search integration',
      'Cloud computing momentum',
      'Regulatory scrutiny',
    ],
  },
  {
    name: 'Apple',
    sector: 'Consumer Electronics',
    value: 250,
    summary:
      'Global consumer electronics leader known for premium devices, services, and software ecosystem.',
    percentage: -0.92,
    riskLevel: 'Low',
    keyFactors: [
      'iPhone shipments',
      'Services ecosystem growth',
      'Supply chain stability',
      'Hardware innovations',
    ],
  },
];

export const mockCompanyChart = [
  { time: '9:15', value: 2410 },
  { time: '10:00', value: 2418 },
  { time: '11:00', value: 2425 },
  { time: '12:00', value: 2420 },
  { time: '1:00', value: 2428 },
  { time: '2:00', value: 2431 },
  { time: '3:15', value: 2431 },
];
