export interface Campaign {
  id: string;
  brandName: string;
  brandLogo: string;
  campaignImage: string;
  title: string;
  description: string;
  payoutType: 'barter' | 'refund' | 'fixed';
  payoutAmount?: number;
  totalSlots: number;
  filledSlots: number;
  category: string;
  requirements: string[];
}

export type Theme = 'light' | 'dark';