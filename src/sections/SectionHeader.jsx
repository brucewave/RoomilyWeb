import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className='grid gap-6 md:grid-cols-[1.2fr_1fr] md:items-end'
  >
    <div>
      <p className='eyebrow'>{eyebrow}</p>
      <h2 className='section-title mt-4'>{title}</h2>
    </div>
    {children && <p className='max-w-md text-[17px] text-secondary md:justify-self-end'>{children}</p>}
  </motion.div>
);

export default SectionHeader;
