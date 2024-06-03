import React from "react";
import { NoOutlinedButton } from "../components/Button";
import { Link } from "react-router-dom";

const gradientStyle = {
  background:
    "linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)",
};

const PortfolioHeroPage = () => {
  return (
    <div className="bg-black">
      <div
        className="flex max-w-screen-xl flex-wrap py-24 bg-cover bg-black bg-center mx-auto font-plus jakarta sans "
        style={{ backgroundImage: `url(/images/bg1.webp)` }}
      >
        {/* Left Column */}
        <div className="w-1/2 pl-100">
          {/* <img src="/images/Multiplayer1.webp" alt="Background" className="absolute inset-40 object-cover h-12 opacity-100 animate-move" /> */}
          <div className="px-8">
            <h1 className="text-mh1 items-center text-white font-bold mb-4 leading-none">
              Let's{" "}
              <span
                style={{
                  display: "inline-block",
                  backgroundImage:
                    "linear-gradient(227deg, #9DE8EE 2.39%, #1A6350 2.41%, #F829AD 48.1%, #FBF1A0 95.67%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                Build{" "}
              </span>{" "}
              your <br /> website now on <br /> Figma!
            </h1>
          </div>

          <br />

          <NoOutlinedButton>
            <Link to="/webDesign">
            
           
            <span className="flex ">
              Figma Web Designs
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
            </Link>
          </NoOutlinedButton>
        </div>

        {/* Right Column */}
        <div className="flex justify-end items-center w-1/2 p-10">
          {/* Arrow Down SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 80 80"
            fill="none"
            className="w-16 h-16"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40 10.8335C41.3807 10.8335 42.5 11.9528 42.5 13.3335L42.5 60.6313L58.2322 44.8991C59.2085 43.9228 60.7915 43.9228 61.7678 44.8991C62.7441 45.8754 62.7441 47.4583 61.7678 48.4346L41.7678 68.4346C41.2989 68.9034 40.663 69.1668 40 69.1668C39.337 69.1668 38.7011 68.9034 38.2322 68.4346L18.2322 48.4346C17.2559 47.4583 17.2559 45.8754 18.2322 44.8991C19.2085 43.9228 20.7915 43.9228 21.7678 44.8991L37.5 60.6313L37.5 13.3335C37.5 11.9528 38.6193 10.8335 40 10.8335Z"
              fill="#EEEEEE"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeroPage;
