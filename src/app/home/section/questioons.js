import React, { useState, useRef } from "react";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  // Fungsi untuk toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Mengukur tinggi dari setiap konten accordion saat pertama kali render
  const heights = contentRefs.current.map((ref) =>
    ref ? ref.scrollHeight : 0
  );

  // Komponen Accordion
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-3xl mb-5 ml-2 font-normal text-[#3a3f47] text-center capitalize">
        Frequently Asked Questions
      </div>
      <div className="flex flex-col backdrop-blur-sm bg-white/20 rounded-lg">
        {[
          {
            question: "What is this Boot.IT?",
            answer:
              "Boot.IT provides information about various bootcamps, meetups, and IT competitions. It is a resource for finding and registering for events that enhance IT skills and networking opportunities.",
          },
          {
            question: "How do I create an account on the Boot.IT?",
            answer:
              'To create an account, click on the "Sign Up" button on the top right of the homepage and complete the required information.',
          },
          {
            question: "Are there free resources available?",
            answer:
              "Yes, some bootcamps and events offer free resources or trials to explore before committing fully. Check each event’s details for specific offerings.",
          },
          {
            question:
              "How often are events and bootcamps updated on the Boot.IT?",
            answer:
              "We regularly update our listings with new bootcamps, meetups, and competitions based on the latest offerings in the IT field.",
          },
        ].map((item, index) => (
          <div key={index} className="relative">
            <h2>
              <button
                type="button"
                onClick={() => toggleAccordion(index + 1)}
                className="flex items-center justify-between w-full p-5 text-md font-medium text-[#3a3f47] bg-transparent gap-3"
                aria-expanded={activeIndex === index + 1}
                aria-controls={`accordion-flush-body-${index + 1}`}
              >
                <span className="flex items-center text-sm md:text-md">
                  <svg
                    className="w-5 h-5 me-2 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.question}
                </span>
                <svg
                  className={`w-3 h-3 shrink-0 ${
                    activeIndex === index + 1 ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 10 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id={`accordion-flush-body-${index + 1}`}
              ref={(el) => (contentRefs.current[index] = el)}
              style={{
                maxHeight:
                  activeIndex === index + 1 ? `${heights[index]}px` : "0px",
                transition: "max-height 0.5s ease",
              }}
              className="overflow-hidden"
              aria-labelledby={`accordion-flush-heading-${index + 1}`}
            >
              <div className="p-5 pt-0 ms-6">
                <p className="mb-2 text-xs md:text-sm text-gray-500">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
