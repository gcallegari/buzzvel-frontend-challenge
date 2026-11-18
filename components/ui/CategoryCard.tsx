import { useTranslations } from "next-intl";
import type { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  const t = useTranslations("Categories");

  const title = t(`items.${category.translationKey}.title`);
  const description = t(`items.${category.translationKey}.description`);

  return (
    <article className="flex h-full flex-col rounded-xl border border-border bg-white p-6">
      <span className="mb-5 w-fit rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
        {category.number}
      </span>

      <h3 className="text-lg font-bold tracking-tight">
        {title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/65">
        {description}
      </p>

      <a
        href={category.href}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        aria-label={t("exploreAriaLabel", {
          category: title,
        })}
      >
        {t("explore")}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}