import React from "react";
import {
  MainButton,
  NoOutlinedButton,
  NoOutlinedButton1,
  NoOutlinedButton2,
} from "../components/Button";
import { Link } from "react-router-dom";

const WorksPage = () => {
  const topPartners = [
    { src: "/images/banking.png", alt: "Top Partner 1" },
    { src: "/images/bike.png", alt: "Top Partner 2" },
    { src: "/images/rhu.png", alt: "Top Partner 3" },
    { src: "/images/nft.png", alt: "Top Partner 1" },
    { src: "/images/cozy.png", alt: "Top Partner 2" },
    { src: "/images/bike.png", alt: "Top Partner 2" },
    { src: "/images/rhu.png", alt: "Top Partner 3" },
    { src: "/images/banking.png", alt: "Top Partner 1" },
    { src: "/images/cozy.png", alt: "Top Partner 2" },
    { src: "/images/bike.png", alt: "Top Partner 2" },
    { src: "/images/nft.png", alt: "Top Partner 3" },
  ];

  const bottomPartners = [
    { src: "/images/burgers.png", alt: "Bottom Partner 1" },
    { src: "/images/banking1.png", alt: "Bottom Partner 2" },
    { src: "/images/ebikes.png", alt: "Bottom Partner 1" },
    { src: "/images/banking1.png", alt: "Bottom Partner 2" },
    { src: "/images/burgers.png", alt: "Bottom Partner 1" },
    { src: "/images/banking1.png", alt: "Bottom Partner 2" },
    { src: "/images/burgers.png", alt: "Bottom Partner 1" },
    { src: "/images/ebikes.png", alt: "Bottom Partner 1" },
    { src: "/images/banking1.png", alt: "Bottom Partner 2" },
    { src: "/images/ebikes.png", alt: "Bottom Partner 1" },
    { src: "/images/banking1.png", alt: "Bottom Partner 2" },
    { src: "/images/burgers.png", alt: "Bottom Partner 1" },
    { src: "/images/ebikes.png", alt: "Bottom Partner 1" },
  ];

  const endPartners = [
    { src: "/images/superare.png", alt: "Top Partner 1" },
    { src: "/images/blucar.png", alt: "Top Partner 2" },
    { src: "/images/ebike.png", alt: "Top Partner 3" },
    { src: "/images/superare.png", alt: "Top Partner 1" },
    { src: "/images/blucar.png", alt: "Top Partner 2" },
    { src: "/images/ebike.png", alt: "Top Partner 3" },
    { src: "/images/superare.png", alt: "Top Partner 1" },
    { src: "/images/blucar.png", alt: "Top Partner 2" },
    { src: "/images/ebike.png", alt: "Top Partner 3" },
    { src: "/images/superare.png", alt: "Top Partner 1" },
    { src: "/images/blucar.png", alt: "Top Partner 2" },
  ];

  return (
    <div className="relative">
      {/* Absolute image covering the page */}
      <img
        src="/images/absolute.png"
        alt="Absolute Image"
        className="absolute inset-0 w-full h-full object-cover z-50"
      />

      <div className="flex flex-col items-center justify-center p-5 relative z-20 animate-scroll overflow-x-hidden ">
        {/* Top Section */}
        <div className="flex space-x-16 overflow-x-scroll-reverse mt-8">
          <div className="partners-container">
            {topPartners.map((partner, index) => (
              <div
                key={index}
                className="w-[400px] overflow-hidden self-center max-w-full my-auto mx-4"
              >
                <img
                  loading="lazy"
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with Different Scrolling Direction */}
        <div className="flex space-x-16 overflow-x-scroll mt-8">
          <div className="partners-container1">
            {bottomPartners.map((partner, index) => (
              <div
                key={index}
                className="w-[400px] overflow-hidden self-center max-w-full my-auto mx-4"
              >
                <img
                  loading="lazy"
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex space-x-16 overflow-x-scroll-reverse mt-8">
          <div className="partners-container">
            {endPartners.map((partner, index) => (
              <div
                key={index}
                className="w-[400px] overflow-hidden self-center max-w-full my-auto mx-4"
              >
                <img
                  loading="lazy"
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Absolute button at the center bottom */}
      <Link to="/portfolio">
     
      <div className="absolute inset-0 flex items-center justify-center z-50">
        <div className="absolute flex items-center justify-center bottom-20 ">
   
          <NoOutlinedButton2>
            <span className="flex items-center text-7xl underline italic ">
              Portfolio
            
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
          </NoOutlinedButton2>
         
        </div>
      </div>
      </Link>
    </div>
  );
};

export default WorksPage;
