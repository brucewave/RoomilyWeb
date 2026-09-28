import { motion, AnimatePresence } from "framer-motion";

import { projects, websiteTypes } from "../constants";
import SectionHeader from "./SectionHeader";

const pad = (n) => String(n).padStart(2, "0");

// Ảnh là ảnh chụp dài của website; rê chuột thì ảnh cuộn từ đầu xuống cuối trang.
const ProjectCard = ({ project, index }) => (
  <motion.li
    layout
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className='group flex flex-col'
  >
    <a
      href={project.url}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={`Mở ${project.name} trong tab mới`}
      className='relative block aspect-[4/3] overflow-hidden rounded-2xl bg-tertiary ring-1 ring-line transition-shadow duration-300 group-hover:ring-violet'
    >
      <img
        src={`/showcase/${project.media}.jpg`}
        alt={`Ảnh chụp trang ${project.name}`}
        loading='lazy'
        className='h-full w-full object-cover object-top transition-[object-position] duration-[5000ms] ease-in-out group-hover:object-bottom group-focus-visible:object-bottom'
      />
      <span className='absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 font-display text-sm font-bold text-white backdrop-blur'>
        {pad(index + 1)}
      </span>
      <span className='absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet text-white transition-transform duration-300 group-hover:-rotate-45'>
        <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
          <path d='M5 12h14M13 6l6 6-6 6' />
        </svg>
      </span>
    </a>

    <div className='flex flex-1 flex-col pt-5'>
      <p className='flex items-center justify-between gap-4 text-sm text-secondary'>
        <span>{project.category}</span>
        {project.year && <span className='tabular-nums'>{project.year}</span>}
      </p>
      <h3 className='mt-1 text-[26px] font-bold leading-tight text-white transition-colors group-hover:text-violet-light'>
        {project.name}
      </h3>
      <p className='mt-2 line-clamp-3 text-[15px] text-secondary'>{project.summary}</p>
      <ul className='mt-auto flex flex-wrap gap-2 pt-4' aria-label='Công nghệ sử dụng'>
        {project.stack.map((item) => (
          <li key={item} className='rounded-full border border-line px-3 py-1 text-xs text-white-100'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </motion.li>
);

const Projects = ({ filter, setFilter }) => {
  const visible = filter ? projects.filter((p) => p.types.includes(filter)) : projects;

  return (
    <section id='projects' className='py-section'>
      <div className='wrap'>
        <SectionHeader eyebrow='Tất cả dự án' title={<>{projects.length} website, <span className='text-violet'>mỗi site một bài toán.</span></>}>
          Lọc theo loại website bạn cần. Rê chuột lên ảnh để lướt xem cả trang, bấm vào để mở website thật.
        </SectionHeader>

        <div className='mt-10 flex flex-wrap items-center gap-2' role='group' aria-label='Lọc dự án theo loại website'>
          {[{ key: null, label: "Tất cả" }, ...websiteTypes].map(({ key, label }) => {
            const active = filter === key;
            const count = key ? projects.filter((p) => p.types.includes(key)).length : projects.length;
            return (
              <button
                key={key ?? "all"}
                type='button'
                aria-pressed={active}
                onClick={() => setFilter(key)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-colors ${
                  active ? "border-violet bg-violet text-white" : "border-line text-secondary hover:border-violet hover:text-white"
                }`}
              >
                {label} <span className='tabular-nums opacity-70'>({count})</span>
              </button>
            );
          })}
        </div>

        <motion.ol layout className='mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3'>
          <AnimatePresence mode='popLayout'>
            {visible.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.ol>
      </div>
    </section>
  );
};

export default Projects;
