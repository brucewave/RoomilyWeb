import { lazy, Suspense, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

import { scrollToId } from "../smooth";
import useInView from "./useInView";
import { logo_roomily } from "../assets";
import reactIcon from "../assets/tech/reactjs.png";
import figmaIcon from "../assets/tech/figma.png";
import tailwindIcon from "../assets/tech/tailwind.png";

// Tải mô hình 3D sau khi trang đã hiện chữ, để hero không phải chờ three.js.
const RoomCanvas = lazy(() => import("../components/canvas/Room"));

const ease = [0.16, 1, 0.3, 1];

const rise = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

const Arrow = () => (
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.2' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true'>
    <path d='M5 12h14M13 6l6 6-6 6' />
  </svg>
);

/* ------------------------------------------------------------ đồ vật trên bàn */
// Kỹ thuật lấy từ relayfi.com: mỗi món có vị trí "gọn" (CSS) và độ lệch "bừa" (messy).
// Bấm vào bàn thì mọi món trượt về vị trí gọn; cuộn xuống thì hai nhóm trôi ra hai bên.

// Ảnh chụp website thật (public/showcase) đặt trong khung trình duyệt hoặc điện thoại.
const BrowserCard = ({ src, url }) => (
  <div className='overflow-hidden rounded-xl border border-white/10 bg-[#0d0a24] shadow-card'>
    <div className='flex items-center gap-1.5 px-3 py-2'>
      <span className='h-2 w-2 rounded-full bg-[#ff5f57]' />
      <span className='h-2 w-2 rounded-full bg-[#febc2e]' />
      <span className='h-2 w-2 rounded-full bg-[#28c840]' />
      <span className='ml-2 flex-1 truncate rounded-full bg-white/10 px-3 py-0.5 text-left text-[clamp(9px,0.7vw,12px)] text-secondary'>{url}</span>
    </div>
    <img src={src} alt={`Website ${url}`} draggable='false' className='block aspect-[16/10] w-full object-cover object-top' />
  </div>
);

const PhoneCard = ({ src, url }) => (
  <div className='overflow-hidden rounded-[22px] border-[5px] border-[#16122e] bg-[#16122e] shadow-card'>
    <img src={src} alt={`Website ${url} trên điện thoại`} draggable='false' className='block aspect-[9/18] w-full rounded-[16px] object-cover object-top' />
  </div>
);

const CodeCard = () => (
  <div className='rounded-xl border border-violet/40 bg-[#0d0a24] p-5 font-mono text-[clamp(10px,0.9vw,15px)] leading-relaxed shadow-card'>
    <div className='mb-3 flex gap-1.5'>
      <span className='h-2.5 w-2.5 rounded-full bg-[#ff5f57]' />
      <span className='h-2.5 w-2.5 rounded-full bg-[#febc2e]' />
      <span className='h-2.5 w-2.5 rounded-full bg-[#28c840]' />
    </div>
    <p className='text-secondary'>
      <span className='text-violet-light'>&lt;?php</span> <span className='opacity-60'>// functions.php</span>
    </p>
    <p className='text-white'>
      <span className='text-mint'>add_action</span>(<span className='text-[#febc2e]'>'init'</span>, ...);
    </p>
    <p className='text-white'>
      <span className='text-mint'>echo</span> <span className='text-[#febc2e]'>'Xin chào!'</span>;
    </p>
  </div>
);

const Sticky = () => (
  <div className='rounded-sm bg-violet p-4 font-display text-white shadow-glow'>
    <p className='text-[clamp(28px,3vw,48px)] font-black leading-none'>20+</p>
    <p className='mt-1 text-[clamp(11px,0.95vw,15px)] font-semibold leading-tight'>dự án web &amp; thiết kế đã hoàn thành</p>
  </div>
);

const Chip = ({ src, alt }) => (
  <div className='flex aspect-square w-full items-center justify-center rounded-full border border-white/10 bg-tertiary p-[18%] shadow-card'>
    <img src={src} alt={alt} draggable='false' className='h-full w-full object-contain' />
  </div>
);

const LogoBadge = () => (
  <div className='flex aspect-square w-full items-center justify-center rounded-2xl border border-violet/50 bg-tertiary p-[10%] shadow-glow'>
    <img src={logo_roomily} alt='' draggable='false' className='h-full w-full object-contain' />
  </div>
);

// pos: vị trí gọn (so với nửa màn hình của nhóm). messy: độ lệch khi bày bừa (x, y theo vw/vh).
const LEFT = [
  { id: "mthouse", pos: { left: "-22%", top: "10%", width: "86%" }, messy: { x: -1, y: 2, r: -8 }, node: <BrowserCard src='/showcase/mthouse-1.jpg' url='mthouse.vn' /> },
  { id: "mtt", pos: { left: "64%", top: "14%", width: "30%" }, messy: { x: -1, y: 5, r: 9 }, node: <PhoneCard src='/showcase/mtt.jpg' url='mtt.mthouse.vn' /> },
  { id: "greengo", pos: { left: "-14%", top: "47%", width: "74%" }, messy: { x: 1, y: 3, r: 6 }, node: <BrowserCard src='/showcase/greengo.jpg' url='greengo.io.vn' /> },
  { id: "finnolla", pos: { left: "70%", top: "44%", width: "26%" }, messy: { x: 1, y: 2, r: -10 }, node: <PhoneCard src='/showcase/finnolla.jpg' url='finnolla.vn' /> },
  { id: "code", pos: { left: "30%", top: "72%", width: "64%" }, messy: { x: -2, y: 1, r: -5 }, node: <CodeCard /> },
  { id: "logo", pos: { left: "4%", top: "80%", width: "22%" }, messy: { x: 2, y: 3, r: 14 }, node: <LogoBadge /> },
  { id: "react", pos: { left: "2%", top: "39%", width: "12%" }, messy: { x: 3, y: -4, r: -20 }, node: <Chip src={reactIcon} alt='React' /> },
];

const RIGHT = [
  { id: "sidstudio", pos: { right: "-20%", top: "9%", width: "84%" }, messy: { x: 1, y: 2, r: 7 }, node: <BrowserCard src='/showcase/sidstudio.jpg' url='studio.sidcorp.co' /> },
  { id: "lalune", pos: { right: "64%", top: "16%", width: "30%" }, messy: { x: 1, y: 6, r: -9 }, node: <PhoneCard src='/showcase/lalune.jpg' url='lalune-label.vercel.app' /> },
  { id: "everest", pos: { right: "42%", top: "44%", width: "50%" }, messy: { x: 2, y: 2, r: -4 }, node: <BrowserCard src='/showcase/everest.jpg' url='everestcoffees.com' /> },
  { id: "hdspiano", pos: { right: "-4%", top: "37%", width: "48%" }, messy: { x: 1, y: 3, r: 6 }, node: <BrowserCard src='/showcase/hdspiano.jpg' url='hdspiano.com' /> },
  { id: "sticky", pos: { right: "70%", top: "70%", width: "26%" }, messy: { x: -1, y: 1, r: -8 }, node: <Sticky /> },
  { id: "figma", pos: { right: "50%", top: "86%", width: "11%" }, messy: { x: 2, y: -2, r: 16 }, node: <Chip src={figmaIcon} alt='Figma' /> },
  { id: "tailwind", pos: { right: "30%", top: "86%", width: "11%" }, messy: { x: -2, y: 3, r: -22 }, node: <Chip src={tailwindIcon} alt='Tailwind CSS' /> },
];

const DeskItem = ({ item, tidy, side, index, onToggle }) => {
  const { x, y, r } = item.messy;
  const from = side === "left" ? "-40vw" : "40vw";

  return (
    <motion.button
      type='button'
      tabIndex={-1}
      aria-hidden='true'
      onClick={onToggle}
      className='pointer-events-auto absolute cursor-pointer select-none'
      style={item.pos}
      initial={{ x: from, y: "0vh", rotate: r * 2, opacity: 0 }}
      animate={tidy ? { x: "0vw", y: "0vh", rotate: 0, opacity: 1 } : { x: `${x}vw`, y: `${y}vh`, rotate: r, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 16, mass: 0.9, delay: 0.15 + index * 0.05 }}
      whileHover={{ scale: 1.05, zIndex: 5 }}
      whileTap={{ scale: 0.97 }}
    >
      {item.node}
    </motion.button>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const [tidy, setTidy] = useState(false);
  const toggle = () => setTidy((t) => !t);

  // Cuộn: hai nhóm đồ trôi ra hai bên, tiêu đề mờ và nhòe dần như Relay.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const leftX = useTransform(scrollYProgress, [0, 1], ["0vw", reduce ? "0vw" : "-42vw"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0vw", reduce ? "0vw" : "42vw"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.18]);
  const titleBlur = useTransform(scrollYProgress, [0, 0.85], ["blur(0px)", reduce ? "blur(0px)" : "blur(8px)"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section id='top' ref={ref} className='relative w-full lg:h-[175vh]'>
      <div className='relative overflow-hidden bg-hero-pattern bg-cover bg-center lg:sticky lg:top-0 lg:h-screen lg:min-h-[680px]'>
        {/* Mặt bàn: bấm vào chỗ trống cũng dọn gọn / bày lại. */}
        <div className='absolute inset-0 hidden lg:block' onClick={toggle} aria-hidden='true' />

        <motion.div style={{ x: leftX }} className='pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 lg:block'>
          <div className='absolute inset-y-0 left-0 w-[60%] xl:w-[66%]'>
            {LEFT.map((item, i) => (
              <DeskItem key={item.id} item={item} tidy={tidy} side='left' index={i} onToggle={toggle} />
            ))}
          </div>
        </motion.div>

        <motion.div style={{ x: rightX }} className='pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block'>
          <div className='absolute inset-y-0 right-0 w-[60%] xl:w-[66%]'>
            {/* Phòng 3D vẫn là "món" lớn nhất trên bàn (kéo để xoay); đặt dưới cùng để các thẻ nằm đè lên. */}
            <motion.div
              className='pointer-events-auto absolute bottom-[-10%] right-[-16%] h-[60%] w-[92%]'
              initial={{ x: "40vw", opacity: 0 }}
              animate={tidy ? { x: "0vw", y: "0vh", opacity: 1 } : { x: "1vw", y: "3vh", opacity: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 16 }}
            >
              <Suspense fallback={null}>
                <RoomCanvas active={inView} />
              </Suspense>
            </motion.div>
            {RIGHT.map((item, i) => (
              <DeskItem key={item.id} item={item} tidy={tidy} side='right' index={i} onToggle={toggle} />
            ))}
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: titleOpacity, filter: titleBlur, scale: titleScale }}
          className='pointer-events-none relative z-10 flex flex-col items-center px-gutter pb-16 pt-[140px] text-center lg:h-full lg:justify-center lg:pb-0 lg:pt-10'
        >
          <motion.h1
            {...rise(0.1)}
            className='font-display text-[44px] font-black uppercase leading-[0.95] text-white xs:text-[56px] lg:text-[clamp(56px,5.6vw,104px)]'
          >
            Chào,
            <br />
            tôi là
            <br />
            <span className='normal-case text-violet'>Thành Long.</span>
          </motion.h1>

          <motion.p
            {...rise(0.25)}
            className='mt-6 max-w-[34ch] font-display text-[18px] font-medium leading-snug text-[#dfd9ff] sm:text-[22px] lg:text-[clamp(20px,1.6vw,26px)]'
          >
            WordPress Developer chuyên nghiệp — web đẹp, nhẹ, chuẩn SEO, GEO.
          </motion.p>

          <motion.div {...rise(0.4)} className='pointer-events-auto mt-9 flex flex-wrap justify-center gap-4'>
            <a href='#featured' onClick={(e) => { e.preventDefault(); scrollToId("featured"); }} className='cta'>
              Xem dự án
              <span className='cta__arrow'><Arrow /></span>
            </a>
            <a href='#pricing' onClick={(e) => { e.preventDefault(); scrollToId("pricing"); }} className='cta-ghost'>
              Xem bảng giá
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          type='button'
          {...rise(0.9)}
          onClick={toggle}
          aria-pressed={tidy}
          className='absolute inset-x-0 bottom-8 z-10 mx-auto hidden w-fit items-center gap-2 rounded-full border border-white/15 bg-primary/60 px-5 py-2.5 text-sm font-semibold text-secondary backdrop-blur transition-colors hover:border-violet hover:text-white lg:flex'
        >
          <span className='h-2 w-2 rounded-full bg-violet' />
          {tidy ? "Bày lại bàn làm việc" : "Bấm để dọn gọn bàn làm việc"}
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
