import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";

import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Project from "./sections/Project";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import IntroAnimation from "./components/introAnimation";
import React from "react";
import About from "./sections/About";

export default function App() {
  const [introDone, setIntroDne] = React.useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDne(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          {/*  <ParticlesBackground /> */}

          <Navbar />
          <Home />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}
