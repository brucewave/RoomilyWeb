import { styles } from "../styles";
import { skillGroups, projects } from "../constants";
import SectionHeader from "./SectionHeader";

const countProjects = (skill) => projects.filter((p) => p.stack.includes(skill)).length;

const Skills = ({ onPickSkill }) => (
  <section id='skills' className={styles.section}>
    <div className={styles.container}>
      <SectionHeader index='01' eyebrow='Kỹ năng' title='Công cụ tôi dùng hằng ngày'>
        Nhấn vào kỹ năng có ghi số dự án để xem ngay những website tôi đã làm bằng kỹ năng đó.
      </SectionHeader>

      <div className='mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4'>
        {skillGroups.map((group) => (
          <div key={group.title} className='bg-ink p-6'>
            <h3 className='font-serif text-2xl'>{group.title}</h3>
            <ul className='mt-5'>
              {group.skills.map((skill) => {
                const count = countProjects(skill);
                return (
                  <li key={skill} className='border-t border-line'>
                    {count > 0 ? (
                      <button
                        type='button'
                        onClick={() => onPickSkill(skill)}
                        className='group flex min-h-[44px] w-full items-center justify-between gap-3 py-3 text-left'
                      >
                        <span className='transition-colors group-hover:text-accent'>{skill}</span>
                        <span className='shrink-0 text-sm tabular-nums text-muted group-hover:text-accent'>
                          {count} dự án →
                        </span>
                      </button>
                    ) : (
                      <span className='block py-3'>{skill}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className='mt-14 grid gap-8 md:grid-cols-2'>
        <p className='text-muted'>
          Tôi có nền tảng vững về WordPress development, theme customization, plugin development và
          SEO. Mỗi dự án tôi chọn công cụ phù hợp nhất thay vì ép vào một builder cố định — từ{" "}
          <span className='text-cream'>Breakdance Builder</span>,{" "}
          <span className='text-cream'>Flatsome</span>, <span className='text-cream'>Elementor</span>{" "}
          đến theme tự code.
        </p>
        <p className='text-muted'>
          Tôi chủ động phân tích yêu cầu, tách nhiệm vụ theo từng hạng mục, ước lượng và cam kết tiến
          độ minh bạch với team. Sẵn sàng làm việc full-time theo giờ hành chính và mong muốn gắn bó
          lâu dài.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
