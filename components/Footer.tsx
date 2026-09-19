import CallCta from './CallCta';
import Logo from './Logo';
import {
  activeServiceLines,
  contact,
  disclosures,
  footerNav,
  legalLinks,
  serviceLineMeta,
} from '@/lib/content';

const LEARN_LINKS = [
  { label: 'Why fiber', href: '#why-fiber' },
  { label: 'How ordering works', href: '#how-it-works' },
  { label: 'Fees and inclusions', href: '#fine-print' },
  { label: 'FAQ', href: '#faq' },
];

/*
 * `block` + vertical padding gives each footer link a 40px touch target; as
 * plain inline text they were only 17px tall. List gaps are tightened to
 * compensate, so the column reads at roughly its previous density.
 */
const linkClass =
  'block py-2.5 text-sm text-white/60 transition-colors duration-200 hover:text-white';

export default function Footer() {
  // Shop column is generated from the catalogue, so a service line that gains
  // or loses plans appears or disappears here automatically.
  const shopLinks = activeServiceLines().map((line) => serviceLineMeta[line]);

  return (
    <footer className="relative overflow-hidden bg-gf-charcoal">
      {/* Brand hairline in the three official tier accents, panning slowly */}
      <div
        aria-hidden="true"
        className="gf-brand-rule absolute inset-x-0 top-0 h-[2px] opacity-80"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand + contact */}
          <div className="min-w-0 lg:col-span-4">
            <Logo invert />

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              {disclosures.retailer} We take orders for Google Fiber internet
              and home phone service, confirm serviceability at your address,
              and schedule professional installation.
            </p>

            <div className="mt-6">
              {/* Footer is the second place a raw number is the button label. */}
              <CallCta label={contact.phoneDisplay} variant="dark" />
              <p className="mt-3 text-xs text-white/45">{contact.hours}</p>
            </div>
          </div>

          {/* Shop */}
          <nav
            aria-label={footerNav.shopHeading}
            className="min-w-0 lg:col-span-2"
          >
            <h2 className="gf-eyebrow text-white">{footerNav.shopHeading}</h2>
            <ul className="mt-3 space-y-0.5">
              {shopLinks.map((meta) => (
                <li key={meta.anchor}>
                  <a href={`#${meta.anchor}`} className={linkClass}>
                    {meta.navLabel}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Why order here */}
          <nav
            aria-label={footerNav.companyHeading}
            className="min-w-0 lg:col-span-2"
          >
            <h2 className="gf-eyebrow text-white">
              {footerNav.companyHeading}
            </h2>
            <ul className="mt-3 space-y-0.5">
              {LEARN_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal & Policies — all eight mandatory pages */}
          <nav
            aria-label={footerNav.legalHeading}
            className="min-w-0 lg:col-span-4"
          >
            <h2 className="gf-eyebrow text-white">{footerNav.legalHeading}</h2>
            <ul className="mt-3 grid gap-x-6 gap-y-0.5 sm:grid-cols-2">
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal disclosures */}
        <div className="mt-12 space-y-3 border-t border-white/12 pt-8">
          <p className="text-xs leading-relaxed text-white/45">
            {disclosures.pricing}
          </p>
          <p className="text-xs leading-relaxed text-white/45">
            {disclosures.speeds}
          </p>
          <p className="text-xs leading-relaxed text-white/45">
            {disclosures.trademark}
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            &copy; Google Fiber Authorized Retailer. All rights reserved.
          </p>
          <p className="text-xs font-medium text-white/55">
            {disclosures.retailer}
          </p>
        </div>
      </div>
    </footer>
  );
}
