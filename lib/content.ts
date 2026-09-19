/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH
 * ============================================================================
 * Every price, speed, feature bullet, fee, comparison-table row, hero lockup
 * and legal disclosure on this site is derived from THIS FILE.
 *
 * To change pricing or plans site-wide, edit ONLY this file. No .tsx layout
 * file contains a hard-coded price, speed, plan name or fee.
 *
 * Source of record: fiber.google.com — plan names, prices and inclusions are
 * taken from Google Fiber's own published product data.
 * ============================================================================
 */

import type { StaticImageData } from 'next/image';

/*
 * Photography is imported statically so the bundler supplies intrinsic width,
 * height and a blur placeholder for every image. That keeps the art direction
 * in this file alongside the pricing data, and prevents layout shift without
 * any component needing to hard-code dimensions.
 */
import heroBackground from '@/public/images/hero-background.jpg';
import installationPhoto from '@/public/images/installation.jpg';
import whyFiberPhoto from '@/public/images/why-fiber.jpg';
import plan1GigPhoto from '@/public/images/plan-1gig.jpg';
import plan3GigPhoto from '@/public/images/plan-3gig.jpg';
import plan8GigPhoto from '@/public/images/plan-8gig.jpg';
import planPhonePhoto from '@/public/images/plan-phone.jpg';

export type ServiceLine =
  | 'fiber'
  | 'cable'
  | 'bundle'
  | 'tv'
  | 'mobile'
  | 'phone';

export interface PlanItem {
  id: string;
  name: string;
  serviceLine: ServiceLine;
  speedDown?: number;
  speedUp?: number;
  price?: number;
  cents?: string;
  promoQualifier?: string;
  equipmentFee?: string;
  dataPolicy?: string;
  contractTerm?: string;
  features: string[];
  isPopular?: boolean;
  /** Optional presentation extras — safe to omit. */
  tagline?: string;
  router?: string;
  installFee?: string;
  badge?: string;
  /**
   * Tier accent, mirroring the colour-coding Google Fiber uses on its own
   * product cards (core/home in orange-teal, edge in magenta).
   */
  accent?: 'teal' | 'orange' | 'magenta';
  /**
   * Optional tier photography, rendered as a band at the foot of the card.
   * Cards without an image simply omit the band — no placeholder is drawn.
   */
  image?: StaticImageData;
  imageAlt?: string;
}

/* -------------------------------------------------------------------------- */
/* BRAND + CONTACT                                                            */
/* -------------------------------------------------------------------------- */

export const brand = {
  retailerName: 'Google Fiber Authorized Retailer',
  wordmarkPrimary: 'Google Fiber',
  wordmarkSuffix: 'Authorized Retailer',
  disclosure: 'Independent Authorized Retailer of Google Fiber.',
} as const;

/**
 * PLACEHOLDER phone number — replace both fields when the live sales line is
 * issued. 555-01xx is the reserved fictional range, so it cannot dial a real
 * party while the site is in staging.
 */
export const contact = {
  phoneDisplay: '(888) 555-0100',
  phoneHref: 'tel:+18885550100',
  hours: 'Mon-Fri 8am-9pm ET · Sat-Sun 9am-6pm ET',
} as const;

/* -------------------------------------------------------------------------- */
/* PLANS — the whole catalogue                                                */
/* -------------------------------------------------------------------------- */

