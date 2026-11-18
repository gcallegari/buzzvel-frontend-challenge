
import type { ReactNode } from "react";

type InfoBadgeVariant = "courses" | "rating";

interface InfoBadgeProps {
  variant: InfoBadgeVariant;
  className?: string;
}

interface BadgeContent {
  highlight: ReactNode;
  label: string;
}

const badgeContent: Record<InfoBadgeVariant, BadgeContent> = {
  courses: {
    highlight: "120+",
    label: "expert-led courses",
  },
  rating: {
    highlight: "★★★★★",
    label: "4.9 avg rating",
  },
};

export default function InfoBadge({
  variant,
  className = "",
}: InfoBadgeProps) {
  const { highlight, label } = badgeContent[variant];

  const isCourses = variant === "courses";

  return (
    <div
      className={`
        flex w-max items-center
        rounded-[12px] bg-white shadow-lg
        ${
          isCourses
            ? "min-h-11 gap-2 px-3 py-2 md:min-h-14 md:w-[213px] md:gap-3 md:px-4 md:py-3"
            : "min-h-11 gap-2 px-3 py-2 md:min-h-12 md:w-[209px] md:px-4 md:py-3"
        }
        ${className}
      `}
    >
      {isCourses ? (
        <span className="flex h-7 shrink-0 items-center justify-center rounded-[8px] bg-[#E9EDFF] px-2 text-xs font-bold text-primary md:h-8 md:text-sm">
          {highlight}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="shrink-0 whitespace-nowrap text-[10px] tracking-[0.05em] text-accent md:text-xs"
        >
          {highlight}
        </span>
      )}

      <span className="whitespace-nowrap text-[10px] font-medium text-foreground md:text-xs">
        {label}
      </span>
    </div>
  );
}
