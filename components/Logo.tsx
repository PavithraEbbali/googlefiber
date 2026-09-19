import { brand } from '@/lib/content';

interface LogoProps {
  invert?: boolean;
  className?: string;
}

/**
 * Retailer wordmark.
 *
 * An original mark drawn in the Google Fiber palette — a fiber strand entering
 * a node — paired with the "Google Fiber" name and the retailer qualifier. The
 * qualifier is locked to the mark so the authorized-retailer status reads at
 * the same glance as the brand name.
 */
export default function Logo({ invert = false, className = '' }: LogoProps) {
  const primary = invert ? 'text-white' : 'text-gf-charcoal';
  const secondary = invert ? 'text-white/60' : 'text-gf-slate';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 sm:h-8 sm:w-8"
        aria-hidden="true"
        focusable="false"
      >
        <rect width="32" height="32" rx="9" className="fill-gf-teal" />
        <path
          d="M6.5 20.5c3.6 0 3.6-9 7.2-9s3.6 9 7.2 9"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <circle cx="23.5" cy="20.5" r="2.4" fill="#ffffff" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`text-[0.875rem] font-semibold tracking-[-0.02em] sm:text-[0.98rem] ${primary}`}
        >
          {brand.wordmarkPrimary}
        </span>
        <span
          className={`mt-1 text-[0.5625rem] font-medium tracking-[0.04em] uppercase sm:text-[0.6875rem] ${secondary}`}
        >
          {brand.wordmarkSuffix}
        </span>
      </span>
    </span>
  );
}
