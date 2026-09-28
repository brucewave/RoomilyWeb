import { useState } from "react";

import { styles } from "../styles";
import { projects } from "../constants";
import SectionHeader from "./SectionHeader";

const projectFilters = ["WooCommerce", "Elementor", "Flatsome", "Custom code", "Tailwind CSS"];

const previewImage = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;

const ProjectCard = ({ project }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const host = project.url.replace(/^https?:\/\//, "");

  return (
    <article className='group flex flex-col'>
      <a
        href={project.url}
        target='_blank'
        rel='noopener noreferrer'
        className='block aspect-[16/10] overflow-hidden bg-surface'
        aria-label={`Mở ${project.name} trong tab mới`}
      >
        {imageFailed ? (
          <div className='flex h-full items-center justify-center font-serif text-2xl text-muted'>
            {host}
          </div>
        ) : (
          <img
            src={previewImage(project.url)}
            alt={`Ảnh chụp trang chủ ${project.name}`}
            width='1200'
            height='750'
            loading='lazy'
            onError={() => setImageFailed(true)}
            className='h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]'
          />
        )}
      </a>

      <div className='flex flex-1 flex-col pt-5'>
        <p className='flex items-center justify-between gap-4 text-sm text-muted'>
          <span>{project.category}</span>
          {project.year && <span className='tabular-nums'>{project.year}</span>}
        </p>
        <h3 className='mt-2 font-serif text-h3'>{project.name}</h3>
        <p className='mt-3 text-[15px] text-muted'>{project.summary}</p>

        <ul className='mt-4 flex flex-wrap gap-2' aria-label='Công nghệ sử dụng'>
          {project.stack.map((item) => (
            <li key={item} className='border border-line px-2.5 py-1 text-xs'>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={project.url}
          target='_blank'
          rel='noopener noreferrer'
          className='mt-auto inline-flex items-center gap-2 pt-6 text-[15px] text-accent hover:text-cream'
        >
          Xem website <span aria-hidden='true'>↗</span>
        </a>
      </div>
    </article>
  );
};

const Projects = ({ filter, setFilter }) => {
  const visible = filter ? projects.filter((p) => p.stack.includes(filter)) : projects;
  // Kỹ năng được chọn từ phần Kỹ năng có thể không nằm sẵn trong danh sách lọc
  const filters = !filter || projectFilters.includes(filter) ? projectFilters : [...projectFilters, filter];

  return (
    <section id='projects' className={styles.section}>
      <div className={styles.container}>
        <SectionHeader index='02' eyebrow='Dự án' title={`${projects.length} website, mỗi site một bài toán`}>
          Lọc theo công nghệ để xem tôi đã dùng kỹ năng nào ở đâu. Nhấn vào ảnh để mở website thật.
        </SectionHeader>

        <div className='mt-12 flex flex-wrap gap-2' role='group' aria-label='Lọc dự án theo công nghệ'>
          {[null, ...filters].map((item) => {
            const active = filter === item;
            return (
              <button
                key={item ?? "all"}
                type='button'
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={`min-h-[44px] border px-4 text-sm transition-colors ${
                  active
                    ? "border-accent bg-accent text-ink"
                    : "border-line text-muted hover:border-accent hover:text-cream"
                }`}
              >
                {item ?? "Tất cả"}
              </button>
            );
          })}
        </div>

        <p className='mt-4 text-sm text-muted' aria-live='polite'>
          Đang hiển thị {visible.length}/{projects.length} dự án
        </p>

        <div className='mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3'>
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
