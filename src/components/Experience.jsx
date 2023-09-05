import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { resume } from '../assets';
import { textVariant } from '../utils/motion';

const cardStyling = {
  contentStyle: {
    background: '#eaeaec',
    color: '#292929',
    boxShadow: styles.experienceCardShadow,
  },
  contentArrowStyle: {
    borderRight: '8px solid #eaeaec',
  },
  iconStyle: { background: '#575757' },
}

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    // card styling
    contentStyle={cardStyling.contentStyle}
    contentArrowStyle={cardStyling.contentArrowStyle}
    date={<h2 className="font-bold font-beckman">{experience.date}</h2>}
    iconStyle={cardStyling.iconStyle}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h2 className={styles.experienceCardTitle}>{experience.title}</h2>
      <h3 className={styles.experiencedCardCompany}>{experience.company_name}</h3>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>Professional</p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        {/* work experiences */}
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}

          {/* resume */}
          <VerticalTimelineElement
            contentStyle={{...cardStyling.contentStyle,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={cardStyling.contentArrowStyle}
            iconStyle={cardStyling.iconStyle}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img src={resume} alt="resume" className="w-[60%] h-[60%] object-contain"/>
              </div>
            }>
            <button
              className={styles.experienceResumeButton}
              onClick={() =>
                window.open(
                  // resume link
                  'https://drive.google.com/file/d/1l_Q7fidgbpYjk_cmOhUSdzZt1Y1ZkcOK/view?usp=sharing',
                  '_blank'
                )
              }>
              MY RESUME
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
