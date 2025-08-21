import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const VideoCard = ({
  index,
  name,
  description,
  videoUrl,
}) => {
  // Check if the website URL is accessible or use placeholder
  const isWebsiteAccessible = (url) => {
    // List of websites that are known to work
    const workingWebsites = ['https://hdspiano.com', 'https://the.edu.vn'];
    return workingWebsites.includes(url);
  };

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full'
    >
      <div className='relative w-full h-[200px]'>
        {isWebsiteAccessible(videoUrl) ? (
          <iframe
            width="100%"
            height="100%"
            src={videoUrl}
            title="Website preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className='rounded-xl'
          />
        ) : (
          <div className='w-full h-full bg-gray-700 rounded-xl flex flex-col items-center justify-center'>
            <div className='text-4xl mb-2'>🌐</div>
            <p className='text-white text-xs text-center px-2'>Website Preview</p>
            <p className='text-gray-400 text-xs text-center px-2 mt-1'>{name}</p>
          </div>
        )}
      </div>

      <div className='mt-4'>
        <h3 className='text-white font-bold text-[20px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px]'>{description}</p>
      </div>
    </motion.div>
  );
};

const ImageCard = ({
  index,
  name,
  description,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-5 rounded-3xl xs:w-[320px] w-full'
  >
    <div className='relative w-full h-[200px]'>
      <img
        src={image}
        alt={name}
        className='w-full h-full object-cover rounded-2xl'
      />
    </div>

    <div className='mt-4'>
      <h3 className='text-white font-bold text-[20px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{description}</p>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Portfolio của tôi</p>
          <h2 className={styles.sectionHeadText}>Dự Án Đã Hoàn Thành.</h2>
        </motion.div>
      </div>

      {/* Video Projects Section */}
      <div className={`-mt-20 pb-14 ${styles.paddingX}`}>
        <h3 className='text-white text-[24px] font-bold mb-8'>WordPress Projects</h3>
        <div className='flex flex-wrap gap-7'>
          {testimonials.videos.map((project, index) => (
            <VideoCard key={project.name} index={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "projects");
