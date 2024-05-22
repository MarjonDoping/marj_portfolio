import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroPage from './HeroPage';
import SeePortfolio from './SeePortfolio';
import Partners from './Partners';
import CarouselPage from './CarouselPage';
import OffersPage from './OffersPage';
import MessagePage from './MessagePage';
import WorksPage from './WorksPage';
import CollaboratePage from './CollaboratePage';
import FAQ from './FAQ';
import Testimonials from './Testimonial';
import Footer from './Footer';
import PartnersLogos from './LogosPartners';

const MainPageholder = () => {


  return (
    <>
      <div className="font-jakarta">
        <NavBar />
        <HeroPage />
        <SeePortfolio />
        <Partners />
        <PartnersLogos />
        <CarouselPage />
        <OffersPage />
        <MessagePage />
        <WorksPage />
        <CollaboratePage />
        <FAQ />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default MainPageholder;
