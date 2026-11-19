import { useTranslations } from "next-intl";
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatItem from "@/components/ui/StatItem";
import { stats } from "@/data/stats";

export default function Testimonials() {
  const t = useTranslations("Testimonials");

  return (
    <section
      id="testimonials"
      aria-label={t("ariaLabel")}
      className="bg-background-white py-16 md:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-15 px-5 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-20">
        {/* Testimonial */}
        <TestimonialCard />

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-5 lg:min-h-81.25 lg:w-100.25 lg:shrink-0 lg:grid-cols-1 lg:border-l lg:border-line-1 lg:pl-12">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
