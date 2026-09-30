import { useState } from "react";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./sections/TechMarquee";
import Featured from "./sections/Featured";
import Projects from "./sections/Projects";
import Strengths from "./sections/Strengths";
import Pricing from "./sections/Pricing";
import Contact from "./sections/Contact";

const App = () => {
  const [filter, setFilter] = useState(null);

  return (
    <div className='relative z-0 bg-primary'>
      <Navbar />
      <Hero />
      {/* Phần dưới trồi lên che tiêu đề đang mờ dần, như hero của Relay. */}
      <main className='relative z-10 bg-primary lg:-mt-[45vh] lg:rounded-t-[40px] lg:shadow-[0_-30px_80px_-20px_rgba(5,8,22,0.9)]'>
        <TechMarquee />
        <Featured />
        <Projects filter={filter} setFilter={setFilter} />
        <Strengths />
        <Pricing />
        <Contact />
      </main>
    </div>
  );
};

export default App;
