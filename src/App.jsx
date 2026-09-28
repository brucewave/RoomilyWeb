import { useEffect, useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Projects from "./sections/Projects";
import Strengths from "./sections/Strengths";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";
import { startSmoothScroll } from "./smooth";

const App = () => {
  const [filter, setFilter] = useState(null);

  useEffect(() => startSmoothScroll(), []);

  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
        <Navbar />
        <Hero />
      </div>
      <main>
        <TechMarquee />
        <Projects filter={filter} setFilter={setFilter} />
        <Strengths />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default App;
