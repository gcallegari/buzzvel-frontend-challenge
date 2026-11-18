import Image from "next/image";
import { useTranslations } from "next-intl";

const course = {
  instructor: "Maya Chen",
  tags: ["productDesign", "beginner", "liveFeedback"],
} as const;

export default function FeaturedCourse() {
  const t = useTranslations("FeaturedCourse");

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-title"
      className="bg-primary text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-6 py-14 md:grid-cols-2 md:gap-10 md:px-10 md:py-20 lg:gap-12 lg:px-[80px] lg:py-[100px]">
        {/* Course image */}
        <div className="relative min-w-0">
          <span className="absolute -left-2 -top-2 z-10 rounded-sm bg-accent px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground">
            {t("badge")}
          </span>

          <Image
            src="/images/product-design-course-student-working.png"
            alt={t("imageAlt")}
            width={538}
            height={402}
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1023px) 50vw, 536px"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        {/* Course content */}
        <div className="min-w-0">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/80">
            {t("category")}
          </p>

          <h2
            id="featured-course-title"
            className="max-w-xl text-[26px] font-bold leading-[1.1] tracking-tight md:text-[34px] lg:text-[38px]"
          >
            {t("title")}
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 md:text-base">
            {t("description")}
          </p>

          <p className="mt-5 text-sm text-white/90">
            {t.rich("instructor", {
              name: course.instructor,
              role: t("instructorRole"),
              strong: (chunks) => (
                <strong className="font-semibold">{chunks}</strong>
              ),
            })}
          </p>

          {/* Course tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border border-white/50 px-3 py-2 text-xs font-medium text-white"
              >
                {t(`tags.${tag}`)}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 text-sm font-bold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              {t("viewCourse")}
            </a>

            <a
              href="#courses"
              className="inline-flex min-h-12 items-center justify-center gap-2 text-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("browseCourses")}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}