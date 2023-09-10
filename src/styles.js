const styles = {
  navbar: 'sm:px-16 px-8 py-4 w-full overflow-x-hidden; flex items-center fixed top-0 z-20 bg-flashWhite bg-opacity-60',
  navMobile: 'p-4 bg-flashWhite bg-opacity-80 absolute top-0 right-0 z-10 menu rounded-2xl',
  navMobileList: 'list-none flex flex-col items-start justify-end ml-4 mr-4',
  navText: 'text-eerieBlack hover:text-taupe text-[20px] font-medium font-mova uppercase cursor-pointer nav-links mb-2',

  heroBackground: 'absolute top-0 left-0 z-0 h-[100vh] w-full',
  heroBackgroundImg: 'w-full h-full object-cover object-left md:object-center',
  mainContainer: 'relative flex sm:flex-row flex-col w-full h-screen mx-auto sm:bg-hero bg-hero-mobile overflow-hidden',
  heroLeft: `absolute inset-0 top-[150px] md:top-[200px] sm:px-16 px-8 max-w-7xl mx-auto flex flex-row items-start justify-between gap-4`,
  heroHeadText: 'font-black text-richBlack font-poppins uppercase sm:text-[60px] xs:text-[48px] text-[40px]',
  heroName: 'text-armyGreen sm:text-[80px] text-[48px] font-mova font-extrabold uppercase',
  heroSubText: 'text-eerieBlack font-medium xs:text-[20px] text-[16px]',
  heroPortrait: 'absolute bottom-0 right-0 h-[50vh] xs:h-[60vh] sm:h-[70vh] md:h-[80vh]',

  animatedScroller: 'w-[36px] h-[60px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2',
  
  serviceCard: 'xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card',
  serviceCardContent: 'bg-jetLight rounded-[20px] py-4 px-12 min-h-[280px] flex justify-evenly items-center flex-col',

  sectionHeadText: 'text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionHeadTextLight: 'text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionSubText: 'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',
  sectionSubTextLight: 'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',

  sectionWrapper: 'sm:px-20 px-12 sm:py-16 py-12 max-w-7xl mx-auto relative z-0',

  link: 'text-blue-600 hover:text-blue-800 visited:text-purple-600',

  projectCardAnimation: 'relative flex items-center justify-center min-w-[170px] h-[420px] cursor-pointer card-shadow',
  projectCard: 'absolute top-0 left-0 z-10 bg-jetLight h-full w-full opacity-[0.5] rounded-[24px]',
  projectCardImage: 'absolute w-full h-full object-cover rounded-[24px]',
  projectInactiveTitle: 'font-extrabold font-beckman uppercase w-[200px] h-[32px] whitespace-nowrap sm:text-[28px] text-[18px] text-timberWolf\
    tracking-[1px] absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0] leading-none z-20',
  projectActiveCard: 'absolute bottom-0 p-8 w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] z-20',
  projectActiveTitle: 'font-bold sm:text-[28px] text-[20px] text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]',
  projectActiveDescription: 'text-silver sm:text-[14px] text-[12px] max-w-3xl sm:leading-[24px] leading-[18px] font-poppins tracking-[1px]',
  projectActiveDemoBtn: 'justify-between sm:text-[14px] text-[12px] text-timberWolf font-bold font-beckman items-center p-2\
    whitespace-nowrap rounded-[12px] glassmorphism mt-[16px] hover:bg-battleGray\
    hover:text-eerieBlack transition duration-[0.2s] ease-in-out',

  experienceCardShadow: 'rgba(0, 0, 0, 0.2) 0px 12px 16px -4px, rgba(0, 0, 0, 0.2) 0px 4px 8px -4px',
  experienceCardTitle: 'font-overcameBold tracking-[1px]',
  experiencedCardCompany: 'text-dim font-beckman mt-4',
  experienceResumeButton: 'flex justify-between sm:text-[16px] text-[12px] text-timberWolf font-bold font-beckman items-center whitespace-nowrap\
    p-4 rounded-[12px] bg-jetLight hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out',

  contactCard: 'xl:flex-row flex-col-reverse flex gap-8 overflow-hidden',
  contactInput: 'bg-eerieBlack p-4 placeholder:text-taupe text-timberWolf rounded-lg outline-none border-none font-medium',
  contactSubmitButton: 'flex justify-center gap-2 text-[16px] text-timberWolf font-bold font-beckman items-center p-4\
    whitespace-nowrap rounded-[12px] bg-night hover:bg-battleGray hover:text-eerieBlack transition duration-[0.2s] ease-in-out',
  contactSubmitIcon: 'contact-btn w-[24px] h-[24px] object-contain',

  artMarquee: 'w-40 h-40 sm:w-60 sm:h-60 p-1 mt-4'
};

export { styles };
