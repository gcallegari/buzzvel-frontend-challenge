
import Image from "next/image";
import { useTranslations } from "next-intl";
import HeroVisual from "@/components/ui/HeroVisual";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="home" aria-labelledby="hero-title" className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-10 md:grid-cols-2 md:gap-15 md:py-20 lg:px-10">
        {/* Hero content */}
        <div className="order-2 md:order-1">
          {/* Eyebrow */}
          <p className="mb-4 font-sans text-xs font-semibold leading-4 tracking-[1.44px] uppercase text-(--primary-blue)">
            {t("eyebrow")}
          </p>

          {/* Heading */}
          <h1
            id="hero-title"
            className="max-w-xl font-heading text-[32px] font-extrabold leading-[1.09375] tracking-[-1.6px] text-(--text-primary) sm:text-[40px] lg:text-[64px]"
          >
            {t("title")}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md font-sans text-base font-normal leading-7 tracking-normal text-(--text-secondary) lg:text-lg">
            {t("description")}
          </p>

          {/* Call to action */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
            >
              {t("explore")}
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
            >
              {t("howItWorks")}
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {[1, 2, 3].map((avatar) => (
                <Image
                  key={avatar}
                  src={`/images/avatar-${avatar}.png`}
                  alt=""
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>

            <p className="text-xs text-foreground/70">
              {t.rich("socialProof", {
                strong: (chunks) => (
                  <strong className="font-bold text-foreground">
                    {chunks}
                  </strong>
                ),
              })}
            </p>
          </div>
        </div>

        {/* Hero visual */}
        <div className="order-1 min-w-0 md:order-2">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
