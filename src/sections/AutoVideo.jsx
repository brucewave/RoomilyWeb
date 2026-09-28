import { useEffect, useRef, useState } from "react";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Video quay màn hình website: chỉ tải và phát khi đang nằm trong khung nhìn,
// ra ngoài thì dừng. Người dùng bật giảm chuyển động thì chỉ hiện ảnh poster, bấm mới phát.
const AutoVideo = ({ src, poster, label, className = "", threshold = 0.55 }) => {
  const ref = useRef(null);
  const [paused, setPaused] = useState(true);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (reducedMotion()) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused) video.play().catch(() => {});
        else video.pause();
      },
      { threshold }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [userPaused, threshold]);

  const toggle = () => {
    const video = ref.current;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => {});
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload='none'
        aria-label={label}
        onPlay={() => setPaused(false)}
        onPause={() => setPaused(true)}
        className='h-full w-full object-cover object-top'
      />
      <button
        type='button'
        onClick={toggle}
        aria-label={paused ? `Phát video ${label}` : `Dừng video ${label}`}
        className='absolute bottom-3 left-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 text-white backdrop-blur transition-colors hover:bg-violet'
      >
        <svg width='14' height='14' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
          {paused ? <path d='M7 4.5v15l13-7.5z' /> : <path d='M6 4h4v16H6zM14 4h4v16h-4z' />}
        </svg>
      </button>
    </div>
  );
};

export default AutoVideo;
