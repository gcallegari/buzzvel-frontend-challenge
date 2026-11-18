
import StepCard from "@/components/ui/StepCard";
import { steps } from "@/data/steps";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            How Luma works
          </p>

          <h2
            id="how-it-works-title"
            className="text-[30px] font-bold leading-[1.1] tracking-tight md:text-[42px]"
          >
            Less browsing. More learning.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-6 top-6 hidden h-px bg-border md:block"
            style={{
              width: "calc((100% - 5rem) * 2 / 3 + 5rem)",
            }}
          />

          {steps.map((step) => (
            <div key={step.id} className="relative z-10">
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
