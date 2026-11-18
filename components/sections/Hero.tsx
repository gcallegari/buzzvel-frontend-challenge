import Image from "next/image";
import HeroVisual from "@/components/ui/HeroVisual";

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-6 py-10 md:grid-cols-2 md:gap-12 md:py-20 lg:px-10">
        {/* Hero content */}
        <div className="order-2 md:order-1">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Learn at your own pace
          </p>

          <h1
            id="hero-title"
            className="max-w-xl text-[32px] font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[52px]"
          >
            Build skills that actually move you forward.
          </h1>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/65 md:text-base">
            Practical courses taught by people who do the work every day. Learn
            design, technology, business and more — one focused lesson at a
            time.
          </p>

          {/* Call to action */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#courses"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
            >
              Explore courses
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-border bg-white px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto"
            >
              See how it works
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
              Trusted by{" "}
              <strong className="font-bold text-foreground">24,000+</strong>{" "}
              learners
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
