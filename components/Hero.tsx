import Image from 'next/image';
import AuroraBackdrop from './AuroraBackdrop';
import CallCta from './CallCta';
import FiberFlow from './FiberFlow';
import PriceLockup from './PriceLockup';
import Reveal from './Reveal';
import ZipChecker from './ZipChecker';
import { CheckIcon, TagIcon } from './icons';
import { hero, leadPlan, media, offer, trustChips } from '@/lib/content';

const ACCENT_DOT: Record<string, string> = {
  teal: 'bg-gf-teal',
  orange: 'bg-gf-orange',
  magenta: 'bg-gf-magenta',
};

export default function Hero() {
  const accent = leadPlan.accent ?? 'teal';

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* ------------------------------------------------------------ */}
      {/* Backdrop photography, slowly pushing in                       */}
      {/* ------------------------------------------------------------ */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <Image
          src={media.hero.src}
          alt={media.hero.alt}
          fill
          sizes="100vw"
          // Hero is the LCP element. Next 16 deprecates `priority`; eager
          // loading plus a high fetch priority is the documented replacement.
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          className="gf-kenburns object-cover object-[center_38%]"
        />
      </div>

      {/* Ambient brand colour drifting over the room. Held at `light` here —
          `vivid` tints so heavily that the photograph stops reading as a room.
          Sections with no photograph behind them use `vivid` instead. */}
      <AuroraBackdrop variant="light" />

      {/* Light running along fiber strands — on-theme rather than decorative */}
      <FiberFlow className="opacity-90" />

      {/* A whisper of lift behind the copy. Kept very low — anything heavier is
          a scrim again, and the bold headline plus grey-800 subline already
          clear their contrast targets against the photograph on their own. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(42rem 26rem at 50% 32%, rgba(255,255,255,0.30), transparent 70%)',
        }}
      />

      {/* Section edges */}
      <div
        aria-hidden="true"
        className="gf-brand-rule absolute inset-x-0 top-0 h-[2px] opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/70 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-10 sm:px-6 sm:pt-12 sm:pb-12 lg:px-8 lg:pt-14">
        {/* ---------------------------------------------------------- */}
        {/* Message                                                     */}
        {/* ---------------------------------------------------------- */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="gf-eyebrow inline-flex items-center gap-2.5 rounded-full border border-gf-teal-600/30 bg-white/85 px-4 py-2 text-gf-teal-700 shadow-[0_1px_2px_rgba(32,33,36,0.06)] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="gf-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gf-teal" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gf-teal-600" />
              </span>
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <div className="relative mt-6">
              {/* Breathing glow behind the headline. Ordered before the h1 and
                  left at the default z-index — a negative z would drop it
                  behind the photograph and aurora instead of sitting between
                  them and the text. */}
              <div
                aria-hidden="true"
                className="gf-breathe pointer-events-none absolute inset-x-0 top-1/2 mx-auto h-56 w-[85%] -translate-y-1/2 rounded-full bg-gf-teal/28 blur-[70px]"
              />

              {/* drop-shadow, not text-shadow: a text-shadow paints behind the
                  glyphs and bleeds straight through `bg-clip-text` transparency,
                  washing the gradient out. drop-shadow respects the alpha mask. */}
              <h1 className="relative text-[2.5rem] leading-[1.04] font-bold tracking-[-0.04em] text-balance text-gf-charcoal [filter:drop-shadow(0_1px_2px_rgba(255,255,255,0.85))] sm:text-[3.5rem] lg:text-[4.25rem]">
                {hero.headlineLead}{' '}
                <span className="gf-text-flow bg-clip-text text-transparent">
                  {hero.headlineAccent}
                </span>
              </h1>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-[1.0625rem] leading-relaxed font-medium text-gf-slate-dark [text-shadow:0_1px_2px_rgba(255,255,255,0.7)] sm:text-lg">
              {hero.subline}
            </p>
          </Reveal>
        </div>

        {/* ---------------------------------------------------------- */}
        {/* Availability                                                */}
        {/* ---------------------------------------------------------- */}
        <Reveal delay={180}>
          <div className="mx-auto mt-10 max-w-2xl">
            <ZipChecker />
          </div>
        </Reveal>

        {/* ---------------------------------------------------------- */}
        {/* Trust markers                                               */}
        {/* ---------------------------------------------------------- */}
        <Reveal delay={230}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5">
            {trustChips.map((chip) => (
              <li
                key={chip}
                className="flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-3.5 py-1.5 text-[0.8125rem] font-semibold tracking-[-0.005em] whitespace-nowrap text-gf-charcoal shadow-[0_1px_2px_rgba(32,33,36,0.05)] backdrop-blur-sm"
              >
                <CheckIcon className="h-3 w-3 shrink-0 text-gf-teal-700" />
                {chip}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* ---------------------------------------------------------- */}
        {/* Lead-plan price anchor                                      */}
        {/* ---------------------------------------------------------- */}
        <Reveal delay={290}>
          <div className="gf-card-shadow-lg mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-white/70 bg-white/95 backdrop-blur-md">
            {/* Offer — the most prominent element in the band */}
            <div className="gf-shimmer relative flex flex-col items-center gap-2.5 overflow-hidden bg-gradient-to-r from-gf-teal-700 via-gf-teal-600 to-gf-teal-700 px-6 py-4 text-center sm:flex-row sm:gap-4 sm:px-7 sm:text-left">
              <span className="relative z-10 inline-flex shrink-0 items-center gap-2 rounded-full bg-white/20 px-3 py-1.5">
                <TagIcon className="h-3.5 w-3.5 text-white" />
                <span className="gf-eyebrow text-white">{offer.badge}</span>
              </span>
              <p className="relative z-10 text-[0.9375rem] font-semibold tracking-[-0.015em] text-white sm:text-base">
                {offer.headline}
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`h-2.5 w-2.5 shrink-0 rounded-full ${ACCENT_DOT[accent]}`}
                />
                <div className="min-w-0">
                  <span className="gf-eyebrow block text-gf-slate">
                    Lead plan
                  </span>
                  <p className="mt-1.5 text-[1.0625rem] font-semibold tracking-[-0.02em] text-gf-charcoal">
                    {leadPlan.name}
                  </p>
                </div>
              </div>

              <div
                aria-hidden="true"
                className="hidden h-12 w-px shrink-0 bg-gf-line sm:block"
              />

              <PriceLockup
                plan={leadPlan}
                size="compact"
                showQualifier={false}
                className="shrink-0"
              />

              <div className="hidden sm:block sm:flex-1" />

              <CallCta
                plan={leadPlan}
                variant="solid"
                className="w-full sm:w-auto"
              />
            </div>

            {/* Offer terms */}
            <div className="border-t border-gf-teal/20 bg-gf-surface-tint px-6 py-3.5 sm:px-7">
              <p className="text-center text-[0.8125rem] leading-relaxed text-gf-teal-700 sm:text-left">
                {offer.detail}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
