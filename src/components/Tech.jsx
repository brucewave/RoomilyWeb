import React from "react";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

import { app_logo, qr_code, app_store, google_play } from "../assets";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <h2 className={`${styles.sectionHeadText} mb-2`}>Tải App Ngay</h2>
        <h3 className={`${styles.sectionSubText} text-[20px]`}>Tìm Phòng Liền Tay</h3>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-10 flex flex-col md:flex-row items-center justify-center gap-16'
      >
        <Tilt
          options={{
            max: 45,
            scale: 1.1,
            speed: 450,
          }}
          className='w-[400px]'
        >
          <img src={app_logo} alt="Roomily App Logo" className="w-full h-auto" />
        </Tilt>

        <div className='flex flex-col items-center gap-8'>
          <Tilt
            options={{
              max: 45,
              scale: 1.1,
              speed: 450,
            }}
            className='w-[200px]'
          >
            <img src={qr_code} alt="QR Code" className="w-full h-auto" />
          </Tilt>
          
          <div className='flex flex-col sm:flex-row gap-6'>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={app_store} alt="Download on App Store" className="h-[60px]" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <img src={google_play} alt="Get it on Google Play" className="h-[60px]" />
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "download");
