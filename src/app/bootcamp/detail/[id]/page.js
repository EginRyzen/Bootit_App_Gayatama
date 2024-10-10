"use client";
import React, { useState, useRef, useEffect } from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaSwatchbook, FaClock, FaQuestionCircle, FaMedal, FaRegPlayCircle } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams } from "next/navigation";
import { bootcampData } from "../../data";
import SlideCard from "../slider/slidecard";

export default function Page() {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(null);
    const contentRefs = useRef([React.createRef(), React.createRef(), React.createRef()]);
    const [heights, setHeights] = useState({});

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await new Promise((resolve) => setTimeout(resolve, 500));
                // Sesuaikan perbandingan id untuk mencocokkan string
                const foundItem = bootcampData.find(item => item.id === id); // id tanpa parseInt
                if (foundItem) {
                    setItem(foundItem);
                } else {
                    console.error("Bootcamp not found.");
                }
            } catch (err) {
                console.error("Error fetching bootcamp details.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        const newHeights = {};
        contentRefs.current.forEach((ref, index) => {
            if (ref.current) {
                newHeights[index] = ref.current.scrollHeight;
            }
        });
        setHeights(newHeights);
    }, [activeIndex]);

    if (loading) {
        return (
            <div className="text-center text-lg font-bold m-10">Loading Detail Bootcamp...</div>
        );
    }

    // Pastikan item tidak null sebelum mengakses propertinya
    if (!item) {
        return <div className="text-center text-lg font-bold m-10">Bootcamp tidak ditemukan.</div>;
    }

    return (
        <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row flex-wrap md:justify-between py-10 gap-3 relative z-20">
                    <div className="w-full md:w-[60%]">
                        <div className="text-lg md:text-2xl font-semibold text-[#3a3f47]">{item.title}</div>
                        <p className="text-[#3a3f47] text-xs md:text-sm my-4">{item.description}</p>
                        <div className="flex gap-10 mb-10">
                            <div className="flex items-center pb-3">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="ms-2 text-xs font-bold text-gray-900">{item.rating}</p>
                                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full" />
                                <div className="text-xs font-medium text-gray-900">{item.students} Siswa Terdaftar</div>
                            </div>
                            <a className="flex">
                                <IoShareSocialSharp />
                                <span className="text-xs font-medium text-[#3a3f47]">Share</span>
                            </a>
                        </div>
                        <div className="text-lg md:text-xl font-semibold text-[#3a3f47]">Tentang Kelas Bootcamp</div>
                        <p className="text-[#3a3f47] text-xs md:text-sm my-3">
                            Dalam kelas online ini kamu akan belajar {item.title}. Materi belajar telah disusun sedemikian rupa agar kamu mudah dalam memahaminya.
                        </p>
                        <div className="text-lg md:text-xl mt-10 font-semibold text-[#3a3f47]">Daftar Materi</div>

                        <div id="accordion-flush">
                            {item.modul && item.modul.map((modul, index) => (
                                <div key={index}>
                                    <h2 id={`accordion-flush-heading-${index + 1}`}>
                                        <button
                                            type="button"
                                            className="flex items-center text-sm md:text-md justify-between w-full py-5 font-medium text-[#3a3f47] border-b border-gray-700 gap-3"
                                            onClick={() => handleToggle(index + 1)}
                                            aria-expanded={activeIndex === index + 1}
                                            aria-controls={`accordion-flush-body-${index + 1}`}
                                        >
                                            <span>{modul.moduleTitle}</span>
                                            <svg
                                                data-accordion-icon
                                                className={`w-3 h-3 transform ${activeIndex === index + 1 ? "rotate-180" : ""}`}
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
                                        id={`accordion-flush-body-${index + 1}`}
                                        ref={contentRefs.current[index]}
                                        style={{
                                            maxHeight: activeIndex === index + 1 ? `${heights[index]}px` : "0px",
                                            transition: "max-height 0.5s ease",
                                        }}
                                        className="overflow-hidden"
                                        aria-labelledby={`accordion-flush-heading-${index + 1}`}
                                    >
                                        <div className="py-5 border-b border-gray-700">
                                            <p className="mb-2 text-[#3a3f47] text-xs md:text-sm">{modul.moduleDescription}</p>
                                            <div>
                                                <ul className="flex gap-5 py-3">
                                                    <li className="flex text-xs md:text-xs items-center gap-2">
                                                        <FaRegPlayCircle />
                                                        <span>{modul.videos} Videos</span>
                                                    </li>
                                                    <li className="flex text-xs md:text-xs items-center gap-2">
                                                        <VscBook />
                                                        <span>{modul.readings} Readings</span>
                                                    </li>
                                                    <li className="flex text-xs md:text-xs items-center gap-2">
                                                        <MdOutlineAssignment />
                                                        <span>{modul.assignments} Assignments</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                    <div className='w-full md:w-[30%]'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow sticky top-10">
                            <div className="hidden md:block">
                                <img className="rounded-t-lg" src={item.image} alt={item.title} />
                            </div>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-lg md:text-xl font-semibold text-[#3a3f47]">Beli lewat Roadmap</h5>
                                </a>
                                <p className='text-[#3a3f47] font-normal text-xs md:text-sm'>Yang akan kamu dapatkan :</p>
                                <ul className='my-5'>
                                    <li className='flex items-center mb-2'>
                                        <FaSwatchbook className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>{item.module}</p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaClock className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>{item.duration}</p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaQuestionCircle className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>QnA Discussion Forum
                                        </p>
                                    </li>
                                    <li className='flex items-center mb-2'>
                                        <FaMedal className="size-4 text-slate-500" />
                                        <p className='text-xs font-semibold text-[#3a3f47] ms-2 capitalize'>{item.certification}
                                        </p>
                                    </li>
                                </ul>
                                <a href={item.link} className="inline-flex items-center justify-center w-full text-white hover:text-[#3a3f47] hover:bg-white border bg-gray-600 border-[#3a3f47] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium px-3 py-2 text-xs md:text-sm text-center rounded-lg">
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
