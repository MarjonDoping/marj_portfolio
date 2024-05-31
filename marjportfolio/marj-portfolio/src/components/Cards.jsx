import React from "react";
import { MainButton, NoOutlinedButton, NoOutlinedButton1, NoOutlinedButton2 } from "./Button";
import { PrimaryChip, PrimaryChip1, PrimaryChip2, PrimaryChip3 } from "../components/Chips";
import { Link } from "react-router-dom";

export const MainCard = ({ title, subheader }) => {
  return (
    <div className="custom-card max-w-sm p-12 bg-white border border-gray-200 shadow">
    
        <img
          src="/images/Figma.webp"
          alt="Image 1"
          className="w-16 h-16 mr-4 "
        />
        <div className="pt-8">
          <div className="flex ">
            <PrimaryChip1>
              <span className="">Web Design</span>
            </PrimaryChip1>
          </div>
        </div>
      <div>
      <div className="flex items-center pt-8">
        <p> Transform your ideas into stunning visuals with my excellence with Figma website design services.</p>
        <NoOutlinedButton2>
        
          
          <span className="flex items-center justify-center ">
          <Link
           to="/webDesign">
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
            </Link>
          </span>
         
        </NoOutlinedButton2>
        </div>
      </div>
    </div>
  );
};

export const MainCard1 = ({ title, subheader }) => {
  return (
    <div className="custom-card max-w-sm p-12 bg-white border border-gray-200  shadow">
        <img
          src="/images/WordPress logo.webp"
          alt="Image 1"
          className="w-16 h-16 mr-4 "
        />
        <div className="pt-8">
          <div className="flex ">
            <PrimaryChip2>
              <span className="">Wordpress Developer</span>
            </PrimaryChip2>
          </div>
        </div>
      <div>
      <div className="flex items-center pt-8">
        <p> Take your online presence to the next level with my WordPress development services. </p>
        <NoOutlinedButton2>
        <Link
           to="/Wordpress">
          <span className="flex items-center justify-center ">
           
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
        </NoOutlinedButton2>
        </div>
      </div>
    
    </div>
  );
};


export const MainCard3 = ({ title, subheader }) => {
  return (
    <div className="custom-card max-w-sm p-12 bg-white border border-gray-200  shadow">
      <a href="#">
      <svg xmlns="http://www.w3.org/2000/svg" width="63" height="63" viewBox="0 0 63 63" fill="none">
  <g clipPath="url(#clip0_8215_2643)">
    <path d="M2.625 2.7041H60.3752V58.8793H2.625V2.7041Z" fill="#001D26"/>
    <path d="M2.62497 2.70407H60.3751V58.8792H2.62497V2.70407ZM0 61.5043H63.0001V0.0791016H0V61.5043ZM42.4726 25.2791C40.3988 25.2791 39.6901 26.3291 39.6901 27.1954C39.6901 28.1403 40.1626 28.7966 42.9451 30.2404C47.0664 32.2354 48.3526 34.1516 48.3526 36.9604C48.3526 41.1604 45.1501 43.4179 40.8188 43.4179C38.5351 43.4179 36.5663 42.9454 35.4376 42.2892C35.2538 42.2105 35.2276 42.0792 35.2276 41.8692V38.0104C35.2276 37.7479 35.3588 37.6691 35.5427 37.8004C37.1964 38.8767 39.0864 39.3492 40.8188 39.3492C42.8926 39.3492 43.7589 38.4829 43.7589 37.3016C43.7589 36.3567 43.1551 35.5167 40.5038 34.1516C36.7762 32.3667 35.2276 30.5554 35.2276 27.5367C35.2276 24.1503 37.8789 21.3416 42.4726 21.3416C44.7301 21.3416 46.3051 21.6829 47.1713 22.0766C47.3813 22.2079 47.4338 22.4179 47.4338 22.6016V26.1978C47.4338 26.4077 47.3026 26.5391 47.04 26.4602C45.885 25.7254 44.1788 25.2791 42.4726 25.2791ZM19.8975 28.4029C20.5013 28.4554 20.9738 28.4554 22.0238 28.4554C25.0952 28.4554 27.9826 27.3792 27.9826 23.2055C27.9826 19.8717 25.9088 18.1916 22.4176 18.1916C21.3676 18.1916 20.37 18.2441 19.8975 18.2704V28.4029ZM15.2251 14.4641C15.2251 14.2804 15.5927 14.149 15.8025 14.149C17.4826 14.0703 19.9763 14.0178 22.5751 14.0178C29.8463 14.0178 32.6813 18.0078 32.6813 23.1004C32.6813 29.7678 27.8513 32.6291 21.9188 32.6291C20.9213 32.6291 20.5801 32.5766 19.8713 32.5766V42.6567C19.8713 42.8666 19.7925 42.9716 19.5563 42.9716H15.5401C15.3301 42.9716 15.225 42.8929 15.225 42.6567L15.2251 14.4641Z" fill="#31C5F0"/>
  </g>
  <defs>
    <clipPath id="clip0_8215_2643">
      <rect width="63" height="63" fill="white"/>
    </clipPath>
  </defs>
</svg>
        <div className="pt-8">
          <div className="flex ">
            <PrimaryChip3>
              <span className="">Graphic Designs</span>
            </PrimaryChip3>
          </div>
        </div>
      </a>
      <div>
        <div className="flex items-center pt-8">
        <p> Empower your Brands and Identity (Social Media) <br /> and other graphic design services.  </p>
        <NoOutlinedButton2>
          <span className="flex items-center justify-center ">
           
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
    </div>
  );
};
