import { motion } from "framer-motion";

import { pricing, contact } from "../constants";
import SectionHeader from "./SectionHeader";

const Check = () => (
  <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2.4' strokeLinecap='round' strokeLinejoin='round' aria-hidden='true' className='mt-[3px] shrink-0 text-violet'>
    <path d='M5 12l5 5 9-10' />
  </svg>
);

const Pricing = () => (
  <section id='pricing' className='py-section'>
    <div className='wrap'>
      <SectionHeader eyebrow='Bảng giá' title='Chọn gói phù hợp, tùy biến theo nhu cầu.'>
        Tất cả các gói đều hỗ trợ custom sâu theo yêu cầu, hẹn gặp 1:1 và bảo hành 1:1.
      </SectionHeader>

      <div className='mt-14 grid gap-6 lg:grid-cols-3'>
        {pricing.map((plan, i) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className='flex flex-col rounded-2xl border border-line bg-tertiary p-8 transition-colors duration-300 hover:border-violet'
          >
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-[22px] font-bold leading-tight text-white'>{plan.name}</h3>
              {plan.note && (
                <span className='shrink-0 rounded-full bg-violet px-3 py-1 text-xs font-semibold text-white'>{plan.note}</span>
              )}
            </div>

            <p className='mt-6 flex items-baseline gap-2 border-b border-line pb-6'>
              {plan.from && <span className='text-secondary'>từ</span>}
              <span className='font-display text-[52px] font-extrabold leading-none text-white'>{plan.price}</span>
            </p>

            <ul className='mt-6 flex flex-col gap-3 text-[15px] text-white-100'>
              {plan.features.map((f) => (
                <li key={f} className='flex gap-3'>
                  <Check />
                  {f}
                </li>
              ))}
              <li className='flex gap-3 font-semibold text-white'>
                <Check />
                Hỗ trợ custom sâu theo yêu cầu
              </li>
            </ul>

            <div className='mt-auto pt-8'>
              <a href={contact.zalo} target='_blank' rel='noopener noreferrer' className='cta-ghost w-full'>
                Nhận tư vấn gói này
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
