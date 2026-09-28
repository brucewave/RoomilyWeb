import { useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

const App = () => {
  const [filter, setFilter] = useState(null);

  const pickSkill = (skill) => {
    setFilter(skill);
    document.getElementById("projects")?.scrollIntoView();
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills onPickSkill={pickSkill} />
        <Projects filter={filter} setFilter={setFilter} />
        <Process />
        <Contact />
      </main>
    </>
  );
};

export default App;
