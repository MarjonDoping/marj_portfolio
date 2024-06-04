import React, { useState } from "react";
import { PrimaryChip } from "../components/Chips";

const FAQ = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);

  const toggleAccordion = (index) => {
    setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionItems = [
    {
      question: "What is your background and experience?",
      answer:
        "I have a diverse background in web design, WordPress development, graphic design, SEO, and social media marketing. With several years of experience in these fields, I've honed my skills to deliver high-quality and visually appealing digital solutions for clients.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I offer a range of services including Web design and development using tools like Figma and WordPress, Graphic design for social media marketing campaigns, SEO optimization to improve website visibility and search engine rankings, Creating newsletters and email campaigns using Mailchimp, Project management to ensure smooth coordination and delivery of projects.",
    },
    {
      question: "How do I get started working with you?",
      answer:
        "To initiate a project, you can contact me through the contact form on my website or send me an email outlining your requirements. From there, we can schedule a consultation to discuss your project in detail and determine the best approach moving forward.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "My pricing structure varies depending on the scope and complexity of the project. I offer both hourly rates and project-based fees. Please reach out to me with your project details for a personalized quote.",
    },
    {
      question: "What is your turnaround time for projects?",
      answer:
        "Turnaround time can vary based on the specific requirements of each project. Generally, I strive to deliver projects in a timely manner while maintaining high quality. During our consultation, we can discuss timelines and set realistic expectations based on your needs. ",
    },
    {
      question: "Can I see examples of your previous work?",
      answer:
        "Absolutely! You can view samples of my previous work in my portfolio section on the website. I showcase a variety of projects across web design, graphic design, SEO optimization, and social media marketing.",
    },
    {
      question: "Do you offer revisions or edits?",
      answer:
        "Yes, I offer revisions and edits to ensure that the final deliverables meet your expectations. The number of revisions included may vary depending on the project. Additional revisions beyond the initial scope may incur extra fees.",
    },
    {
      question:
        "Are you available for ongoing support after the project is completed?",
      answer:
        "Yes, I provide ongoing support and maintenance services to clients even after the project is completed. Whether you need updates, troubleshooting, or further assistance, I'm here to help ensure your continued success.",
    },
    {
      question: "What sets you apart from other professionals in your field?",
      answer:
        "What sets me apart is my comprehensive skill set and commitment to delivering tailored solutions that meet the unique needs of each client. From design to development to marketing, I provide a holistic approach that ensures cohesive and effective digital strategies.",
    },
    {
      question: "How can I contact you for further inquiries?",
      answer:
        "You can reach out to me via email at marjonvaldezdoping@gmail.com, or fill out the contact form on my website. I'm also available on social media platforms such as linkedin, facebook, behnce for further inquiries or discussions.",
    },
  ];

  return (
    <>
      <div className="bg-cover bg-center py-24">
        <div className="max-w-screen-lg mx-auto px-5">
          <div className="flex justify-center items-center">
            <PrimaryChip>
              <span className="">Web Design</span>
            </PrimaryChip>
          </div>

          <h1 className="text-3xl font-bold mb-4 text-center p-4 text-black">
            Don’t see your question here? Get in touch
          </h1>
          <p className=" text-black mb-8 text-center">
            My expertise in Figma designs, WordPress development, and React.js
            code allows us to provide comprehensive solutions tailored to your
            specific needs.
          </p>

          <div>
            {accordionItems.map((item, index) => (
              <div key={index}>
                <h2>
                  <button
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black border border-b-0  rounded-t-xl  "
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={accordionOpen === index ? "true" : "false"}
                    aria-controls={`accordion-body-${index}`}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      {item.question}
                    </span>
                    <svg
                      className={`w-3 h-3 rotate-${
                        accordionOpen === index ? "180" : "0"
                      } shrink-0`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      ></path>
                    </svg>
                  </button>
                </h2>
                <div
                  id={`accordion-body-${index}`}
                  className={`${
                    accordionOpen === index ? "block" : "hidden"
                  } p-5 border border-b-0 border-gray-200 bg-gray-100`}
                >
                  <p className="mb-2 text-black ">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
