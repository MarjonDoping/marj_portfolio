import React, { useState } from "react";
import { MainButton, NoGapButton } from "../components/Button";
import { PrimaryChip, ThreeChip } from "../components/Chips";

const Livepreview = () => {
  const [currentCategory, setCurrentCategory] = useState("All Projects"); // Default to "All Projects" category

  // Define categories
  const categories = ["All Projects", "WEB DEVELOPMENT", "DESIGN", "REACT TAILWIND"];

  // Sample data for cards
  const yourCardsData = [
    {
      id: 1,
      image: "/images/nft.png",
      title: "NFT Landing Page",
      description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      categories: ["WEB DEVELOPMENT", "DESIGN", "REACT TAILWIND"]
    },
    {
      id: 2,
      image: "/images/burger.png",
      title: "Burger Landing Page",
      description: "Description for burger landing page",
      categories: ["WEB DEVELOPMENT", "DESIGN"]
    },
    {
      id: 3,
      image: "/images/bike.png",
      title: "Bike Landing Page",
      description: "Description for bike landing page",
      categories: ["WEB DEVELOPMENT"]
    },
    {
      id: 4,
      image: "/images/cars.png",
      title: "Car Landing Page",
      description: "Description for car landing page",
      categories: ["DESIGN"]
    }
  ];

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setCurrentCategory(event.target.value);
  };

  // Filtered cards based on the current category
  const filteredCards = currentCategory === "All Projects"
    ? yourCardsData // Show All Projects cards if currentCategory is "All Projects"
    : yourCardsData.filter(card => card.categories.includes(currentCategory));

  return (
    <div className="bg-cover bg-center bg-repeat bg-primaryBlack">
      {/* Dropdown for filtering */}
      <div className="flex  pt-6 max-w-screen-xl mx-auto px-12">
      <select
          className="  bg-primaryBlack rounded-lg  border-gray-700 text-gray-200 py-3 px-4 pr-8   focus:outline-none "
          value={currentCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-center items-center ">
        {/* Your content */}
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-screen-xl mx-auto py-12 px-12">
        {/* Cards */}
        {filteredCards.map((card) => (
          <div className="custom-card bg-secondaryBlack border rounded-lg shadow dark:bg-gray-800 dark:border-gray-800" key={card.id}>
            <a href="#">
              <img className="rounded-t-lg" src={card.image} alt="" />
            </a>
            <div className="flex px-5 pt-5">
              {card.categories.map((category, index) => (
                <ThreeChip key={index}>{category}</ThreeChip>
              ))}
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-6 text-2xl tracking-tight text-gray-100 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-6 font-normal text-gray-100 dark:text-gray-400">
                {card.description}
              </p>
              <NoGapButton>
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
              </NoGapButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Livepreview;
