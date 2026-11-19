import Image from "next/image";
import { useTranslations } from "next-intl";

export default function People() {
  const t = useTranslations("People");

  return (
    <section
      id="community"
      aria-labelledby="people-title"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 lg:gap-15 lg:px-20">
        {/* Section content */}
        <div className="order-1 min-w-0">
          {/* Eyebrow */}
          <p className="mb-2 font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-primary">
            {t("eyebrow")}
          </p>

          {/* Title */}
          <h2
            id="people-title"
            className="mb-8 max-w-lg font-heading text-[32px] font-extrabold leading-[1.2] tracking-[-1.2px] text-text-primary lg:text-[48px] lg:leading-14"
          >
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-lg font-sans text-base font-normal leading-7 tracking-normal text-text-secondary lg:text-lg">
            {t("description")}
          </p>

          {/* Explore button */}
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-background-white px-6 font-sans text-sm font-semibold text-text-primary transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t("explore")}
          </a>
        </div>

        {/* People collage */}
        <div className="order-2 flex min-w-0 items-center justify-center">
          <Image
            src="/images/the-people.png"
            alt={t("imageAlt")}
            width={530}
            height={530}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 45vw, 530px"
            className="h-auto w-full max-w-132.5"
          />
        </div>
      </div>
    </section>
  );
}
