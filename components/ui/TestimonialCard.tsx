
import Image from "next/image";

export default function TestimonialCard() {
  return (
    <figure className="m-0">
      {/* Decorative quotation mark */}
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        className="mb-4 text-primary"
      >
        <path
          d="M5 5H12L10 17H6L5 5ZM16 5H23L21 17H17L16 5Z"
          fill="currentColor"
        />
      </svg>

      {/* Testimonial */}
      <blockquote className="max-w-[500px] text-[17px] font-semibold leading-[1.5] tracking-tight text-foreground md:text-[24px] md:leading-[1.4]">
        The lessons are short enough to fit into my week, but detailed
        enough that I actually leave with something I can use.
      </blockquote>

      {/* Author */}
      <figcaption className="mt-7 flex items-center gap-3">
        <Image
          src="/images/alex-morgan.png"
          alt="Alex Morgan"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-bold text-foreground">
            Alex Morgan
          </p>

          <p className="mt-1 text-xs text-foreground/60">
            Product Manager
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