const fiberPlans: PlanItem[] = [
  /* ---------------------------- FIBER ------------------------------------ */
  {
    id: 'core-1-gig',
    name: 'Google Fiber 1 Gig',
    serviceLine: 'fiber',
    speedDown: 1000,
    speedUp: 1000,
    price: 70,
    cents: '00',
    promoQualifier: 'The same price since 2012 — no 12-month step-up',
    equipmentFee: 'Included — $0/mo',
    dataPolicy: 'Unlimited — no data caps',
    contractTerm: 'None — no annual contract',
    tagline: 'Effortless, premium-level gigabit for everyday homes.',
    router: 'gFiber Wi-Fi 6E Router',
    installFee: 'Professional install included',
    accent: 'orange',
    image: plan1GigPhoto,
    imageAlt:
      'A woman reads on a tablet on the sofa of a sunlit apartment living room.',
    features: [
      'Symmetrical 1 Gig download and upload',
      'gFiber Wi-Fi 6E Router included',
      'Up to one mesh extender as needed',
      'Professional installation at no extra charge',
      'Unlimited data — no caps, no throttling',
      'No annual contract required',
    ],
  },
  {
    id: 'home-3-gig',
    name: 'Google Fiber 3 Gig',
    serviceLine: 'fiber',
    speedDown: 3000,
    speedUp: 3000,
    price: 100,
    cents: '00',
    promoQualifier: 'Flat monthly rate — your price does not change',
    equipmentFee: 'Included — $0/mo',
    dataPolicy: 'Unlimited — no data caps',
    contractTerm: 'None — no annual contract',
    tagline: 'Built for homes where everyone works, learns and plays at once.',
    router: 'gFiber Multi-Gig Wi-Fi 7 Router',
    installFee: 'Professional install included',
    accent: 'teal',
    image: plan3GigPhoto,
    imageAlt:
      'A parent helps a child with homework at a kitchen island while another parent reads to a toddler on the sofa nearby.',
    isPopular: true,
    badge: 'Most popular',
    features: [
      'Symmetrical 3 Gig download and upload',
      'Multi-Gig Wi-Fi 7 Router included',
      'Up to two mesh extenders as needed',
      'Wi-Fi coverage up to 5,000 sq ft',
      'In-home consultation and hard wiring for two high-use areas',
      'Unlimited data — no caps, no throttling',
      'No annual contract required',
    ],
  },
  {
    id: 'edge-8-gig',
    name: 'Google Fiber 8 Gig',
    serviceLine: 'fiber',
    speedDown: 8000,
    speedUp: 8000,
    price: 150,
    cents: '00',
    promoQualifier: 'Flat monthly rate — your price does not change',
    equipmentFee: 'Included — $0/mo',
    dataPolicy: 'Unlimited — no data caps',
    contractTerm: 'None — no annual contract',
    tagline: 'Future-ready headroom for creators, studios and heavy uploads.',
    router: 'Multi-Gig Wi-Fi 7 Router with 10G port',
    installFee: 'Professional install included',
    accent: 'magenta',
    image: plan8GigPhoto,
    imageAlt:
      'A person works at a two-monitor desk setup in a home office lit by a warm desk lamp.',
    features: [
      'Symmetrical 8 Gig download and upload',
      'Multi-Gig Wi-Fi 7 Router with a 10G port',
      'Up to two mesh extenders as needed',
      'Internet Battery Backup included — up to 2 hours of power',
      'Uptime guarantee: 25% bill credit if service is down over 45 minutes',
      'Unlimited data — no caps, no throttling',
      'No annual contract required',
    ],
  },
];

/* ---------------------------- PHONE -------------------------------------- */

const phonePlans: PlanItem[] = [
  {
    id: 'gfiber-phone',
    name: 'Google Fiber Phone',
    serviceLine: 'phone',
    price: 20,
    cents: '00',
    promoQualifier: 'Add-on for any Google Fiber internet plan',
    equipmentFee: 'Phone box included — $0/mo',
    dataPolicy: 'Unlimited U.S. and Canada calling',
    contractTerm: 'None — no annual contract',
    tagline: 'A home line that runs over your fiber connection.',
    installFee: 'Added to your internet install',
    image: planPhonePhoto,
    imageAlt:
      'A woman stands at her kitchen counter mid-conversation on a cordless home phone.',
    features: [
      'Unlimited calling across the U.S. and Canada',
      'No per-minute charges; international rates available',
      '911 service tied to your service address',
      'Keep your current number or choose a new one',
      'Check voicemail from anywhere',
      'Call screening, do-not-disturb and caller ID blocking',
      'Call forwarding, including automatic routing during outages',
      'Phone box included; handset sold separately',
    ],
  },
];

/* ---------------------------- BUNDLES ------------------------------------ */

/**
 * A bundle is a composition, not a separate price.
 *
 * Each spec names an internet plan and the add-ons sold with it; the monthly
 * rate, the speeds and the "X at $70 plus Y at $20" qualifier are all computed
 * from those plans. Change the 1 Gig rate once and every bundle containing it
 * reprices itself, so a bundle can never drift out of sync with its parts.
 */
interface BundleSpec {
  id: string;
  name: string;
  internetId: string;
  addOnIds: string[];
  tagline: string;
  equipmentFee: string;
  features: string[];
  isPopular?: boolean;
  badge?: string;
}

