import React from "react";
import {
  MainButton,
  NoOutlinedButton,
  NoOutlinedButton1,
  NoOutlinedButton2,
} from "./Button";
import {
  PrimaryChip,
  PrimaryChip1,
  PrimaryChip2,
  PrimaryChip3,
} from "../components/Chips";
import { Link } from "react-router-dom";

export const MainCard = ({ title, subheader }) => {
  return (
    <div className="custom-card max-w-sm p-12 bg-white border border-gray-200 shadow">
      <img src="/images/Figma.webp" alt="Image 1" className="w-16 h-16 mr-4 " />
      <div className="pt-8">
        <div className="flex ">
          <PrimaryChip1>
            <span className="">Web Designs</span>
          </PrimaryChip1>
        </div>
      </div>
      <div>
        <div className="flex items-center pt-8">
          <p>
            {" "}
            Transform your ideas into stunning visuals with my excellence with
            Figma website design services.
          </p>
          <NoOutlinedButton2>
            <span className="flex items-center justify-center ">
              <Link to="/webDesign">
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
          <p>
            {" "}
            Take your online presence to the next level with my WordPress
            development services.{" "}
          </p>
          <NoOutlinedButton2>
            <Link to="/Wordpress">
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
      <a href="https://www.behance.net/marjondoping" target="_blank" rel="noopener noreferrer">
      <svg width="70" height="auto" viewBox="0 0 198 198" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M99.4396 0.0303955H98.9898C44.5732 0.0303955 0.459839 44.1568 0.459839 98.5894V99.0393C0.459839 153.472 44.5732 197.598 98.9898 197.598H99.4396C153.856 197.598 197.97 153.472 197.97 99.0393V98.5894C197.97 44.1568 153.856 0.0303955 99.4396 0.0303955Z" fill="#1877F2"/>
<path d="M91.5718 102.535C89.8557 100.382 87.8905 98.7347 85.69 97.6203C87.6345 96.4367 89.309 94.9831 90.693 93.2527C93.0249 90.3317 94.2082 86.6701 94.2082 82.3648C94.2082 78.7724 93.2602 75.4707 91.3849 72.5566C89.5166 69.6425 86.7349 67.303 83.1159 65.6002C79.573 63.9321 75.3035 63.0876 70.4389 63.0876H42.767V134.569H71.7122C76.4522 134.569 80.6871 133.703 84.2922 132.001C87.9666 130.27 90.8314 127.848 92.7966 124.809C94.7687 121.757 95.7721 118.289 95.7721 114.502C95.7721 110.066 94.3604 106.044 91.5718 102.542V102.535ZM76.8743 89.508C75.1651 90.8924 72.6671 91.5984 69.4633 91.5984H57.4921V75.7614H69.4633C72.6533 75.7614 75.1374 76.4882 76.8466 77.9279C78.4866 79.3053 79.2823 81.2088 79.2823 83.7283C79.2823 86.2479 78.4935 88.1998 76.8743 89.508ZM57.4921 104.279H70.3421C73.705 104.279 76.293 105.096 78.2513 106.778C80.1266 108.391 81.04 110.529 81.04 113.326C81.04 116.122 80.1958 118.095 78.452 119.569C76.6459 121.099 74.051 121.874 70.7296 121.874H57.4921V104.279Z" fill="white"/>
<path d="M152.306 90.581C150.078 86.5525 146.923 83.3754 142.923 81.1466C138.93 78.9178 134.315 77.7896 129.222 77.7896C124.129 77.7896 119.168 78.9524 115.078 81.2435C110.982 83.5415 107.757 86.8432 105.501 91.0724C103.245 95.2947 102.104 100.251 102.104 105.802C102.104 111.353 103.28 116.316 105.605 120.531C107.93 124.754 111.182 128.076 115.279 130.402C119.368 132.728 124.06 133.904 129.229 133.904C135.574 133.904 140.965 132.291 145.255 129.114C149.545 125.937 152.548 121.798 154.188 116.821L154.306 116.468H141.754L141.678 116.621C139.263 121.514 135.076 123.992 129.222 123.992C125.146 123.992 121.659 122.698 118.856 120.158C116.123 117.673 114.552 114.35 114.185 110.273H155.233L155.268 110.045C155.531 108.405 155.662 106.549 155.662 104.535C155.662 99.3024 154.534 94.6094 152.306 90.581ZM119.05 91.3008C121.721 88.9128 124.98 87.7084 128.731 87.7084C132.876 87.7084 136.398 88.9336 139.2 91.3562C141.927 93.7096 143.373 96.8729 143.497 100.749H114.303C114.857 96.8106 116.455 93.6335 119.057 91.3078L119.05 91.3008Z" fill="white"/>
<path d="M142.549 64.7281H115.21V71.2069H142.549V64.7281Z" fill="white"/>
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
          <p>
            {" "}
            Empower your Brands and Identity (Social Media) <br /> and other
            graphic design services.{" "}
          </p>
          <NoOutlinedButton2>
            <Link to="https://www.behance.net/marjondoping">
          
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
