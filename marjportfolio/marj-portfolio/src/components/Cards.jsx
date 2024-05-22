import React from "react";
import { MainButton, NoOutlinedButton, NoOutlinedButton1, NoOutlinedButton2 } from "./Button";
import { PrimaryChip, PrimaryChip1, PrimaryChip2, PrimaryChip3 } from "../components/Chips";
import { Link } from "react-router-dom";

export const MainCard = ({ title, subheader }) => {
  return (
    <div class="custom-card max-w-sm p-12 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img
          src="/images/Figma.png"
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
    <div class="custom-card max-w-sm p-12 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          src="/images/WordPress logo.png"
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
    <div class="custom-card max-w-sm p-12 bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          src="/images/react.png"
          alt="Image 1"
          className="w-16 h-16 mr-4 "
        />
        <div className="pt-8">
          <div className="flex ">
            <PrimaryChip3>
              <span className="">React JS</span>
            </PrimaryChip3>
          </div>
        </div>
      </a>
      <div>
        <div className="flex items-center pt-8">
        <p> Empower your web applications with my React.js and other Framework development services.  </p>
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
