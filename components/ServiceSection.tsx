import AuroraBackdrop from './AuroraBackdrop';
import PlanCard from './PlanCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import {
  plansFor,
  serviceLineMeta,
  type ServiceLine,
} from '@/lib/content';

interface ServiceSectionProps {
  line: ServiceLine;
  /** Alternating background so adjacent sections stay visually separated. */
  tinted?: boolean;
}

/**
 * Renders one service line from the catalogue.
 *
 * Returns null when the line carries no plans, which is how 'cable', 'tv' and
 * 'mobile' disappear from the page entirely rather than rendering an empty
 * shell or a placeholder card.
 */
export default function ServiceSection({
  line,
  tinted = false,
}: ServiceSectionProps) {
  const linePlans = plansFor(line);
  if (linePlans.length === 0) return null;

  const meta = serviceLineMeta[line];
  const single = linePlans.length === 1;

  const gridClass = single
    ? 'grid grid-cols-1'
    : linePlans.length === 2
      ? 'grid grid-cols-1 gap-6 md:grid-cols-2'
      : 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3';

  return (
    <section
      id={meta.anchor}
      className={`relative overflow-hidden ${
        tinted ? 'bg-gf-surface-tint' : 'bg-white'
      }`}
    >
      <AuroraBackdrop variant="light" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={meta.eyebrow}
          heading={meta.heading}
          subheading={meta.subheading}
        />

        <div className={`mt-12 sm:mt-14 ${gridClass}`}>
          {linePlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 80} className="flex">
              <div className="flex w-full">
                <PlanCard plan={plan} wide={single} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
