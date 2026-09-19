import Faq from '@/components/Faq';
import FinePrintGrid from '@/components/FinePrintGrid';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import ServiceSection from '@/components/ServiceSection';
import WhyFiber from '@/components/WhyFiber';
import { activeServiceLines } from '@/lib/content';

export default function Page() {
  /**
   * Service lines render in the canonical merchandising order defined by
   * SERVICE_LINE_ORDER in lib/content.ts:
   *
   *   fiber -> cable -> bundle -> tv -> mobile -> phone
   *
   * `activeServiceLines()` drops any line with no plans, so Google Fiber's
   * non-existent cable, TV and mobile products never reach the page. Adding
   * plans for a line in lib/content.ts is all it takes to bring its section
   * back, in the correct position, with no change to this file.
   */
  const lines = activeServiceLines();

  return (
    <>
      <Hero />

      {lines.map((line, i) => (
        <ServiceSection key={line} line={line} tinted={i % 2 === 1} />
      ))}

      <FinePrintGrid />
      <WhyFiber />
      <HowItWorks />
      <Faq />
    </>
  );
}
