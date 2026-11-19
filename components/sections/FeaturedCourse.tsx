import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

const course = {
  instructor: "Maya Chen",
  tags: ["lessons", "duration", "level"],
} as const;

export default function FeaturedCourse() {
  const t = useTranslations("FeaturedCourse");

  return (
    <section
      id="featured-course"
      aria-labelledby="featured-course-title"
      className="bg-primary text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-7 px-5 py-14 md:grid-cols-2 md:gap-10 md:px-10 md:py-20 lg:gap-12 lg:px-20 lg:py-25">
        {/* Course image */}
        <div className="relative min-w-0">
          <span className="absolute -top-2 -left-2 z-10 rounded-sm bg-accent px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-foreground">
            {t("badge")}
          </span>

          <Image
            src="/images/product-design-course-student-working.png"
            alt={t("imageAlt")}
            width={538}
            height={402}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 536px"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        {/* Course content */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <p className="mb-3 font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-white/80">
            {t("category")}
          </p>

          {/* Heading */}
          <h2
            id="featured-course-title"
            className="max-w-xl font-heading text-[32px] font-extrabold leading-[1.2] tracking-[-1.2px] text-white lg:text-[48px] lg:leading-14"
          >
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-lg font-sans text-base font-normal leading-7 tracking-normal text-white">
            {t("description")}
          </p>

          {/* Instructor */}
          <p className="mt-5 font-sans text-base font-normal leading-7 tracking-normal text-white">
            {t.rich("instructor", {
              name: course.instructor,
              role: t("instructorRole"),
              strong: (chunks) => (
                <strong className="font-normal">{chunks}</strong>
              ),
            })}
          </p>

          {/* Course tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {course.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center justify-center rounded-lg border border-[line-1] px-3.5 py-1.5 font-sans text-xs font-medium leading-5 text-white"
              >
                {t(`tags.${tag}`)}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-13 min-w-35.5 items-center justify-center rounded-lg bg-secondary-yellow px-7 py-3.5 font-sans text-sm font-bold text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("viewCourse")}
            </a>

            <a
              href="#courses"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-lg px-4 py-3.5 font-sans text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {t("browseCourses")}
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
