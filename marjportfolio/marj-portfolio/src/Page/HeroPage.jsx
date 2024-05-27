import React from "react";
import {
  MainButton,
  NoOutlinedButton,
  SecondaryButton,
} from "../components/Button";
import * as SolarIconSet from "solar-icon-set";
import { Link } from "react-router-dom";

const HeroPage = () => {
  return (
    <div
      className=" font-jakarta flex items-center justify-center h-screen bg-cover bg-center font-plus jakarta sans"
      style={{ backgroundImage: `url(/images/bg.png)` }}
    >
      <div className="text-white text-center font-jakarta">
        <img
          src="/images/Multiplayer1.png"
          alt="Background"
          className="absolute inset-60 object-cover h-12 opacity-100 animate-move"
        />

        <div className="text-center">
          <h1 className="text-mh5 font-bold mb-4">
            Need a <br />
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
              Website that
            </span>
            <br /> <span>wows?</span>
          </h1>
        </div>
        <img
          src="/images/Multiplayer.png"
          alt="Background"
          className="absolute inset-105 object-cover h-12 opacity-100 animate-slide-out-right"
        />

        <p className="text-lg mb-8">Lets do this.</p>

        <div className="flex items-center justify-center">
          <img
            src="/images/Figma.png"
            alt="Image 1"
            className="w-16 h-16 mr-4"
          />
          <img
            src="/images/WordPress logo.png"
            alt="Image 2"
            className="w-16 h-16"
          />
        </div>
        <div className="flex items-center justify-center mt-10 mx-4">
          <Link to="/webDesign">
            <NoOutlinedButton>
              <span className="flex items-center">
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.5 7.25C9.08579 7.25 8.75 6.91421 8.75 6.5C8.75 6.08579 9.08579 5.75 9.5 5.75H18.5C18.9142 5.75 19.25 6.08579 19.25 6.5V15.5C19.25 15.9142 18.9142 16.25 18.5 16.25C18.0858 16.25 17.75 15.9142 17.75 15.5V8.31066L7.03033 19.0303C6.73744 19.3232 6.26256 19.3232 5.96967 19.0303C5.67678 18.7374 5.67678 18.2626 5.96967 17.9697L16.6893 7.25H9.5Z"
                    fill="#F7B329"
                  />
                </svg>
              </span>
            </NoOutlinedButton> 
          </Link>

          <Link to="/Wordpress">
          <NoOutlinedButton>
            <span className="flex items-center">
              Wordpress Developer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="ml-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 7.25C9.08579 7.25 8.75 6.91421 8.75 6.5C8.75 6.08579 9.08579 5.75 9.5 5.75H18.5C18.9142 5.75 19.25 6.08579 19.25 6.5V15.5C19.25 15.9142 18.9142 16.25 18.5 16.25C18.0858 16.25 17.75 15.9142 17.75 15.5V8.31066L7.03033 19.0303C6.73744 19.3232 6.26256 19.3232 5.96967 19.0303C5.67678 18.7374 5.67678 18.2626 5.96967 17.9697L16.6893 7.25H9.5Z"
                  fill="#F7B329"
                />
              </svg>
            </span>
          </NoOutlinedButton>
          </Link>

          <NoOutlinedButton>
            <span className="flex items-center">
              Graphic Designer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className="ml-2"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.5 7.25C9.08579 7.25 8.75 6.91421 8.75 6.5C8.75 6.08579 9.08579 5.75 9.5 5.75H18.5C18.9142 5.75 19.25 6.08579 19.25 6.5V15.5C19.25 15.9142 18.9142 16.25 18.5 16.25C18.0858 16.25 17.75 15.9142 17.75 15.5V8.31066L7.03033 19.0303C6.73744 19.3232 6.26256 19.3232 5.96967 19.0303C5.67678 18.7374 5.67678 18.2626 5.96967 17.9697L16.6893 7.25H9.5Z"
                  fill="#F7B329"
                />
              </svg>
            </span>
          </NoOutlinedButton>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
