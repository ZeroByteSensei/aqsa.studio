export interface Project {
  id: string;
  title: string;
  category: 'Instagram' | 'LinkedIn' | 'Campaigns' | 'Content' | 'Web';
  tag: string;
  platform: string;
  year: string;
  result: string;
  reach: string;
  image?: string;
  url?: string; // external link for live sites
}

export const ALL_PROJECTS: Project[] = [
  {
    id: 'india-boats',
    title: 'India Boats',
    category: 'Instagram',
    tag: 'Travel & Transport',
    platform: 'Instagram · GMB · Pinterest',
    year: '2024',
    result: '1M+ reach generated',
    reach: '1M+ reach',
    image: '/portfolio/india-boats.png',
  },
  {
    id: 'zapdm',
    title: 'ZapDM',
    category: 'LinkedIn',
    tag: 'DM Automation',
    platform: 'Instagram · LinkedIn',
    year: '2024',
    result: '25K+ engagement driven',
    reach: '25K+ engagement',
    image: '/portfolio/zapdm.png',
  },
  {
    id: 'adcon-realty',
    title: 'Adcon Realty',
    category: 'Campaigns',
    tag: 'Real Estate',
    platform: 'Social Media · Personal Branding',
    year: '2024',
    result: 'Strong inbound growth',
    reach: 'Consistent brand positioning',
    image: '/portfolio/adcon-realty.png',
  },
  {
    id: 'ishqa',
    title: 'Ishqa',
    category: 'Content',
    tag: 'Lifestyle',
    platform: 'Instagram · Content Shoots',
    year: '2024',
    result: 'High-converting feed',
    reach: 'Aesthetic brand identity',
  },
  {
    id: 'london-salon',
    title: 'London Salon',
    category: 'Campaigns',
    tag: 'Beauty',
    platform: 'Influencer · UGC · Social Media',
    year: '2024',
    result: 'Increased visibility',
    reach: 'Creator-led growth',
    image: '/portfolio/london-salon.png',
  },
  {
    id: 'shamal-marine',
    title: 'Shamal Marine',
    category: 'Web',
    tag: 'Marine & Yachting',
    platform: 'Web Design & Development',
    year: '2024',
    result: 'Full brand website',
    reach: 'Live & active',
    url: 'https://shamalmarine.com/',
  },
  {
    id: 'talentworkx',
    title: 'TalentWorkx',
    category: 'Web',
    tag: 'Talent Acquisition',
    platform: 'Web Design & Development',
    year: '2024',
    result: 'Full brand website',
    reach: 'Live & active',
    url: 'https://tltwx.search2select.in/',
  },
  {
    id: 'search2select',
    title: 'Search2Select',
    category: 'Web',
    tag: 'Talent Acquisition',
    platform: 'Web Design & Development',
    year: '2024',
    result: 'Full brand website',
    reach: 'Live & active',
    url: 'https://search2select.in/',
  },
];

export const FILTERS = ['All', 'Instagram', 'LinkedIn', 'Campaigns', 'Content', 'Web'] as const;
export type FilterType = typeof FILTERS[number];
