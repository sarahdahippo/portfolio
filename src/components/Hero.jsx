import { motion } from 'framer-motion';
import { styles } from '../styles';
import { sarah, goldenGateBridge } from '../assets';

const Hero = () => {
  return (
    <>
      {/* background */}
      <div className={styles.heroBackground}>
        <img
          src={goldenGateBridge}
          alt="golden gate bridge"
          className={styles.heroBackgroundImg}
        />
      </div>

      <section
        className={styles.mainContainer}>

        {/* right component -- portrait */}
        <div>
          <img
            className={styles.heroPortrait}
            src={sarah}
            alt="sarah"
          />
        </div>

        {/* left components */}
        <div
          className={styles.heroLeft}>

          {/* gradient tail decor */}
          <div className="flex flex-col justify-center items-center mt-4 sm:hidden">
            <div className="w-4 h-4 rounded-full bg-[#0a0a0a]" />
            <div className="w-1 h-80 bw-gradient" />
          </div>

          {/* title & subtitle */}
          <div className="ml-4">
            <h1
              className={`${styles.heroHeadText}`}>
              Hello, I'm <span className={styles.heroName}>Sarah.</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              A software engineer who values creative expression.
            </p>
          </div>

          {/* ensures text doesn't eat into dark overlay */}
          <div className="right-0 w-[50vw]" />
        </div>

        {/* middle -- animated scroll button (click to scroll to About) */}
        <div
          className="absolute bottom-12 w-full flex justify-center items-center"
          style={{cursor:'pointer'}}>
          <a href="#about">
            <div
              className={styles.animatedScroller}>
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                className="w-4 h-4 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
