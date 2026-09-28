import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Cuộn dùng cơ chế gốc của trình duyệt (nhẹ hơn Lenis); nhảy tới section thì cuộn mượt bằng CSS.
export const scrollToId = (id) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  let target = document.getElementById(id);
  // Khối dự án nổi bật bị ẩn trên điện thoại: nhảy thẳng tới danh sách dự án.
  if (target && target.offsetParent === null) target = document.getElementById("projects");
  target?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export { gsap, ScrollTrigger };
