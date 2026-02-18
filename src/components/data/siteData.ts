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
  image: string;          
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
    title:       'ACCOUNT MANAGEMENT',
    description: "Day-to-day management, coordination, and client communication.",
  },
  {
    title:       'SOCIAL MEDIA MANAGEMENT',
    description: 'Content planning, scheduling, publishing, and page optimization.',
  },
  {
    title:       'PERFORMANCE MONITORING & REPORTING',
    description: 'Tracking results, insights, and monthly performance reports.',
  },
  {
    title:       'CONTENT STRATEGY & DIRECTION',
    description: 'Defining what to post, how to say it, and when it goes live.',
  },
  {
    title:       'MEDIA BUYING & ADS MANAGEMENT',
    description: 'Paid campaigns across Meta platforms, planning, execution, and optimization.',
  },
  {
    title:       'CAMPAIGN PLANNING & EXECUTION',
    description: 'Launches, seasonal pushes, and performance-driven campaigns.',
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
  { name: 'member name',   role: 'role' },
  { name: 'member name',    role: 'role'  },
  { name: 'member name',   role: 'role'              },
];

// ─── Site config ─────────────────────────────────────────────────────────────

export const SITE = {
  name:        'Deviate',
  tagline:     'Off the Norm,',
  description: 'Deviate is an independent creative and marketing agency for brands that refuse to blend in.',
  address:     '123 Maadi, Cairo, Egypt',
  phone:       '+20 12 365 874',
  email:       'hello@deviate.agency',
  instagram:   'https://www.instagram.com/',
  linkedin:    'https://www.linkedin.com/',
  vimeoId:     '883255612',
} as const;
