import { useTranslations } from "next-intl";
import type { Step, StepColor } from "@/data/steps";

interface StepCardProps {
  step: Step;
}

const iconStyles: Record<StepColor, string> = {
  blue: "rounded-full bg-[#E4E5FF]",
  orange: "rotate-[12deg] rounded-[7px] bg-[#FFC99F]",
  yellow: "rounded-[10px] bg-[#FFF0B8]",
};

const innerStyles: Record<StepColor, string> = {
  blue: "rounded-[5px] bg-primary",
  orange: "rounded-full bg-[#FF7557]",
  yellow: "rounded-full bg-[#E8D34B]",
};

export default function StepCard({ step }: StepCardProps) {
  const t = useTranslations("HowItWorks");

  const title = t(`items.${step.translationKey}.title`);
  const description = t(`items.${step.translationKey}.description`);

  return (
    <article className="flex flex-col items-start">
      {/* Decorative icon */}
      <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center">
        <div
          aria-hidden="true"
          className={`flex h-11 w-11 items-center justify-center ${iconStyles[step.color]}`}
        >
          <div
            className={`h-[18px] w-[18px] ${innerStyles[step.color]}`}
          />
        </div>
      </div>

      <span className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-foreground/50">
        {t("step", { number: step.number })}
      </span>

      <h3 className="text-lg font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/65">
        {description}
      </p>
    </article>
  );
}