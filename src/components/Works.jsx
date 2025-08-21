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
  // Check if the website URL is accessible or use placeholder
  const isWebsiteAccessible = (url) => {
    // List of websites that are known to work
    const workingWebsites = ['https://hdspiano.com', 'https://the.edu.vn'];
    return workingWebsites.includes(url);
  };

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
        <div className='relative w-full h-[230px]'>
          {isWebsiteAccessible(source_code_link) ? (
            <iframe
              width="100%"
              height="100%"
              src={source_code_link}
              title="Website preview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className='rounded-xl z-10 relative'
            />
          ) : (
            <div className='w-full h-full bg-gray-700 rounded-xl flex flex-col items-center justify-center'>
              <div className='text-6xl mb-2'>🌐</div>
              <p className='text-white text-sm text-center px-4'>Website Preview</p>
              <p className='text-gray-400 text-xs text-center px-4 mt-1'>{name}</p>
            </div>
          )}

          <div className='absolute top-3 right-3 z-20'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
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
        <p className={`${styles.sectionSubText} `}>Portfolio của tôi</p>
        <h2 className={`${styles.sectionHeadText}`}>Dự Án Tiêu Biểu.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Dưới đây là những dự án WordPress tiêu biểu mà tôi đã thực hiện. Mỗi dự án đều được 
          tạo ra với sự kết hợp của nhiều kỹ năng khác nhau như WordPress development, WooCommerce integration, 
          theme customization và SEO optimization. Tôi luôn cố gắng mang đến những sản phẩm web chất lượng cao 
          và chuyên nghiệp cho khách hàng, từ website thương mại điện tử đến website công ty và landing page.
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