const bundleSpecs: BundleSpec[] = [
  {
    id: 'bundle-1-gig-phone',
    name: '1 Gig + Home Phone',
    internetId: 'core-1-gig',
    addOnIds: ['gfiber-phone'],
    tagline: 'Gigabit internet with a dependable landline on the same bill.',
    equipmentFee: 'Router and phone box included — $0/mo',
    features: [
      'Symmetrical 1 Gig download and upload',
      'gFiber Wi-Fi 6E Router included',
      'Unlimited calling in the U.S. and Canada',
      '911 service tied to your service address',
      'Keep your current number or choose a new one',
      'Unlimited data and no annual contract',
    ],
  },
  {
    id: 'bundle-3-gig-phone',
    name: '3 Gig + Home Phone',
    internetId: 'home-3-gig',
    addOnIds: ['gfiber-phone'],
    tagline: 'Our most-ordered pairing for busy multi-device households.',
    equipmentFee: 'Router, extenders and phone box included — $0/mo',
    isPopular: true,
    badge: 'Best value',
    features: [
      'Symmetrical 3 Gig download and upload',
      'Multi-Gig Wi-Fi 7 Router and up to two extenders',
      'Wi-Fi coverage up to 5,000 sq ft',
      'Unlimited calling in the U.S. and Canada',
      'Voicemail, call screening and do-not-disturb controls',
      'Unlimited data and no annual contract',
    ],
  },
  {
    id: 'bundle-8-gig-phone',
    name: '8 Gig + Home Phone',
    internetId: 'edge-8-gig',
    addOnIds: ['gfiber-phone'],
    tagline: 'Maximum headroom, battery backup and a line that stays up.',
    equipmentFee: 'Router, extenders and phone box included — $0/mo',
    features: [
      'Symmetrical 8 Gig download and upload',
      'Multi-Gig Wi-Fi 7 Router with a 10G port',
      'Internet Battery Backup included — up to 2 hours of power',
      'Unlimited calling in the U.S. and Canada',
      'Calls route automatically during a power outage',
      'Unlimited data and no annual contract',
    ],
  },
];

const basePlans: PlanItem[] = [...fiberPlans, ...phonePlans];

const requirePlan = (id: string): PlanItem => {
  const found = basePlans.find((p) => p.id === id);
  if (!found) {
    throw new Error(
      `lib/content.ts: bundle references unknown plan id "${id}".`,
    );
  }
  return found;
};

const composeBundle = (spec: BundleSpec): PlanItem => {
  const internet = requirePlan(spec.internetId);
  const addOns = spec.addOnIds.map(requirePlan);

  const price =
    (internet.price ?? 0) +
    addOns.reduce((sum, addOn) => sum + (addOn.price ?? 0), 0);

  const parts = [internet, ...addOns].map((p) => `${p.name} at $${p.price}`);

  return {
    id: spec.id,
    name: spec.name,
    serviceLine: 'bundle',
    speedDown: internet.speedDown,
    speedUp: internet.speedUp,
    price,
    cents: internet.cents ?? '00',
    promoQualifier: parts.join(' plus '),
    equipmentFee: spec.equipmentFee,
    dataPolicy: internet.dataPolicy,
    contractTerm: internet.contractTerm,
    installFee: internet.installFee,
    tagline: spec.tagline,
    features: spec.features,
    isPopular: spec.isPopular,
    badge: spec.badge,
    accent: internet.accent,
  };
};

const bundlePlans: PlanItem[] = bundleSpecs.map(composeBundle);

/** The full catalogue, in the order the fine-print table lists it. */
export const plans: PlanItem[] = [
  ...fiberPlans,
  ...bundlePlans,
  ...phonePlans,
];

/* -------------------------------------------------------------------------- */
/* SERVICE LINE REGISTRY + CANONICAL ORDER                                    */
/* -------------------------------------------------------------------------- */

/**
 * Canonical merchandising order. Sections render in exactly this sequence and
 * any line with zero plans is omitted from the page automatically.
 *
 * Google Fiber is a 100% fiber network. It does not operate a cable plant, it
 * retired its linear TV product, and it does not sell a mobile/wireless plan —
 * so 'cable', 'tv' and 'mobile' carry no plans and their sections never render.
 */
