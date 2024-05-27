import React from "react";
import ContactHeroPage from "./ContactHeroPage";
import NavBar from "../components/NavBar";
import OffersPage from "./OffersPage";
import PartnersLogos from "./LogosPartners";
import Partners from "./Partners";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div>
      <NavBar />
      <ContactHeroPage />
      <Partners/>
      <PartnersLogos/>
      <OffersPage/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
