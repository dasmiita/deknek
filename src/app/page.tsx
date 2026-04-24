import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navabr";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <main style={{ position: "relative" }}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <div style={{ padding: "0 2rem 6rem" }}>
        <ContactForm />
      </div>
    </main>
  );
}
