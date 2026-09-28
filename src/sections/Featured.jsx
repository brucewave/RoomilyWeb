import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";

import { featured } from "../constants";
import { gsap } from "../smooth";
import AutoVideo from "./AutoVideo";

const host = featured.url.replace(/^https?:\/\/(www\.)?/, "");

// Khối dự án nổi bật: khung trình duyệt phát video cuộn thật của MTHouse.vn,
// phóng to dần khi cuộn tới (dùng lại đúng kiểu hiệu ứng của chính trang đó).
const Featured = () => {
  const frameRef = useRef(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        frameRef.current,
        { scale: 0.82, borderRadius: 40 },
        {
          scale: 1,
          borderRadius: 16,
          ease: "none",
          scrollTrigger: { trigger: frameRef.current, start: "top 95%", end: "top 20%", scrub: true },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section id='featured' className='pt-section'>
      <div className='wrap'>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className='grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end'
        >
          <div>
            <p className='eyebrow'>Dự án nổi bật</p>
            <h2 className='mt-4 font-display text-[56px] font-extrabold leading-none text-white sm:text-[88px] lg:text-[120px]'>
              {featured.name}
            </h2>
          </div>
          <p className='max-w-md text-[17px] text-secondary md:justify-self-end'>{featured.summary}</p>
        </motion.div>

        <div ref={frameRef} className='mt-12 origin-top overflow-hidden rounded-2xl border border-line bg-black-100 will-change-transform'>
          <div className='flex items-center gap-3 border-b border-line px-4 py-3'>
            <span className='flex gap-1.5' aria-hidden='true'>
              <i className='h-3 w-3 rounded-full bg-[#ff5f57]' />
              <i className='h-3 w-3 rounded-full bg-[#febc2e]' />
              <i className='h-3 w-3 rounded-full bg-[#28c840]' />
            </span>
            <span className='mx-auto truncate rounded-full bg-tertiary px-4 py-1 text-sm text-secondary'>{host}</span>
            <a
              href={featured.url}
              target='_blank'
              rel='noopener noreferrer'
              className='hidden shrink-0 text-sm font-semibold text-violet-light hover:text-white sm:block'
            >
              Mở website ↗
            </a>
          </div>
          <AutoVideo
            src={featured.video}
            poster={featured.poster}
            label={`Quay màn hình cuộn trang ${featured.name}`}
            threshold={0.35}
            className='aspect-[16/10]'
          />
        </div>

        <div className='mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4'>
          {featured.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className='bg-primary p-6'
            >
              <span className='font-display text-sm font-bold text-violet'>{String(i + 1).padStart(2, "0")}</span>
              <h3 className='mt-2 text-[22px] font-bold leading-tight text-white'>{h.title}</h3>
              <p className='mt-2 text-[15px] text-secondary'>{h.text}</p>
            </motion.div>
          ))}
        </div>

        <div className='mt-8 flex flex-wrap items-center justify-between gap-6'>
          <ul className='flex flex-wrap gap-2' aria-label='Công nghệ sử dụng'>
            {featured.stack.map((item) => (
              <li key={item} className='rounded-full border border-line px-3 py-1 text-sm text-white-100'>
                {item}
              </li>
            ))}
          </ul>
          <a href={featured.url} target='_blank' rel='noopener noreferrer' className='cta'>
            Trải nghiệm hiệu ứng cuộn
            <span className='cta__arrow'>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Featured;
