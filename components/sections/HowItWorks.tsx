import { useTranslations } from "next-intl";
import StepCard from "@/components/ui/StepCard";
import { steps } from "@/data/steps";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-20">
        {/* Section heading */}
        <div className="flex flex-col items-center gap-4">
          <p className="font-sans text-center text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-primary">
            {t("eyebrow")}
          </p>

          <h2
            id="how-it-works-title"
            className="font-heading text-center text-[32px] font-extrabold leading-[1.2] tracking-[-1.2px] text-text-primary lg:text-[48px] lg:leading-14"
          >
            {t("title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative mt-20 grid grid-cols-1 gap-18.5 md:grid-cols-3 md:gap-20">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute top-7 left-7 hidden h-px bg-line-1 md:block"
            style={{
              width: "calc((100% - 10rem) * 2 / 3 + 10rem)",
            }}
          />

          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`relative z-10 ${
                index > 0
                  ? "before:absolute before:-top-12.5 before:left-7 before:h-12.5 before:w-px before:bg-line-1 md:before:hidden"
                  : ""
              }`}
            >
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
