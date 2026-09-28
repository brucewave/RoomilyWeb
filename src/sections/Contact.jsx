import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { contact } from "../constants";
import { scrollToId } from "../smooth";
import useInView from "./useInView";

const EarthCanvas = lazy(() => import("../components/canvas/Earth"));
const StarsCanvas = lazy(() => import("../components/canvas/Stars"));

const icons = {
  phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  mail: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  chat: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
};

const channels = [
  { label: "Gọi điện trực tiếp", value: contact.phoneDisplay, href: `tel:${contact.phone}`, icon: icons.phone },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: icons.mail },
  { label: "Chat Zalo", value: contact.phoneDisplay, href: contact.zalo, icon: icons.chat, external: true },
];

// Quả địa cầu 3D chỉ hiện khi màn hình đủ rộng để nằm cạnh khung liên hệ;
// màn hình hẹp không render (không tải three.js) để khỏi thừa một khoảng trống lớn.
const WIDE = "(min-width: 1280px)";
const useWide = () => {
  const [wide, setWide] = useState(() => window.matchMedia(WIDE).matches);
  useEffect(() => {
    const mq = window.matchMedia(WIDE);
    const onChange = (e) => setWide(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return wide;
};

const Contact = () => {
  const wide = useWide();
  const ref = useRef(null);
  const inView = useInView(ref);
  // Chỉ tải mô hình 3D khi người xem đã cuộn gần tới phần liên hệ.
  const near = useInView(ref, "800px");
  const [load3d, setLoad3d] = useState(false);
  useEffect(() => {
    if (near) setLoad3d(true);
  }, [near]);

  return (
  <section id='contact' ref={ref} className='relative z-0 overflow-hidden py-section'>
    <div className='wrap flex flex-col gap-10 xl:flex-row'>
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className='rounded-2xl bg-black-100 p-8 sm:p-10 xl:flex-[0.8]'
      >
        <p className='eyebrow'>Liên hệ</p>
        <h2 className='section-title mt-4'>
          Cần một website? <span className='text-violet'>Nói chuyện với tôi.</span>
        </h2>

        <ul className='mt-10 flex flex-col gap-4'>
          {channels.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className='group flex items-center gap-4 rounded-xl border border-line bg-tertiary p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet'
              >
                <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet/[.15] text-violet-light transition-colors group-hover:bg-violet group-hover:text-white'>
                  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2} aria-hidden='true'>
                    <path strokeLinecap='round' strokeLinejoin='round' d={c.icon} />
                  </svg>
                </span>
                <span className='min-w-0'>
                  <span className='block text-sm text-secondary'>{c.label}</span>
                  <span className='block truncate font-display text-[20px] font-bold text-white'>{c.value}</span>
                </span>
                <span className='ml-auto text-xl text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white' aria-hidden='true'>→</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {wide && (
        <div className='min-h-[480px] flex-1'>
          {load3d && (
            <Suspense fallback={null}>
              <EarthCanvas active={inView} />
            </Suspense>
          )}
        </div>
      )}
    </div>

    <footer className='wrap mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8 text-sm text-secondary'>
      <span>© {new Date().getFullYear()} Thành Long · WordPress Developer</span>
      <a href='#top' onClick={(e) => { e.preventDefault(); scrollToId("top"); }} className='hover:text-white'>
        Lên đầu trang ↑
      </a>
    </footer>

    {load3d && (
      <Suspense fallback={null}>
        <StarsCanvas active={inView} />
      </Suspense>
    )}
  </section>
  );
};

export default Contact;
