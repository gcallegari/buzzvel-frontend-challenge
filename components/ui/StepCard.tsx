
import { useTranslations } from "next-intl";
import type { Step, StepColor } from "@/data/steps";

interface StepCardProps {
  step: Step;
}

const iconStyles: Record<StepColor, string> = {
  blue: "rounded-full bg-primary-light",
  orange: "rotate-12 rounded-lg bg-background-orange",
  yellow: "rounded-xl bg-background-yellow",
};

const innerStyles: Record<StepColor, string> = {
  blue: "h-6 w-6 rounded-md bg-primary",
  orange: "h-7 w-7 rounded-full bg-primary-orange",
  yellow: "h-5 w-5 rounded-full bg-accent-yellow-step",
};

const innerPositions: Record<StepColor, string> = {
  blue: "left-2 top-2",
  orange: "left-6 top-6",
  yellow: "left-2 top-7",
};

export default function StepCard({ step }: StepCardProps) {
  const t = useTranslations("HowItWorks");

  const title = t(`items.${step.translationKey}.title`);
  const description = t(`items.${step.translationKey}.description`);

  return (
    <article className="flex flex-col items-start">
      {/* Decorative icon */}
      <div className="relative z-10 h-14 w-14 shrink-0">
        <div
          aria-hidden="true"
          className={`relative h-14 w-14 ${iconStyles[step.color]}`}
        >
          <div
            className={`absolute ${innerStyles[step.color]} ${innerPositions[step.color]}`}
          />
        </div>
      </div>

      {/* Step number */}
      <span className="mt-6 font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-text-tertiary">
        {t("step", { number: step.number })}
      </span>

      {/* Step title */}
      <h3 className="mt-2 font-heading text-xl font-bold leading-8 tracking-normal text-text-primary">
        {title}
      </h3>

      {/* Step description */}
      <p className="mt-3 max-w-xs font-sans text-base font-normal leading-7 tracking-normal text-text-secondary">
        {description}
      </p>
    </article>
  );
}
