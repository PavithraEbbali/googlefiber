import type { PlanItem } from '@/lib/content';

type LockupSize = 'hero' | 'card' | 'compact';

interface PriceLockupProps {
  plan: PlanItem;
  size?: LockupSize;
  /** Render on a dark surface. */
  invert?: boolean;
  /** Suppress the qualifier line where the surrounding layout already states it. */
  showQualifier?: boolean;
  className?: string;
}

const SIZES: Record<
  LockupSize,
  { integer: string; symbol: string; cents: string; suffix: string }
> = {
  // Dominant integer sits between 2.5rem and 3.5rem across every variant.
  hero: {
    integer: 'text-[3.25rem] sm:text-[3.5rem] leading-[0.88]',
    symbol: 'text-2xl sm:text-[1.75rem] mt-[0.3em]',
    cents: 'text-lg sm:text-xl mt-[0.42em]',
    suffix: 'text-sm mt-[1.1em]',
  },
  card: {
    integer: 'text-[2.75rem] sm:text-[3rem] leading-[0.88]',
    symbol: 'text-xl sm:text-2xl mt-[0.3em]',
    cents: 'text-base sm:text-lg mt-[0.44em]',
    suffix: 'text-sm mt-[1.05em]',
  },
  compact: {
    integer: 'text-[2.5rem] leading-[0.88]',
    symbol: 'text-lg mt-[0.32em]',
    cents: 'text-base mt-[0.4em]',
    suffix: 'text-xs mt-[1.15em]',
  },
};

/**
 * The single price renderer used by the hero, every plan card and the
 * comparison table. It reads straight off a PlanItem, so a price edit in
 * lib/content.ts propagates everywhere this component is mounted.
 *
 * Layout is a baseline-anchored flex row: dollar sign, dominant integer,
 * muted cents, muted "/mo".
 */
export default function PriceLockup({
  plan,
  size = 'card',
  invert = false,
  showQualifier = true,
  className = '',
}: PriceLockupProps) {
  const s = SIZES[size];

  const integerTone = invert ? 'text-white' : 'text-gf-charcoal';
  const mutedTone = invert ? 'text-white/55' : 'text-gf-slate';

  // No published rate — the card's CTA switches to "Call for pricing".
  if (typeof plan.price !== 'number') {
    return (
      <div className={className}>
        <p
          className={`font-semibold tracking-tight ${
            invert ? 'text-white' : 'text-gf-charcoal'
          } text-2xl`}
        >
          Pricing by address
        </p>
        <p className={`mt-1 text-sm ${mutedTone}`}>
          Confirmed by an agent before any order is placed
        </p>
      </div>
    );
  }

  const cents = plan.cents ?? '00';

  return (
    <div className={className}>
      <div className="flex items-start gf-tnum">
        <span
          className={`font-medium ${s.symbol} ${mutedTone}`}
          aria-hidden="true"
        >
          $
        </span>
        <span
          className={`font-semibold tracking-[-0.03em] ${s.integer} ${integerTone}`}
        >
          {plan.price}
        </span>
        <span className={`font-medium ${s.cents} ${mutedTone}`} aria-hidden="true">
          .{cents}
        </span>
        <span className={`ml-1.5 font-medium ${s.suffix} ${mutedTone}`}>
          /mo
        </span>
      </div>

      {/* Screen readers get one clean sentence instead of split spans. */}
      <span className="sr-only">
        {`$${plan.price}.${cents} per month`}
      </span>

      {showQualifier && plan.promoQualifier ? (
        <p
          className={`mt-2.5 text-[0.8125rem] leading-snug ${
            invert ? 'text-white/70' : 'text-gf-slate'
          }`}
        >
          {plan.promoQualifier}
        </p>
      ) : null}
    </div>
  );
}
