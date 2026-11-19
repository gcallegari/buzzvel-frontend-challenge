import { useTranslations } from "next-intl";
import type { Stat } from "@/data/stats";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps) {
  const t = useTranslations("Testimonials");

  return (
    <div className="flex min-w-0 flex-col gap-4">
      {/* Statistic value */}
      <p className="font-heading text-[36px] font-extrabold leading-[1.1] tracking-[-1.6px] text-primary lg:text-[64px] lg:leading-17.5">
        {stat.value}
      </p>

      {/* Statistic label */}
      <p className="font-sans text-sm font-normal leading-6 tracking-normal text-text-tertiary">
        {t(`stats.${stat.translationKey}`)}
      </p>
    </div>
  );
}
