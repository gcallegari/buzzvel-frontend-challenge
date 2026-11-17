
import CategoryCard from "@/components/ui/CategoryCard";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section
      id="courses"
      aria-labelledby="categories-title"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Find your next skill
          </p>

          <h2
            id="categories-title"
            className="text-[32px] font-bold leading-[1.1] tracking-tight md:text-[44px]"
          >
            Learn something worth knowing.
          </h2>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Short, practical courses designed around skills
            you can put to work immediately.
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
