import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TestimonialCard() {
  const t = useTranslations("Testimonials");

  return (
    <figure className="m-0 min-w-0">
      {/* Decorative quotation mark */}
      <Image
        src="/icons/quote.svg"
        alt=""
        width={24}
        height={22}
        className="mb-4"
        aria-hidden="true"
      />

      {/* Testimonial */}
      <blockquote className="max-w-150 font-heading text-[24px] font-semibold leading-[1.4] tracking-[-0.75px] text-text-primary lg:text-[30px] lg:leading-11">
        {t("quote")}
      </blockquote>

      {/* Author */}
      <figcaption className="mt-7 flex items-center gap-4">
        <Image
          src="/images/alex-morgan.png"
          alt=""
          width={48}
          height={48}
          className="h-12 w-12 shrink-0 rounded-full object-cover"
        />

        <div>
          <p className="font-sans text-base font-bold leading-7 tracking-normal text-text-primary">
            Alex Morgan
          </p>

          <p className="font-sans text-sm font-normal leading-6 tracking-normal text-text-secondary">
            {t("authorRole")}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
