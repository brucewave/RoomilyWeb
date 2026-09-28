import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { featured } from "../constants";
import { gsap } from "../smooth";

const host = featured.url.replace(/^https?:\/\/(www\.)?/, "");
const STEP_MS = 3500;

// Khối dự án nổi bật: khung trình duyệt lần lượt hiện các khung hình cắt từ lúc cuộn
// MTHouse.vn thật (ảnh tĩnh, không dùng video), phóng to dần khi cuộn tới.
// Ẩn trên điện thoại để người xem tới thẳng danh sách dự án.
const Featured = () => {
  const frameRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const [inView, setInView] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        frameRef.current,
        { scale: 0.86, borderRadius: 36 },
        {
          scale: 1,
          borderRadius: 16,
          ease: "none",
          scrollTrigger: { trigger: frameRef.current, start: "top 95%", end: "top 25%", scrub: true },
        }
      );
    });
    return () => mm.revert();
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.4 });
    io.observe(frameRef.current);
    return () => io.disconnect();
  }, []);

  // Tự chuyển khung khi đang nhìn thấy; rê chuột hoặc bấm chọn thì dừng lại.
  useEffect(() => {
    if (!inView || hold || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % featured.frames.length), STEP_MS);
    return () => clearInterval(id);
  }, [inView, hold]);

  return (
    <section id='featured' className='hidden pt-section md:block'>
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

        <div
          ref={frameRef}
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
          className='mt-12 origin-top overflow-hidden rounded-2xl border border-line bg-black-100 will-change-transform'
        >
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

          <div className='relative aspect-[2/1]'>
            {featured.frames.map((f, i) => (
              <img
                key={f.src}
                src={f.src}
                alt={`${featured.name}: ${f.caption}`}
                width='1600'
                height='800'
                loading='lazy'
                className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          {/* Các bước hiệu ứng: bấm để xem, vạch tím chạy thể hiện thời gian tới bước kế. */}
          <ol className='grid grid-cols-2 gap-px border-t border-line bg-line md:grid-cols-4'>
            {featured.frames.map((f, i) => (
              <li key={f.src} className='bg-black-100'>
                <button
                  type='button'
                  onClick={() => {
                    setActive(i);
                    setHold(true);
                  }}
                  aria-pressed={i === active}
                  className='group relative w-full px-4 py-4 text-left'
                >
                  <span
                    key={i === active ? `on-${active}` : "off"}
                    className={`absolute left-0 top-0 h-[2px] bg-violet ${
                      i === active ? (hold || !inView ? "w-full" : "animate-[grow_3.5s_linear_forwards]") : "w-0"
                    }`}
                  />
                  <span className={`font-display text-sm font-bold ${i === active ? "text-violet-light" : "text-secondary"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`mt-1 block text-[15px] font-medium ${i === active ? "text-white" : "text-secondary group-hover:text-white"}`}>
                    {f.caption}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className='mt-8 flex justify-end'>
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
