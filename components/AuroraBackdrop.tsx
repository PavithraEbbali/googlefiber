type Variant = 'light' | 'vivid' | 'dark';

interface AuroraBackdropProps {
  variant?: Variant;
  className?: string;
}

/**
 * Ambient colour behind a section.
 *
 * Three large blurred blobs in the Google Fiber tier accents, drifting on
 * independent 22–34s loops. Only `transform` animates, so it stays on the
 * compositor and costs nothing on the main thread; it stops entirely under
 * prefers-reduced-motion.
 *
 * Intensity is deliberately low — this should register as light in the room,
 * not as a moving background.
 */
export default function AuroraBackdrop({
  variant = 'light',
  className = '',
}: AuroraBackdropProps) {
  const intensity: Record<Variant, { teal: string; orange: string; magenta: string }> =
    {
      light: {
        teal: 'bg-gf-teal/22',
        orange: 'bg-gf-orange/12',
        magenta: 'bg-gf-magenta/10',
      },
      vivid: {
        teal: 'bg-gf-teal/32',
        orange: 'bg-gf-orange/20',
        magenta: 'bg-gf-magenta/18',
      },
      dark: {
        teal: 'bg-gf-teal/20',
        orange: 'bg-gf-orange/12',
        magenta: 'bg-gf-magenta/14',
      },
    };

  const c = intensity[variant];
  // The subtle variant drops the third blob — it is barely perceptible at that
  // opacity and each one costs a blurred texture.
  const showThird = variant !== 'light';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <span
        className={`gf-blob gf-blob-a ${c.teal} -top-32 -left-24 h-[34rem] w-[34rem]`}
      />
      <span
        className={`gf-blob gf-blob-b ${c.orange} -top-20 right-[-8rem] h-[30rem] w-[30rem]`}
      />
      {showThird ? (
        <span
          className={`gf-blob gf-blob-c ${c.magenta} bottom-[-14rem] left-1/3 h-[28rem] w-[28rem]`}
        />
      ) : null}
    </div>
  );
}
