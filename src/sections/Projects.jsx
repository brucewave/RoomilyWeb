import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { projects } from "../constants";
import { gsap, ScrollTrigger, scrollToPosition } from "../smooth";
import SectionHeader from "./SectionHeader";

const projectFilters = ["WooCommerce", "Elementor", "Flatsome", "Custom code", "Tailwind CSS"];

// Chỉ ghim và trượt ngang khi màn hình đủ rộng, đủ cao và người dùng không tắt chuyển động.
const PIN_QUERY = "(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)";

const pad = (n) => String(n).padStart(2, "0");

const previewImage = (url) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200&h=750`;

const ProjectCard = ({ project, index }) => {
  const [imageFailed, setImageFailed] = useState(false);
  const host = project.url.replace(/^https?:\/\//, "");

  return (
    <li className='work-card w-[85vw] shrink-0 snap-start transition-opacity duration-300 sm:w-[min(52vw,78vh,760px)]'>
      <a
        href={project.url}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Mở ${project.name} trong tab mới`}
        className='group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-tertiary ring-1 ring-line'
      >
        {imageFailed ? (
          <div className='flex h-full items-center justify-center font-display text-2xl text-secondary'>{host}</div>
        ) : (
          <div className='work-zoom absolute inset-y-0 -left-[8%] w-[116%]'>
            <img
              src={previewImage(project.url)}
              alt={`Ảnh chụp trang chủ ${project.name}`}
              width='1200'
              height='750'
              loading='lazy'
              onError={() => setImageFailed(true)}
              className='h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]'
            />
          </div>
        )}
        <span className='absolute left-4 top-4 rounded-full bg-primary/80 px-3 py-1 font-display text-sm font-bold text-white backdrop-blur'>
          {pad(index + 1)}
        </span>
        <span className='absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-violet text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100'>
          <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' aria-hidden='true'>
            <path d='M7 17L17 7M9 7h8v8' />
          </svg>
        </span>
      </a>

      <div className='pt-5'>
        <p className='flex items-center justify-between gap-4 text-sm text-secondary'>
          <span>{project.category}</span>
          {project.year && <span className='tabular-nums'>{project.year}</span>}
        </p>
        <h3 className='mt-1 text-[30px] font-bold sm:text-[36px] leading-tight text-white'>
          <a href={project.url} target='_blank' rel='noopener noreferrer' className='transition-colors hover:text-violet-light'>
            {project.name}
          </a>
        </h3>
        <p className='mt-2 max-w-2xl text-[16px] text-secondary'>{project.summary}</p>
        <ul className='mt-4 flex flex-wrap gap-2' aria-label='Công nghệ sử dụng'>
          {project.stack.map((item) => (
            <li key={item} className='rounded-full border border-line px-3 py-1 text-xs text-white-100'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

const Projects = ({ filter, setFilter }) => {
  const visible = filter ? projects.filter((p) => p.stack.includes(filter)) : projects;
  // Kỹ năng chọn từ phần Kỹ năng có thể không có sẵn trong danh sách nút lọc.
  const filters = !filter || projectFilters.includes(filter) ? projectFilters : [...projectFilters, filter];

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const barRef = useRef(null);
  const triggerRef = useRef(null);
  const restsRef = useRef([]);
  const [current, setCurrent] = useState(0);

  // Ghim section và biến cuộn dọc thành trượt ngang (kỹ thuật của MT House).
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const bar = barRef.current;
    const cards = Array.from(track.children);
    setCurrent(0);
    viewport.scrollLeft = 0;

    const mm = gsap.matchMedia();
    mm.add(PIN_QUERY, () => {
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const measure = () => {
        const total = distance();
        const first = cards[0]?.offsetLeft ?? 0;
        restsRef.current = cards.map((c) => (total > 0 ? Math.min(1, (c.offsetLeft - first) / total) : 0));
      };
      const apply = (progress) => {
        const rests = restsRef.current;
        bar.style.transform = `scaleX(${progress})`;
        let nearest = 0;
        rests.forEach((rest, i) => {
          if (Math.abs(progress - rest) < Math.abs(progress - rests[nearest])) nearest = i;
        });
        setCurrent(nearest);
        cards.forEach((card, i) => {
          card.style.opacity = i === nearest || rests[i] === rests[nearest] ? "1" : "0.45";
        });
      };

      viewport.style.overflow = "hidden";
      measure();
      const slide = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${distance()}`,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onRefresh: (self) => {
            measure();
            apply(self.progress);
          },
          onUpdate: (self) => apply(self.progress),
        },
      });
      triggerRef.current = slide.scrollTrigger;
      apply(0);

      // Ảnh trôi nhẹ trong khung khi thẻ trượt qua.
      cards.forEach((card) => {
        const zoom = card.querySelector(".work-zoom");
        if (!zoom) return;
        gsap.fromTo(zoom, { xPercent: -5 }, {
          xPercent: 5,
          ease: "none",
          scrollTrigger: { trigger: card, containerAnimation: slide, start: "left right", end: "right left", scrub: true },
        });
      });

      return () => {
        triggerRef.current = null;
        viewport.style.removeProperty("overflow");
        cards.forEach((card) => card.style.removeProperty("opacity"));
        bar.style.transform = "";
      };
    });

    ScrollTrigger.refresh();
    return () => mm.revert();
  }, [filter]);

  // Điện thoại / giảm chuyển động: track là thanh cuộn ngang bình thường.
  useEffect(() => {
    const viewport = viewportRef.current;
    const cards = Array.from(trackRef.current.children);
    let frame = 0;
    const read = () => {
      frame = 0;
      const first = cards[0]?.offsetLeft ?? 0;
      const range = viewport.scrollWidth - viewport.clientWidth;
      let nearest = 0;
      cards.forEach((card, i) => {
        const gap = Math.abs(card.offsetLeft - first - viewport.scrollLeft);
        if (gap < Math.abs(cards[nearest].offsetLeft - first - viewport.scrollLeft)) nearest = i;
      });
      setCurrent(nearest);
      barRef.current.style.transform = `scaleX(${range > 0 ? viewport.scrollLeft / range : 1})`;
    };
    const onScroll = () => {
      if (triggerRef.current || frame) return;
      frame = requestAnimationFrame(read);
    };
    read();
    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      viewport.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [filter]);

  const goTo = (index) => {
    const i = Math.max(0, Math.min(visible.length - 1, index));
    const trigger = triggerRef.current;
    if (trigger) {
      scrollToPosition(trigger.start + (trigger.end - trigger.start) * (restsRef.current[i] ?? 0));
    } else {
      const cards = trackRef.current.children;
      viewportRef.current.scrollTo({ left: cards[i].offsetLeft - cards[0].offsetLeft, behavior: "smooth" });
    }
  };

  const navButton = "flex h-12 w-12 items-center justify-center rounded-full border border-line text-white transition-colors hover:border-violet hover:bg-violet disabled:opacity-30 disabled:hover:bg-transparent";

  return (
    <section id='projects' ref={sectionRef} className='pt-section'>
      <div className='wrap'>
        <SectionHeader eyebrow='Dự án' title={<>{projects.length} website, <span className='text-violet'>mỗi site một bài toán.</span></>}>
          Lọc theo công nghệ để xem tôi đã dùng kỹ năng nào ở đâu. Cuộn xuống để trượt qua từng dự án.
        </SectionHeader>

        <div className='mt-10 flex flex-wrap gap-2' role='group' aria-label='Lọc dự án theo công nghệ'>
          {[null, ...filters].map((item) => {
            const active = filter === item;
            return (
              <button
                key={item ?? "all"}
                type='button'
                aria-pressed={active}
                onClick={() => setFilter(item)}
                className={`min-h-[44px] rounded-full border px-5 text-sm font-medium transition-all ${
                  active
                    ? "border-violet bg-violet text-white"
                    : "border-line text-secondary hover:border-violet hover:text-white"
                }`}
              >
                {item ?? "Tất cả"}
              </button>
            );
          })}
        </div>
      </div>

      <div ref={pinRef} className='flex flex-col justify-center py-12 min-[900px]:min-h-screen'>
        <div className='wrap flex items-center gap-6'>
          <p className='font-display text-lg font-bold tabular-nums text-white' aria-live='polite'>
            {pad(current + 1)} <span className='text-secondary'>/ {pad(visible.length)}</span>
          </p>
          <div className='h-[2px] flex-1 overflow-hidden rounded bg-line'>
            <span ref={barRef} className='block h-full origin-left scale-x-0 bg-violet' />
          </div>
          <div className='flex gap-2'>
            <button type='button' className={navButton} aria-label='Dự án trước' disabled={current === 0} onClick={() => goTo(current - 1)}>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'><path d='M15 6l-6 6 6 6' /></svg>
            </button>
            <button type='button' className={navButton} aria-label='Dự án tiếp theo' disabled={current === visible.length - 1} onClick={() => goTo(current + 1)}>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' aria-hidden='true'><path d='M9 6l6 6-6 6' /></svg>
            </button>
          </div>
        </div>

        <div ref={viewportRef} className='mt-8 snap-x snap-mandatory overflow-x-auto [scrollbar-width:none]'>
          <ol ref={trackRef} key={filter ?? "all"} className='flex w-max gap-10 px-gutter pb-2'>
            {visible.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Projects;
