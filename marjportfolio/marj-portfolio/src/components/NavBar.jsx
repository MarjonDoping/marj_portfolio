import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const cvDownloadLink =
    "https://drive.google.com/file/d/11hxJ-IwQm5a9RSnGLHwRA-10_gXLdytb/view?usp=drive_link";

  const handleDownloadCV = () => {
    window.open(cvDownloadLink, "_blank");
  };

  return (
    <nav className="bg-black border-black sticky top-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center flex items-center text-2xl font-semibold whitespace-nowrap ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="40"
              viewBox="0 0 33 28"
              fill="none"
              className="mr-1"
            > 
              <path
                d="M0.571698 3.93758L13.4999 12.6138L13.5364 18.6461L0.5273 9.51277L0.571698 3.93758Z"
                fill="white"
              />
              <path
                d="M26.2329 1.52428L13.4942 12.6137L13.5322 18.6459L26.7187 7.31609L26.2329 1.52428Z"
                fill="white"
              />
              <path
                d="M0.517582 10.4154L6.35808 14.3755L6.29286 26.2627L0.272603 26.2297L0.517582 10.4154Z"
                fill="white"
              />
              <path
                d="M22.5291 11.6611L27.127 7.7525C28.3038 8.88854 28.8799 9.50836 29.3933 10.5088C30.2214 11.821 30.3871 12.6497 30.6308 14.1436C30.8433 15.8589 30.7575 16.853 30.1784 18.6894C29.612 20.5011 29.0453 21.4509 27.4499 22.9899C26.0418 24.3141 25.0597 24.8731 22.853 25.4903L12.0819 25.805L17.7084 20.7827C19.164 20.9521 19.9697 20.887 21.4269 20.5114C22.6163 19.8868 23.1804 19.2935 23.9792 17.7304C24.4448 16.4548 24.446 15.6989 24.2295 14.3163C23.9048 13.2331 23.5522 12.6499 22.5291 11.6611Z"
                fill="white"
              />
              <path
                d="M9.70519 21.0895L16.5363 20.6954L13.4056 23.5343L10.8694 25.7997L9.70519 21.0895Z"
                fill="#5661F6"
              />
            </svg>{" "}
            {/* <div className="text-white">
            MD Creatives
            </div> */}
           
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex bg-gray-500 items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full md:flex md:w-auto md:ml-auto relative"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse px-4">
            <li>
              <Link
                to="/portfolio"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:border-0 md:hover:text-white md:p-2 dark:text-w md:dark:hover:text-white "
              >
                PORTFOLIO
              </Link>
            </li>
            <li ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex justify-center items-center py-2 px-3  text-white rounded hover:bg-gray-800 md:hover:bg-gray-800 md:border-0  dark:text-w md:dark:hover:text-whitemd:dark:hover:bg-transparent"
              >
                SERVICES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 18.1893L17.4697 13.4697C17.7626 13.1768 18.2374 13.1768 18.5303 13.4697C18.8232 13.7626 18.8232 14.2374 18.5303 14.5303L12.5303 20.5303C12.3897 20.671 12.1989 20.75 12 20.75C11.8011 20.75 11.6103 20.671 11.4697 20.5303L5.46967 14.5303C5.17678 14.2374 5.17678 13.7626 5.46967 13.4697C5.76256 13.1768 6.23744 13.1768 6.53033 13.4697L11.25 18.1893L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z"
                    fill="#F7B329"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="fixed justify-center top-16 left-0 w-full bg-primaryBlack text-white py-12 px-3 mt-1 rounded shadow-lg z-50">
                  <div className="flex flex-row max-w-screen-xl mx-auto items-center justify-between">
                    <div className="w-1/3">
                      <ul>
                        <Link to="/webDesign">
                          <li className="flex py-3 text-xl hover:text-violet-500 md:hover:underline md:border-0 md:p-2 ">
                            WEB DESIGN
                          </li>
                        </Link>
                        <Link to="/Wordpress">
                          <li className="flex py-3 text-xl hover:text-violet-500 md:hover:underline md:border-0 md:p-2 ">
                            WORDPRESS DEVELOPMENT
                          </li>
                        </Link>
                        <Link to="/graphicDesigns">
                          <li className="flex py-3 text-xl hover:text-violet-500 md:hover:underline md:border-0 md:p-2 ">
                            GRAPHIC DESIGN
                          </li>
                        </Link>
                        {/* <Link to="/branding">
                          <li className="flex py-3 text-xl hover:text-violet-500 md:hover:underline md:border-0 md:p-2 ">
                            BRANDING AND SEO
                          </li>
                        </Link> */}
                      </ul>
                    </div>
                    <div className="w-1/3">
                      <Link to="/contactPage">
                        <p className="flex py-3 mr-8 mx-auto items-center justify-between">
                          Collaborate with me
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="justify-center"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                              fill="#F7B329"
                            />
                          </svg>
                        </p>
                      </Link>

                      <hr className="mr-8" />

                      <a href="https://www.behance.net/marjondoping">
                        <p className="flex py-3 mr-8 mx-auto items-center justify-between">
                          My Works
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="justify-center"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                              fill="#F7B329"
                            />
                          </svg>
                        </p>
                      </a>

                      <hr className="mr-8" />
                      <p className="flex py-3 mr-8 mx-auto items-center justify-between">
                        Why use Figma for Web Design?
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="justify-center"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
                            fill="#F7B329"
                          />
                        </svg>
                      </p>
                    </div>
                    <div className="w-1/3">
                      <img
                        src="/images/prototyping.webp"
                        alt="Image 1"
                        className="w-auto"
                      />
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/contactPage"
                className="block py-2 px-3 text-white rounded hover:bg-gray-800 md:border-0 md:hover:text-white md:p-2 dark:text-w md:dark:hover:text-white "
              >
                CONTACT
              </Link>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1RTl9jsVsniRZ4b7AuSGZRPbhX80iBpbQ/view?usp=drive_link"
                className="block py-6 px-6 text-white rounded hover:bg-gray-800 md:hover:bg-gray-900 md:border-0 md:hover:text-white md:p-2 "
              >
                WORKS
              </a>
            </li>
          </ul>
          <button
            onClick={handleDownloadCV}
            className="text-white font-semibold py-2 px-4 rounded bg-gradient-to-r from-teal-400 to-green-600 hover:from-pink-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
            style={{
              backgroundImage:
                "linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)",
            }}
          >
            DOWNLOAD CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
