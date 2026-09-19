import { brand } from '@/lib/content';

/**
 * Persistent, non-dismissable retailer disclosure.
 *
 * There is no close control and no client state — it renders on every paint,
 * at the very top of the document, above the header.
 */
export default function TopDisclosureBar() {
  return (
    <div className="bg-gf-charcoal text-white">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-4 py-2">
        <p className="text-center text-[0.6875rem] leading-tight font-medium tracking-[0.02em] text-white/85 sm:text-xs">
          {brand.disclosure}
        </p>
      </div>
    </div>
  );
}
