import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { an } from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FloatType } from "three";

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
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[215px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  // const mypp = require("../assets/an.jpg");
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3x2 leading-[30px] flex flex-row gap-2'
      >
        <div className="basis-1/2">
          <img src={an} alt="logo" width={'72%'} height={'72%'} />
        </div>
        <div className="basis-1/2">
          <p>I'm an experienced Frontend Developer specializing in MongoDB, Express.js, React.js and Node.js. With a knack for learning quickly and a collaborative mindset, I focus on building efficient, scalable, and user-friendly solutions that address real-world challenges. I’m passionate about turning ideas into reality through clean, functional code.
          <br></br>
          In addition to my technical expertise, I’m also a lyricist with a deep appreciation for all forms of art. Whether it's crafting engaging web experiences or writing compelling songs, I’m driven by creativity and innovation.
          <br></br>
          Let's work together to bring your vision to life!</p>
        </div>
        
        
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