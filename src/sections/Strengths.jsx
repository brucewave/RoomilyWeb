import { motion } from "framer-motion";

import { strengths } from "../constants";

// Mỗi cam kết là một hàng full-width chữ lớn; rê chuột thì nền tím trượt ngang qua hàng.
const Strengths = () => (
  <section id='strengths' className='py-section'>
    <div className='wrap'>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className='eyebrow'>Cam kết khi làm việc với tôi</p>
        <h2 className='section-title mt-4 max-w-4xl'>
          Làm freelance, nhưng tận tâm như <span className='text-violet'>người trong team.</span>
        </h2>
      </motion.div>
    </div>

    <ol className='mt-14 border-t border-line'>
      {strengths.map((item, i) => (
        <motion.li
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className='group relative isolate overflow-hidden border-b border-line'
        >
          <span
            aria-hidden='true'
            className='absolute inset-0 -z-10 origin-left scale-x-0 bg-violet transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100'
          />
          <div className='wrap grid items-center gap-3 py-8 md:grid-cols-[80px_1.3fr_1fr] md:gap-8 md:py-10'>
            <span className='font-display text-lg font-bold tabular-nums text-violet transition-colors group-hover:text-white'>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className='font-display text-[34px] font-extrabold leading-[1.05] text-white sm:text-[48px] lg:text-[60px]'>
              {item.title}
            </h3>
            <div>
              <span className='inline-block rounded-full border border-violet px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-violet-light transition-colors group-hover:border-white group-hover:text-white'>
                {item.tag}
              </span>
              <p className='mt-3 text-[16px] text-secondary transition-colors group-hover:text-white'>{item.text}</p>
            </div>
          </div>
        </motion.li>
      ))}
    </ol>
  </section>
);

export default Strengths;
