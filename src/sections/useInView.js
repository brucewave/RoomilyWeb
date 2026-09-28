import { useEffect, useState } from "react";

// true khi phần tử đang (gần) nằm trong khung nhìn; dùng để dừng vẽ cảnh 3D khi đã cuộn qua.
const useInView = (ref, rootMargin = "100px") => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, rootMargin]);

  return inView;
};

export default useInView;
