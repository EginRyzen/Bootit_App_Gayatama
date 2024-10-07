"use client"
import React, { useState, useRef, useEffect } from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { FaSwatchbook } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import SlideCard from './slider/slidecard';
import { FaRegPlayCircle } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { MdOutlineAssignment } from "react-icons/md";

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
        <>
            <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row flex-wrap  md:justify-between py-10 gap-3 relative z-20'>
                    <div className='w-full md:w-[60%]'>
                        <div className='text-lg md:text-2xl font-semibold text-[#3a3f47]'>Typescript Restful API</div>
                        <p className='text-[#3a3f47] text-xs md:text-sm my-4'>Panduan langkah demi langkah untuk belajar Typescript Restful API.</p>
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
                        <div className='text-lg md:text-xl font-semibold text-[#3a3f47]'>Tentang Kelas Bootcamp</div>
                        <p className='text-[#3a3f47] text-xs md:text-sm my-3'>Dalam kelas online ini kamu akan belajar Typescript Restful API. Materi belajar telah disusun sedemikian rupa agar kamu mudah dalam memahaminya.</p>
                        <div className='text-lg md:text-xl mt-10 font-semibold text-[#3a3f47]'>Daftar Materi</div>

                        <div id="accordion-flush">
                            {/* Accordion Item 1 */}
                            <h2 id="accordion-flush-heading-1">
                                <button
                                    type="button"
                                    className="flex items-center text-sm md:text-md justify-between w-full py-5 font-medium text-[#3a3f47] border-b border-gray-700 gap-3"
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
                                    <p className="mb-2 text-[#3a3f47] text-xs md:text-sm">
                                        Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                    </p>
                                    <div>
                                        <ul className="flex gap-5 py-3">
                                            <li className="flex text-xs md:text-xs items-center gap-2">
                                                <FaRegPlayCircle />
                                                <span>11 Videos</span>
                                            </li>
                                            <li className="flex text-xs md:text-xs items-center gap-2">
                                                <VscBook />
                                                <span>12 Readings</span>
                                            </li>
                                            <li className="flex text-xs md:text-xs items-center gap-2">
                                                <MdOutlineAssignment />
                                                <span>3 Assignments</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Accordion Item 2 */}
                            <h2 id="accordion-flush-heading-2">
                                <button
                                    type="button"
                                    className="flex items-center text-sm md:text-md justify-between w-full py-5 font-medium text-[#3a3f47] border-b border-gray-700 gap-3"
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
                                    <p className="mb-2 text-[#3a3f47] text-xs md:text-sm">
                                        Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                        Discover how AI works and explore foundational AI concepts, such as machine learning (ML). Learn about the rise of generative AI and how to perform tasks with it. By the end of this module, you’ll have an understanding of the capabilities and limitations of AI tools and how to integrate generative AI in the workplace.
                                    </p>
                                </div>
                            </div>
                            {/* Remaining accordion items... */}
                        </div>

                        <div className='text-lg md:text-xl mt-10 mb-5 font-semibold text-[#3a3f47]'>Penysusun Materi</div>

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                            <div className="flex flex-col items-center pb-10">
                                <img className="w-32 h-32 mb-3 mt-5 rounded-full shadow-lg" src="/img/user.png" alt="Bonnie image" />
                                <h5 className="mb-1 text-lg md:text-xl font-medium text-gray-900">Bonnie Green</h5>
                                <span className="text-xs md:text-sm text-[#3a3f47]">Visual Designer</span>
                                <div className="mt-4 px-5 md:mt-6">
                                    <p className='text-[#3a3f47] text-center text-xs md:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nibh tellus. Duis quis leo a ante iaculis ultrices a non lacus. Nullam non nibh sit amet ligula pharetra semper. Ut aliquet vulputate velit in fringilla. Pellentesque non urna in lacus facilisis faucibus. Phasellus euismod tortor id nunc aliquet auctor. </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full md:w-[30%]'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow sticky top-10">
                            <div className="hidden md:block">
                                <img className="rounded-t-lg" src="https://image.web.id/images/Typescript-Restfull-API.png" alt="img" />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-[#3a3f47]">Beli lewat Roadmap</h5>
                                </a>
                                <p className='text-[#3a3f47] font-normal text-xs md:text-sm'>Yang akan kamu dapatkan :</p>
                                <ul className='my-5'>
                                    <li className='flex items-center mb-2'>
                                        <FaSwatchbook className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>14 module</p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaClock className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>2 jam durasi</p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaQuestionCircle className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>Forum Diskusi Tanya Jawab
                                        </p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaMedal className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>Klaim Sertifikat Digital
                                        </p>
                                    </li>
                                </ul>
                                <a href="#" className="inline-flex items-center justify-center w-full text-white hover:text-[#3a3f47] hover:bg-white border bg-gray-600 border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-3 py-2 text-xs md:text-sm text-center rounded-lg">
                                    Bergabung Sekarang
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='pt-10 pb-20 bg-gray-100'>
                <div className='max-w-6xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8'>
                    <div className='text-lg md:text-xl font-semibold text-[#3a3f47] mb-5 ms-2'>Kelas Populer Lainnya</div>
                    <SlideCard />
                </div>
            </div>
        </>
    );
}