export const SERVICE_LINE_ORDER: ServiceLine[] = [
  'fiber',
  'cable',
  'bundle',
  'tv',
  'mobile',
  'phone',
];

export interface ServiceLineMeta {
  id: ServiceLine;
  anchor: string;
  navLabel: string;
  eyebrow: string;
  heading: string;
  subheading: string;
}

export const serviceLineMeta: Record<ServiceLine, ServiceLineMeta> = {
  fiber: {
    id: 'fiber',
    anchor: 'plans',
    navLabel: 'Plans',
    eyebrow: 'Fiber internet',
    heading: 'Google Fiber internet plans',
    subheading:
      'Every tier runs on 100% fiber optic to the residence, with upload speed matched to download speed. Wi-Fi equipment, professional installation and unlimited data are included in the monthly rate.',
  },
  cable: {
    id: 'cable',
    anchor: 'cable',
    navLabel: 'Cable',
    eyebrow: 'Cable',
    heading: 'Cable',
    subheading: '',
  },
  bundle: {
    id: 'bundle',
    anchor: 'bundles',
    navLabel: 'Bundles',
    eyebrow: 'Bundles',
    heading: 'Complete home connectivity',
    subheading:
      'Combine any Google Fiber internet plan with Google Fiber Phone under a single monthly statement. Bundle pricing reflects the internet rate plus the $20 voice rate, with no additional bundling charge applied.',
  },
  tv: {
    id: 'tv',
    anchor: 'tv',
    navLabel: 'TV',
    eyebrow: 'TV',
    heading: 'TV',
    subheading: '',
  },
  mobile: {
    id: 'mobile',
    anchor: 'mobile',
    navLabel: 'Mobile',
    eyebrow: 'Mobile',
    heading: 'Mobile',
    subheading: '',
  },
  phone: {
    id: 'phone',
    anchor: 'phone',
    navLabel: 'Phone',
    eyebrow: 'Home phone',
    heading: 'Google Fiber Phone',
    subheading:
      'A reliable home line delivered over your fiber connection, available as an addition to any Google Fiber internet plan.',
  },
};

/* -------------------------------------------------------------------------- */
/* DERIVED SELECTORS — everything downstream reads through these              */
/* -------------------------------------------------------------------------- */

export const plansFor = (line: ServiceLine): PlanItem[] =>
  plans.filter((p) => p.serviceLine === line);

/** Service lines that actually carry plans, in canonical order. */
export const activeServiceLines = (): ServiceLine[] =>
  SERVICE_LINE_ORDER.filter((line) => plansFor(line).length > 0);

/** The plan featured in the hero lockup: the flagged popular fiber plan. */
export const leadPlan: PlanItem =
  plansFor('fiber').find((p) => p.isPopular) ?? plansFor('fiber')[0];

/** Lowest advertised entry price across all internet plans. */
export const startingPrice: number = Math.min(
  ...plansFor('fiber')
    .map((p) => p.price)
    .filter((n): n is number => typeof n === 'number'),
);

/** Fastest advertised tier, used in headline and disclosure copy. */
export const topSpeedGig: number = Math.max(
  ...plansFor('fiber').map((p) => (p.speedDown ?? 0) / 1000),
);

/** Format 1000 -> "1 Gig", 500 -> "500 Mbps". */
export const formatSpeed = (mbps?: number): string => {
  if (typeof mbps !== 'number') return '—';
  return mbps >= 1000 ? `${mbps / 1000} Gig` : `${mbps} Mbps`;
};

const slowestFiber = formatSpeed(fiberPlans[0]?.speedDown);
const fastestFiber = formatSpeed(fiberPlans[fiberPlans.length - 1]?.speedDown);

/* -------------------------------------------------------------------------- */
/* HERO                                                                       */
/* -------------------------------------------------------------------------- */

/*
 * The headline is stored in two parts so the closing phrase can carry the brand
 * accent colour in the hero, while `headline` remains the single full string
 * used for metadata and anywhere else the plain text is needed.
 */
const headlineLead = 'Multi-gigabit fiber internet,';
const headlineAccent = 'direct to your home.';

