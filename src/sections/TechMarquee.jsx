const items = [
  "WordPress",
  "WooCommerce",
  "Elementor",
  "Flatsome",
  "Breakdance",
  "PHP",
  "Tailwind CSS",
  "SEO",
];

// Dải chữ chạy ngang giữa hai section, giống MotifBand của MT House.
const TechMarquee = () => (
  <div className='marquee overflow-hidden border-y border-line bg-black-100 py-6' aria-hidden='true'>
    <div className='marquee__track'>
      {[0, 1].map((copy) => (
        <ul key={copy} className='flex shrink-0 items-center'>
          {items.map((item, i) => (
            <li key={item} className='flex items-center'>
              <span
                className={`px-8 font-display text-[34px] font-extrabold uppercase leading-none sm:text-[52px] ${
                  i % 2 ? "text-transparent [-webkit-text-stroke:1.5px_#915EFF]" : "text-white"
                }`}
              >
                {item}
              </span>
              <span className='text-2xl text-violet'>✦</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export default TechMarquee;
