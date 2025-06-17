import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Nhấn trực tiếp vào các nút dưới để</p>
        <h3 className={styles.sectionHeadText}>Liên Hệ.</h3>

        <div className='mt-12 flex flex-col gap-8'>
          {/* Phone Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Gọi điện trực tiếp</span>
            <a 
              href="tel:0349402518"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium hover:bg-[#2a2a2a] transition-all duration-300 flex items-center justify-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              0349402518
            </a>
          </div>

          {/* Email Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Email</span>
            <a 
              href="mailto:your.email@example.com"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium hover:bg-[#2a2a2a] transition-all duration-300 flex items-center justify-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              longthanh.dev@gmail.com
            </a>
          </div>

          {/* Zalo Contact */}
          <div className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Zalo</span>
            <a 
              href="https://zalo.me/0349402518"
              target="_blank"
              rel="noopener noreferrer"
              className='bg-tertiary py-4 px-6 text-white rounded-lg outline-none border-none font-medium hover:bg-[#2a2a2a] transition-all duration-300 flex items-center justify-center'
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat Zalo: 0349402518
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
