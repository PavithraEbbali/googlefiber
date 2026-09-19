import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  heading: string;
  subheading?: string;
  /** Render on a dark surface. */
  invert?: boolean;
  className?: string;
}

/**
 * The single heading treatment used by every section, so eyebrow weight,
 * display size, measure and vertical rhythm stay identical down the page.
 *
 * The eyebrow carries a short accent rule — a small, consistent brand cue that
 * reads as considered rather than decorative.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  invert = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      <span className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className={`h-px w-8 ${invert ? 'bg-gf-mint/50' : 'bg-gf-teal-600/40'}`}
        />
        <span
          className={`gf-eyebrow ${invert ? 'text-gf-mint' : 'text-gf-teal-700'}`}
        >
          {eyebrow}
        </span>
      </span>

      <h2
        className={`gf-display mt-5 text-[1.875rem] sm:text-[2.5rem] ${
          invert ? 'text-white' : 'text-gf-charcoal'
        }`}
      >
        {heading}
      </h2>

      {subheading ? (
        <p
          className={`mt-5 text-[1.0625rem] leading-relaxed ${
            invert ? 'text-white/65' : 'text-gf-slate'
          }`}
        >
          {subheading}
        </p>
      ) : null}
    </Reveal>
  );
}
