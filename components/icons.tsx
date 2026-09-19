import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 24 24',
  'aria-hidden': true,
  focusable: false,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.4a12.5 12.5 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2.25} {...props}>
      <path d="m4.5 12.5 4.6 4.5L19.5 7" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 12h15m0 0-5.5-5.5M19.5 12 14 17.5" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base} strokeWidth={2} {...props}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

/** Two strands of fiber — used for the "pure fiber" feature. */
export function FiberIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 8.5c4.5 0 4.5 7 9 7s4.5-7 9-7" />
      <path d="M3 15.5c4.5 0 4.5-7 9-7" opacity={0.45} />
      <circle cx="21" cy="8.5" r="1.6" />
      <circle cx="3" cy="8.5" r="1.6" />
    </svg>
  );
}

/** Up + down arrows of equal length — symmetrical speed. */
export function SymmetryIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 20V4m0 0L4.5 8M8.5 4l4 4" />
      <path d="M15.5 4v16m0 0 4-4m-4 4-4-4" />
    </svg>
  );
}

export function RouterIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M7 17h.01M10.5 17h.01" />
      <path d="M12 10.5V6" />
      <path d="M8.8 6.4a4.5 4.5 0 0 1 6.4 0" />
      <path d="M6.4 3.9a8 8 0 0 1 11.2 0" opacity={0.45} />
    </svg>
  );
}

export function InfinityIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8.2 8.2a5.4 5.4 0 1 0 0 7.6c1.6-1.6 2.2-2.2 3.8-3.8s2.2-2.2 3.8-3.8a5.4 5.4 0 1 1 0 7.6c-1.6-1.6-2.2-2.2-3.8-3.8" />
    </svg>
  );
}

export function TagIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 11.4V4.5a1 1 0 0 1 1-1h6.9a1 1 0 0 1 .7.3l8.1 8.1a1 1 0 0 1 0 1.4l-6.9 6.9a1 1 0 0 1-1.4 0L3.8 12.1a1 1 0 0 1-.3-.7Z" />
      <circle cx="8" cy="8" r="1.4" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 5 6v5.6c0 4.2 2.9 7.6 7 9.2 4.1-1.6 7-5 7-9.2V6l-7-2.8Z" />
      <path d="m9.2 12.1 2 2 3.6-3.8" />
    </svg>
  );
}

export const whyIcons = [SymmetryIcon, RouterIcon, InfinityIcon, TagIcon];
export const chipIcons = [FiberIcon, SymmetryIcon, InfinityIcon, ShieldIcon];
