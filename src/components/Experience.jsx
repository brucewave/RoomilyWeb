import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const VideoCard = ({ experience }) => {
  // Check if the website URL is accessible or use placeholder
  const isWebsiteAccessible = (url) => {
    // List of websites that are known to work
    const workingWebsites = ['https://hdspiano.com', 'https://the.edu.vn'];
    return workingWebsites.includes(url);
  };
  const getWebsitePreviewImage = (url) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=1200`;
  const [showFallbackImage, setShowFallbackImage] = useState(
    !isWebsiteAccessible(experience.videoUrl)
  );
  const [isFallbackImageError, setIsFallbackImageError] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      dateClassName='text-white'
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
        {!showFallbackImage ? (
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
            onError={() => setShowFallbackImage(true)}
          />
        ) : !isFallbackImageError ? (
          <a
            href={experience.videoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='block w-full h-full'
          >
            <img
              src={getWebsitePreviewImage(experience.videoUrl)}
              alt={`${experience.title} preview`}
              className='w-full h-full rounded-xl object-cover'
              loading='lazy'
              onError={() => setIsFallbackImageError(true)}
            />
          </a>
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
      <div>
        <p
          className={`${styles.sectionSubText} text-center`}
          style={{ color: "#b8b5c8" }}
        >
          Hành trình phát triển dự án
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{ color: "#ffffff", textShadow: "0 2px 12px rgba(0,0,0,0.35)" }}
        >
          Kinh Nghiệm Làm Việc
        </h2>
      </div>

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
