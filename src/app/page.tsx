import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navabr";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <section id="contact" style={{ padding: "6rem 2rem", maxWidth: "600px", margin: "0 auto" }}>
        <ContactForm />
      </section>
    </>
  );
}