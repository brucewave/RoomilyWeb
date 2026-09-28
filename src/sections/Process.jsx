import { motion } from "framer-motion";

import { process } from "../constants";
import SectionHeader from "./SectionHeader";

const Process = () => (
  <section id='process' className='py-section'>
    <div className='wrap'>
      <SectionHeader eyebrow='Cách làm việc' title={<>Từ yêu cầu đến <span className='text-gradient'>website chạy thật.</span></>} />

      <ol className='relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {/* Đường nối các bước trên màn hình rộng */}
        <span className='violet-gradient absolute left-0 right-0 top-7 hidden h-px rotate-180 lg:block' aria-hidden='true' />
        {process.map((step, i) => (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className='relative'
          >
            <span className='relative flex h-14 w-14 items-center justify-center rounded-full bg-violet font-display text-xl font-extrabold text-white shadow-glow'>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className='mt-6 text-[24px] font-bold text-white'>{step.title}</h3>
            <p className='mt-2 text-[15px] text-secondary'>{step.text}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
