import React from "react";
import {
  MainButton,
  NoOutlinedButton,
  SecondaryButton,
} from "../components/Button";
import { PrimaryChip } from "../components/Chips";
import { MainCard, MainCard1, MainCard3 } from "../components/Cards";
import { Link } from "react-router-dom";

const OffersPage = () => {
  return (
    <>
      <div className="bg-cover bg-center py-8 sm:py-12 md:py-16 lg:py-24">
        <div >
          <div className="flex justify-center items-center">
            <PrimaryChip>
              <span className="">Web Design</span>
            </PrimaryChip>
          </div>

          <h1 className=" text-3xl font-bold mb-4 text-center p-4 text-black">
            What I offer?
          </h1>
          <p className="text-black mb-8 text-center max-w-screen-lg mx-auto">
            With expertise in web design, development, graphic design, SEO,
            social media marketing, and project management, I'm here to offer
            customized solutions to meet your requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 items-center mx-auto p-4">
            <MainCard className="mb-4 sm:mb-0 sm:mr-4 lg:mr-8">
              <Link to="/webDesign">
                <span>
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
            </MainCard>

            <MainCard1 className="mb-4 sm:mb-0 sm:mr-4 lg:mr-8">
              <span>
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
            </MainCard1>

            <MainCard3>
              <span>
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
            </MainCard3>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersPage;
