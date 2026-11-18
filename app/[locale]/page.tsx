import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";
import FeaturedCourse from "@/components/sections/FeaturedCourse";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import People from "@/components/sections/People";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

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
        <People />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}