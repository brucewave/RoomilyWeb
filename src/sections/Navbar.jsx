import { useEffect, useState } from "react";

import { navLinks } from "../constants";
import { logo_roomily } from "../assets";
import { scrollToId } from "../smooth";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled || open ? "border-b border-line bg-primary/95" : "bg-transparent"
      }`}
    >
      <nav className={`wrap flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[72px]" : "h-[96px]"}`}>
        <a href='#top' onClick={(e) => go(e, "top")} className='flex items-center gap-2'>
          <img
            src={logo_roomily}
            alt='Thành Long'
            className={`object-contain transition-all duration-300 ${scrolled ? "h-14 w-14" : "h-20 w-20"}`}
          />
          <span className='hidden font-display text-[18px] font-bold text-white sm:block'>
            | WordPress Developer
          </span>
        </a>

        <ul className='hidden items-center gap-9 md:flex'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                className='group relative font-display text-[18px] font-medium text-secondary transition-colors hover:text-white'
              >
                {link.title}
                <span className='absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded bg-violet transition-transform duration-300 group-hover:scale-x-100' />
              </a>
            </li>
          ))}
        </ul>

        <button
          type='button'
          className='flex h-11 w-11 items-center justify-center md:hidden'
          aria-label={open ? "Đóng menu" : "Mở menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width='26' height='26' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round'>
            {open ? <path d='M6 6l12 12M18 6L6 18' /> : <path d='M4 7h16M4 12h16M4 17h10' />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul className='wrap flex flex-col pb-4 md:hidden'>
          {navLinks.map((link) => (
            <li key={link.id} className='border-t border-line'>
              <a
                href={`#${link.id}`}
                onClick={(e) => go(e, link.id)}
                className='block py-4 font-display text-[18px] font-medium'
              >
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
