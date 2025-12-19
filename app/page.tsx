import Navbar from "./components/Nanvar";
import Hero from "./components/Hero";
import TechCarousel from "./components/TechCarousel";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechCarousel />
      <Projects />
      <Footer />
    </>
  );
}
