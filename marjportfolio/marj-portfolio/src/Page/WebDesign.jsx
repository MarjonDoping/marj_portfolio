import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import WebDesignHeroPage from './WebDesignHeroPage';
import BentoBox from './BentoBox';
import FigmaBoard from './FigmaBoard';
import WebdesignCards from './WebdesignCards';
import WebdesignAccordion from './WebdesignAccordion';
import CollaboratePage from './CollaboratePage';
import Footer from './Footer';
import OffersPage from './OffersPage';
import Livepreview from './Livepreview';

const WebDesign = () => {
  useEffect(() => {
    // Ensure the page starts at the top when it loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <WebDesignHeroPage />
      <Livepreview/>
      <WebdesignCards />
      <FigmaBoard />
      <WebdesignAccordion />
      <CollaboratePage/>
      <OffersPage/>
      <Footer/>
      {/* <BentoBox/> */}
    </>
  );
};

export default WebDesign;
