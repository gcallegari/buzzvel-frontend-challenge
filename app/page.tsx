
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedCourse from "@/components/sections/FeaturedCourse";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Testimonials />
      </main>
    </>
  );
}
