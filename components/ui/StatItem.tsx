import { useTranslations } from "next-intl";
import type { Stat } from "@/data/stats";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps) {
  const t = useTranslations("Testimonials");

  return (
    <div className="min-w-0">
      <p className="text-[32px] font-bold leading-none tracking-tight text-primary md:text-[52px]">
        {stat.value}
      </p>

      <p className="mt-2 text-[11px] leading-relaxed text-foreground/60 md:text-xs">
        {t(`stats.${stat.translationKey}`)}
      </p>
    </div>
  );
}