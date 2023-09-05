import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

// cards
const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className={styles.serviceCard}>
      <div
        options={{ max: 45, scale: 1, speed: 450, }}
        className={styles.serviceCardContent}>
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-battleGray text-[16px] leading-[28px]">
        Born and raised in Singapore, I decided to pursue the abundant opportunities in technology in 
        the United States in 2019. I graduated with a Bachelor's degree in Computer Science from
        <a className={styles.link} href='https://www.gatech.edu/'> Georgia Institute of Technology</a>,
        with a concentration in Artificial Intelligence and Human-Computer Interaction.
        As a user-focused developer with a passion for creative design, my long-term aspiration
        is to delve into entrepreneurship to improve how humans and machines interact physically and intellectually.
        <br/><br/>
        In my free time, I love to bake, explore new places, do outdoor activities (hiking, kayaking) and art!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
