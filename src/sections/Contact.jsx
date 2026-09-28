import { styles } from "../styles";
import { contact } from "../constants";

const channels = [
  { label: "Điện thoại", value: contact.phoneDisplay, href: `tel:${contact.phone}` },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Zalo", value: contact.phoneDisplay, href: contact.zalo, external: true },
];

const Contact = () => (
  <section id='contact' className={styles.section}>
    <div className={`${styles.container} grid gap-12 md:grid-cols-2`}>
      <div>
        <p className='eyebrow'>04 — Liên hệ</p>
        <h2 className='section-title mt-4'>Cần một website WordPress? Hãy nói chuyện với tôi.</h2>
        <p className='mt-6 max-w-md text-muted'>
          Gọi điện, nhắn Zalo hoặc gửi email — tôi phản hồi trong giờ hành chính.
        </p>
      </div>

      <ul className='self-end'>
        {channels.map((c) => (
          <li key={c.label} className='border-t border-line last:border-b'>
            <a
              href={c.href}
              {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className='group flex items-center justify-between gap-4 py-6'
            >
              <span className='shrink-0 text-sm text-muted'>{c.label}</span>
              <span className='flex min-w-0 items-center gap-3 font-display text-lg font-light transition-colors group-hover:text-accent sm:text-2xl'>
                <span className='truncate'>{c.value}</span>
                <span aria-hidden='true'>→</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>

    <footer className={`${styles.container} mt-24 flex flex-wrap justify-between gap-4 text-sm text-muted`}>
      <span>© {new Date().getFullYear()} Thành Long</span>
      <a href='#top' className='hover:text-cream'>
        Lên đầu trang ↑
      </a>
    </footer>
  </section>
);

export default Contact;
