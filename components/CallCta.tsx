import { contact, type PlanItem } from '@/lib/content';
import { PhoneIcon } from './icons';

type Variant = 'solid' | 'outline' | 'dark' | 'ghost';
type Size = 'sm' | 'md';

interface CallCtaProps {
  /** When supplied, a plan without a price switches the label to "Call for pricing". */
  plan?: PlanItem;
  /** Override the label. Used only by the header and footer. */
  label?: string;
  variant?: Variant;
  size?: Size;
  showIcon?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const VARIANTS: Record<Variant, string> = {
  // #008064 is the shade Google Fiber uses for its own primary buttons.
  solid:
    'bg-gf-teal-600 text-white shadow-[0_1px_2px_rgba(32,33,36,0.14)] hover:bg-gf-teal-700 hover:shadow-[0_8px_22px_-8px_rgba(0,93,74,0.6)] active:bg-gf-teal-700',
  outline:
    'border border-gf-line bg-white text-gf-charcoal hover:border-gf-teal-600 hover:text-gf-teal-700 hover:bg-gf-surface-tint',
  dark: 'bg-white text-gf-charcoal hover:bg-gf-mint hover:text-gf-teal-700',
  ghost:
    'border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/35',
};

/**
 * Size is a prop rather than an `!important` override from the caller.
 *
 * Tailwind v4 moved the important modifier to a suffix (`px-3!`), so the v3
 * prefix form (`!px-3`) silently fails to override the base padding. Owning the
 * sizing here removes that whole class of bug.
 */
const SIZES: Record<Size, string> = {
  // Compact enough to fit beside the wordmark at 320px, but held at a 44px
  // minimum height so it stays a comfortable touch target.
  sm: 'min-h-11 px-3 py-2 text-xs sm:px-5 sm:py-3 sm:text-sm',
  md: 'min-h-11 px-6 py-3.5 text-[0.9375rem]',
};

/**
 * Every phone CTA on the page renders through this component, which guarantees
 * the `data-call-cta` attribute is present on all tel: links for analytics and
 * call-tracking attribution.
 *
 * Label rules (outside the header and footer, which pass an explicit label):
 *   - plan has a price  -> "Call to order"
 *   - plan has no price -> "Call for pricing"
 */
export default function CallCta({
  plan,
  label,
  variant = 'solid',
  size = 'md',
  showIcon = true,
  fullWidth = false,
  className = '',
}: CallCtaProps) {
  const resolvedLabel =
    label ??
    (plan && typeof plan.price !== 'number'
      ? 'Call for pricing'
      : 'Call to order');

  const aria = plan
    ? `${resolvedLabel} — ${plan.name} — ${contact.phoneDisplay}`
    : `${resolvedLabel} — ${contact.phoneDisplay}`;

  return (
    <a
      href={contact.phoneHref}
      data-call-cta
      data-plan={plan?.id}
      aria-label={aria}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-full',
        'font-semibold tracking-[-0.01em] whitespace-nowrap',
        'transition-all duration-200 ease-out',
        SIZES[size],
        VARIANTS[variant],
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {showIcon ? <PhoneIcon className="h-4 w-4 shrink-0" /> : null}
      {resolvedLabel}
    </a>
  );
}
