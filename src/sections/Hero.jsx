import { lazy, Suspense, useRef } from "react";
import { motion } from "framer-motion";

import { scrollToId } from "../smooth";
import useInView from "./useInView";

// Tải mô hình 3D sau khi trang đã hiện chữ, để hero không phải chờ three.js.
const RoomCanvas = lazy(() => import("../components/canvas/Room"));

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
});

const Arrow = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
);

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
  <section id='top' ref={ref} className='relative mx-auto w-full overflow-hidden md:h-screen md:min-h-[640px]'>
    {/* Điện thoại không có mô hình 3D nên hero chỉ cao vừa nội dung, không kéo đầy màn hình. */}
    <div className='wrap relative z-10 flex flex-row items-start gap-5 pb-16 pt-[120px] md:absolute md:inset-0 md:top-[140px] md:pb-0 md:pt-0'>
      <div className='mt-5 flex flex-col items-center self-stretch md:self-auto'>
        <motion.div {...rise(0)} className='h-5 w-5 rounded-full bg-violet' />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className='w-1 flex-1 origin-top bg-violet/60 md:h-96 md:flex-none'
        />
      </div>

      <div className='pointer-events-none'>
        <motion.h1
          {...rise(0.1)}
          className='mt-2 font-display text-[40px] font-black leading-[1.1] text-white xs:text-[50px] sm:text-[60px] lg:text-[80px] lg:leading-[98px]'
        >
          Chào bạn đến với <br />
          <span className='text-violet'>Thành Long</span>
        </motion.h1>

        <motion.p
          {...rise(0.25)}
          className='mt-2 font-display text-[18px] font-medium text-[#dfd9ff] xs:text-[20px] sm:text-[26px] lg:text-[30px] lg:leading-[40px]'
        >
          Tôi là một <br className='hidden sm:block' />
          WordPress Developer chuyên nghiệp
        </motion.p>

        <motion.div {...rise(0.4)} className='pointer-events-auto mt-10 flex flex-wrap gap-4'>
          <a href='#featured' onClick={(e) => { e.preventDefault(); scrollToId("featured"); }} className='cta'>
            Xem dự án
            <span className='cta__arrow'><Arrow /></span>
          </a>
          <a href='#pricing' onClick={(e) => { e.preventDefault(); scrollToId("pricing"); }} className='cta-ghost'>
            Xem bảng giá
          </a>
        </motion.div>
      </div>
    </div>

    <div className='absolute right-0 top-0 hidden h-full w-1/2 md:block'>
      <Suspense fallback={null}>
        <RoomCanvas active={inView} />
      </Suspense>
    </div>

    <div className='absolute bottom-10 z-10 hidden w-full items-center justify-center md:flex'>
      <a href='#featured' aria-label='Cuộn xuống phần dự án' onClick={(e) => { e.preventDefault(); scrollToId("featured"); }}>
        <div className='flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary p-2'>
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className='mb-1 h-3 w-3 rounded-full bg-secondary'
          />
        </div>
      </a>
    </div>
  </section>
  );
};

export default Hero;
