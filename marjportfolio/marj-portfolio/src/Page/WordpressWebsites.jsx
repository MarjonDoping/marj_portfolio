import React, { useState } from "react";
import { MainButton, NoGapButton } from "../components/Button";
import { FourChip, PrimaryChip, ThreeChip } from "../components/Chips";

const WordpressWebsite = () => {
  const [currentCategory, setCurrentCategory] = useState("All Projects"); // Default to "All Projects" category

  // Define categories
  const categories = [
    "All Projects",
    "WORDPRESS DEVELOPMENT",
    "ELEMENTOR",
    "OXYGEN",
  ];

  // Sample data for cards
  const yourCardsData = [
    {
      id: 1,
      image: "/images/NMS.webp",
      title: "NEW MEDIA SERVICES",
      description:
        "New Media Services offers outsourced business services utilizing the collaboration of human and AI outsourcing solutions to upgrade your services and day-to-day operations.",
      categories: ["WORDPRESS DEVELOPMENT", "OXYGEN"],
      link: "https://newmediaservices.com.au/",
    },

    {
      id: 2,
      image: "/images/CHEKKEE.webp",
      title: "CHEKKEE",
      description:
        "Providing real-time human and AI-powered content moderation solutions for all kinds of online platforms.",
      categories: ["WORDPRESS DEVELOPMENT", "ELEMENTOR"],
      link: "https://chekkee.com/",
    },

    {
      id: 3,
      image: "/images/supporttxt.webp",
      title: "SUPPORTTXT",
      description:
        "Share stories about members of your community and their accomplishments, challenges, and experiences.",
      categories: ["WORDPRESS DEVELOPMENT", "OXYGEN"],
      link: "https://supporttxt.com/",
    },
    {
      id: 4,
      image: "/images/LCF.webp",
      title: "LIVE CHAT FAIRIES",
      description:
        "We are your one-stop shop for all chat operator services. Live chat operator services in real-time assist you in providing immediate assistance via integrable messaging platforms.",
      categories: ["WORDPRESS DEVELOPMENT", "ELEMENTOR"],
      link: "https://livechatfairies.com/",
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
    <div className="bg-cover bg-center bg-repeat bg-white p-12">
      <div className="flex pt-6 max-w-screen-lg mx-auto px-12">
        <select
          className="bg-white rounded-lg  text-primaryBlack p-4"
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

      <div className="grid grid-cols-2 gap-8 max-w-screen-lg mx-auto py-12 px-12">
        {/* Cards */}
        {filteredCards.map((card) => (
          <div
            className="custom-card bg-white border rounded-lg shadow "
            key={card.id}
          >
            <a href={card.link}>
              <img className="rounded-t-lg" src={card.image} alt="" />
            </a>
            <div className="flex px-5 pt-5">
              {card.categories.map((category, index) => (
                <FourChip key={index}>{category}</FourChip>
              ))}
            </div>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-6 text-2xl tracking-tight font-medium text-black">
                  {card.title}
                </h5>
              </a>
              <p className="mb-6 font-normal text-black ">
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

export default WordpressWebsite;
