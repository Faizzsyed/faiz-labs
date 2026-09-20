import ParticleBackground from "../components/ParticleBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import DeveloperPresence from "../components/DeveloperPresence";
import Contact from "../components/Contact";
import Cursor from "../components/Cursor";
import Spotlight from "../components/Spotlight";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Cursor />
      <Spotlight />
      <ParticleBackground />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <DeveloperPresence />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;