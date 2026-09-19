'use client';

import { useId, useState, type FormEvent } from 'react';
import CallCta from './CallCta';
import { PinIcon } from './icons';
import { hero } from '@/lib/content';

/**
 * ZIP availability checker.
 *
 * Presented as a single elevated pill — the same pattern Google Fiber uses for
 * its own address bar — rather than a bordered form card.
 *
 * This is a static front end: there is no serviceability API behind it. The
 * form validates the ZIP format and then hands the visitor to an agent, who
 * checks the address against the live build map. It never asserts that a ZIP
 * is or is not covered, because Google Fiber builds street by street and a ZIP
 * code alone cannot answer that.
 */
export default function ZipChecker() {
  const inputId = useId();
  const [zip, setZip] = useState('');
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = zip.trim();

    if (!/^\d{5}$/.test(value)) {
      setError('Enter a 5-digit ZIP code.');
      setSubmitted(null);
      return;
    }

    setError(null);
    setSubmitted(value);
  };

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} noValidate>
        <label htmlFor={inputId} className="sr-only">
          {hero.zipHeading}
        </label>

        <div
          className={[
            'gf-pill-shadow flex flex-col gap-2 rounded-[1.75rem] border bg-white p-2',
            'transition-colors duration-200 sm:flex-row sm:items-center sm:rounded-full',
            error ? 'border-gf-red/50' : 'border-gf-line',
          ].join(' ')}
        >
          <div className="relative min-w-0 flex-1">
            <PinIcon className="pointer-events-none absolute top-1/2 left-4 h-[1.15rem] w-[1.15rem] -translate-y-1/2 text-gf-slate" />
            <input
              id={inputId}
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={5}
              placeholder={hero.zipPlaceholder}
              value={zip}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${inputId}-error` : undefined}
              onChange={(e) => {
                setZip(e.target.value.replace(/\D/g, '').slice(0, 5));
                if (error) setError(null);
              }}
              className="h-12 w-full bg-transparent pr-4 pl-11 text-[0.9375rem] text-gf-charcoal placeholder:text-gf-slate/75 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-gf-teal-600 px-7 text-[0.9375rem] font-semibold whitespace-nowrap text-white transition-all duration-200 hover:bg-gf-teal-700 hover:shadow-[0_8px_22px_-8px_rgba(0,93,74,0.6)]"
          >
            {hero.zipCta}
          </button>
        </div>
      </form>

      <div aria-live="polite">
        {error ? (
          <p
            id={`${inputId}-error`}
            className="mt-3 pl-5 text-sm font-medium text-gf-red"
          >
            {error}
          </p>
        ) : null}

        {submitted ? (
          <div className="gf-card-shadow mt-4 rounded-3xl border border-gf-teal/25 bg-gf-surface-tint p-5 sm:p-6">
            <p className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-gf-charcoal">
              Confirming coverage for {submitted}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gf-slate">
              Google Fiber is built street by street, so serviceability is
              determined at the address rather than the ZIP. An agent can check{' '}
              {submitted} against the current build map and, if the address is
              live, complete the order and schedule installation on the same
              call.
            </p>
            <CallCta variant="solid" className="mt-5" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
