import Image from "next/image";
import { useTranslations } from "next-intl";
import AvatarGroup from "@/components/ui/AvatarGroup";

const decorations = [
  {
    src: "/icons/b.svg",
    width: 102,
    height: 102,
    className: "absolute bottom-[4%] left-[21%]",
  },
  {
    src: "/icons/abstract.svg",
    width: 32,
    height: 32,
    className: "absolute left-[10%] top-[43%]",
  },
  {
    src: "/icons/sparkle.svg",
    width: 62,
    height: 62,
    className: "absolute right-[16%] top-[17%]",
  },
  {
    src: "/icons/cube.svg",
    width: 80,
    height: 80,
    className: "absolute right-[7%] top-[45%]",
  },
  {
    src: "/icons/book.svg",
    width: 48,
    height: 48,
    className: "absolute bottom-[8%] right-[20%]",
  },
];

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");

  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-title"
      className="relative isolate overflow-hidden bg-[#FFF1C2] px-5 py-12 md:px-10 md:py-20"
    >
      {/* Decorative elements - desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        {/* Top left outlined circle */}
        <div className="absolute left-[1.5%] top-[4%] h-[108px] w-[108px] rounded-full border-2 border-[#FFCB9F]" />

        {/* Top outlined square */}
        <div className="absolute left-[25%] top-[10%] h-14 w-14 rotate-12 rounded-lg border border-[#FFCB9F]" />

        {/* Small top circle */}
        <div className="absolute left-[68%] top-[9%] h-8 w-8 rounded-full border-2 border-[#FFCB9F]" />

        {/* Top right orange square */}
        <div className="absolute -right-3 -top-8 h-32 w-28 rotate-12 rounded-lg bg-[#FFCB9F]" />

        {/* Left edge shape */}
        <div className="absolute -left-6 top-[50%] h-16 w-12 rotate-12 rounded-lg bg-[#FFCB9F]" />

        {/* Bottom left circle */}
        <div className="absolute -bottom-[50px] left-[4%] h-[120px] w-[120px] rounded-full bg-[#FFCB9F]" />

        {/* Bottom right circle */}
        <div className="absolute bottom-[1%] right-[4%] h-8 w-8 rounded-full border-2 border-[#FFCB9F]" />

        {/* Original Figma SVG decorations */}
        {decorations.map((decoration) => (
          <Image
            key={decoration.src}
            src={decoration.src}
            alt=""
            width={decoration.width}
            height={decoration.height}
            className={decoration.className}
          />
        ))}
      </div>

      {/* CTA content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* Learner avatars */}
        <AvatarGroup count={4} size={40} />

        {/* Heading */}
        <h2
          id="final-cta-title"
          className="mt-8 max-w-[1000px] text-[36px] font-bold leading-[1.1] tracking-tight text-foreground md:mt-10 md:text-[56px]"
        >
          {t("title")}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-foreground/60 md:text-lg">
          {t("description")}
        </p>

        {/* Call to action buttons */}
        <div className="mt-9 flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <a
            href="#courses"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-md bg-primary px-7 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
          >
            {t("exploreCourses")}
          </a>

          <a
            href="#contact"
            className="inline-flex min-h-[52px] w-full items-center justify-center rounded-md border border-border bg-white px-7 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:w-auto"
          >
            {t("joinLuma")}
          </a>
        </div>
      </div>
    </section>
  );
}