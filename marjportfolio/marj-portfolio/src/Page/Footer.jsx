import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-24">
      <div className="container max-w-screen-lg mx-auto flex flex-wrap justify-between ">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Skills</h3>
          <a href="/webDesign" className="text-normal pt-4 block">Web Design</a>
          <a href="/Wordpress" className="text-normal pt-4 block">Wordpress Development</a>
          <a href="/graphicDesigns" className="text-normal pt-4 block">Graphic Designer</a>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Collaborate Me</h3>
          <a href="/webDesign" className="text-normal pt-4 block">Figma</a>
          <a href="https://www.behance.net/marjondoping" className="text-normal pt-4 block">Behance</a>
          <p className="text-normal pt-4 block">Email : marjondoping@gmail.com</p>
        </div>
        <div className="w-full sm:w-auto">
        
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
            </svg>
          <a href="/portfolio" className="text-normal pt-4 block">Get latest Updates</a>
          <form action="https://formspree.io/f/mjvnqavn" method="POST" className="max-w-sm mx-auto">
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="_replyto"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
