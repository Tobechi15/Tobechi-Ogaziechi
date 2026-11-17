import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Philosophy } from "@/components/Philosophy";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
