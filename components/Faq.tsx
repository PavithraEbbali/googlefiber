import AuroraBackdrop from './AuroraBackdrop';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { ChevronDownIcon } from './icons';
import { faqMeta, faqs } from '@/lib/content';

/**
 * Accordion built on native <details>/<summary>.
 *
 * Keyboard support, screen-reader semantics and open/close state come from the
 * browser, so the section works before hydration and needs no client JS.
 */
export default function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-white">
      <AuroraBackdrop variant="light" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
          <SectionHeading
            eyebrow={faqMeta.eyebrow}
            heading={faqMeta.heading}
            subheading={faqMeta.subheading}
            className="min-w-0"
          />

          <div className="min-w-0">
            <dl className="divide-y divide-gf-line border-y border-gf-line">
              {faqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 45}>
                  <details className="group">
                    <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-5 py-6 text-left [&::-webkit-details-marker]:hidden">
                      <dt className="text-[1.0625rem] font-medium tracking-[-0.015em] text-gf-charcoal transition-colors duration-200 group-hover:text-gf-teal-700">
                        {item.q}
                      </dt>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gf-line text-gf-slate transition-all duration-300 group-hover:border-gf-teal-600 group-hover:text-gf-teal-700 group-open:rotate-180 group-open:border-gf-teal-600 group-open:bg-gf-surface-tint group-open:text-gf-teal-700"
                      >
                        <ChevronDownIcon className="h-3.5 w-3.5" />
                      </span>
                    </summary>
                    <dd className="pr-12 pb-6 text-[0.9375rem] leading-relaxed text-gf-slate">
                      {item.a}
                    </dd>
                  </details>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
