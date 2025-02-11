import React, { useState } from "react";
import { MainButton, NoGapButton } from "../components/Button";
import { PrimaryChip, ThreeChip } from "../components/Chips";

const Livepreview = () => {
  const [currentCategory, setCurrentCategory] = useState("All Projects"); // Default to "All Projects" category

  // Define categories
  const categories = [
    "All Projects",
    "WEB DEVELOPMENT",
    "DESIGN",
    "FIGMA",
  ];

  // Sample data for cards
  const yourCardsData = [

    {
      id: 0,
      image: "/images/NMS.png",
      title: "NMS Services (Light)",
      description: "Explore our suite of AI-powered tools designed to enhance productivity, improve decision-making",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://newmediaservices.com.au"
    },
    {
      id: 1,
      image: "/images/LOAD.webp",
      title: "LOAD AND TILT Towing Service",
      description: "Each service—whether it’s local and long-distance towing recovery—is presented with engaging visuals and user-friendly navigation. ",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://dmtiltnload.ca/"
    },
   
    {
      id: 2,
      image: "/images/Ballertube.webp",
      title: "BallerTube",
      description: "Watch Sports and Action videos and livestream from this website application",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://www.ballertube.com/"
    },
   
    {
      id: 3,
      image: "/images/towing.webp",
      title: "Canadian Towing Ottawa",
      description: "Local and Long-Distance Towing: Transporting vehicles within cities and across provinces.",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://canadiantowingottawa.com/"
    },

    {
      id: 4,
      image: "/images/ref.webp",
      title: "REF Ottawa Millwork",
      description: "Millwork services website showcases the artistry and craftsmanship behind custom wood products.",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://ottawamillwork.ca/"
    },

    {
      id: 5,
      image: "/images/Marj-Ai.webp",
      title: "Smart AI landing Page (Light)",
      description: "Explore our suite of AI-powered tools designed to enhance productivity, improve decision-making",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://smartai-six.vercel.app/"
    },

    {
      id: 6,
      image: "/images/Marj-LoyaltyTXT.webp",
      title: "LoyaltyTXT landing Page",
      description: "Explore our suite of LoyaltyTXT designed for broadcasting application features",
      categories: [ "DESIGN" ,"FIGMA"],
      link: "https://www.behance.net/gallery/200921415/Loyalty-TXT-Landing-Page-Redesign"
    },

    {
      id: 7,
      image: "/images/marj-ai2.webp",
      title: "Smart AI Landing Page",
      description: "Our cutting-edge artificial intelligence solutions empower businesses to transform data into actionable insights, streamline operations.",
      categories: ["WEB DEVELOPMENT", "DESIGN" ,"FIGMA"],
      link: "https://www.behance.net/gallery/199831011/AI-Landing-Page"
    },

    {
      id: 8,
      image: "/images/banking.webp",
      title: "Banking Landing Page",
      description: "Discover a range of personalized banking solutions tailored to meet your needs, from  accounts to loans opportunities.",
      categories: ["WEB DEVELOPMENT", "DESIGN" ,"FIGMA"],
      link: "https://www.behance.net/gallery/196307891/Bank-Landing-Page"
    },


    {
      id: 9,
      image: "/images/bike.webp",
      title: "Bike Landing Page",
      description: "Explore our collection of high-performance, durable, and stylish bikes, crafted to deliver an exceptional riding experience.",
      categories: ["WEB DEVELOPMENT", "DESIGN" ,"FIGMA"],
      link: "https://www.behance.net/gallery/193952471/E-Bike-Landing-page"
    },
    {
      id: 10,
      image: "/images/nft.webp",
      title: "NFT Landing Page",
      description:
        "Discover, buy, and sell NFTs from a diverse range of artists and creators, all secured on the blockchain.",
      categories: ["WEB DEVELOPMENT", "DESIGN", "REACT TAILWIND"],
      link: "https://www.behance.net/gallery/193950225/NFT-Website"
    },
    {
      id: 11,
      image: "/images/burger.webp",
      title: "Burger Landing Page",
      description: "Whether you crave classic cheeseburgers or adventurous gourmet creations, we have something to satisfy every palate.",
      categories: ["WEB DEVELOPMENT", "DESIGN"],
      link: "https://www.behance.net/gallery/193952259/Burger-Website-Landing-Page"
    },
    {
      id: 12,
      image: "/images/Recycle.webp",
      title: "Recycle Landing Page",
      description: "Discover our comprehensive recycling services, learn how to recycle various materials, and find tips on living a more eco-friendly lifestyle.",
      categories: ["WEB DEVELOPMENT", "DESIGN"],
      link: "https://www.behance.net/gallery/176021231/Recycling-Web-Design"
    },
   
    {
      id: 13,
      image: "/images/rhu.webp",
      title: "RHU Landing Page",
      description: "Explore our state-of-the-art facilities, comprehensive medical services, and patient-centered approach. Your health and well-being are our top priorities.",
      categories: ["WEB DEVELOPMENT", "DESIGN"],
      link: "https://www.behance.net/gallery/175520345/Website-Design-Health-System"
    },

    {
      id: 14,
      image: "/images/cletos.webp",
      title: "Bakeshop Landing Page",
      description: "Indulge in our freshly baked goods, crafted with love and the finest ingredients. From decadent cakes and pastries to artisan bread and cookies.",
      categories: ["WEB DEVELOPMENT", "DESIGN"],
      link: "https://www.behance.net/gallery/175915861/Bakeshop-Web-Design"
    },
    {
      id: 15,
      image: "/images/sales.webp",
      title: "E-commerce Landing Page",
      description: "rom decadent cakes and pastries to artisan bread and cookies, our delightful creations are perfect for any occasion",
      categories: ["DESIGN"],
      link: "https://www.behance.net/gallery/176024297/E-Commerce-Web-Design"
    },

   
  ];

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setCurrentCategory(event.target.value);
  };

  // Filtered cards based on the current category
  const filteredCards =
    currentCategory === "All Projects"
      ? yourCardsData 
      : yourCardsData.filter((card) =>
          card.categories.includes(currentCategory)
        );

  return (
    <div className="bg-cover bg-center bg-repeat bg-primaryBlack">

      <div className="flex pt-6 max-w-screen-lg mx-auto px-12">
        <select
          className="bg-primaryBlack rounded-lg border-gray-700 text-gray-200 p-4"
          value={currentCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-center items-center ">
        {/* Your content */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-screen-lg mx-auto py-8 px-8">
        {/* Cards */}
        {filteredCards.map((card) => (
          <div
            className="custom-card bg-secondaryBlack border rounded-lg shadow "
            key={card.id}
          >
            <a href={card.link}>
              <img className="rounded-t-lg" src={card.image} alt="" />
            </a>
            <div className="flex px-5 pt-5">
              {card.categories.map((category, index) => (
                <ThreeChip key={index}>{category}</ThreeChip>
              ))}
            </div>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-6 text-2xl tracking-tight text-gray-100">
                  {card.title}
                </h5>
              </a>
              <p className="mb-6 font-normal text-gray-100 ">
                {card.description}
              </p>
              <a href={card.link}>
                {/* <NoGapButton>
                  <span className="flex items-center">
                    Live preview
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      className="ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5 7.25C9.08579 7.25 8.75 6.91421 8.75 6.5C8.75 6.08579 9.08579 5.75 9.5 5.75H18.5C18.9142 5.75 19.25 6.08579 19.25 6.5V15.5C19.25 15.9142 18.9142 16.25 18.5 16.25C18.0858 16.25 17.75 15.9142 17.75 15.5V8.31066L7.03033 19.0303C6.73744 19.3232 6.26256 19.3232 5.96967 19.0303C5.67678 18.7374 5.67678 18.2626 5.96967 17.9697L16.6893 7.25H9.5Z"
                        fill="#F7B329"
                      />
                    </svg>
                  </span>
                </NoGapButton> */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livepreview;
