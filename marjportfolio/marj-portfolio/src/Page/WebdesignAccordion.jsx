import React, { useState } from "react";
import { PrimaryChip } from "../components/Chips";

const Accordion = ({ title, children, cardContent }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-b border-gray-800 text-white ">
      <div
        className="flex justify-between items-center p-4 py-8 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-xl font-medium">{title}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="bg-secondaryBlack">
          <div className=" border-b border-secondaryBlack text-white">
            {children}
          </div>
          <div className="p-4 border-b border-secondaryBlack text-white">
            {cardContent}
          </div>
        </div>
      )}
    </div>
  );
};

const WebdesignAccordion = () => {
  return (
    <div className="bg-primaryBlack px-8">
      <div className="max-w-screen-xl mx-auto py-24">
        <div className="flex justify-center items-center">
          {/* <PrimaryChip>
              <span className="">Web Design</span>
            </PrimaryChip> */}
        </div>
        <div className="py-6">
          <h1 className="text-4xl font-bold mb-4 p-4  text-white">
            Explore my{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(227deg, #9DE8EE 2.39%, #1A6350 2.41%, #F829AD 48.1%, #FBF1A0 95.67%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Figma Services{" "}
            </span>{" "}
            for you.
          </h1>
          <p className=" text-gray-200 mb-4 p-4  pb-10">
            These works highlights represent just a glimpse of my capabilities
            and the diverse range of projects I've had the privilege to work on.
            If you're seeking a dedicated digital professional who can bring
            your vision to life and drive tangible results, I'm here to help.
          </p>
        </div>

        <Accordion
          title={
            <div className="flex items-center">
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M50 7.5H10C7.2425 7.5 5 9.7425 5 12.5V47.5C5 50.2575 7.2425 52.5 10 52.5H50C52.7575 52.5 55 50.2575 55 47.5V12.5C55 9.7425 52.7575 7.5 50 7.5ZM42.5 15H47.5V20H42.5V15ZM35 15H40V20H35V15ZM10 47.5V25H50.0025L50.005 47.5H10Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-medium">User Experience Design</h2>
            </div>
          }
          cardContent={
            <div className="flex items-center">
              <div className="w-1/2 ml-8">
                <p>
                  By providing comprehensive, user-focused UX design services,
                  The MD Creatives is dedicated to helping you create meaningful
                  and engaging experiences for your users. <br />
                  <br /> Let us be your partner in delivering designs that not
                  only look great but also perform exceptionally well.
                </p>
              </div>
              <div className="w-1/2 ml-16">
                <img
                  src="/images/UX.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          }
        ></Accordion>

        <Accordion
          title={
            <div className="flex items-center">
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M46.0084 7.49508C44.1159 5.61008 40.8159 5.61758 38.9384 7.50758L34.4784 11.9851L28.9634 17.5001H17.4984C16.9854 17.4997 16.4849 17.6575 16.0648 17.9518C15.6447 18.2462 15.3256 18.6628 15.1509 19.1451L5.15086 46.6451C4.81836 47.5576 5.04586 48.5801 5.73086 49.2676L10.7309 54.2676C11.067 54.6046 11.4926 54.8382 11.9573 54.941C12.422 55.0438 12.9065 55.0114 13.3534 54.8476L40.8534 44.8476C41.3356 44.6728 41.7523 44.3537 42.0466 43.9336C42.341 43.5136 42.4987 43.013 42.4984 42.5001V31.0351L48.0159 25.5176L48.0184 25.5151L52.4984 21.0226C53.4434 20.0776 53.9634 18.8201 53.9609 17.4851C53.9609 16.1476 53.4384 14.8901 52.4909 13.9476L46.0084 7.49508ZM38.2309 28.2326C37.9983 28.4643 37.8138 28.7398 37.6881 29.0432C37.5624 29.3465 37.4979 29.6717 37.4984 30.0001V40.7501L14.3759 49.1576L26.0534 37.4801C26.1184 37.4826 26.1834 37.5001 26.2484 37.5001C26.99 37.5001 27.7151 37.2801 28.3317 36.8681C28.9484 36.456 29.4291 35.8704 29.7129 35.1851C29.9967 34.4999 30.071 33.7459 29.9263 33.0185C29.7816 32.2911 29.4245 31.6229 28.9 31.0984C28.3756 30.574 27.7074 30.2168 26.98 30.0721C26.2525 29.9274 25.4985 30.0017 24.8133 30.2855C24.1281 30.5694 23.5424 31.05 23.1303 31.6667C22.7183 32.2834 22.4984 33.0084 22.4984 33.7501C22.4984 33.8151 22.5159 33.8801 22.5184 33.9451L10.8409 45.6226L19.2484 22.5001H29.9984C30.6634 22.5001 31.2984 22.2376 31.7659 21.7676L36.2484 17.2851L42.7134 23.7501L38.2309 28.2326ZM46.2459 20.2126L39.7809 13.7476L42.4784 11.0376L48.9609 17.4901L46.2459 20.2126Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-medium">User Interface Design</h2>
            </div>
          }
          cardContent={
            <div className="flex items-center">
              <div className="w-1/2 ml-8">
                <p>
                  Our comprehensive UI design services include visual design,
                  interactive elements, responsive design, and branding
                  consistency, ensuring that every aspect of your interface is
                  engaging and easy to navigate. <br />
                  <br /> With a focus on aesthetics and usability, our
                  experienced team collaborates closely with clients to create
                  seamless and effective interfaces that captivate users and
                  drive business success. <br />
                  <br />
                  Ready to enhance your UI? Contact us today to discuss your
                  project and achieve your goals with our innovative design
                  solutions.
                </p>
              </div>
              <div className="w-1/2 ml-16">
                <img
                  src="/images/UI.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          }
        ></Accordion>

        <Accordion
          title={
            <div className="flex items-center">
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="61"
                  height="60"
                  viewBox="0 0 61 60"
                  fill="none"
                >
                  <path
                    d="M47.8359 18.75C47.8359 15.3025 45.0334 12.5 41.5859 12.5H20.3359V5H12.8359V12.5H5.33594V20H40.3359V55H47.8359V47.5H55.3359V40H47.8359V18.75Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M20.3359 25H12.8359V41.25C12.8359 44.6975 15.6384 47.5 19.0859 47.5H35.3359V40H20.3359V25Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-medium">Responsive Web Designs</h2>
            </div>
          }
          cardContent={
            <div className="flex items-center">
              <div className="w-1/2 ml-8">
                <p>
                  My services include designing flexible layouts, adaptive
                  visuals, and intuitive navigation that provide a seamless user
                  experience on desktops, tablets, and smartphones. <br />{" "}
                  <br /> With a focus on usability and aesthetics, our expert
                  team collaborates closely with clients to develop designs that
                  not only engage users but also drive business success by
                  reaching audiences wherever they are. <br /> <br /> Ready to
                  optimize your digital presence? Contact us today to discuss
                  your project and achieve your goals with cutting-edge
                  responsive design solutions.
                </p>
              </div>
              <div className="w-1/2 ml-16">
                <img
                  src="/images/Responsive.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          }
        ></Accordion>

        <Accordion
          title={
            <div className="flex items-center">
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M50 22.5C50.663 22.5 51.2989 22.2366 51.7678 21.7678C52.2366 21.2989 52.5 20.663 52.5 20V10C52.5 9.33696 52.2366 8.70107 51.7678 8.23223C51.2989 7.76339 50.663 7.5 50 7.5H40C39.337 7.5 38.7011 7.76339 38.2322 8.23223C37.7634 8.70107 37.5 9.33696 37.5 10V12.5H22.5V10C22.5 9.33696 22.2366 8.70107 21.7678 8.23223C21.2989 7.76339 20.663 7.5 20 7.5H10C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10V20C7.5 20.663 7.76339 21.2989 8.23223 21.7678C8.70107 22.2366 9.33696 22.5 10 22.5H12.5V37.5H10C9.33696 37.5 8.70107 37.7634 8.23223 38.2322C7.76339 38.7011 7.5 39.337 7.5 40V50C7.5 50.663 7.76339 51.2989 8.23223 51.7678C8.70107 52.2366 9.33696 52.5 10 52.5H20C20.663 52.5 21.2989 52.2366 21.7678 51.7678C22.2366 51.2989 22.5 50.663 22.5 50V47.5H37.5V50C37.5 50.663 37.7634 51.2989 38.2322 51.7678C38.7011 52.2366 39.337 52.5 40 52.5H50C50.663 52.5 51.2989 52.2366 51.7678 51.7678C52.2366 51.2989 52.5 50.663 52.5 50V40C52.5 39.337 52.2366 38.7011 51.7678 38.2322C51.2989 37.7634 50.663 37.5 50 37.5H47.5V22.5H50ZM42.5 12.5H47.5V17.5H42.5V12.5ZM12.5 12.5H17.5V17.5H12.5V12.5ZM17.5 47.5H12.5V42.5H17.5V47.5ZM47.5 47.5H42.5V42.5H47.5V47.5ZM42.5 37.5H40C39.337 37.5 38.7011 37.7634 38.2322 38.2322C37.7634 38.7011 37.5 39.337 37.5 40V42.5H22.5V40C22.5 39.337 22.2366 38.7011 21.7678 38.2322C21.2989 37.7634 20.663 37.5 20 37.5H17.5V22.5H20C20.663 22.5 21.2989 22.2366 21.7678 21.7678C22.2366 21.2989 22.5 20.663 22.5 20V17.5H37.5V20C37.5 20.663 37.7634 21.2989 38.2322 21.7678C38.7011 22.2366 39.337 22.5 40 22.5H42.5V37.5Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-medium">Product Prototyping</h2>
            </div>
          }
          cardContent={
            <div className="flex items-center">
              <div className="w-1/2 ml-8">
                <p>
                  By providing comprehensive, user-focused UX design services,
                  The MD Creatives is dedicated to helping you create meaningful
                  and engaging experiences for your users. <br />
                  <br /> Let us be your partner in delivering designs that not
                  only look great but also perform exceptionally well.
                </p>
              </div>
              <div className="w-1/2 ml-16">
                <img
                  src="/images/prototyping.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          }
        ></Accordion>

        <Accordion
          title={
            <div className="flex items-center">
              <div className="pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <path
                    d="M44.6675 6.25988C43.78 4.69988 41.215 4.70238 40.3275 6.25988L30.33 23.7599C30.1129 24.14 29.9993 24.5705 30.0008 25.0083C30.0023 25.4461 30.1187 25.8759 30.3384 26.2545C30.5581 26.6332 30.8734 26.9475 31.2528 27.1661C31.6321 27.3846 32.0622 27.4997 32.5 27.4999H52.5C52.9375 27.499 53.3671 27.3834 53.746 27.1647C54.1249 26.946 54.4399 26.6317 54.6594 26.2533C54.879 25.8749 54.9955 25.4455 54.9974 25.008C54.9992 24.5705 54.8863 24.1401 54.67 23.7599L44.6675 6.25988ZM7.5 54.9999H25C25.663 54.9999 26.2989 54.7365 26.7678 54.2677C27.2366 53.7988 27.5 53.1629 27.5 52.4999V34.9999C27.5 34.3368 27.2366 33.701 26.7678 33.2321C26.2989 32.7633 25.663 32.4999 25 32.4999H7.5C6.83696 32.4999 6.20107 32.7633 5.73223 33.2321C5.26339 33.701 5 34.3368 5 34.9999V52.4999C5 53.1629 5.26339 53.7988 5.73223 54.2677C6.20107 54.7365 6.83696 54.9999 7.5 54.9999ZM43.75 32.4999C37.5475 32.4999 32.5 37.5474 32.5 43.7499C32.5 49.9524 37.5475 54.9999 43.75 54.9999C49.9525 54.9999 55 49.9524 55 43.7499C55 37.5474 49.9525 32.4999 43.75 32.4999Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-medium">Wireframing and Mockups</h2>
            </div>
          }
          cardContent={
            <div className="flex items-center">
              <div className="w-1/2 ml-8">
                <p>
                  Transform your ideas into reality with my professional mockup
                  and wireframing services. As an expert designer, I create
                  everything from low to high-fidelity wireframes and static to
                  interactive mockups, providing clear and visually appealing
                  representations of your project. <br /> <br />With a user-centric approach
                  and customized solutions, I ensure your design is intuitive
                  and engaging. From initial consultation to final delivery, my
                  streamlined process guarantees efficient, high-quality results
                  tailored to meet your specific needs. <br /><br /> Let me bring your vision
                  to life and ensure a seamless user experience across all
                  devices with my dedicated mockup and wireframing expertise.
                </p>
              </div>
              <div className="w-1/2 ml-16">
                <img
                  src="/images/mockup.webp"
                  alt="Image"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          }
        ></Accordion>
      </div>
    </div>
  );
};

export default WebdesignAccordion;
