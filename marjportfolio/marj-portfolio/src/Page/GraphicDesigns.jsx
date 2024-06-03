import React from "react";
import CollaboratePage from "./CollaboratePage";
import NavBar from "../components/NavBar";
import WorksPage from "./WorksPage";
import HeroPage from "./HeroPage";
import HeroPageGraphics from "./HeroPageGraphics";
import WorksPage2 from "./WorksPage2";
import OffersPage from "./OffersPage";
import Footer from "./Footer";

const GraphicDesigns = () => (
  <div>
    <NavBar />
    <HeroPageGraphics/>
    <CollaboratePage />
    <OffersPage/>
    <Footer/>
  </div>
);

export default GraphicDesigns;
