import React from "react";
import {
  NoOutlinedButton,
  NoOutlinedButton1,
  NoOutlinedButton2,
} from "../components/Button";

const gradientStyle = {
  background:
    "linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)",
};

const WebDesignHeroPage = () => {
  return (
    <div className="bg-black">
      <div
        className="flex max-w-screen-xl flex-wrap justify-center items-center bg-cover bg-black bg-center mx-auto  font-plus jakarta sans "
        style={{ backgroundImage: `url(/images/bg1.png)` }}
      >
        {/* Left Column */}
        <div className="w-1/2  pl-100">
          <div className="px-8">
            <h1 className="text-8xl items-center text-white font-bold mb-4 ">
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
              your <br /> Website website <br /> now on Figma!
            </h1>
          </div>

          <br />

          <img
            src="/images/Multiplayer1.png"
            alt="Background"
            className="absolute inset-60 object-cover h-12 opacity-100 animate-move"
          />
          <div className="flex px-3 py-3 ">
            <img src="/images/Figma.png" alt="Image 1" className="w-16 h-16 " />
          </div>
          <span className="flex px-7 text-gray-200">
            Figma Web Designs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="ml-2"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z"
                fill="#F7B329"
              />
            </svg>
          </span>
        </div>

        {/* Right Column */}
        <div className="w-1/2 " style={gradientStyle}>
          <div className="py-48 ">
            <img
              src="/images/heroImage.png"
              alt="Hero Image"
              className="w-3/4 h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDesignHeroPage;
