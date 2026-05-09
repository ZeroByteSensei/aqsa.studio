export interface Project {
  id: string;
  title: string;
  category: 'Instagram' | 'LinkedIn' | 'Campaigns' | 'Content';
  tag: string;
  platform: string;
  year: string;
  result: string;
  reach: string;
}

export const ALL_PROJECTS: Project[] = [
  { id: 'aurelio', title: 'Aurelio Skin', category: 'Instagram', tag: 'DTC Beauty', platform: 'Instagram · TikTok', year: '2025', result: '+412% follower growth', reach: '8.2M reach' },
  { id: 'northwave', title: 'Northwave Coffee', category: 'Content', tag: 'F&B', platform: 'Instagram · Reels', year: '2025', result: '2.4M organic reach', reach: '+184% saves' },
  { id: 'figment', title: 'Figment Studio', category: 'LinkedIn', tag: 'B2B SaaS', platform: 'LinkedIn', year: '2024', result: '5× inbound leads', reach: '1.1M impressions' },
  { id: 'paloma', title: 'Paloma & Co', category: 'Campaigns', tag: 'Lifestyle', platform: 'Multi-platform', year: '2025', result: '184% sales lift', reach: '3.6M reach' },
  { id: 'kaya', title: 'Kaya Wellness', category: 'Instagram', tag: 'Wellness', platform: 'Instagram · TikTok', year: '2024', result: '+250% engagement', reach: '5.4M reach' },
  { id: 'studio23', title: 'Studio 23', category: 'Content', tag: 'Fashion', platform: 'Instagram', year: '2025', result: '+92% saves', reach: '2.1M reach' },
  { id: 'ember', title: 'Ember Hospitality', category: 'Campaigns', tag: 'Hospitality', platform: 'Multi-platform', year: '2024', result: '12k bookings driven', reach: '4.8M reach' },
  { id: 'luma', title: 'Luma Athletica', category: 'Instagram', tag: 'Sportswear', platform: 'Instagram', year: '2025', result: '+318% follower growth', reach: '6.7M reach' },
  { id: 'north', title: 'North & Stone', category: 'LinkedIn', tag: 'B2B Services', platform: 'LinkedIn', year: '2024', result: '+340% inbound', reach: '890k impressions' },
  { id: 'verse', title: 'Verse Magazine', category: 'Content', tag: 'Editorial', platform: 'Instagram · TikTok', year: '2025', result: '+220% engagement', reach: '3.2M reach' },
  { id: 'saint', title: 'Saint Roma', category: 'Campaigns', tag: 'Lifestyle', platform: 'Multi-platform', year: '2024', result: '+162% sales lift', reach: '4.1M reach' },
  { id: 'atlas', title: 'Atlas Outfitters', category: 'Instagram', tag: 'Outdoor', platform: 'Instagram · YouTube', year: '2025', result: '+275% follower growth', reach: '5.8M reach' },
];

export const FILTERS = ['All', 'Instagram', 'LinkedIn', 'Campaigns', 'Content'] as const;
export type FilterType = typeof FILTERS[number];
