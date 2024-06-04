import React from "react";
import { Link } from "react-router-dom";
import { NoOutlinedButton } from "../components/Button";

const HeroPageGraphics = () => {
  return (
    <div className="max-w-screen-m bg-primaryBlack p-24 ">
      <div className="bg-primaryBlack ">
        <div className="max-w-screen-lg mx-auto p-4">
          <div className="flex items-center justify-between">
            <div className="w-full pr-4">
              <h2 className="text-mh4 font-medium text-white">
                Elevate Your Visual Identity with my Expert Graphic Design!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-around items-center mt-8">
        <Link to="https://newmediaservices.com.au/blog/" className="custom-card flex-1 max-w-xs md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="/images/NMS.webp" alt="Card image" />
          <div className="px-4 py-4 flex flex-col justify-between items-center bg-secondaryBlack">
            <div className="px-6 py-4 flex flex-col justify-between items-center bg-secondaryBlack">
              <div className=" flex items-center justify-end ">
                <p className="text-white text-base justify-end items-center mr-8">
                  New Media Services Banners and Cover Pages for the posts to publish
                </p>
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
              </div>
            </div>
          </div>
        </Link>

        <Link to="https://chekkee.com/blog/" className="custom-card flex-1 max-w-xs md:max-w-md lg:max-w-lg rounded overflow-hidden shadow-lg m-4">
          <img className="w-full" src="/images/CHEKKEE.webp" alt="Card image" />
          <div className="px-4 py-4 flex flex-col justify-between items-center bg-secondaryBlack">
            <div className="px-6 py-4 flex flex-col justify-between items-center bg-secondaryBlack">
              <div className=" flex items-center justify-end ">
                <p className="text-white text-base justify-end items-center mr-8">
                  Chekkee Banners and Cover Pages for the posts to publish
                </p>
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
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeroPageGraphics;
