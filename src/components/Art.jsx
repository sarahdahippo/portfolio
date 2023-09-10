import React from 'react';
import Marquee from "react-fast-marquee";
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { gallery1, gallery2, gallery3 } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Art = () => {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Interests</p>
          <h2 className={styles.sectionHeadTextLight}>Art</h2>
        </motion.div>
  
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-battleGray text-[16px] leading-[28px]">
          Recently, I have been more into UI design (websites, mobile apps), and incorporating my technical skills
          to explore technologies like generative AI and augmented reality art.
          <br/><br/>
          However, I still enjoy doing traditional art and experimenting with different mediums.
          My Instagram <a className={styles.link} href='https://www.instagram.com/eurekapalette/'> @eurekapalette </a>
          showcases some of my work, and have given me the business opportunity to collaborate with companies such as
          Zenpop Japan, Sudio Sweden, Phomemo, Pilot Pen, Archer & Olive, Artistro, Notebook Therapy, Sangria Pens, and Arteza.
        </motion.p>

        <Marquee pauseOnHover>
          {gallery1.map((art, index) => (
            <img src={art} alt={`art-${index}`} className={styles.artMarquee} />
          ))}
        </Marquee>

        <Marquee pauseOnHover>
        {gallery2.map((art, index) => (
            <img src={art} alt={`art-${index}`} className={styles.artMarquee} />
        ))}
        </Marquee>

        <Marquee pauseOnHover>
        {gallery3.map((art, index) => (
            <img src={art} alt={`art-${index}`} className={styles.artMarquee} />
        ))}
        </Marquee>
      </div>
    );
  };
  
  export default SectionWrapper(Art, 'art');