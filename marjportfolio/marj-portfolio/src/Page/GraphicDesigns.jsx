import React, { useEffect } from "react";
import CollaboratePage from "./CollaboratePage";
import NavBar from "../components/NavBar";
import WorksPage from "./WorksPage";
import HeroPage from "./HeroPage";
import HeroPageGraphics from "./HeroPageGraphics";
import WorksPage2 from "./WorksPage2";
import OffersPage from "./OffersPage";
import Footer from "./Footer";

const GraphicDesigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
    <NavBar />
    <HeroPageGraphics/>
    <CollaboratePage />
    <OffersPage/>
    <Footer/>
  </div>
  );
}

export default GraphicDesigns;

