import React from "react";
import { PrimaryChip } from "../components/Chips";
import { SecondaryButton } from "../components/Button";
import { Link } from "react-router-dom";

const CollaboratePage = () => {
  return (
    <div className="bg-cover bg-center bg-black py-24 px-8 flex flex-col">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col md:flex-row md:justify-between ">
        <div className="md:w-2/3 mb-8 md:mb-0">
          <div className="flex">
            <PrimaryChip>
              <span>Contact Me</span>
            </PrimaryChip>
          </div>
          <div className="flex items-center justify-between pt-7">
            <p className="font-jakarta-sans font-bold text-4xl leading-56">
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
                Ready to Collaborate?{" "}
              </span>
            </p>
          </div>
          <p className="text-white font-jakarta-sans font-normal text-normal leading-56 pt-7">
            Drop me a line and let's discuss how Figma and my design expertise
            can bring your ideas to life!
          </p>
        </div>

        <div className="md:w-1/3 flex justify-center items-center">
          <Link to="/contactPage">
            <SecondaryButton>Collaborate with me</SecondaryButton>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default CollaboratePage;
