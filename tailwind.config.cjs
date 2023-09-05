/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        flashWhite: '#f4f4f6',
        timberWolf: '#d4d4d8',
        taupe: '#9999a1',
        silver: '#d6d6d6',
        dim: '#66666e',
        battleGray: '#858585',
        french: '#b5b5ba',
        night: '#141414',
        jet: '#292929',
        jetLight: '#333333',
        richBlack: '#2e2e2e',
        eerieBlack: '#1f1f1f',
        armyGreen: '#4A5110'
      },
      screens: {
        xs: '450px',
        sm: '640px',
        md: '768px',
        xmd: '900px',
        lg: '1025px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1800px',
      },
      backgroundImage: {
        about: 'linear-gradient(165deg, rgba(244,244,246,1) 100%, rgba(122,122,122,1) 100%)',
        experience: "linear-gradient(135deg, rgba(244,244,246,0.7) 60%, rgba(10,10,10,0.2) 100%),url('/src/assets/backgrounds/sunset.jpg')",
        
        // white | black overlay on home page
        hero: 'linear-gradient(135deg, rgba(244,244,246,0.6) 60%, rgba(10,10,10,0.6) 60%)',
        'hero-mobile': 'linear-gradient(135deg, rgba(244,244,246,0.6) 60%, rgba(10,10,10,0.6) 60%)',
        tech: "linear-gradient(165deg, rgba(20,20,20,0.7) 100%, rgba(109,109,116,0.7) 100%), url('/src/assets/backgrounds/singapore.jpg')",
      },
      fontFamily: {
        beckman: ['Beckman'],
        mova: ['Mova'],
        overcameBold: ['Overcame Bold'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
