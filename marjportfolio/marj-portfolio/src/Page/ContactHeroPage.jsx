import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { NoOutlinedButton } from "../components/Button";

const ContactHeroPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
    // add more fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can fetch or process the form data here
    console.log(formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  return (
    <div className="bg-primaryBlack">
      <div className="flex max-w-screen-xl mx-auto">
        <div className="w-1/3 p-6 ">
          <h1 className="text-3xl font-bold mb-4 text-white pt-12 sticky top-10">
            <span
              style={{
                display: "inline-block",
                backgroundImage:
                  "linear-gradient(227deg, #9DE8EE 2.39%, #1A6350 2.41%, #F829AD 48.1%, #FBF1A0 95.67%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Collaborate with me
            </span>{" "}
            and let's make your brand to the peak
            <p className=" mb-4 text-base text-white font-light sticky mt-4">
              Collaborate with me and let's make your brand to the peak
            </p>
            <span className="flex text-base font-light text-gray-200 pt-4">
              Collaborate with me
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
          </h1>
        </div>
        <div className="w-2/3 overflow-hidden">
          <div className="h-full overflow-y-auto">
            <div className="p-12 ">
              <div className="w-full p-4 bg-secondaryBlack rounded-lg shadow sm:p-6 md:p-8">
                <form class="space-y-6 " onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Fullname
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-primaryBlack text-white  rounded-lg w-full border-none h-16"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      class="bg-primaryBlack border text-white rounded-lg w-full border-none h-16"
                      placeholder="name@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-primaryBlack border text-white rounded-lg w-full border-none h-16"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="bg-primaryBlack border text-white  rounded-lg w-full border-none h-16"
                      placeholder="Your website"
                    />
                  </div>

                  <div>
                    <label
                      for="message"
                      class="block mb-2 text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      class="bg-primaryBlack border text-white  rounded-lg w-full border-none "
                      rows="4"
                      placeholder="Type your message here..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white w-full font-semibold py-2 px-4 rounded bg-gradient-to-r from-teal-400 to-green-600 hover:from-pink-500 hover:to-blue-500 hover:scale-105 transform transition duration-300 ease-in-out"
                    style={{
                      backgroundImage:
                        "linear-gradient(227deg, #9DE8EE 0%, #1A6350 0.41%, #F829AD 48.1%, #FBF1A0 110.67%)",
                    }}
                  >
                    Collaborate with me
                  </button>
                </form>
              </div>
            </div>
            {/* Additional Card */}
            <div className="px-12 rounded-lg">
              <div className="w-full p-4 bg-secondaryBlack shadow ">
                <div className="grid grid-cols-2  gap-4 ">
                  {/* First Sub Card */}
                  <div className=" custom-card ">
                    <img
                      className="h-50 w-full rounded-lg"
                      src="/images/00.png"
                      alt="Background Image 1"
                    />

                    <div className="absolute inset-0 flex justify-center items-center ">
                      <span className="text-white text-lg">
                        Wordpress Development
                      </span>
                    </div>
                  </div>
                  {/* Second Sub Card */}
                  <div className="relative custom-card">
                    <img
                      className="h-50 w-full object-cover rounded-lg"
                      src="/images/01.png"
                      alt="Background Image 2"
                    />
                    {/* <div className="absolute inset-0 bg-primaryBlack opacity-50"></div> */}
                    <div className="absolute inset-0 flex justify-center items-center">
                      <span className="text-white text-lg">
                        Figma Web Designs
                      </span>
                    </div>
                  </div>
                  {/* Third Sub Card */}
                  <div className="relative custom-card">
                    <img
                      className="h-50 w-full object-cover rounded-lg"
                      src="/images/03.png"
                      alt="Background Image 3"
                    />

                    <div className="absolute inset-0 flex justify-center items-center">
                      <span className="text-white text-lg">
                        Graphic Designs
                      </span>
                    </div>
                  </div>
                  {/* Fourth Sub Card */}
                  <div className="relative custom-card">
                    <img
                      className="h-50 w-full object-cover rounded-lg"
                      src="/images/02.png"
                      alt="Background Image 4"
                    />

                    <div className="absolute inset-0 flex justify-center items-center">
                      <span className="text-white text-lg">
                        Search Engine Optimizations
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="px-12 p-8 rounded-lg ">
              <div className="w-full p-4 bg-secondaryBlack rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="text-xl font-medium text-white">
                  Additional Card
                </h5>
                <p className="text-white">
                  This is another card below the form card.
                </p>
                <img
                  src="/images/navbarImg.png"
                  alt="Image 1"
                  className="w-auto"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHeroPage;
