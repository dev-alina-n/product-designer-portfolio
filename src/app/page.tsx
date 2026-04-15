import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Cases } from "@/components/sections/Cases";
import { Contacts } from "@/components/sections/Contacts";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cases />
        <About />
        <Experience />
        <Contacts />
      </main>
      <Footer />
    </>
  );
}
