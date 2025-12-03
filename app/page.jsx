import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import TopButton from "./ui/TopButton";

export default function Page() {
  return (
    <div className="app">
      <div id="navbar" className="z-100">
        <Navbar />
      </div>
      <div className="main">
        <section className="main-section" id="hero">
          <Hero />
        </section>
        <section className="main-section" id="about">
          <About />
        </section>
        <section className="main-section" id="skills">
          <Skills />
        </section>
        <section className="main-section" id="projects">
          <Projects />
        </section>
        <section className="main-section" id="contact">
          <Contact />
        </section>
        <section className="footer" id="footer">
          <Footer />
        </section>

        <TopButton />
      </div>
    </div>
  )
}

