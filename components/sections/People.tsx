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
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:gap-12 lg:px-10">
        {/* Section content */}
        <div className="order-1">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            {t("eyebrow")}
          </p>

          <h2
            id="people-title"
            className="max-w-lg text-[30px] font-bold leading-[1.1] tracking-tight md:text-[42px]"
          >
            {t("title")}
          </h2>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/65 md:text-base">
            {t("description")}
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
            sizes="(max-width: 767px) calc(100vw - 48px), (max-width: 1279px) 45vw, 530px"
            className="h-auto w-full max-w-[530px]"
          />
        </div>
      </div>
    </section>
  );
}