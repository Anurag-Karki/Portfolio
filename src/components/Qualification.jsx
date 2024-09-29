import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { qualifications } from "../constants";



const QualiCard = ({
  index,
  name,
  uniname,
  cgpa,
  numyears,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-white font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]'>{uniname}-{numyears}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[16px]'>
            <span className='blue-text-gradient'></span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
            CGPA: {cgpa}       </p>
        </div>

        <img
          src={image}
          alt="alt"
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Qualification = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Academic</p>
          <h2 className={styles.sectionHeadText}>Qualifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {qualifications.map((qualification, index) => (
          <QualiCard key={qualification.name} index={index} {...qualification} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Qualification, "qualification");