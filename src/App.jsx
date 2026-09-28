import { useEffect, useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import { startSmoothScroll, scrollToId } from "./smooth";

const App = () => {
  const [filter, setFilter] = useState(null);

  useEffect(() => startSmoothScroll(), []);

  const pickSkill = (skill) => {
    setFilter(skill);
    // Chờ track dựng lại theo bộ lọc mới rồi mới cuộn tới.
    requestAnimationFrame(() => requestAnimationFrame(() => scrollToId("projects")));
  };

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
        <Navbar />
        <Hero />
      </div>
      <main>
        <TechMarquee />
        <Skills onPickSkill={pickSkill} />
        <Projects filter={filter} setFilter={setFilter} />
        <Process />
        <Contact />
      </main>
    </div>
  );
};

export default App;
