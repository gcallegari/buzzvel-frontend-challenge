
import { useTranslations } from "next-intl";
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  const t = useTranslations("Categories");

  return (
    <section
      id="courses"
      aria-labelledby="categories-title"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section heading */}
        <div className="flex max-w-xl flex-col gap-4">
          {/* Eyebrow */}
          <p className="font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-primary">
            {t("eyebrow")}
          </p>

          {/* Heading */}
          <h2
            id="categories-title"
            className="font-heading text-[32px] font-extrabold leading-[1.2] tracking-[-1.2px] text-text-primary lg:text-[48px] lg:leading-14"
          >
            {t("title")}
          </h2>

          {/* Description */}
          <p className="font-sans text-base font-normal leading-7 tracking-normal text-text-secondary lg:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
