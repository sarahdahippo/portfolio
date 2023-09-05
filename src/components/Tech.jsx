import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import { Tooltip } from 'react-tooltip';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>Skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28"
            key={technology.name}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={technology.name}
            data-tooltip-place="top"
          >
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>

      <Tooltip id="my-tooltip"/>
    </>
  );
};

export default SectionWrapper(Tech, '');
