import { styles } from "../styles";
import { projects } from "../constants";

const firstYear = Math.min(...projects.filter((p) => p.year).map((p) => p.year));

const facts = [
  { value: projects.length, label: "website đã triển khai" },
  { value: firstYear, label: "năm bắt đầu làm WordPress" },
  { value: "Full-time", label: "sẵn sàng theo giờ hành chính" },
];

const Hero = () => (
  <section id='top' className='pb-20 pt-32 sm:pb-28 sm:pt-40'>
    <div className={styles.container}>
      <p className='eyebrow'>WordPress Developer</p>

      <h1 className='mt-8 max-w-5xl font-display text-display font-light'>
        Xin chào, tôi là Thành Long.
        <span className='block text-muted'>Tôi làm website WordPress gọn, nhanh và dễ quản trị.</span>
      </h1>

      <p className='mt-8 max-w-2xl text-lead text-muted'>
        Website doanh nghiệp, cửa hàng WooCommerce và landing page — dựng bằng Elementor, Flatsome,
        Breakdance hoặc tự code theme, tùy theo yêu cầu từng dự án.
      </p>

      <div className='mt-10 flex flex-wrap gap-3'>
        <a href='#projects' className='btn'>
          Xem dự án <span aria-hidden='true'>→</span>
        </a>
        <a href='#skills' className='btn btn--ghost'>
          Xem kỹ năng
        </a>
      </div>

      <dl className='mt-16 grid grid-cols-1 border-t border-line sm:grid-cols-3'>
        {facts.map((fact) => (
          <div
            key={fact.label}
            className='border-b border-line py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0'
          >
            <dt className='text-sm text-muted'>{fact.label}</dt>
            <dd className='mt-1 font-display text-3xl font-light tabular-nums'>{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
