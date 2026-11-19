import { useFormatter, useTranslations } from "next-intl";

type InfoBadgeVariant = "courses" | "rating";

interface InfoBadgeProps {
  variant: InfoBadgeVariant;
  className?: string;
}

const COURSE_COUNT = 120;
const AVERAGE_RATING = 4.9;

export default function InfoBadge({ variant, className = "" }: InfoBadgeProps) {
  const t = useTranslations("Hero");
  const format = useFormatter();

  const isCourses = variant === "courses";

  const courseCount = `${format.number(COURSE_COUNT)}+`;
  const rating = format.number(AVERAGE_RATING, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  const label = isCourses ? t("coursesBadge") : t("ratingBadge", { rating });

  return (
    <div
      className={`
        flex w-max max-w-[calc(100vw-40px)] items-center
        bg-white shadow-lg
        ${
          isCourses
            ? "gap-2 rounded-[10px] px-3 py-2 md:min-h-14 md:gap-3 md:rounded-xl md:px-4 md:py-3"
            : "gap-2 rounded-[10px] px-2 py-2 md:min-h-12 md:rounded-xl md:px-4 md:py-3"
        }
        ${className}
      `}
    >
      {isCourses ? (
        <span className="flex h-7 shrink-0 items-center justify-center rounded-md bg-[#E9EDFF] px-2 text-xs font-bold text-primary md:h-8 md:rounded-lg md:text-sm">
          {courseCount}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="shrink-0 whitespace-nowrap text-[10px] tracking-wider text-accent md:text-xs"
        >
          ★★★★★
        </span>
      )}

      <span
        className={
          isCourses
            ? "min-w-0 font-sans text-[11px] font-medium leading-4 text-(--text-primary) md:whitespace-nowrap md:text-xs"
            : "min-w-0 text-[10px] font-medium leading-4 text-foreground md:whitespace-nowrap md:text-xs"
        }
      >
        {label}
      </span>
    </div>
  );
}
