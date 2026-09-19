import Image from 'next/image';
import AuroraBackdrop from './AuroraBackdrop';
import CallCta from './CallCta';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { contact, howItWorks, media } from '@/lib/content';

/**
 * Horizontal step flow.
 *
 * Deliberately a different shape from the Why Fiber section above it — that one
 * is a vertical editorial list, this one reads left to right along a rule, so
 * the two never look like the same block rendered twice.
 */
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gf-surface-tint"
    >
      <AuroraBackdrop variant="vivid" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Heading alongside the installation photograph */}
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow={howItWorks.eyebrow}
            heading={howItWorks.heading}
            className="min-w-0"
          />

          <Reveal delay={80} className="min-w-0">
            <div className="gf-card-shadow relative aspect-[16/9] overflow-hidden rounded-[1.75rem]">
              <Image
                src={media.installation.src}
                alt={media.installation.alt}
                fill
                sizes="(min-width: 1024px) 36rem, 92vw"
                placeholder="blur"
                className="object-cover object-[center_40%]"
              />
            </div>
          </Reveal>
        </div>

        {/* Step flow */}
        <div className="relative mt-16 sm:mt-20">
          {/* Rule the numbers sit on, desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-0 left-0 hidden h-px bg-gf-line sm:block"
          />

          <ol className="grid gap-10 sm:grid-cols-3 sm:gap-10">
            {howItWorks.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} as="li">
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="gf-tnum relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-gf-teal-600/30 bg-white text-[0.9375rem] font-semibold text-gf-teal-700"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 text-[1.125rem] font-semibold tracking-[-0.02em] text-gf-charcoal">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-gf-slate">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Closing action */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-center gap-4 border-t border-gf-line pt-10 sm:flex-row sm:justify-between">
            <p className="text-center text-sm text-gf-slate sm:text-left">
              Agents are available {contact.hours}.
            </p>
            <CallCta variant="solid" className="w-full sm:w-auto" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
