// ─── Navigation ─────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  title: string;
  href: string;
  image: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'page://home',     title: 'Home',     href: '/',         image: '/bg1.png' },
  { id: 'page://work',     title: 'Work',     href: '/work',     image: '/bg2.png' },
  { id: 'page://about',    title: 'About',    href: '/about',    image: '/bg2.png' },
  { id: 'page://services', title: 'Services', href: '/services', image: '/bg1.png' },
  { id: 'page://contact',  title: 'Contact',  href: '/contact',  image: '/bg1.png' },
];

// ─── Work / Portfolio ────────────────────────────────────────────────────────

export interface WorkItem {
  slug: string;
  title: string;
  client: string;
  href: string;
  image: string;          // fallback colour or real image path
  videoSrc: string | null;
  tags: string[];
  featured?: boolean;
  description?: string;
  year?: number;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug:        'juhayna',
    title:       'Everyday Goodness',
    client:      'Juhayna',
    href:        '/work/juhayna',
    image:       '/devbg.png',
    videoSrc:    null,
    tags:        ['Branding', 'Campaign'],
    featured:    true,
    description: "A bold brand refresh campaign bringing Juhayna's everyday dairy goodness to a new generation.",
    year:        2024,
  },
  {
    slug:        'elrashidi',
    title:       'Sweet Moments',
    client:      'El Rashidi El Mizan',
    href:        '/work/elrashidi',
    image:       '/bg2.png',
    videoSrc:    null,
    tags:        ['Advertising', 'Film'],
    featured:    true,
    description: "Crafting nostalgic sweet moments for Egypt\'s most beloved confectionery brand.",
    year:        2024,
  },
  {
    slug:        'egychain',
    title:       'Modern Living',
    client:      'Egy-Chain',
    href:        '/work/egychain',
    image:       '/devbg.png',
    videoSrc:    null,
    tags:        ['Digital', 'Identity'],
    featured:    true,
    description: "A complete visual identity system for Egypt\'s fastest growing real-estate platform.",
    year:        2023,
  },
  {
    slug:        'cleopatra',
    title:       'Healthcare First',
    client:      'Cleopatra Hospital',
    href:        '/work/cleopatra',
    image:       '/bg1.png',
    videoSrc:    null,
    tags:        ['Branding', 'Strategy'],
    description: 'Repositioning a legacy healthcare institution for the modern patient.',
    year:        2023,
  },
  {
    slug:        'banquemisr',
    title:       'Banking Reimagined',
    client:      'Banque Misr',
    href:        '/work/banquemisr',
    image:       '/bg2.png',
    videoSrc:    null,
    tags:        ['Campaign', 'Film'],
    description: 'A national brand campaign celebrating 100 years of Banque Misr.',
    year:        2023,
  },
  {
    slug:        'orascom',
    title:       'Building the Future',
    client:      'Orascom',
    href:        '/work/orascom',
    image:       '/devbg.png',
    videoSrc:    null,
    tags:        ['Identity', 'Advertising'],
    description: "Brand strategy and campaign for Egypt\'s leading construction conglomerate.",
    year:        2022,
  },
];

// ─── Clients (marquee) ───────────────────────────────────────────────────────

export interface Client {
  name: string;
  logo: string | null;
}

export const CLIENTS: Client[] = [
  { name: 'Juhayna',             logo: null },
  { name: 'Banque Misr',         logo: null },
  { name: 'Orascom',             logo: null },
  { name: 'Cleopatra Hospital',  logo: null },
  { name: 'Egy-Chain',           logo: null },
  { name: 'El Rashidi',          logo: null },
  { name: 'Vodafone Egypt',      logo: null },
  { name: 'Orange Egypt',        logo: null },
];

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export const SERVICES: Service[] = [
  {
    title:       'Brand Strategy',
    description: 'We dig deep into your brand&#39;s DNA to build a strategy that sets you apart — and keeps you there.',
  },
  {
    title:       'Visual Identity',
    description: 'Logos, typography, colour systems, and everything in between — we build identities that refuse to blend in.',
  },
  {
    title:       'Campaign & Advertising',
    description: 'From big TV spots to social-first content, we make campaigns that stop the scroll and move the needle.',
  },
  {
    title:       'Digital Design',
    description: 'Websites, apps, and digital experiences that look as bold as your brand deserves.',
  },
  {
    title:       'Film Production',
    description: 'We write, direct, shoot and edit — full production in-house for razor-sharp creative control.',
  },
  {
    title:       'Content & Social',
    description: 'A content engine built on insight, ideas and the relentless pursuit of engagement.',
  },
];

// ─── Team ────────────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  email?: string;
  image?: string;
}

export const TEAM: TeamMember[] = [
  { name: 'Ahmed Hassan',   role: 'Co-Founder & Creative Director' },
  { name: 'Sara Khalil',    role: 'Co-Founder & Strategy Director'  },
  { name: 'Omar Mostafa',   role: 'Head of Production'              },
];

// ─── Site config ─────────────────────────────────────────────────────────────

export const SITE = {
  name:        'Deviate',
  tagline:     'Off the Norm.',
  description: 'Deviate is an independent creative and marketing agency for brands that refuse to blend in.',
  address:     '123 Maadi, Cairo, Egypt',
  phone:       '+20 12 365 874',
  email:       'hello@deviate.agency',
  instagram:   'https://www.instagram.com/',
  linkedin:    'https://www.linkedin.com/',
  vimeoId:     '883255612',
} as const;
