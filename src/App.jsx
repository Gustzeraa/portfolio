import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Stack from "./components/Stack";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-paper font-sans text-ink antialiased">
        <Header />
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <main>
            <Hero />
            <Projects />
            <Experience />
            <Stack />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
