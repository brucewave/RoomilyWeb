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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Giới thiệu</p>
        <h2 className={styles.sectionHeadText}>Tổng quan.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Roomily là nền tảng tìm trọ thông minh, giúp bạn tìm được phòng trọ 
        phù hợp một cách nhanh chóng và thuận tiện. Chúng tôi cung cấp đầy đủ 
        các dịch vụ đi kèm như: tìm trọ gần trường/công ty, dịch vụ chuyển trọ 
        an toàn, kết nối với bạn cùng phòng tiềm năng, và cả cửa hàng tạp hóa 
        trực tuyến để đáp ứng mọi nhu cầu sinh hoạt của bạn. Hãy để Roomily 
        đồng hành cùng bạn trong hành trình tìm tổ ấm mới!
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
