import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis = null;

// Cuộn mượt bằng Lenis, đồng bộ với ScrollTrigger (cách MT House làm).
// Bỏ qua khi người dùng bật giảm chuyển động.
export const startSmoothScroll = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  lenis = new Lenis({ lerp: 0.1 });
  lenis.on("scroll", ScrollTrigger.update);
  const tick = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis.destroy();
    lenis = null;
  };
};

export const scrollToId = (id) => {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (lenis) lenis.scrollTo(target, { offset: id === "top" ? 0 : -80 });
  else if (target === 0) window.scrollTo(0, 0);
  else target?.scrollIntoView();
};

export const scrollToPosition = (y) => {
  if (lenis) lenis.scrollTo(y);
  else window.scrollTo({ top: y, behavior: "smooth" });
};

export { gsap, ScrollTrigger };
