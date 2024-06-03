import React from "react";
import { Link } from "react-router-dom";
import { NoOutlinedButton2 } from "../components/Button";

const WorksPage = () => {
  const topPartners = [
    { src: "/images/banking.webp", alt: "Top Partner 1" },
    { src: "/images/bike.webp", alt: "Top Partner 2" },
    { src: "/images/rhu.webp", alt: "Top Partner 3" },
    { src: "/images/another-partner.webp", alt: "Top Partner 4" },
    { src: "/images/yet-another-partner.webp", alt: "Top Partner 5" },
  ];

  const bottomPartners = [
    { src: "/images/burgers.webp", alt: "Bottom Partner 1" },
    { src: "/images/banking1.webp", alt: "Bottom Partner 2" },
    { src: "/images/ebikes.webp", alt: "Bottom Partner 3" },
    { src: "/images/more-partner.webp", alt: "Bottom Partner 4" },
    { src: "/images/extra-partner.webp", alt: "Bottom Partner 5" },
  ];

  const endPartners = [
    { src: "/images/superare.webp", alt: "End Partner 1" },
    { src: "/images/blucar.webp", alt: "End Partner 2" },
    { src: "/images/ebike.webp", alt: "End Partner 3" },
    { src: "/images/additional-partner.webp", alt: "End Partner 4" },
    { src: "/images/last-partner.webp", alt: "End Partner 5" },
  ];

  return (
    <div className="relative">
      {/* Absolute image covering the page */}
      <img
        src="/images/absolute.webp"
        alt="Absolute Image"
        className="absolute inset-0 w-full h-full object-cover z-50"
      />

      <div className="flex flex-col items-center justify-center p-5 relative z-20 overflow-hidden ">
        {/* Top Section */}
        <div className="grid grid-cols-3 gap-16 mt-8">
          {topPartners.map((partner, index) => (
            <div key={index} className={`partner-column-${index}`}>
              <img
                loading="lazy"
                src={partner.src}
                alt={partner.alt}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-16 mt-8">
          {bottomPartners.map((partner, index) => (
            <div key={index} className={`partner-column-${index}`}>
              <img
                loading="lazy"
                src={partner.src}
                alt={partner.alt}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* End Section */}
        <div className="grid grid-cols-3 gap-16 mt-8">
          {endPartners.map((partner, index) => (
            <div key={index} className={`partner-column-${index}`}>
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

      {/* Absolute button at the center bottom */}
      <Link to="/portfolio">
        <div className="absolute inset-0 flex items-center justify-center z-50">
          <div className="absolute flex items-center justify-center bottom-20">
            <NoOutlinedButton2>
              <span className="flex items-center text-7xl underline italic">
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
