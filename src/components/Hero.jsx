import React from 'react';
import { styles } from '../styles';
import Computers from './canvas/Computers';
import { motion } from 'framer-motion';

import Type from './Type';
const Hero = () => {
  

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'></div>
          <div className='w-1 sm:h-80 h-40 violet-gradient'></div>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I am <span className='text-[#915eff]'>Tadael</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Type></Type>
          </p>
        </div>
      </div>
      <Computers />
  
      <div className='absolute bottom-5 xs:bottom-22 w-full flex justify-center items-center p-2'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
  
    </section>
  );
};

export default Hero;