export const hero = {
  eyebrow: 'Authorized Retailer',
  headlineLead,
  headlineAccent,
  headline: `${headlineLead} ${headlineAccent}`,
  subline: `Google Fiber delivers 100% fiber optic directly to the residence, so upload speed matches download speed across every tier — from ${slowestFiber} to ${fastestFiber}. Unlimited data, no annual contract, and Wi-Fi equipment included in the monthly rate.`,
  zipHeading: 'Check availability at your address',
  zipPlaceholder: 'Enter your ZIP code',
  zipCta: 'Check availability',
} as const;

/**
 * Section photography. Alt text is empty where an image is purely decorative
 * and the surrounding copy already carries the meaning — screen readers should
 * skip those rather than announce scenery.
 */
export const media = {
  hero: {
    src: heroBackground,
    alt: '', // decorative backdrop behind the headline
  },
  whyFiber: {
    src: whyFiberPhoto,
    alt: '', // decorative texture behind the feature grid
  },
  installation: {
    src: installationPhoto,
    alt: 'A technician kneels beside a house, terminating a fiber line into an exterior network enclosure.',
  },
} as const;

/**
 * The offer featured in the hero.
 *
 * Google Fiber does not run introductory pricing, so the offer here is its real
 * commercial position — a rate that does not step up — rather than an invented
 * limited-time discount. Editing this object restyles the hero callout only;
 * no layout file states the terms.
 */
export const offer = {
  badge: 'Current offer',
  headline: 'Your monthly rate never increases',
  detail:
    'No introductory pricing and no step-up after the first year. Professional installation and Wi-Fi equipment are included on every plan.',
} as const;

export const trustChips: string[] = [
  '100% Fiber Optic',
  'Symmetrical Speeds',
  'No Data Caps',
  'No Annual Contracts',
];

/* -------------------------------------------------------------------------- */
/* WHY FIBER / HOW IT WORKS                                                   */
/* -------------------------------------------------------------------------- */

