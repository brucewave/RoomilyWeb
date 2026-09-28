import { useEffect, useState } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors ${
        scrolled || open ? "border-b border-line bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className={`${styles.container} flex h-16 items-center justify-between`}>
        <a href='#top' className='flex items-baseline gap-3' onClick={() => setOpen(false)}>
          <span className='font-display text-lg font-medium tracking-tight'>Thành Long</span>
          <span className='hidden text-xs uppercase tracking-[0.18em] text-muted sm:inline'>
            WordPress Developer
          </span>
        </a>

        <ul className='hidden items-center gap-8 md:flex'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className='text-[15px] text-muted transition-colors hover:text-cream'
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <a href='#contact' className='btn btn--small hidden md:inline-flex'>
          Liên hệ ngay
        </a>

        <button
          type='button'
          className='flex h-11 w-11 items-center justify-center md:hidden'
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width='22' height='22' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'>
            {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h16' />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className={`${styles.container} flex flex-col pb-4 md:hidden`}>
          {navLinks.map((link) => (
            <li key={link.id} className='border-t border-line'>
              <a href={`#${link.id}`} className='block py-4 text-[17px]' onClick={() => setOpen(false)}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
