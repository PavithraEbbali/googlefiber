'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import CallCta from './CallCta';
import { contact } from '@/lib/content';

const NAV = [
  { label: 'Plans', href: '#plans' },
  { label: 'Why Fiber', href: '#why-fiber' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'border-b bg-white/92 backdrop-blur-md transition-colors duration-300',
        scrolled
          ? 'border-gf-line shadow-[0_1px_16px_-6px_rgba(32,33,36,0.18)]'
          : 'border-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex min-h-11 shrink-0 items-center"
          aria-label="Google Fiber Authorized Retailer — back to top"
        >
          <Logo />
        </a>

        <nav
          aria-label="Section navigation"
          className="hidden items-center gap-9 md:flex"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              // py-3 gives a 44px touch target; as bare inline text these were
              // 23px tall on a tablet.
              className="group relative flex min-h-11 items-center py-3 text-[0.9375rem] font-medium text-gf-slate transition-colors duration-200 hover:text-gf-charcoal"
            >
              {item.label}
              <span
                aria-hidden="true"
                className="absolute bottom-2 left-0 h-px w-0 bg-gf-teal-600 transition-all duration-300 ease-out group-hover:w-full"
              />
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          {/* Header is one of the two places a raw number is the button label.
              Below sm the icon is dropped and padding tightens so the button
              still fits beside the wordmark on a 320px screen. */}
          <CallCta
            label={contact.phoneDisplay}
            variant="solid"
            size="sm"
            className="[&>svg]:hidden sm:[&>svg]:block"
          />
        </div>
      </div>
    </header>
  );
}