export const whyFiber = {
  eyebrow: 'Why fiber',
  heading: 'The advantage of end-to-end fiber',
  subheading:
    'Google Fiber carries fiber optic the entire distance to the residence, rather than transitioning to copper or coaxial cable for the final segment. That architecture is what allows upload speeds to match download speeds on every tier.',
  items: [
    {
      title: 'Upload that matches download',
      body: 'Every plan is symmetrical. A 3 Gig plan sends at 3 Gig, which is what cloud backups, large file delivery, video calls and live streams actually depend on.',
    },
    {
      title: 'Wi-Fi hardware in the price',
      body: 'The router ships with the plan, and mesh extenders are provided as the layout of your home requires. There is no separate equipment rental line on the bill.',
    },
    {
      title: 'Unlimited data, unthrottled',
      body: 'No monthly data allowance and no speed reduction after heavy use. The tier you order is the tier you keep for the whole billing cycle.',
    },
    {
      title: 'A rate that stays put',
      body: 'Pricing is not built on a 12-month teaser. The advertised monthly rate is what continues after the first year.',
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: 'How ordering works',
  heading: 'From availability check to installation',
  steps: [
    {
      title: 'Confirm the address',
      body: 'Google Fiber builds street by street. Enter a ZIP code above or call, and an agent will confirm serviceability for the exact address.',
    },
    {
      title: 'Pick the tier that fits',
      body: 'An agent walks through speed, router coverage and whether a home phone line belongs on the order, then places it with you on the line.',
    },
    {
      title: 'Book professional installation',
      body: 'Choose an install window. A technician runs the fiber, places the router, and verifies performance before leaving.',
    },
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* FINE PRINT GRID — generated from `plans`, never hand-written               */
/* -------------------------------------------------------------------------- */

export interface FinePrintColumn {
  key: 'equipmentFee' | 'installFee' | 'dataPolicy' | 'contractTerm';
  label: string;
}

export const finePrintColumns: FinePrintColumn[] = [
  { key: 'equipmentFee', label: 'Equipment' },
  { key: 'installFee', label: 'Installation' },
  { key: 'dataPolicy', label: 'Data policy' },
  { key: 'contractTerm', label: 'Contract' },
];

export const finePrint = {
  eyebrow: 'The fine print',
  heading: 'Equipment, fees and inclusions',
  subheading:
    'Equipment, installation, data policy and contract terms for every plan, presented side by side. Monthly rates are exclusive of taxes and government fees, which vary by service address.',
  footnotes: [
    'Monthly rates shown exclude taxes and applicable government fees.',
    'Advertised speeds are plan maximums. Wired and wireless performance varies with in-home wiring, device capability and Wi-Fi conditions.',
    'Plan availability, equipment models and installation scheduling vary by service address and are confirmed at the time of order.',
    'Google Fiber Phone requires an active Google Fiber internet plan. Emergency calling depends on power and a working internet connection.',
  ],
} as const;

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: 'How long does professional installation take?',
    a: 'A standard installation runs about two to four hours. The technician brings the fiber line to the home, mounts the network box, places the router where coverage is best, and tests the connection on a wired device before finishing.',
  },
  {
    q: 'Are the advertised speeds wired or over Wi-Fi?',
    a: 'Advertised speeds are plan maximums measured on a wired connection. Wi-Fi results depend on the device, its distance from the router and how many devices are active. The multi-gig tiers ship with a Wi-Fi 7 router and mesh extenders to keep wireless speeds close to the wired rate.',
  },
  {
    q: 'Is the router included, or is there a rental fee?',
    a: 'The router is included in the monthly rate on every plan. The 1 Gig plan ships with the gFiber Wi-Fi 6E Router; the 3 Gig and 8 Gig plans ship with the Multi-Gig Wi-Fi 7 Router. Mesh extenders are provided as the size and layout of the home require.',
  },
  {
    q: 'Can I use my own router?',
    a: 'Yes. You can connect your own router to the network box. The included hardware is tuned for multi-gig throughput, so on the 3 Gig and 8 Gig tiers a third-party router needs multi-gig ports to reach the full plan speed.',
  },
  {
    q: 'What does symmetrical speed mean in practice?',
    a: 'Upload runs at the same rate as download. On a 3 Gig plan that is 3 Gig in both directions. It matters for cloud backups, sending large files, video calls, live streaming and working against remote servers.',
  },
  {
    q: 'Is there a data cap or any throttling?',
    a: 'No. Every plan carries unlimited data, with no monthly allowance and no speed reduction after heavy use.',
  },
  {
    q: 'Am I locked into a contract?',
    a: 'No annual contract is required on any plan. The monthly rate shown is what continues after the first year, rather than a promotional rate that steps up.',
  },
  {
    q: 'What if Google Fiber is not built out at my address?',
    a: 'Availability is confirmed street by street at the time of order. If the address is not serviceable the order cannot be placed, and nothing is charged.',
  },
];

export const faqMeta = {
  eyebrow: 'FAQ',
  heading: 'Common questions, answered',
  subheading:
    'Installation, performance and equipment — what is worth understanding before selecting a tier.',
} as const;

/* -------------------------------------------------------------------------- */
/* FOOTER + LEGAL                                                             */
/* -------------------------------------------------------------------------- */

export interface LegalLink {
  label: string;
  href: string;
}

export const legalLinks: LegalLink[] = [
  { label: 'Privacy & Data Protection', href: '/legal/privacy-data-protection' },
  { label: 'Disclaimer', href: '/legal/disclaimer' },
  { label: 'Cookies Policy', href: '/legal/cookies-policy' },
  { label: 'TCPA Policy', href: '/legal/tcpa-policy' },
  { label: 'Trademarks', href: '/legal/trademarks' },
  { label: 'Marketing Policy', href: '/legal/marketing-policy' },
  { label: 'Service Fulfillment', href: '/legal/service-fulfillment' },
  { label: 'PCI DSS', href: '/legal/pci-dss' },
];

/**
 * Legal disclosure text. Price and speed figures interpolate from `plans`, so
 * editing a price above rewrites the disclosure automatically.
 */
export const disclosures = {
  retailer: brand.disclosure,
  pricing: `Advertised rates start at $${startingPrice}/mo and exclude taxes and applicable government fees. Plan availability, speeds, equipment and offer terms vary by service address and are confirmed at the time of order.`,
  trademark:
    'Google Fiber and the Google Fiber logo are trademarks of Google LLC. All other marks are the property of their respective owners. This site is operated by an independent authorized retailer.',
  speeds: `Speeds up to ${topSpeedGig} Gig are plan maximums measured on a wired connection. Actual throughput varies with device capability, in-home wiring and Wi-Fi conditions.`,
} as const;

export const footerNav = {
  shopHeading: 'Shop',
  companyHeading: 'Why order here',
  legalHeading: 'Legal & Policies',
  contactHeading: 'Talk to us',
} as const;
