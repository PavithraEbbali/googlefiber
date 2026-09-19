import type { CSSProperties } from 'react';

/**
 * Light travelling along fiber strands.
 *
 * Each strand is drawn twice: once as a faint static guide, and once as a
 * heavily dashed stroke whose `stroke-dashoffset` animates, which reads as a
 * lit pulse running the length of the curve. It is the one background motif
 * that is literally the product rather than decoration.
 *
 * Sized in a 1440×720 viewBox and stretched with `slice`, so it covers any hero
 * aspect without distorting the curves.
 */

interface Strand {
  d: string;
  color: string;
  width: number;
  /** Rough path length; only needs to exceed the real length. */
  len: number;
  dur: string;
  delay: string;
  opacity: number;
  /** Dropped below md to keep the motion budget down on phones. */
  secondary?: boolean;
}

const STRANDS: Strand[] = [
  {
    d: 'M-80,150 C260,40 520,250 780,170 C1010,100 1230,210 1520,140',
    color: '#00BE8E',
    width: 1.6,
    len: 1900,
    dur: '9s',
    delay: '0s',
    opacity: 0.9,
  },
  {
    d: 'M-80,320 C220,230 480,430 760,340 C1040,250 1260,400 1520,310',
    color: '#00D699',
    width: 1.3,
    len: 1900,
    dur: '11s',
    delay: '1.6s',
    opacity: 0.7,
  },
  {
    d: 'M-80,470 C300,560 540,360 820,470 C1080,570 1280,420 1520,500',
    color: '#FF7321',
    width: 1.3,
    len: 1950,
    dur: '13s',
    delay: '3.1s',
    opacity: 0.55,
    secondary: true,
  },
  {
    d: 'M-80,620 C280,530 560,700 860,600 C1120,510 1300,640 1520,580',
    color: '#FF72FC',
    width: 1.2,
    len: 1950,
    dur: '15s',
    delay: '0.8s',
    opacity: 0.45,
    secondary: true,
  },
];

const NODES = [
  { cx: 262, cy: 196, color: '#00BE8E', dur: '3.2s', delay: '0s' },
  { cx: 780, cy: 170, color: '#00D699', dur: '4.1s', delay: '1.1s' },
  { cx: 1042, cy: 252, color: '#00BE8E', dur: '3.7s', delay: '2.3s' },
  { cx: 548, cy: 372, color: '#FF7321', dur: '4.6s', delay: '0.6s' },
  { cx: 1284, cy: 430, color: '#FF72FC', dur: '5.1s', delay: '1.9s' },
];

export default function FiberFlow({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1440 720"
      // `slice` cropped to the middle ~50% of the composition on a tall hero,
      // hiding most of the strands. These are abstract curves, so stretching
      // them is preferable to losing them.
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <filter id="gf-flow-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Static strands — the fiber itself */}
      {STRANDS.map((s, i) => (
        <path
          key={`guide-${i}`}
          d={s.d}
          fill="none"
          stroke={s.color}
          strokeWidth={s.width}
          strokeOpacity={0.28}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          className={s.secondary ? 'gf-flow-secondary' : undefined}
        />
      ))}

      {/* Travelling light */}
      {STRANDS.map((s, i) => (
        <path
          key={`pulse-${i}`}
          d={s.d}
          fill="none"
          stroke={s.color}
          strokeWidth={s.width + 1.4}
          strokeLinecap="round"
          strokeOpacity={s.opacity}
          filter="url(#gf-flow-glow)"
          className={`gf-flow${s.secondary ? ' gf-flow-secondary' : ''}`}
          vectorEffect="non-scaling-stroke"
          // A lit dash followed by a gap longer than the path, so exactly one
          // pulse travels each strand at a time.
          strokeDasharray={`230 ${s.len}`}
          style={
            {
              '--flow-from': s.len + 230,
              '--flow-to': 0,
              '--flow-dur': s.dur,
              '--flow-delay': s.delay,
            } as CSSProperties
          }
        />
      ))}

      {/* Junction blips */}
      {NODES.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={3}
          fill={n.color}
          className="gf-node"
          filter="url(#gf-flow-glow)"
          style={
            {
              '--node-dur': n.dur,
              '--node-delay': n.delay,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
}
