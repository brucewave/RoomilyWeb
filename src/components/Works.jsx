import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px] cursor-pointer' 
          onClick={() => {
            const element = document.getElementById('download');
            element.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                const element = document.getElementById('download');
                element.scrollIntoView({ behavior: 'smooth' });
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='download app'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5' onClick={(e) => {
                e.stopPropagation();
                const element = document.getElementById('download');
                element.scrollIntoView({ behavior: 'smooth' });
              }}>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2' onClick={(e) => {
                e.stopPropagation();
                const element = document.getElementById('download');
                element.scrollIntoView({ behavior: 'smooth' });
              }}>
          {tags.map((tag) => (
            <div key={`${name}-${tag.text}`} className='flex items-center'>
              <img src={tag.icon} alt={tag.text} className='w-4 h-4 mr-1' />
              <p className={`text-[14px] ${tag.color}`}>{tag.text}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Danh sách phòng trọ</p>
        <h2 className={`${styles.sectionHeadText}`}>Phòng Nổi Bật.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Dưới đây là những phòng trọ nổi bật, được nhiều người quan tâm và 
          đánh giá cao. Mỗi phòng đều được mô tả chi tiết với đầy đủ hình ảnh 
          thực tế, giá cả và tiện ích đi kèm. Bạn có thể xem thông tin chi tiết 
          và đặt lịch xem phòng trực tiếp thông qua nền tảng của chúng tôi.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
