import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const VideoCard = ({ experience }) => {
  // Check if the website URL is accessible or use placeholder
  const isWebsiteAccessible = (url) => {
    // List of websites that are known to work
    const workingWebsites = ['https://hdspiano.com', 'https://the.edu.vn'];
    return workingWebsites.includes(url);
  };

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <div className='mt-5 relative w-full h-[315px]'>
        {isWebsiteAccessible(experience.videoUrl) ? (
          <iframe
            width="100%"
            height="100%"
            src={experience.videoUrl}
            title="Website preview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className='rounded-xl'
          />
        ) : (
          <div className='w-full h-full bg-gray-700 rounded-xl flex flex-col items-center justify-center'>
            <div className='text-6xl mb-2'>🌐</div>
            <p className='text-white text-sm text-center px-4'>Website Preview</p>
            <p className='text-gray-400 text-xs text-center px-4 mt-1'>{experience.title}</p>
          </div>
        )}
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          WordPress Portfolio
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Các Dự Án WordPress
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <VideoCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "videos");
