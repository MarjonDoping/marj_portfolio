import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-24">
      <div className="container mx-auto flex flex-wrap justify-between ">
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Skills</h3>
          <p className="text-normal pt-4 ">Web Design</p>
          <p className="text-normal pt-4">Wordpress Development</p>
          <p className="text-normal pt-4 ">Front-end Development</p>
          <p className="text-normal pt-4 ">Graphic Designer</p>
          <p className="text-normal pt-4 ">SEO</p>
          <p className="text-normal pt-4 ">Social Media Marketing</p>
        </div>
        <div className="w-full sm:w-auto mb-4 sm:mb-0">
          <h3 className="text-normal font-bold">Collaborate Me</h3>
          <p className="text-normal pt-4 ">Figma</p>
          <p className="text-normal pt-4 ">Behance</p>
          <p className="text-normal pt-4 ">Trello</p>
          <p className="text-normal pt-4 ">Email</p>
          <p className="text-normal pt-4 ">Instagram</p>
          <p className="text-normal pt-4">Facebook</p>
        </div>
        <div className="w-full sm:w-auto">
          <h3 className="text-normal font-bold">Portfolio</h3>
          <p className="text-normal pt-4 ">Get latest Updates</p>
          <form class="max-w-sm mx-auto">
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
