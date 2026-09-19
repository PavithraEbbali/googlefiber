import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import SmoothScroll from '@/components/SmoothScroll';
import TopDisclosureBar from '@/components/TopDisclosureBar';
import { brand, startingPrice, topSpeedGig } from '@/lib/content';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Absolute base for OpenGraph and Twitter image URLs. Social crawlers cannot
 * resolve relative paths, so without this the share image would be advertised
 * as a localhost URL.
 *
 * PLACEHOLDER host — set NEXT_PUBLIC_SITE_URL at build time (or edit the
 * fallback) once the production domain is issued.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.example.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Google Fiber Plans & Pricing | ${brand.retailerName}`,
    template: `%s | ${brand.retailerName}`,
  },
  description: `Order Google Fiber internet from an independent authorized retailer. Symmetrical fiber plans from $${startingPrice}/mo up to ${topSpeedGig} Gig, with the Wi-Fi router, professional installation and unlimited data included. No annual contract.`,
  applicationName: brand.retailerName,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: brand.retailerName,
    title: `Google Fiber Plans & Pricing | ${brand.retailerName}`,
    description: `Symmetrical fiber internet from $${startingPrice}/mo. Router and professional installation included, unlimited data, no annual contract.`,
    images: [
      {
        url: '/images/og-share.jpg',
        width: 985,
        height: 516,
        alt: 'A bright modern living room with warm daylight across the floor.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Google Fiber Plans & Pricing | ${brand.retailerName}`,
    description: `Symmetrical fiber internet from $${startingPrice}/mo. Router and professional installation included.`,
    images: ['/images/og-share.jpg'],
  },
  other: {
    'format-detection': 'telephone=yes',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#202124',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <SmoothScroll />

        <a
          href="#plans"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-gf-charcoal focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to plans
        </a>

        {/* Persistent disclosure + sticky header travel together */}
        <div className="sticky top-0 z-50">
          <TopDisclosureBar />
          <Header />
        </div>

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
