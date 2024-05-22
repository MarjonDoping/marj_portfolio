import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import WebDesignHeroPage from './WebDesignHeroPage';
import BentoBox from './BentoBox';
import FigmaBoard from './FigmaBoard';
import WebdesignCards from './WebdesignCards';
import WebdesignAccordion from './WebdesignAccordion';

const WebDesign = () => {
  useEffect(() => {
    // Ensure the page starts at the top when it loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <WebDesignHeroPage />
      <WebdesignCards />
      <FigmaBoard />
      <WebdesignAccordion />
      {/* <BentoBox/> */}
    </>
  );
};

export default WebDesign;
