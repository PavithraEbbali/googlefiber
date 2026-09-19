import AuroraBackdrop from './AuroraBackdrop';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import {
  finePrint,
  finePrintColumns,
  formatSpeed,
  plans,
  type PlanItem,
} from '@/lib/content';

const monthly = (plan: PlanItem) =>
  typeof plan.price === 'number'
    ? `$${plan.price}.${plan.cents ?? '00'}/mo`
    : 'By address';

/**
 * Hardware, fees and inclusions for every plan in the catalogue, side by side.
 *
 * Rows come from `plans` and columns from `finePrintColumns`, so adding a plan
 * or a disclosure field in lib/content.ts updates this table with no edit here.
 *
 * Renders as a real <table> from md up and as stacked definition cards below
 * that, which keeps the layout inside 320px without horizontal scrolling.
 */
export default function FinePrintGrid() {
  return (
    <section id="fine-print" className="relative overflow-hidden bg-white">
      <AuroraBackdrop variant="light" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow={finePrint.eyebrow}
          heading={finePrint.heading}
          subheading={finePrint.subheading}
        />

        {/* ------------------------------------------------------------ */}
        {/* md and up: comparison table                                   */}
        {/* ------------------------------------------------------------ */}
        <Reveal delay={80}>
          <div className="gf-card-shadow mt-12 hidden overflow-hidden rounded-[1.75rem] border border-gf-line md:block">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Monthly rate, equipment, installation, data policy and contract
                terms for every Google Fiber plan
              </caption>
              <thead>
                <tr className="bg-gf-charcoal text-white">
                  <th
                    scope="col"
                    className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
                  >
                    Plan
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
                  >
                    Monthly
                  </th>
                  {finePrintColumns.map((col) => (
                    <th
                      key={col.key}
                      scope="col"
                      className="px-5 py-4 text-[0.6875rem] font-semibold tracking-[0.08em] uppercase"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {plans.map((plan, i) => (
                  <tr
                    key={plan.id}
                    className={[
                      'align-top transition-colors duration-200 hover:bg-gf-surface-tint',
                      i % 2 === 1 ? 'bg-gf-surface/60' : 'bg-white',
                      i > 0 ? 'border-t border-gf-line' : '',
                    ].join(' ')}
                  >
                    <th
                      scope="row"
                      className="px-5 py-5 text-left align-top text-sm font-semibold text-gf-charcoal"
                    >
                      {plan.name}
                      {typeof plan.speedDown === 'number' ? (
                        <span className="mt-1 block text-xs font-normal text-gf-slate">
                          {formatSpeed(plan.speedDown)} down ·{' '}
                          {formatSpeed(plan.speedUp)} up
                        </span>
                      ) : null}
                    </th>
                    <td className="gf-tnum px-5 py-5 text-sm font-semibold whitespace-nowrap text-gf-charcoal">
                      {monthly(plan)}
                    </td>
                    {finePrintColumns.map((col) => (
                      <td
                        key={col.key}
                        className="px-5 py-5 text-sm leading-relaxed text-gf-slate"
                      >
                        {plan[col.key] ?? '—'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* ------------------------------------------------------------ */}
        {/* Below md: stacked cards                                       */}
        {/* ------------------------------------------------------------ */}
        <div className="mt-12 space-y-4 md:hidden">
          {plans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 50}>
              <div className="gf-card-shadow rounded-2xl border border-gf-line bg-white p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[0.9375rem] font-semibold text-gf-charcoal">
                    {plan.name}
                  </h3>
                  <span className="gf-tnum shrink-0 text-sm font-semibold whitespace-nowrap text-gf-charcoal">
                    {monthly(plan)}
                  </span>
                </div>

                {typeof plan.speedDown === 'number' ? (
                  <p className="mt-1 text-xs text-gf-slate">
                    {formatSpeed(plan.speedDown)} down ·{' '}
                    {formatSpeed(plan.speedUp)} up
                  </p>
                ) : null}

                <dl className="mt-4 space-y-2.5 border-t border-gf-line pt-4">
                  {finePrintColumns.map((col) => (
                    <div
                      key={col.key}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
                    >
                      <dt className="text-[0.6875rem] tracking-[0.06em] text-gf-slate uppercase">
                        {col.label}
                      </dt>
                      <dd className="min-w-0 text-right text-[0.8125rem] text-gf-charcoal">
                        {plan[col.key] ?? '—'}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Footnotes */}
        <Reveal delay={120}>
          <ul className="mt-8 space-y-2 border-t border-gf-line pt-6">
            {finePrint.footnotes.map((note) => (
              <li
                key={note}
                className="flex gap-2.5 text-xs leading-relaxed text-gf-slate"
              >
                <span aria-hidden="true" className="text-gf-teal">
                  —
                </span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
