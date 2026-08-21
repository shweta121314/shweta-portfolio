import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import JedAICaseStudy from "@/components/portfolio/JedAICaseStudy";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import ScrollProgress from "@/components/portfolio/ScrollProgress";
import SectionDivider from "@/components/portfolio/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <JedAICaseStudy />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
