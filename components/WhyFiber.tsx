import Image from 'next/image';
import AuroraBackdrop from './AuroraBackdrop';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { media, whyFiber } from '@/lib/content';

/**
 * Editorial layout rather than a grid of icon cards.
 *
 * Four equal icon tiles is the most over-used section pattern on the web. This
 * puts the fiber macro to work as an actual image and runs the four points as a
 * numbered, rule-separated list — closer to a print spread than a feature grid.
 */
export default function WhyFiber() {
  return (
    <section id="why-fiber" className="relative overflow-hidden bg-gf-charcoal">
      <AuroraBackdrop variant="dark" />
      <div aria-hidden="true" className="gf-dark-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="gf-brand-rule absolute inset-x-0 top-0 h-[2px] opacity-80"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={whyFiber.eyebrow}
          heading={whyFiber.heading}
          subheading={whyFiber.subheading}
          invert
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          {/* Fiber macro, used as a subject rather than wallpaper */}
          <Reveal className="min-w-0">
            <figure className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/12">
                <Image
                  src={media.whyFiber.src}
                  alt="Bare optical fibre strands emerging from a stripped cable jacket on a workbench."
                  fill
                  sizes="(min-width: 1024px) 34rem, 92vw"
                  placeholder="blur"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-gf-charcoal/70 via-transparent to-transparent"
                />
              </div>

              <figcaption className="absolute right-5 bottom-5 left-5">
                <p className="text-[0.8125rem] leading-relaxed font-medium text-white/85">
                  Glass, not copper — the full distance to the building.
                </p>
              </figcaption>
            </figure>
          </Reveal>

          {/* Numbered, rule-separated points */}
          <ol className="min-w-0">
            {whyFiber.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 70} as="li">
                <div
                  className={`flex gap-6 border-white/12 py-7 sm:gap-8 ${
                    i === 0 ? 'pt-0' : 'border-t'
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="gf-tnum shrink-0 pt-0.5 text-[0.9375rem] font-semibold text-gf-teal"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.125rem] font-semibold tracking-[-0.02em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
