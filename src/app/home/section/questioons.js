import React from 'react'

function Questions({ openIndex, toggleAccordion }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-3xl mb-5 ml-2 font-normal text-[#3a3f47] text-center capitalize">frequently asked questions</div>
            <div id="accordion-open" className="flex flex-col box-border bg-[#f8f9fa] rounded-lg">

                {/* Accordion Item 1 */}
                <div id="accordion-item-1" className="relative box-border">
                    <h2>
                        <div
                            onClick={() => toggleAccordion(1)}
                            className="flex items-center text-md justify-between w-full p-5 bg-transparent font-medium rtl:text-right text-[#3a3f47] gap-3 "
                        >
                            <span className="flex md:text-md text-sm items-center">
                                <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2z" clipRule="evenodd" />
                                </svg>
                                Lorem ipsum, atau ringkasnya lipsum, adalah teks standar yang ditempatkan untuk mendemostrasikan elemen g
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 ${openIndex === 1 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                            </svg>
                        </div>
                    </h2>
                    {openIndex === 1 && (
                        <div className="p-5 py-0 ms-6">
                            <p className="mb-2 text-xs md:text-sm text-gray-500">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS.
                            </p>
                        </div>
                    )}
                </div>

                <div id="accordion-item-2" className="relative box-border">
                    <h2>
                        <div
                            onClick={() => toggleAccordion(2)}
                            className="flex items-center text-md justify-between w-full p-5 bg-transparent font-medium rtl:text-right text-[#3a3f47] gap-3 "
                        >
                            <span className="flex md:text-md text-sm items-center">
                                <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2z" clipRule="evenodd" />
                                </svg>
                                What is Flowbite?
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 ${openIndex === 2 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                            </svg>
                        </div>
                    </h2>
                    {openIndex === 2 && (
                        <div className="p-5 pt-0 ms-6">
                            <p className="mb-2 text-xs md:text-sm text-gray-500">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS.
                            </p>
                        </div>
                    )}
                </div>

                <div id="accordion-item-3" className="relative box-border">
                    <h2>
                        <div
                            onClick={() => toggleAccordion(3)}
                            className="flex items-center text-md justify-between w-full p-5 bg-transparent font-medium rtl:text-right text-[#3a3f47] gap-3 "
                        >
                            <span className="flex md:text-md text-sm items-center">
                                <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2z" clipRule="evenodd" />
                                </svg>
                                What is Flowbite?
                            </span>
                            <svg
                                className={`w-3 h-3 shrink-0 ${openIndex === 3 ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 10 6"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5 5 1 1 5" />
                            </svg>
                        </div>
                    </h2>
                    {openIndex === 3 && (
                        <div className="p-5 pt-0 ms-6">
                            <p className="mb-2 text-xs md:text-sm text-gray-500">
                                Flowbite is an open-source library of interactive components built on top of Tailwind CSS.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Questions