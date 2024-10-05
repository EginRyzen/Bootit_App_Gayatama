"use client"
import React, { useState, useRef, useEffect } from 'react';
import { IoShareSocialSharp } from "react-icons/io5";

export default function Page() {

    const [activeIndex, setActiveIndex] = useState(null);
    const [height, setHeight] = useState({});
    const contentRef = useRef({});

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        // Loop through each ref element and get its scrollHeight
        Object.keys(contentRef.current).forEach((key) => {
            const el = contentRef.current[key];
            if (el) {
                setHeight((prev) => ({
                    ...prev,
                    [key]: el.scrollHeight,
                }));
            }
        });
    }, [activeIndex]); // Add activeIndex dependency to re-run when accordion is toggled

    return (
        <div className='max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='flex py-10 gap-3'>
                <div className='w-2/3'>
                    <div className='text-2xl font-semibold text-[#3a3f47]'>Typescript Restful API</div>
                    <p className='text-[#3a3f47] text-sm my-4'>Panduan langkah demi langkah untuk belajar Typescript Restful API.</p>
                    <div className='flex gap-10 mb-10'>
                        <div className="flex items-center pb-3">
                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ms-2 text-xs font-bold text-gray-900">4.95</p>
                            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
                            <div className="text-xs font-medium text-gray-900">73 Siswa Terdaftar</div>
                        </div>
                        <a className='flex'>
                            <IoShareSocialSharp />
                            <span className='text-xs font-medium text-[#3a3f47]'>Share</span>
                        </a>
                    </div>
                    <div className='text-xl font-semibold text-[#3a3f47]'>Tentang Kelas Bootcamp</div>
                    <p className='text-[#3a3f47] text-sm my-3'>Dalam kelas online ini kamu akan belajar Typescript Restful API. Materi belajar telah disusun sedemikian rupa agar kamu mudah dalam memahaminya.</p>
                    <div className='text-xl mt-10 font-semibold text-[#3a3f47]'>Daftar Materi</div>

                    <div id="accordion-flush">
                        {/* Accordion Item 1 */}
                        <h2 id="accordion-flush-heading-1">
                            <button
                                type="button"
                                className="flex items-center text-md justify-between w-full py-5 font-medium text-[#3a3f47] border-b border-gray-700 gap-3"
                                onClick={() => handleToggle(1)}
                                aria-expanded={activeIndex === 1}
                                aria-controls="accordion-flush-body-1"
                            >
                                <span>What is Flowbite?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeIndex === 1 ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
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
                            id="accordion-flush-body-1"
                            ref={(el) => (contentRef.current[1] = el)}
                            style={{
                                maxHeight: activeIndex === 1 ? `${height[1]}px` : '0px',
                                transition: 'max-height 0.5s ease',
                            }}
                            className="overflow-hidden"
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <div className="py-5 border-b border-gray-700">
                                <p className="mb-2 text-[#3a3f47] text-sm">
                                    Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                </p>
                            </div>
                        </div>

                        {/* Accordion Item 2 */}
                        <h2 id="accordion-flush-heading-2">
                            <button
                                type="button"
                                className="flex items-center text-md justify-between w-full py-5 font-medium text-[#3a3f47] border-b border-gray-700 gap-3"
                                onClick={() => handleToggle(2)}
                                aria-expanded={activeIndex === 2}
                                aria-controls="accordion-flush-body-2"
                            >
                                <span>Is there a Figma file available?</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 transform ${activeIndex === 2 ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
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
                            id="accordion-flush-body-1"
                            ref={(el) => (contentRef.current[2] = el)}
                            style={{
                                maxHeight: activeIndex === 2 ? `${height[2]}px` : '0px',
                                transition: 'max-height 0.5s ease',
                            }}
                            className="overflow-hidden"
                            aria-labelledby="accordion-flush-heading-1"
                        >
                            <div className="py-5 border-b border-gray-700">
                                <p className="mb-2 text-[#3a3f47] text-sm">
                                    Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                    Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                </p>
                            </div>
                        </div>
                        {/* Remaining accordion items... */}
                    </div>

                    <div className='text-xl mt-10 mb-5 font-semibold text-[#3a3f47]'>Penysusun Materi</div>

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                        <div className="flex flex-col items-center pb-10">
                            <img className="w-24 h-24 mb-3 mt-5 rounded-full shadow-lg" src="/img/user.png" alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                            <div className="flex mt-4 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                                <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-2/6'>Daftar</div>
            </div>
        </div>
    );
}
