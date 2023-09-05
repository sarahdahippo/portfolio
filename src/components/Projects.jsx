import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    // big card when selected, else small card
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`${styles.projectCardAnimation} ${
        active === id ? 'lg:flex- [3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      }`}
      onClick={() => handleClick(id)}>
      
      <div className={styles.projectCard}/>
      <img src={image} alt={name} className={styles.projectCardImage}/>

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3 className={styles.projectInactiveTitle}>{name}</h3>
        </div>
      ) : (
        <>
          <div className={styles.projectActiveCard}>
            <h2 className={styles.projectActiveTitle}>{name}</h2>
            <p className={styles.projectActiveDescription}>{description}</p>
            <button className={styles.projectActiveDemoBtn} onClick={() => window.open(demo, '_blank')}>
              VIEW PROJECT
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Personal</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects</h2>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mx-auto flex flex-col">
        <div className="mt-[48px] flex lg:flex-row flex-col min-h-[70vh] gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
