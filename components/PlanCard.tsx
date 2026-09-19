import Image from 'next/image';
import CallCta from './CallCta';
import PriceLockup from './PriceLockup';
import { CheckIcon } from './icons';
import { formatSpeed, type PlanItem } from '@/lib/content';

interface PlanCardProps {
  plan: PlanItem;
  /** Wide layout is used when a service line carries a single plan. */
  wide?: boolean;
}

/**
 * Tier accents mirror Google Fiber's own product colour-coding: the core and
 * home tiers carry orange, the top tier carries magenta, and the most-ordered
 * tier carries brand teal.
 */
const ACCENT_BAR: Record<string, string> = {
  teal: 'bg-gf-teal',
  orange: 'bg-gf-orange',
  magenta: 'bg-gf-magenta',
};

const ACCENT_DOT: Record<string, string> = {
  teal: 'bg-gf-teal',
  orange: 'bg-gf-orange',
  magenta: 'bg-gf-magenta',
};

/**
 * Tier photography, leading the card. Sitting above the plan name gives the
 * card a subject before it gives a number, which is what stops a pricing grid
 * reading as a spreadsheet.
 *
 * Cards without an `image` render nothing here rather than a placeholder.
 */
function PlanPhoto({
  plan,
  wide = false,
}: {
  plan: PlanItem;
  wide?: boolean;
}) {
  if (!plan.image) return null;

  return (
    <div
      className={[
        'relative -mt-7 -mr-7 -ml-7 overflow-hidden rounded-t-[1.75rem]',
        'sm:-mt-8 sm:-mr-8 sm:-ml-8',
        // The wide banner is only ~96px tall at 320px, which loses a person's
        // face entirely. It opens up on small screens and narrows at sm+.
        wide ? 'mb-8 aspect-[16/9] sm:aspect-[3/1]' : 'mb-7 aspect-[2/1]',
      ].join(' ')}
    >
      <Image
        src={plan.image}
        alt={plan.imageAlt ?? ''}
        fill
        sizes={
          wide
            ? '(min-width: 1024px) 64rem, 92vw'
            : '(min-width: 1024px) 24rem, (min-width: 768px) 45vw, 92vw'
        }
        placeholder="blur"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
      />
      {/* Grounds the photograph into the card body below it */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent"
      />
    </div>
  );
}

function SpeedRow({ plan }: { plan: PlanItem }) {
  if (typeof plan.speedDown !== 'number') return null;

  return (
    <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-gf-line bg-gf-line">
      <div className="bg-gf-surface-tint px-4 py-3.5">
        <dt className="gf-eyebrow text-gf-slate">Download</dt>
        <dd className="gf-tnum mt-1 text-[0.9375rem] font-semibold tracking-[-0.01em] text-gf-charcoal">
          {formatSpeed(plan.speedDown)}
        </dd>
      </div>
      <div className="bg-gf-surface-tint px-4 py-3.5">
        <dt className="gf-eyebrow text-gf-slate">Upload</dt>
        <dd className="gf-tnum mt-1 text-[0.9375rem] font-semibold tracking-[-0.01em] text-gf-charcoal">
          {formatSpeed(plan.speedUp)}
        </dd>
      </div>
    </dl>
  );
}

function FeatureList({
  plan,
  columns = 1,
}: {
  plan: PlanItem;
  columns?: 1 | 2;
}) {
  return (
    <ul
      className={`mt-7 space-y-3.5 ${
        columns === 2 ? 'sm:columns-2 sm:gap-x-9 sm:space-y-0' : ''
      }`}
    >
      {plan.features.map((feature) => (
        <li
          key={feature}
          className={`flex gap-3 text-sm leading-relaxed text-gf-slate ${
            columns === 2 ? 'sm:mb-3.5 sm:break-inside-avoid' : ''
          }`}
        >
          <span className="mt-[0.15rem] flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-gf-teal-600/10">
            <CheckIcon className="h-2.5 w-2.5 text-gf-teal-700" />
          </span>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PlanCard({ plan, wide = false }: PlanCardProps) {
  const highlighted = Boolean(plan.isPopular);
  const accent = plan.accent ?? 'teal';

  const shell = [
    'group relative flex w-full flex-col overflow-hidden rounded-[1.75rem] bg-white',
    'p-7 sm:p-8 transition-all duration-300 ease-out',
    highlighted
      ? 'border-2 border-gf-teal-600 gf-card-shadow-lg'
      : 'border border-gf-line gf-card-shadow',
    'hover:-translate-y-1.5 hover:border-gf-teal-600 hover:gf-card-shadow-lg',
  ].join(' ');

  // z-10 keeps the bar above the photograph, which creates its own stacking
  // context once it leads the card.
  const accentBar = (
    <span
      aria-hidden="true"
      className={`absolute inset-x-0 top-0 z-10 h-[3px] ${ACCENT_BAR[accent]}`}
    />
  );

  const header = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="flex items-center gap-2.5 text-[1.25rem] font-semibold tracking-[-0.025em] text-gf-charcoal">
          <span
            aria-hidden="true"
            className={`h-2 w-2 shrink-0 rounded-full ${ACCENT_DOT[accent]}`}
          />
          {plan.name}
        </h3>
        {plan.badge ? (
          <span className="shrink-0 rounded-full bg-gf-teal-600 px-3 py-1.5 text-[0.6875rem] font-semibold whitespace-nowrap text-white">
            {plan.badge}
          </span>
        ) : null}
      </div>

      {plan.tagline ? (
        <p className="mt-3 text-sm leading-relaxed text-gf-slate">
          {plan.tagline}
        </p>
      ) : null}
    </>
  );

  /* ---------------------------------------------------------------- */
  /* Wide variant — a service line with a single plan                 */
  /* ---------------------------------------------------------------- */
  if (wide) {
    return (
      <article className={shell}>
        {accentBar}
        <PlanPhoto plan={plan} wide />
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          <div className="min-w-0">
            {header}
            <div className="mt-7">
              <PriceLockup plan={plan} size="card" />
            </div>
            <SpeedRow plan={plan} />
            <CallCta plan={plan} variant="solid" fullWidth className="mt-7" />
            {plan.equipmentFee ? (
              <p className="mt-4 text-center text-[0.6875rem] leading-relaxed text-gf-slate">
                {plan.equipmentFee} · Excludes taxes and fees.
              </p>
            ) : null}
          </div>

          <div className="min-w-0 border-t border-gf-line pt-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
            <h4 className="gf-eyebrow text-gf-slate">What is included</h4>
            <FeatureList plan={plan} columns={2} />
          </div>
        </div>
      </article>
    );
  }

  /* ---------------------------------------------------------------- */
  /* Standard stacked card                                             */
  /* ---------------------------------------------------------------- */
  return (
    <article className={shell}>
      {accentBar}
      <PlanPhoto plan={plan} />
      {header}

      <div className="mt-7">
        <PriceLockup plan={plan} size="card" />
      </div>

      <SpeedRow plan={plan} />

      <div className="flex-1">
        <FeatureList plan={plan} />
      </div>

      <CallCta plan={plan} variant="solid" fullWidth className="mt-8" />

      {plan.equipmentFee ? (
        <p className="mt-4 text-center text-[0.6875rem] leading-relaxed text-gf-slate">
          {plan.equipmentFee} · Excludes taxes and fees.
        </p>
      ) : null}
    </article>
  );
}
