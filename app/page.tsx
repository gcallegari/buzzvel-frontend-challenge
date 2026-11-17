
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Categories />
      </main>
    </>
  );
}
