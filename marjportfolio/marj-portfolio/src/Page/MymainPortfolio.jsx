import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import { NoOutlinedButton } from '../components/Button';
import SeePortfolio from './SeePortfolio';
import CarouselPage from './CarouselPage';
import PortfolioHeroPage from './PortfolioHeroPage';
import Livepreview from './Livepreview';
import CollaboratePage from './CollaboratePage';
import OffersPage from './OffersPage';
import Footer from './Footer';

const MymainPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <NavBar />
      <PortfolioHeroPage/>
      <Livepreview/>
      <CollaboratePage/>
      <OffersPage/>
      <Footer/>
    </div>
  );
}

export default MymainPortfolio;
