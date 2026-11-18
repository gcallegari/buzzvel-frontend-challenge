
import TestimonialCard from "@/components/ui/TestimonialCard";
import StatItem from "@/components/ui/StatItem";
import { stats } from "@/data/stats";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Student testimonials and learning statistics"
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-[1.5fr_1fr] md:items-center md:gap-16 lg:px-10">
        {/* Testimonial */}
        <TestimonialCard />

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-3 md:grid-cols-1 md:gap-5 md:border-l md:border-border md:pl-10">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
