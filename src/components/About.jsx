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
        Tôi là một Video Editor chuyên nghiệp với kinh nghiệm làm việc với các phần mềm chỉnh sửa video hàng đầu như Adobe Premiere Pro, After Effects, và CapCut. Tôi có khả năng biến những thước phim thô thành những sản phẩm video chất lượng cao, đầy cảm xúc và truyền tải được thông điệp rõ ràng. Với kiến thức chuyên sâu về motion graphics, color grading và storytelling, tôi luôn tìm kiếm những thách thức mới để phát triển kỹ năng và tạo ra những sản phẩm sáng tạo, độc đáo.
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
