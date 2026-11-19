import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const t = useTranslations("Categories");

  const title = t(`items.${category.translationKey}.title`);
  const description = t(`items.${category.translationKey}.description`);

  return (
    <article className="flex h-full min-h-65 flex-col justify-between rounded-2xl border border-border bg-white p-7 lg:h-[264.5px]">
      <div>
        {/* Number */}
        <span className="relative top-0.5 inline-flex h-6 w-8 shrink-0 items-center justify-center rounded-md bg-primary-light px-2 py-1 font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-primary">
          {category.number}
        </span>

        {/* Title */}
        <h3 className="mt-5 font-heading text-xl font-bold leading-8 tracking-normal text-text-primary">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 font-sans text-sm font-normal leading-6 tracking-normal text-text-tertiary">
          {description}
        </p>
      </div>

      {/* Explore link */}
      <a
        href={category.href}
        className="mt-6 inline-flex w-fit items-center gap-2 font-sans text-sm font-bold leading-6 tracking-normal text-text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label={t("exploreAriaLabel", {
          category: title,
        })}
      >
        {t("explore")}
        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
      </a>
    </article>
  );
}
