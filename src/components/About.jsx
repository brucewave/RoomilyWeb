import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-32 h-32 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} mb-4`}>Giới thiệu</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Tôi là một WordPress Developer chuyên nghiệp với kinh nghiệm phát triển website trên WordPress và WooCommerce, thành thạo tùy biến theme với{" "}
        <span className='text-white font-medium'>Breakdance Builder</span>,{" "}
        <span className='text-white font-medium'>Flatsome</span> và{" "}
        <span className='text-white font-medium'>Elementor</span>
        {" "}— linh hoạt theo từng dự án. Tôi xây dựng website thương mại điện tử, website công ty và landing page chuyên nghiệp, giao diện chuẩn và hiệu suất tối ưu. Nền tảng vững về WordPress development, theme customization, plugin development và SEO, tôi luôn hướng tới sản phẩm web sáng tạo, ổn định.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.15, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mx-auto text-center'
      >
        Tôi có khả năng phân tích yêu cầu, chủ động tách nhiệm vụ chi tiết theo từng hạng mục, kỹ năng quản lý thời gian, biết ước lượng và cam kết tiến độ minh bạch với team. Sẵn sàng làm việc full-time theo giờ hành chính và mong muốn gắn bó lâu dài cùng team.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
