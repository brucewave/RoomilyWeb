import { motion } from "framer-motion";

import { skillGroups, projects } from "../constants";
import SectionHeader from "./SectionHeader";

const countProjects = (skill) => projects.filter((p) => p.stack.includes(skill)).length;

const Skills = ({ onPickSkill }) => (
  <section id='skills' className='py-section'>
    <div className='wrap'>
      <SectionHeader eyebrow='Kỹ năng' title={<>Công cụ tôi dùng <span className='text-gradient'>hằng ngày.</span></>}>
        Bấm vào kỹ năng có số dự án để xem ngay những website tôi đã làm bằng kỹ năng đó.
      </SectionHeader>

      <div className='mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className='green-pink-gradient rounded-[20px] p-px shadow-card'
          >
            <div className='h-full rounded-[20px] bg-tertiary p-6'>
              <span className='font-display text-sm font-bold text-violet'>{String(gi + 1).padStart(2, "0")}</span>
              <h3 className='mt-1 text-[22px] font-bold leading-tight text-white'>{group.title}</h3>
              <ul className='mt-4'>
                {group.skills.map((skill) => {
                  const count = countProjects(skill);
                  return (
                    <li key={skill} className='border-t border-line'>
                      {count > 0 ? (
                        <button
                          type='button'
                          onClick={() => onPickSkill(skill)}
                          className='group flex min-h-[46px] w-full items-center justify-between gap-3 text-left'
                        >
                          <span className='text-white-100 transition-colors group-hover:text-violet-light'>{skill}</span>
                          <span className='shrink-0 rounded-full bg-violet/[.15] px-2.5 py-0.5 text-xs font-semibold tabular-nums text-violet-light transition-colors group-hover:bg-violet group-hover:text-white'>
                            {count} dự án →
                          </span>
                        </button>
                      ) : (
                        <span className='flex min-h-[46px] items-center text-secondary'>{skill}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='mt-14 grid gap-8 text-[17px] leading-[30px] text-secondary md:grid-cols-2'>
        <p>
          Tôi phát triển website trên WordPress và WooCommerce, thành thạo tùy biến theme với{" "}
          <span className='font-medium text-white'>Breakdance Builder</span>,{" "}
          <span className='font-medium text-white'>Flatsome</span> và{" "}
          <span className='font-medium text-white'>Elementor</span> — linh hoạt theo từng dự án, từ
          thương mại điện tử, website công ty đến landing page.
        </p>
        <p>
          Tôi chủ động phân tích yêu cầu, tách nhiệm vụ theo từng hạng mục, ước lượng và cam kết tiến
          độ minh bạch với team. Sẵn sàng làm việc full-time theo giờ hành chính và mong muốn gắn bó
          lâu dài.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
