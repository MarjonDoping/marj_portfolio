import React, { useEffect } from "react";
import WordpressHeroPage from "./WordpressHeroPage";
import NavBar from "../components/NavBar";
import WordpressWebsite from "./WordpressWebsites";
import OffersPage from "./OffersPage";
import Footer from "./Footer";
import WebdesignCards from "./WebdesignCards";
import SeePortfolio from "./SeePortfolio";

const WordpressPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []);

  return (
    <div>
      <NavBar />
      <WordpressHeroPage />
      <WordpressWebsite />
      <OffersPage />
      <Footer />
    </div>
  );
};

export default WordpressPage;
