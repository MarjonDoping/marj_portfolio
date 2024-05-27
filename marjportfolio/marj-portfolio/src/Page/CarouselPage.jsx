import React, { useState, useEffect, useRef } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import {
  MainButton,
  NoOutlinedButton,
  SecondaryButton,
} from "../components/Button";
import { PrimaryChip } from "../components/Chips";
import { Link } from "react-router-dom";

const CarouselPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    // Add overflow hidden to the body when modal is open
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      // Add event listener to close modal when clicked outside the image
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
      // Remove event listener when modal is closed
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup function to remove the style when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalOpen]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleCloseModal();
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <div
        className="bg-cover bg-center py-24"
        style={{ backgroundImage: 'url("/images/background.png")' }}
      >
        <div className="max-w-screen-xl mx-auto px-5">
         
            <div className="flex justify-center items-center">
              <PrimaryChip>
                <span className="">Web Design</span>
              </PrimaryChip>
            </div>
  
          <h1 className="text-3xl font-bold mb-4 text-center p-4 text-white">
            Some pieces of my work
          </h1>
          <p className=" text-gray-200 mb-8 text-center">
            These works highlights represent just a glimpse of my capabilities
            and the diverse range of projects I've had the privilege to work on.
            If you're seeking a dedicated digital professional who can bring
            your vision to life and drive tangible results, I'm here to help.
          </p>
          <div className="flex justify-center items-center py-4">
          <Link to="/webDesign">
            <NoOutlinedButton>
              <span className="flex items-center">
                Web Design
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
            </NoOutlinedButton>
            </Link>
          </div>
          <TECarousel showControls showIndicators ride="carousel">
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
              <TECarouselItem
                itemID={1}
                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/bank-dark mode.png")}
              >
                <img
                  src="/images/rebank.png"
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={2}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/CARS2.png")}
              >
                <img
                  src="/images/cars.png"
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={3}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/NFT MARJ.png")}
              >
                <img src="/images/nft.png" className="block w-full" alt="..." />
              </TECarouselItem>
              {/* Additional Carousel Items */}
              <TECarouselItem
                itemID={4}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/BURGER 1.png")}
              >
                <img
                  src="/images/burger.png"
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={5}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/Marj -Bike.png")}
              >
                <img
                  src="/images/bike.png"
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
              <TECarouselItem
                itemID={6}
                className="relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                style={{ padding: "0 200px" }}
                onClick={() => handleImageClick("/images/Marj-cozy.png")}
              >
                <img
                  src="/images/cozy.png"
                  className="block w-full"
                  alt="..."
                />
              </TECarouselItem>
            </div>
          </TECarousel>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-black p-4 rounded-lg max-w-screen-md overflow-auto h-full relative pt-10"
          >
            <img src={selectedImage} alt="Selected Image" className="w-full" />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 p-2 text-white bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.5"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  fill="white"
                />
                <path
                  d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0304L13.0607 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselPage;
