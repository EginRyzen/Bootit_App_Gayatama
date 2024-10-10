"use client";

import React, { useState } from 'react';
import { AiOutlineGlobal } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { LuBrainCircuit } from "react-icons/lu";
import { FaMicrochip } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { bootcampData } from './data';
import { useRouter } from 'next/navigation'; // Update import here

function Page() {
    const router = useRouter(); // Initialize router
    const [selectedCategory, setSelectedCategory] = useState(sessionStorage.getItem("category")); // State for selected category

    const handleCardClick = (id) => {
        // Navigate to the detail page with the bootcamp id
        router.push(`bootcamp/detail/${id}`);
    };

    // Function to handle category selection
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    // Filter bootcampData based on selectedCategory
    const filteredBootcamps = bootcampData.filter(item => {
        return selectedCategory === "All" || item.category === selectedCategory;
    });

    // Function to get button class based on selected category
    const getButtonClass = (category) => {
        return selectedCategory === category ? 'cursor-pointer text-[#14a7a0] bg-slate-200 rounded-lg p-2 mb-4' : 'flex items-center gap-1 cursor-pointer text-[#3a3f47] p-2 mb-4';
    };

    return (
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
            <div className='w-full h-52 sm:h-80 md:h-[450px] rounded-xl relative z-10 overflow-hidden'>
                <img src="./img/bootcamp.jpeg" className='w-full h-[200px] sm:h-80 md:h-[500px] rounded-xl' />
            </div>
            <div className='w-full mt-5 sm:mt-10'>
                <h3 className='text-xl md:text-2xl font-medium text-[#3a3f47]'>Bootcamp Program Options</h3>
                <p className='text-xs md:text-sm font-light text-[#3a3f47]'>Choose and become a professional!</p>
            </div>

            <div className='flex md:flex-row flex-col py-10 md:py-20 justify-end md:justify-between'>
                <div className='w-1/5 hidden md:block'>
                    <div className='text-xl font-medium text-[#3a3f47] mb-6'>Filter Bootcamp</div>
                    <div className='w-full'>
                        <div className={getButtonClass("Web Development")} onClick={() => handleCategoryClick("Web Development")}>
                            <AiOutlineGlobal className='size-7' /> <span className='text-xs font-medium'>Web Development</span>
                        </div>
                        <div className={getButtonClass("Data Science")} onClick={() => handleCategoryClick("Data Science")}>
                            <GiMaterialsScience className='size-7' /> <span className='text-xs font-medium'>Data Science</span>
                        </div>
                        <div className={getButtonClass("Machine Learning")} onClick={() => handleCategoryClick("Machine Learning")}>
                            <LuBrainCircuit className='size-7' /> <span className='text-xs font-medium'>Machine Learning</span>
                        </div>
                        <div className={getButtonClass("AI Academy")} onClick={() => handleCategoryClick("AI Academy")}>
                            <FaMicrochip className='size-7' /> <span className='text-xs font-medium'>AI Academy</span>
                        </div>
                        <div className={getButtonClass("Mobile Development")} onClick={() => handleCategoryClick("Mobile Development")}>
                            <IoLogoAndroid className='size-7' /> <span className='text-xs font-medium'>Mobile Development</span>
                        </div>
                        {/* Tambahkan tombol untuk menampilkan semua bootcamp */}
                        <div className={getButtonClass("All")} onClick={() => handleCategoryClick("All")}>
                            <span className='text-xs font-medium'>All Bootcamps</span>
                        </div>
                    </div>
                </div>
                <form className="mx-auto w-full block md:hidden">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-90 capitalize">Select your country</label>
                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => handleCategoryClick(e.target.value)}>
                        <option value="All">Select a category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Development">Mobile Development</option>
                        <option value="Data Science">Data Science</option>
                        <option value="AI Academy">AI Academy</option>
                        <option value="Machine Learning">Machine Learning</option>
                    </select>
                </form>

                <div className="relative w-full md:w-3/4 flex flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
                    <div className="inset-5 mx-auto md:max-w-screen-xl px-4 w-full">
                        <div className="grid w-full sm:grid-cols-2 xl:grid-cols-3 gap-6">
                            {filteredBootcamps.map((item) => (
                                <a
                                    key={item.id} // Gunakan item.id sebagai key
                                    href="#"
                                    onClick={() => handleCardClick(item.id)} // Kirimkan item.id saat mengklik
                                    className="relative mx-auto md:mx-auto group flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm"
                                >
                                    <div className="h-auto overflow-hidden">
                                        <div className="relative h-40 w-full overflow-hidden">
                                            <img src={item.image} alt="" className="h-full w-full object-cover" />
                                            <div className="absolute inset-0 bg-black group-hover:bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                                <div className="text-white text-sm font-semibold uppercase">Learn more</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-white py-4 px-3">
                                        <h3 className="text-xs mb-2 font-medium">{item.title}</h3>
                                        <p className="text-xs text-gray-400">{item.description}</p>
                                        <span className="text-xs font-semibold text-[#14a7a0]">{item.category}</span> {/* Displaying category here */}
                                    </div>
                                    <div className="flex items-center px-3 pb-3">
                                        <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575zM10.999 15.023a3.01 3.01 0 0 0-1.399-.356 3.008 3.008 0 0 0-1.398.356l-.429 2.516 2.226-1.146a3.022 3.022 0 0 0 1.398-1.327l.429-2.515-2.226 1.145a3.016 3.016 0 0 0-1.398 1.326zm5.076-3.764-3.798 3.52a3.008 3.008 0 0 0-1.497 1.433l-1.732.866-.426-2.498-2.732-2.53 2.665-2.686a3.023 3.023 0 0 0 1.498-1.427l3.799-3.518c.662-.568.962-1.446.774-2.282a1.539 1.539 0 0 0-.23-.577c-.203-.278-.552-.548-.948-.632l-5.042-.734-2.26-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575z" />
                                        </svg>
                                        <span className="text-sm text-gray-500 ml-1">{item.rating}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
